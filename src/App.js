import React from 'react'
import Navbar from './components/navbar';
import Newses from './components/newses';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <div>
     <Router>
    <Navbar/>
    <Switch>
      <Route  path="/" ><Newses key="general" pageSize={6} country ="in" category="general"/></Route>
      <Route  path="/business" ><Newses key="business" pageSize={6} country ="in" category="business"/></Route>
      <Route  path="/entertainment" ><Newses key="entertainment" pageSize={6} country ="in" category="entertainment"/></Route>
      <Route  path="/health" ><Newses key="health" pageSize={6} country ="in" category="health"/></Route>
      <Route  path="/science" ><Newses key="science" pageSize={6} country ="in" category="science"/></Route>
      <Route  path="/sports" ><Newses key="sports" pageSize={6} country ="in" category="sports"/></Route>
      <Route  path="/technology" ><Newses key="technology" pageSize={6} country ="in" category="technology"/></Route>
    </Switch>
   
    </Router>
   </div>
  );
}

export default App;
