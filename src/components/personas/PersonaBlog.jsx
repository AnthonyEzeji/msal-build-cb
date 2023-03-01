import { PowerBIEmbed } from 'powerbi-client-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import { models } from 'powerbi-client';
import Footer from '../Footer'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
//map for persona-blog content with routes as keys
const dashboards = {
  '/cxo/department-insights':{reportId:'8e8633bb-9499-4ab5-b550-52340ddd11a6',content:'New Content', caption:'Department Insights'},
  '/cxo/financial-benchmarking':{reportId:'41ab916e-2e92-41fd-a4a5-a9b91be84d35',content:'New Content', caption:'Financial Benchmarking'},
  '/cxo/kpi-boardroom':{reportId:'75081349-83b5-41ab-91be-3dbc51508f39',content:'New Content', caption:'KPI Boardroom'},
  '/department-chair/med-mal-contributing-factors':{reportId:'09694b4f-41a4-41c2-a1b1-5b8bf24e0873',content:'New Content', caption:'Med Mal Contributing Factors'},
  '/department-chair/icd-level-malpractice-insights':{reportId:'09694b4f-41a4-41c2-a1b1-5b8bf24e0873',content:'New Content', caption:'ICD Level Malpractice Insights'},
  '/department-chair/freq-flyers':{reportId:'09694b4f-41a4-41c2-a1b1-5b8bf24e0873',content:'New Content', caption:'Frequent Flyers'},
  '/risk-manager/med-mal':{reportId:'09694b4f-41a4-41c2-a1b1-5b8bf24e0873',content:'New Content', caption:'Hospital Med Mal Overview'},
  '/risk-manager/frequency-severity-trends':{reportId:'0c816635-432c-44eb-aaf9-44b6ef9af906',content:'Frequency & Severity Trends', caption:'Frequency/Severity Trends'},
  '/risk-manager/national-benchmarking':{reportId:'1eb7957f-9a88-4fa9-9457-1a219ef75ee6',content:'National Benchmarks', caption:'National Benchmarking'}
}

function PersonaBlog() {
    const [location, setLocation] = useState('')
    

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
      const sampleReportUrl = 'https://ngapnodepbiembed.azurewebsites.net/api/getPBIEmbedTokenNode?reportId=';

      //configures reportConfig with dahsboard[location].reportId and requests access
      const mockSignIn = async () => {
        const reportConfigResponse = await fetch( sampleReportUrl +  dashboards[location]?.reportId   );
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

    //sets location state to current route and calls mockSignIn function
        useEffect(() => {
          console.log(dashboards[location.toString()])
          mockSignIn()
        }, [location])
    
      
  return (
    <div>
        <Navbar/>
        <div className="bg-white py-32 px-6 lg:px-8">
      <div className="mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-4xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-red-600 ">Introducing</p>
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
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
          aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
          egestas fringilla sapien.
        </p>
        <div className="mt-10 max-w-2xl">
        
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
      
          
        </div>
        

      </div>
    </div>
       <Footer/>
    </div>
  )
}

export default PersonaBlog