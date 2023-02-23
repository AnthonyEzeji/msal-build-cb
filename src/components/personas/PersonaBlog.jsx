import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const dashboards = {'/risk-manager/med-mal':{reportId:'12345',content:' content for med mal', caption:'Hospital Med Mal Overview'},'/risk-manager/freq-sev-trends':{reportId:'12346',content:'content for freq/sev trends', caption:'Frequency/Severity Trends'},'/risk-manager/national-benchmark':{reportId:'123467',content:'conent for national benchmarking', caption:'National Benchmarking'}}
function PersonaBlog() {
    const [location, setLocation] = useState('')
    useEffect(() => {
    setLocation(window.location.href.split(window.location.origin)[1])
    }, [])
    useEffect(() => {
      console.log(dashboards[location.toString()])
    }, [location])
    
  return (
    <div>
        <h1 className='text-2xl'>
            {dashboards[location.toString()]?.caption}
        </h1>
        <p>{dashboards[location.toString()]?.content}</p>
    </div>
  )
}

export default PersonaBlog