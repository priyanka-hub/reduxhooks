import {Routes,Route} from 'react-router-dom'
import Aboutus from './Pages/Aboutus/Aboutus'
import Home from './Pages/Home/Home'
const App=()=>{
    return(<>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        
    </Routes>
    </>)
}
export default App