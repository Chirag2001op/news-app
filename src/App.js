import React from 'react'
import Navbar from './components/navbar';
import Newses from './components/newses';

function App() {
  return (
   <div>
    <Navbar/>
    <Newses pageSize={5} />
   </div>
  );
}

export default App;
