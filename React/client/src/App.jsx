import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./page/Home";
import {About} from "./page/About";
import {Contact} from "./page/Contact";
import {Login} from "./page/Login";
import {Register} from "./page/Register";
import {Service} from "./page/Service";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
