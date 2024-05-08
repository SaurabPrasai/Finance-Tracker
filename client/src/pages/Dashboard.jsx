import {useUser} from "@clerk/clerk-react"
import FinancialRecordForm from "../components/FinancialRecordForm";
import FinancialRecordList from "../components/FinancialRecordList";


export default function Dashboard() {
    const {user}=useUser();    
  return (
    <div>
        <h1 className=" my-6  text-gray-600 text-center p-2 text-2xl  max-w-lg mx-auto  font-serif">Welcome {user?.firstName}! Here Are Your Finances:</h1>
        <FinancialRecordForm/>
        <FinancialRecordList user={user}/>

    </div>
  )
}
