import React, { useContext, useEffect, useState } from "react";
import { financeRecordContext } from "../context/FinanceRecordContext";

export default function FinancialRecordList() {
  const {records,setRecords}=useContext(financeRecordContext)

  const handelDelete=async(id)=>{
    
      try {
          const res=await fetch(`/api/delete/${id}`,{
            method:"DELETE"
          })
          const data=await res.json();
            if(!res.ok){
              return console.log("Data is not deleted");
            }
         setRecords((prev)=>prev.filter(record=>record._id!=id))
      } catch (error) {
        
      }
  }
  return (
    <div className=" mx-auto max-w-6xl sm:rounded-lg mt-10">
     {
      records.length>0&& <table className="w-full text-center text-gray-600  font-serif">
      <thead className="text-xl">
        <tr>
          <th scope="col" className="px-6 py-2 border">
            Description
          </th>
          <th scope="col" className="px-6 border">
            Amount
          </th>
          <th scope="col" className="px-6  border">
            Category
          </th>
          <th scope="col" className="px-6  border">
            Payment Method
          </th>
          <th scope="col" className="px-6  border">
            Date
          </th>
          <th scope="col" className="px-6  border">
          
          </th>
          {/* <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th> */}
        </tr>
      </thead>
      <tbody>
     {
      records.map((record)=>   <tr>
      <td className="px-6 py-2 border" >{record.description}</td>
      <td className="px-6 py-2 border ">{record.amount}</td>
      <td className="px-6 py-2 border">{record.category}</td>
      <td className="px-6 py-2 border">{record.payment}</td>
      <td className="px-6 py-2 border">{record.date}</td>
      <td className="px-6 py-2 border flex flex-row gap-x-4 justify-center">
        <span onClick={()=>handelDelete(record._id) } className={"cursor-pointer hover:text-blue-600"}>delete</span>
        <span className={"cursor-pointer hover:text-blue-600"}>edit</span>
      </td>
    </tr>)
     }
    
       
      </tbody>
    </table>
     }
    </div>
  );
}
