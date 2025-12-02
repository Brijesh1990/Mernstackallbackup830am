import React from 'react'
import { Chart } from "react-google-charts";
export default function Dashboard() {
  // pie chart module b google
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

  return (
    <div className='w-full p-5 mt-32 -z-20'>
    <h1 className='text-5xl ms-5'>Dashboard</h1>
    <hr className='border-1 w-55 ms-5' />

    <div className='flex flex-row'>
     <div className='w-1/3 m-5 mt-5 bg-black p-5'>
        <b className='ms-5 text-white text-2xl'>Total Employee <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   
    
     <div className='w-1/3 m-5 mt-5 bg-red-500 p-5'>
     <b className='ms-5 text-white text-2xl'>Totals Contacts <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   

     <div className='w-1/3 m-5 mt-5 bg-green-500 p-5'>
     <b className='ms-5 text-white text-2xl'>Totals Tasks <span className='bg-red-500 p-2 rounded text-sm'>10</span></b>
     </div>   
    </div>  

    

    {/* charts */}
    <div className='bg-white'>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

    </div>
    </div>
  )
}
