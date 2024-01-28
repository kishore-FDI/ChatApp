
import "./App.css";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route exact path="/ReactJs" element={<Login/>}></Route>
        <Route path="/ChatScreen" element={<ChatScreen/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;