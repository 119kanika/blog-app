import "./App.css";
import DisplayBlogs from "./components/DisplayBlogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <div className="py-5 px-10 bg-zinc-200  text-zinc-900">
        <Navbar />
      </div>

      <DisplayBlogs />
    </div>
  );
}

export default App;
