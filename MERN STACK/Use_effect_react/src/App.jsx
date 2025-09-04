import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {
  return (
    // <div className="bg-red-500 w-40 h-20 flex items-center justify-center text-white p-20 m-auto ">
    //   Hello Tailwind How are You??
    // </div>
    <div>
      {/* <Product/> */}

     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </div>


// React hooks
/**
 * useState
 * useEffect
 * 
 * useParams
 * useNavigate
 * useContext
 * useRef
 * 
 * useCallback
 * useMemo 
 */




  )
}

export default App