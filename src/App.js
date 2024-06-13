import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home/Home1"
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import axios from 'axios';
function App() {
const [ShowLoading, setShowLoading] = useState(false);
  const getPortfolioData=async()=>{
 try {
  const respones=await axios.get('api/portfolio/get-portfolio-data');
  console.log(respones);
 } catch (error) {
  
 }};
  
return (
    <BrowserRouter>
    {ShowLoading?<Loader/>:null}
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
