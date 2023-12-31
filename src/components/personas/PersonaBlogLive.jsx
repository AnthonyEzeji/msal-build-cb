import { PowerBIEmbed } from 'powerbi-client-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import { models } from 'powerbi-client';
import Footer from '../Footer'
import { ArrowLeftIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../../authConfig'
//map for persona-blog content with routes as keys
const dashboards = {
  '/cxo/department-insights-live':{reportId:'8e8633bb-9499-4ab5-b550-52340ddd11a6',content:'New Content', caption:'Department Insights' , persona : 'CXO'},
  '/cxo/financial-benchmarking-live':{reportId:'41ab916e-2e92-41fd-a4a5-a9b91be84d35',content:'New Content', caption:'Financial Benchmarking', persona : 'CXO'},
  '/cxo/kpi-boardroom-live':{reportId:'75081349-83b5-41ab-91be-3dbc51508f39',content:'New Content', caption:'KPI Boardroom', persona : 'CXO'},
  '/department-chair/med-mal-contributing-factors-live':{reportId:'9244759e-8055-4238-8368-f805289e2c47',content:'New Content', caption:'Med Mal Contributing Factors', persona : 'Department Chair'},
  '/department-chair/icd-level-malpractice-insights-live':{reportId:'17ecab18-ea5c-4e83-96c9-c7050b845313',content:'New Content', caption:'ICD Level Malpractice Insights', persona : 'Department Chair'},
  '/department-chair/freq-flyers-live':{reportId:'980189e0-fe3c-4f52-9428-d63209893d75',content:'New Content', caption:'Frequent Flyers' , persona : 'Department Chair'},
  '/risk-manager/med-mal-live':{reportId:'09694b4f-41a4-41c2-a1b1-5b8bf24e0873',content:'New Content', caption:'Hospital Med Mal Overview' , persona : 'Risk Manager'},
  '/risk-manager/frequency-severity-trends-live':{reportId:'0c816635-432c-44eb-aaf9-44b6ef9af906',content:'Frequency & Severity Trends', caption:'Frequency/Severity Trends', persona : 'Risk Manager'},
  '/risk-manager/national-benchmarking-live':{reportId:'1eb7957f-9a88-4fa9-9457-1a219ef75ee6',content:'National Benchmarks', caption:'National Benchmarking', persona : 'Risk Manager'}
}

function PersonaBlogLive() {
    const [location, setLocation] = useState('')
    const isAuthenticated = useIsAuthenticated()
    
const [authenticated, setAuthenticated] = useState(false)
const [accessToken, setAccessToken] = useState(null)
const {instance} = useMsal()
var navigate = useNavigate()


async function RequestAccessToken() {
instance.setActiveAccount(instance.getAllAccounts()[0])
let account = instance.getActiveAccount()
    const request = {
        ...loginRequest,
        account: account
    };
    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    await instance.acquireTokenSilent(request).then((response) => {
      console.log(response?.accessToken)
        setAccessToken(response?.accessToken);
    }).catch((e) => {
         instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response?.accessToken);
        });
    });
  
 }
useEffect(() => {
  if(isAuthenticated === true){
    RequestAccessToken()
   }
}, [isAuthenticated])

useEffect(() => {
  if(accessToken!==null){
    mockSignIn()
  }
 
}, [accessToken,location])



    const [pbiReportConfig, setReportConfig] = useState({
        type: 'report',
        embedUrl: undefined,
        tokenType: models.TokenType.Embed,
        accessToken: undefined,
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          }
        },
      });

    const eventHandlersMap = new Map([
        ['loaded', function () {
    
        }],
        ['rendered', function () {
    
    
          // Update display message
          //setMessage('The report is rendered')
        }]
      ]);
      const sampleReportUrl = `https://ngapnodepbitdchra.azurewebsites.net/api/getPBIToken?code=${process.env.REACT_APP_EMBED_KEY}&reportId=${dashboards[location]?.reportId}&mstoken=${accessToken}`;

      //configures reportConfig with dahsboard[location].reportId and requests access
      const mockSignIn = async () => {
        const reportConfigResponse = await fetch( sampleReportUrl    );
        if (!reportConfigResponse.ok) {
          console.error(`Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`);
          return;
        }
        const reportConfig = await reportConfigResponse.json();
        setReportConfig({
          ...pbiReportConfig,
          //embedUrl: reportConfig.EmbedUrl,
          embedUrl: reportConfig.embedUrl[0].embedUrl,
          accessToken: reportConfig.accessToken
          //accessToken: reportConfig.EmbedToken.Token
        });
      };

      //gets current route (/risk-manger/med-mal)
      useEffect(() => {
      
        setLocation(window.location.href.split(window.location.origin)[1])
        console.log(window.location.origin);
        }, [])

    
    
      
  return (
   
    <AuthenticatedTemplate>
        <Navbar/>
        <div className="bg-white py-[100px] px-6 lg:px-8">
      <div className="mx-auto lg:max-w-5xl md:max-w-4xl sm:max-w-4xl text-base leading-7 text-gray-700">
      <ArrowLeftIcon className='w-8' onClick ={()=>navigate(`/${location.split('/')[1]}`)}/>
        <p className="text-base font-semibold leading-7 text-red-600 ">Our Tailored Insights for a {dashboards[location]?.persona}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dashboards[location]?.caption}</h1>
        <figure className="mt-4">
          
        <PowerBIEmbed
              
              embedConfig={pbiReportConfig}
              eventHandlers={eventHandlersMap}
              cssClassName="report-style-class"
              getEmbeddedComponent={
                (embeddedReport) => {
                  window.report = embeddedReport;
                }
              }
            />
         
        </figure>
        <p className="mt-6 text-xl leading-8">
        We offer end-to-end solutions for growing businesses. Discover how connecting the workforce helps your organization stay productive, efficient and engaged. Through managed services, you'll be able to scale operations without breaking your budget.
        </p>
        <div className="mt-10 max-w-2xl">
        {/*
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
              */}
          
        </div>
        

      </div>
    </div>
       <Footer/>
    </AuthenticatedTemplate>
   


  )
}

export default PersonaBlogLive