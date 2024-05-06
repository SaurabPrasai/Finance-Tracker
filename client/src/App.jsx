import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/auth" element={<Auth/>}/>

        </Routes>
    </BrowserRouter>
  )
}
