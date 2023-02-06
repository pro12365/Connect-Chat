import {Route} from "react-router-dom";
import Home from "./Pages/Home";
import Chats from "./Pages/Chat";
import "./App.css";
import LoginForm from "./Pages/Home";
function App() {
  return (
    <div className="App bg-blue-500 h-screen w-screen" >
    <Route path="/" component={LoginForm}/>
      <Route path="/chats" component={Chats}/>
    </div>
  );
}

export default App;
