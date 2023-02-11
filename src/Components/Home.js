import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Chartpage from './Chartpage'
import Footer from './Footer'
const Home = () => {
    const [arrdata,setarrdata]=useState([]);
    const [subarrdata,setsubarrdata]=useState([]);
    const isValidUrl = urlString=> {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }
    useEffect(()=>{
        const handlesubmit=async()=>{
          // event.preventDefault();
            let data=await fetch('https://tri-nit-backend.vercel.app/api/carbonemission/getalldata');
            let maindata=await data.json();
            let alldata=maindata.alldata; 
            // setsubarrdata(alldata);       
    let processedElements=new Set();
    let mainalldata=[];
           for(let i=0;i<alldata.length;i++){
              if(processedElements.has(alldata[i].webpage) || !isValidUrl(alldata[i].webpage)){
                 continue;
              }
              alldata[i].totalcarbonemission=alldata[i].totaldata*11;
              processedElements.add(alldata[i].webpage);
              mainalldata.push(alldata[i]);
           }
           setarrdata(mainalldata);
      }
        handlesubmit();
    },[]);
    const handlenewapi=async(webpagename)=>{
       let data=await fetch(`https://tri-nit-backend.vercel.app/api/carbonemission/getWebpageDetail?user=naman@gmail.com&webpage=${webpagename}`);
       let maindata=await data.json();
       console.log(maindata.results);
       setsubarrdata(maindata.results);
    }
    const handledescription=(date)=>{
        console.log("sujal sahu");
            // document.getElementById(`lower_arrow_${date}`).style.display="none"
            // document.getElementById(`upper_arrow_${date}`).style.display="block"
            // document.getElementById(`sub_content_${date}`).style.display="block";
    }
    const handledescriptionreverse=(date)=>{
        console.log("umang jain");
            // document.getElementById(`lower_arrow_${date}`).style.display="block"
            // document.getElementById(`upper_arrow_${date}`).style.display="none"
            // document.getElementById(`sub_content_${date}`).style.display="none";
    }
   
  return (
    <>
       <Navbar/>
       <Chartpage arrdata={arrdata} text={"Carbon Footprint"}/>
       <Chartpage arrdata={arrdata} text={"Data Consumption"}/>
       {/* <Chartpage/> */}
       <section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Page Visits</h3>
        </div>
        {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div> */}
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3">
            Web Page
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3">
             Total Visits
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-center text-blueGray-600 uppercase tracking-wider py-3">
            Data Consumption(GB)
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3">
             Carbon Emission(gms)
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3">
             Status
          </th>
        </tr>
      </thead>
      <tbody>
        {arrdata.map(element => (
           <tr key={element.date}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {element.webpage}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              {element.count}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {element.totaldata}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {element.totalcarbonemission}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {element.totalcarbonemission<11?<div className='sujal' style={{backgroundColor:"green"}}></div>:(element.totalcarbonemission<20?<div className='sujal' style={{backgroundColor:"yellow"}}></div>:<div className='sujal' style={{backgroundColor:"red"}}></div>)}
            </td>
          </tr>

        ))}
      </tbody>
    </table>
    </div>
  </div>
</div>
{/* <footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
</section>
<div className="mainheader">
    <h1>Detailed Analysis</h1>
</div> 
       {Array.isArray(arrdata) && arrdata.map((element)=>{
       return (<div className="card card_sujal">
  <h5 className="card-header">{element.webpage}</h5>
  <div className="card-body card_body_sujal">
      <div className="card_body_content">
           <h4>Total Data Consumption(MB)</h4>
           <p>{element.totaldata*1024}</p>
      </div>
      <div className="card_body_content">
           <h4>Total Carbon Emission(in gms)</h4>
           <p>{element.totalcarbonemission}</p>
      </div>
      <div className="card_body_content">
           <h4>No. of visits</h4>
           <p>{element.count}</p>
      </div>
  </div>
   
  <div className="card_body_arrow_icon_lower" id={`lower_arrow_${element.date}`} style={{display:"block"}}>
   <button onClick={(event)=>{event.preventDefault();handledescription(element.date)}}><i className="fa-solid fa-angle-down"></i></button>
  </div>
  <div className="card_body_arrow_icon_upper" id={`upper_arrow_${element.date}`} style={{display:"none"}}>
   <button onClick={(event)=>{event.preventDefault();handledescriptionreverse(element.date)}}><i className="fa-solid fa-angle-up"></i></button>
  </div>
  {handlenewapi(element.webpage)};
  <div className="card_body_description">
    {Array.isArray(subarrdata) && subarrdata.length!==0 && subarrdata.map((subelement)=>{
  return <div className="card card_subsujal" id={`sub_content_${element.date}`} style={{display:"block"}}>
  <h5 className="card-header">{`Visit ${subelement.count}`}</h5>
  <div className="card-body card_body_sujal">
      <div className="card_body_content">
           <h4>Data Consumption(MB)</h4>
           <p>{subelement.datatransferredingb*1024}</p>
      </div>
      <div className="card_body_content">
           <h4>Carbon Emission(in gms)</h4>
           <p>{subelement.carbonemission}</p>
      </div>
       
  </div>
  </div>
})}
</div>
</div>)
})}
<Footer/>
    </>
  )
}

export default Home
