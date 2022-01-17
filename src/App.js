import React from 'react'
import Navbar from './components/navbar';
import Newses from './components/newses';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const pageSize = 12;
  return (
   <div>
     <Router>
    <Navbar/>
    <Switch>
      <Route  path="/" ><Newses key="general" pageSize={pageSize} country ="in" category="general"/></Route>
      <Route  path="/business" ><Newses key="business" pageSize={pageSize} country ="in" category="business"/></Route>
      <Route  path="/entertainment" ><Newses key="entertainment" pageSize={pageSize} country ="in" category="entertainment"/></Route>
      <Route  path="/health" ><Newses key="health" pageSize={pageSize} country ="in" category="health"/></Route>
      <Route  path="/science" ><Newses key="science" pageSize={pageSize} country ="in" category="science"/></Route>
      <Route  path="/sports" ><Newses key="sports" pageSize={pageSize} country ="in" category="sports"/></Route>
      <Route  path="/technology" ><Newses key="technology" pageSize={pageSize} country ="in" category="technology"/></Route>
    </Switch>
   
    </Router>
   </div>
  );
}

export default App;
