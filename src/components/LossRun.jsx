import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {read,utils} from 'xlsx'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid';
import { AiOutlineUpload } from 'react-icons/ai';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import template from '../assets/files/loss-run-template.csv'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LossRun({showLossRun,setShowLossRun, setIsLoading, isLoading}) {
    const EXTENSIONS = ['xlsx', 'xls', 'csv']

    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState()
  const [prediction, setPrediction] = useState(null)
const [hiddenFileInput, sethiddenFileInput] = useState(React.useRef(null))
const [lossRunJson, setLossRunJson] = useState(null)
const [clusterArray, setClusterArray] = useState([])
  const getExention = (file) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return EXTENSIONS.includes(extension) // return boolean
  }

  const convertToJson = (headers, data) => {
    const rows = []
    data.forEach(row => {
      let rowData = {}
      row.forEach((element, index) => {
        rowData[headers[index]] = element
      })
      rows.push(rowData)

    });
    return rows
  }

  const importExcel = (e) => {
    
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onload = (rule) => {
      //parse data

      const bstr = rule.target.result
      const workBook = read(bstr, { type: "binary", cellDates:true  })

      //get first sheet
      const workSheetName = workBook.SheetNames[0]
      const workSheet = workBook.Sheets[workSheetName]
      //convert to array
      const fileData = utils.sheet_to_json(workSheet, { header: 1 })
  
      const headers = fileData[0]
      const heads = headers.map(head => ({ title: head, field: head }))
      setLossRunJson(utils.sheet_to_json(workSheet))
      setColDefs(heads)

      //removing header
      fileData.splice(0, 1)


      setData(convertToJson(headers, fileData))
    }

    if (file) {
     
      if (getExention(file)) {
        reader.readAsBinaryString(file)
      }
      else {
        alert("Invalid file input, Select Excel, CSV file")
      }
    } else {
      setData([])
      setColDefs([])
    }
    e.target.value=null
  }
  const instance = axios.create({
    baseURL: 'https://hra-backend-q2gs.vercel.app',
    timeout: 25000,
   
  });
  function handleClick(e){
    hiddenFileInput.current.click();
  }
  useEffect(() => {
    if(lossRunJson){
      async function callModelEndpoint(){
        // callback
  
    // Calling the end function will send the request
    
    setIsLoading(true)
        instance.post('/data-model/data-quality',lossRunJson).then(res=>{
          if(res.data.hasOwnProperty('error')){
            setIsLoading(false)
            return
            
          }
        
    setPrediction(res.data.predictions)
    setIsLoading(false)
  
          
        }).catch(err=>{
     
        })
      }
      
      
  callModelEndpoint()
    }
  
   

  }, [lossRunJson])

  useEffect(() => {
  
  var tempArr = []
  if(prediction){
    setShowLossRun(true)
   var lossLocInsightsClusterArray =  Object.values(Object.values(prediction?.model_output)[0])
lossLocInsightsClusterArray.forEach(cluster=>{

 tempArr.push(cluster)
})
setClusterArray(tempArr)
  }
  

  }, [prediction])

  return (
    <div className='relative flex flex-col w-full'>
            {!showLossRun&&!isLoading&&<Link to={template} target="_blank" download className='mt-2 inline-flex w-full items-center justify-center rounded-md border-transparent bg-slate-600 px-5 py-3 text-base font-medium text-white hover:bg-transparent hover:text-slate-600 border-[1px] hover:border-slate-600 ' >
          Download Loss Run Template
         </Link>}
        {!showLossRun&&!isLoading?<button onClick = {handleClick} className="mt-2 inline-flex w-full items-center justify-center rounded-md border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] hover:border-red-600    ">Upload Loss Run<AiOutlineUpload className='mx-2'/></button>:isLoading?<div className='md:min-w-[480px]  h-[500px]  flex items-center justify-center'><div role="status">
    <svg aria-hidden="true" class="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div></div>:<div></div>}
        {!showLossRun&&<input type="file" ref={hiddenFileInput} onInput={importExcel} className='hidden  '/>}
        <main className = {`w-full  flex flex-col ${showLossRun&&`2xl:min-h-[70vh]`}`}>

        {showLossRun&&<h1 className='flex items-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl justify-center  relative rounded-t-md mb-5 '>        <button className='flex w-fit h-fit my-1 absolute left-0 ' onClick={()=>setShowLossRun(false)}><ArrowLeftOnRectangleIcon className='w-8 text-slate-900 hover:text-red-500'/> </button>Loss Run</h1>}
      

        {showLossRun&&<Tabs>
    <TabList >
      <Tab>Data Quality</Tab>
      <Tab>Data Science Insights</Tab>
    </TabList>

    <TabPanel>
    <div className="flow-root">
    {showLossRun&&<h1 className='flex items-center  justify-evenly mb-2  border-slate-600 rounded-b-md relative  '><p className='z-20 text-md font-light  tracking-tight text-slate-900 sm:text-xl'>Records: {prediction?.simple_statistics?.number_of_records}</p><p className='z-20 text-md font-light  tracking-tight text-slate-900 sm:text-xl'>Score: {prediction?.data_quality?.overall_score.toFixed(2)}%</p></h1>}
      <ul role="list" className="-mb-8 max-h-[350px] overflow-scroll p-2 border-[1px] border-gray-300">
      {Object.entries(prediction?.data_quality?.details).map((rule, ruleIdx) => {
          var typeRule = false
          if(rule[0].split(" ")[0]==="Type"){
            typeRule=true
          }
            
          return(  <li className='' key={rule[0]}>
            <div className="relative pb-8">
             {ruleIdx !== prediction?.data_quality?.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
             ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                   
                  >
                    <Avatar className="h-8 w-8 text-white  rounded-full " style={{backgroundColor:'green'}} aria-hidden="true" >{ruleIdx+1}</Avatar>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-left  text-gray-600 ">
                      {rule[0]}{' '}
                      
                    </p>
                  </div>
                  <div className={`whitespace-nowrap text-slate-600 text-right text-md ${!typeRule&&rule[1]!==0?`text-red-600` :`text-gray-500`} `}>
                   <p>{rule[1]}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>)
        
        
})}

      </ul>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="flow-root ">
    {showLossRun&&<p className='  max-w-[485px]  mb-5  border-slate-600 rounded-b-md relative z-20 text-sm font-light  tracking-tight text-slate-900 sm:text-sm xl:text-xl'>After reviewing analysis produced by a machine learning model, which clusters the data into partitions of 5 based on similarities, the top contributors for each cluster are as follows: </p>}
      <ul role="list" className="-mb-8 max-h-[285px] overflow-scroll p-2 border-[1px] border-gray-300">
      {(clusterArray).map((clusterObj, clusterObjIdx) => {
         var topContrib = Object.keys(clusterObj)
            var percent = Object.values(clusterObj)
          return(  <li className='' key={clusterObjIdx}>
            <div className="relative pb-8">
             {clusterObjIdx !== prediction?.data_quality?.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
             ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                   
                  >
                    <Avatar className="h-8 w-8 text-white  rounded-full " style={{backgroundColor:'green'}} aria-hidden="true" >{clusterObjIdx+1}</Avatar>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm xl:text-md  text-gray-600 ">
                     Top contributor for Cluster {clusterObjIdx+1}:
                      
                    </p>
                  </div>
                  <div className={`whitespace-nowrap text-right text-slate-600 text-md  `}>
                   <p className='flex'>{topContrib}<p className='font-bold mx-1'>-</p>{parseFloat(percent).toFixed()}%</p>
                  </div>
                </div>
              </div>
            </div>
          </li>)
        
        
})}
             </ul>
    </div>
    </TabPanel>
  </Tabs>}
       
        </main>
    </div>
  )
}

export default LossRun