 import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ExploreFood from './Components/ExploreFood';


const App = () => {
  const [category,setCategory] = useState("All")


  return (
    <>
     <div className='App'>
      <Navbar/>
      <Header/>
      <ExploreFood  category={category} setCotegory={setCategory}/>
      
      

       
      </div>
   
    </>
  );
}

export default App;