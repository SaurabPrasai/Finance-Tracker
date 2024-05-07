import {useUser} from "@clerk/clerk-react"
import FinancialRecordForm from "../components/FinancialRecordForm";
import FinancialRecordList from "../components/FinancialRecordList";


export default function Dashboard() {
    const {user}=useUser();    
  return (
    <div>
        <h1 className="">Welcome {user?.firstName}! Here Are Your Finances:</h1>
        <FinancialRecordForm/>
        <FinancialRecordList user={user}/>

    </div>
  )
}
