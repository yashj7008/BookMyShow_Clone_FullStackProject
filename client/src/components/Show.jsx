import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const [showDetail, setShowDetail] = useState({})
    const { showId } = useParams();
    
    const getShowDetail = async() =>{
        const response = await fetch(`http://localhost:5050/api/show/${showId}`);
        const data  = await response.json()
        setShowDetail(data);
    }
    useEffect(()=>{
        getShowDetail();

    },[])
  return (
    <div className='flex flex-col'>
        {
           showDetail?.seats?.map((Seatcategory) =>(
             <>
                <div className='text-regular text-slate-500 mt-4 mb-2'>
                     {Seatcategory.category} -Rs{Seatcategory.price}
                </div>
                <div className='flex flex-col'>
                    {
                      Seatcategory.arrangements.map((row)=>(
                        <div className='flex'>
                            <button className='bg-transparent text-slate-500 py-2 px-4' >A</button>
                              {
                                row.map((col) =>(
                                    <button className= {(col.status !== "BOOKED" ? "hover:bg-green-700 hover:text-white  bg-transparent border" : " bg-slate-500 text-white border"     ) + ` border-slate-500 text-slate-500 py-2 px-4 m-2`}>{col.seatNumber}</button>
                                ))
                              }
                           
                        </div>
                      ))  
                    }
                        
                   
                </div>            
             </>
           ))
        }
        

    </div>
    
  )
}

export default Show