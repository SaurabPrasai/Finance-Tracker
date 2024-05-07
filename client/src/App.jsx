import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"
import FinanceRecordContextProvider from "./context/FinanceRecordContext"
import Header from "./components/Header"
import {useUser} from "@clerk/clerk-react";


export default function App() {
const {user}=useUser();
 
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={user?<FinanceRecordContextProvider><Dashboard/></FinanceRecordContextProvider>:<Auth/>}/>
          <Route path="/auth" element={<Auth/>}/>

        </Routes>
    </BrowserRouter>
  )
}
