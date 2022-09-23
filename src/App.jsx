import { Route } from "react-router-dom";
import About from "./Pages/About";
import Homepage from "./Pages/Homepage";


function App() {
  return (
      <>
      <Route path="/home" exact component={Homepage}/>
      <Route path="/about" exact component={About}/>

      
      </>

  );
}

export default App;
