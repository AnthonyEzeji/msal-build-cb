import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {read,utils} from 'xlsx'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid';
import { AiOutlineUpload } from 'react-icons/ai';

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
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result
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
  


      instance.post('/data-model/data-quality',lossRunJson).then(res=>{
  setPrediction(res.data)

        
      }).catch(err=>{
   
      })
    }
callModelEndpoint()

  }, [lossRunJson])
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
        <main className = {`w-full  flex flex-col ${showLossRun&&`2xl:h-[70vh]`}`}>
        {showLossRun&&<button className='flex w-fit h-fit my-4 ' onClick={()=>setShowLossRun(false)}><ArrowLeftOnRectangleIcon className='w-8 text-slate-500 hover:text-red-500'/> </button>}
        {showLossRun&&<h1 className='flex items-center text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl justify-center mb-2 '>Loss Run</h1>}
        {showLossRun&&<h1 className='flex items-center text-lg  tracking-tight text-red-600 sm:text-xl justify-center mb-10   '>Score: 80%</h1>}

        {showLossRun&&<Tabs>
    <TabList>
      <Tab>Data Quality</Tab>
      <Tab>Model Output</Tab>
    </TabList>

    <TabPanel>
    
            <div className = 'w-full'>
        
            {showLossRun&&<ul className='rounded-b-md w-full border-b-[1px] drop-shadow-lg  border-stone-400'>{prediction&&Object.entries(prediction?.predictions?.data_quality).map((entry)=>{
      return (<li className='flex w-full flex-row border-b-2 px-2 border-x-[1px]  border-stone-400 '><p className='w-fit font-light flex-1 text-left '>{entry[0]}:</p><p className='w-fit ml-2 text-red-600  text-2xl'>{entry[1]}</p></li>)
      console.log(entry[1])
    })}</ul>}
                

            </div>
    </TabPanel>
    <TabPanel>
    {showLossRun&&<ul className='rounded-b-md w-full border-b-[1px] border-x-[1px] border-stone-400'>{prediction&&Object.entries(prediction?.predictions?.model_output).map((entry)=>{
      return (<div>
        <h1 className = 'bg-red-600 text-white'>{entry[0]}</h1>
        <ul className='max-h-[180px] overflow-scroll md:min-w-[485px] '>{Object.values(entry[1]).sort(function (a, b) {
  return b-a;
}).map(obj=>{

        return(<li className='text-left  font-light hover:bg-gray-300'><p className = 'px-2 py-1 flex'><p className='text-green-600 '>&#36;</p>{(obj).toLocaleString('en-us')}</p></li>)
      })}</ul></div>)
      console.log(entry[1])
    })}</ul>}
    </TabPanel>
  </Tabs>}
       
        </main>
    </div>
  )
}

export default LossRun