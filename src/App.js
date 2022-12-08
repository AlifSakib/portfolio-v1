import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="bg-[#F9F7F7] relative">
      <Header></Header>
      <Home></Home>
      <Skills></Skills>
      <div className="fixed bottom-20 md:block hidden">
        <Social></Social>
      </div>
    </div>
  );
}

export default App;
