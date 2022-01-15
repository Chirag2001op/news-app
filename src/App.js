import React from 'react'
import Navbar from './components/navbar';
import Newses from './components/newses';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <div>
     <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" ><Newses key="general" pageSize={6} country ="in" category="general"/></Route>
      <Route exact path="/business" ><Newses key="business" pageSize={6} country ="in" category="business"/></Route>
      <Route exact path="/entertainment" ><Newses key="entertainment" pageSize={6} country ="in" category="entertainment"/></Route>
      <Route exact path="/health" ><Newses key="health" pageSize={6} country ="in" category="health"/></Route>
      <Route exact path="/science" ><Newses key="science" pageSize={6} country ="in" category="science"/></Route>
      <Route exact path="/sports" ><Newses key="sports" pageSize={6} country ="in" category="sports"/></Route>
      <Route exact path="/technology" ><Newses key="technology" pageSize={6} country ="in" category="technology"/></Route>
    </Routes>
   
    </Router>
   </div>
  );
}

export default App;
