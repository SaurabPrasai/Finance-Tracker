import { createContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";


export const financeRecordContext = createContext();

export default function FinanceRecordContextProvider({ children }) {
  const [records, setRecords] = useState([]);
  const {user}=useUser();


  useEffect(() => {
   if(user){
    const getAllUser = async () => {
      const response = await fetch(`/api/getallrecord/${user.id}`);
      const data = await response.json();
      setRecords(data);
    };
   getAllUser();
   }
  }, [user]);
  return (
    <financeRecordContext.Provider value={{ records,setRecords }}>
      {children}
    </financeRecordContext.Provider>
  );
}
