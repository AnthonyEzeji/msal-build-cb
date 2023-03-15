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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LossRun({showLossRun,setShowLossRun}) {
    const EXTENSIONS = ['xlsx', 'xls', 'csv']

    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState()
  const [prediction, setPrediction] = useState(null)
const [lossRunJson, setLossRunJson] = useState(null)
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
      const workBook = read(bstr, { type: "binary" })

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
    baseURL: 'http://localhost:5000',
    timeout: 25000,
   
  });
  useEffect(() => {
    console.log(lossRunJson)
    async function callModelEndpoint(){
      // callback

  // Calling the end function will send the request
  


      instance.post('/data-model/data-quality',{'dataframe_records':lossRunJson}).then(res=>{
        if(res.data.hasOwnProperty('message')){
          alert("Invalid dataset")
          return
        }
  setPrediction({data_quality:Object.entries(res.data.predictions.data_quality),model_output:res.data.predictions.model_output})

        
      }).catch(err=>{
   
      })
    }
    
    
callModelEndpoint()

  }, [lossRunJson])
  useEffect(() => {
  console.log(prediction)
    }, [prediction])
  useEffect(() => {
  console.log(prediction)
  if(prediction){
    setShowLossRun(true)
  }
  }, [prediction])

  return (
    <div className='relative '>
        
        {!showLossRun&&<label for = 'file-picker' className="mt-8 inline-flex w-full items-center justify-center rounded-md border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] hover:border-red-600  absolute sm:left-[35%] 2xl:left-[33%] sm:w-auto left-0 ">Upload Loss Run<AiOutlineUpload className='mx-2'/></label>}
        {!showLossRun&&<input type="file"  onInput={importExcel} className='opacity-0 absolute  mt-10 sm:left-[35%] 2xl:left-[33%] left-20  '/>}
        <main className = {`w-full  flex flex-col ${showLossRun&&`2xl:min-h-[70vh]`}`}>

        {showLossRun&&<h1 className='flex items-center text-3xl font-bold tracking-tight text-white bg-slate-600 sm:text-4xl justify-center  relative rounded-t-md '>        <button className='flex w-fit h-fit my-1 absolute left-0 ' onClick={()=>setShowLossRun(false)}><ArrowLeftOnRectangleIcon className='w-8 text-white hover:text-red-500'/> </button>Loss Run</h1>}
        {showLossRun&&<h1 className='flex items-center text-md  tracking-tight text-red-600 sm:text-xl justify-center mb-2 border-b-[1px] border-x-[1px] border-slate-600 rounded-b-md   '>Score: 60%</h1>}

        {showLossRun&&<Tabs>
    <TabList >
      <Tab>Data Quality</Tab>
      <Tab>Model Output</Tab>
    </TabList>

    <TabPanel>
    <div className="flow-root">
      <ul role="list" className="-mb-8 max-h-[350px] overflow-scroll p-2 border-[1px] border-gray-300">
        {prediction?.data_quality?.map((rule, ruleIdx) => {
            console.log(rule)
          return(  <li className='' key={rule[0]}>
            <div className="relative pb-8">
             {ruleIdx !== prediction?.data_quality?.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
             ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                   
                  >
                    <Avatar className="h-8 w-8 text-white  rounded-full " style={rule[1]!==0?{backgroundColor:'red'}:{backgroundColor:'green'}} aria-hidden="true" >{ruleIdx+1}</Avatar>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 ">
                      {rule[0]}{' '}
                      
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-md  text-gray-500">
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
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {Object.entries(prediction?.model_output)?.map((arr ,ruleIdx) => {
            arr[1].map(entryItems=>{
              console.log(entryItems)
              return(<div></div>)
            })
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