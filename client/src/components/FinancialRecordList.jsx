import React, { useContext, useEffect, useState } from "react";
import { financeRecordContext } from "../context/FinanceRecordContext";

export default function FinancialRecordList() {
  const { records, setRecords } = useContext(financeRecordContext);
  const [updateId, setUpdateId] = useState(-1);
  const [updateData, setUpdateData] = useState({});

  const handelDelete = async (id) => {
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        return console.log("Data is not deleted");
      }
      setRecords((prev) => prev.filter((record) => record._id != id));
    } catch (error) {}
  };

  const handleUpdate = async (id) => {
   setUpdateId(id)
  };

  const handleSubmit=async(id)=>{

    const date=Date.now();
  try {
      const res=await fetch(`/api/update/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({...updateData,date})
      })
    
      const data=await res.json();
      if(!res.ok){
        return console.log("Record not updated");
      }
      const index=records.findIndex(record=>record._id==id);
      let dummyRecords=[...records];
      dummyRecords[index]=data;
      setRecords([...dummyRecords]);
      setUpdateId(-1);

  } catch (error) {
    console.log(error);
  }
  }

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.id]: e.target.value });
  };
  return (
    <div className=" mx-auto max-w-6xl sm:rounded-lg mt-10">
      {records.length > 0 && (
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
              <th scope="col" className="px-6  border"></th>
              {/* <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th> */}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <>
                {record._id === updateId ? (
                  <tr>
                    <td className="px-6 py-2 border">
                      <input
                        type="text"
                        name=""
                        defaultValue={record.description}
                        id="description"
                        className=" outline"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="px-6 py-2 border ">
                      <input
                        type="text"
                        name=""
                        defaultValue={record.amount}
                        id="amount"
                        className=" outline"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="px-6 py-2 border">{record.category}</td>
                    <td className="px-6 py-2 border">{record.payment}</td>
                    <td className="px-6 py-2 border">{record.date}</td>
                    <td className="px-6 py-2 border flex flex-row gap-x-4 justify-center">
                      <span
                        onClick={() => handelDelete(record._id)}
                        className={"cursor-pointer hover:text-blue-600"}
                      >
                        delete
                      </span>
                      <span
                        onClick={() => handleSubmit(record._id)}
                        className={"cursor-pointer hover:text-blue-600"}
                      >
                        update
                      </span>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="px-6 py-2 border">{record.description}</td>
                    <td className="px-6 py-2 border ">{record.amount}</td>
                    <td className="px-6 py-2 border">{record.category}</td>
                    <td className="px-6 py-2 border">{record.payment}</td>
                    <td className="px-6 py-2 border">{record.date}</td>
                    <td className="px-6 py-2 border flex flex-row gap-x-4 justify-center">
                      <span
                        onClick={() => handelDelete(record._id)}
                        className={"cursor-pointer hover:text-blue-600"}
                      >
                        delete
                      </span>
                      <span
                        onClick={() => handleUpdate(record._id)}
                        className={"cursor-pointer hover:text-blue-600"}
                      >
                        edit
                      </span>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
