import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"
import FinanceRecordContextProvider from "./context/FinanceRecordContext"


export default function App() {

 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<FinanceRecordContextProvider><Dashboard/></FinanceRecordContextProvider>}/>
          <Route path="/auth" element={<Auth/>}/>

        </Routes>
    </BrowserRouter>
  )
}
