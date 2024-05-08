import React, { useContext, useEffect, useState } from "react";
import { financeRecordContext } from "../context/FinanceRecordContext";

export default function FinancialRecordList() {
  const {records}=useContext(financeRecordContext)
  return (
    <div className=" mx-auto max-w-6xl border   sm:rounded-lg mt-10">
      <table className="w-full text-center text-gray-600  font-serif">
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
          <span>delete</span>
          <span>edit</span>
        </td>
      </tr>)
       }
      
         
        </tbody>
      </table>
    </div>
  );
}
