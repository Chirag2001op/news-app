import React, {useState} from 'react'
import Navbar from './components/navbar';
import Newses from './components/newses';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const[progress, setProgress] = useState(0)
 
  return (
   <div>
     <Router>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
    <Switch>
      <Route  path="/" ><Newses setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country ="in" category="general"/></Route>
      <Route  path="/business" ><Newses setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country ="in" category="business"/></Route>
      <Route  path="/entertainment" ><Newses setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country ="in" category="entertainment"/></Route>
      <Route  path="/health" ><Newses setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country ="in" category="health"/></Route>
      <Route  path="/science" ><Newses setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country ="in" category="science"/></Route>
      <Route  path="/sports" ><Newses setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country ="in" category="sports"/></Route>
      <Route  path="/technology" ><Newses setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country ="in" category="technology"/></Route>
    </Switch>
   
    </Router>
   </div>
  );
}

export default App;
