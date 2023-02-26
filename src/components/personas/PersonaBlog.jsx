import { PowerBIEmbed } from 'powerbi-client-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import { models } from 'powerbi-client';
import Footer from '../Footer'
//map for persona-blog content with routes as keys
const dashboards = {'/risk-manager/med-mal':{reportId:'09694b4f-41a4-41c2-a1b1-5b8bf24e0873',content:'New Content', caption:'Hospital Med Mal Overview'},'/risk-manager/freq-sev-trends':{reportId:'0c816635-432c-44eb-aaf9-44b6ef9af906',content:'Frequency & Severity Trends', caption:'Frequency/Severity Trends'},'/risk-manager/national-benchmark':{reportId:'1eb7957f-9a88-4fa9-9457-1a219ef75ee6',content:'National Benchmarks', caption:'National Benchmarking'}}

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
        <div class='persona-blog-page' className=' w-screen min-h-screen mt-[50px] flex flex-col justify-start items-center '>
            <div className=' mx-auto mt-20 w-[70vw] flex flex-col items-center'>
            <h1 className='text-2xl text-white font-bold bg-red-600 p-2 rounded-md'>
            {dashboards[location.toString()]?.caption}
        </h1>
        <p>{dashboards[location.toString()]?.content}</p>
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


            </div>
      
        </div>
       <Footer/>
    </div>
  )
}

export default PersonaBlog