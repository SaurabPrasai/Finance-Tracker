import React, { useContext, useState } from "react";
import {useUser} from "@clerk/clerk-react"
import { financeRecordContext } from "../context/FinanceRecordContext";

export default function FinancialRecordForm() {
  const [formData, setFormData] = useState({});
  const {user}=useUser()
  const {setRecords,records}=useContext(financeRecordContext)

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    try {
      const response=await fetch("/api/saverecord",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({...formData,userId:user.id,date:Date.now()})
      })
      const data=await response.json();
      if(!response.ok){
      return  console.log("Form data not submitted");
      }
      setRecords((prev)=>[...prev,data])
      setFormData({ description: "", amount: "", category: "", payment: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className=" max-w-6xl mx-auto " onSubmit={handleFormSubmit}>
      <form className=" max-w-lg sm:max-w-6xl p-2 mx-auto flex flex-col gap-6">
        <input
          type="text"
          name=""
          id="description"
          className="border-2 p-2 min-w-full  rounded-lg outline-none hover:bg-gray-100 "
          placeholder="Description"
          onChange={handleChange}
          value={formData?.description}
          required
        />
        <input
          type="number"
          name=""
          id="amount"
          className="border-2 p-2 min-w-full  rounded-lg outline-none hover:bg-gray-100 "
          placeholder="Amount"
          onChange={handleChange}
          required
          value={formData?.amount}
        />
        <select
          name=""
          id="category"
          onChange={handleChange}
          className="border-2 p-2 min-w-full rounded-lg outline-none hover:bg-gray-100"
          value={formData?.category}
          required
        >
          <option value="">Select a Category</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Salary">Salary</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>

        <select
          name=""
          id="payment"
          onChange={handleChange}
          value={formData?.payment}
          required
          className="border-2 p-2 min-w-full rounded-lg outline-none hover:bg-gray-100"
        >
          <option value="">Select a Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <button className="border-2 p-2 min-w-full rounded-lg outline-none hover:bg-gray-100 ">
          Add Record
        </button>
      </form>
    </div>
  );
}
