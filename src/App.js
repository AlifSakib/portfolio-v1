import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-[#F9F7F7]">
      <Header></Header>
      <Home></Home>
      <Skills></Skills>
    </div>
  );
}

export default App;
