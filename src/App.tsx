import "swiper/css";
import "./index.css";

import { Swipu } from "./swipper";

const Rest = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Hello Vite + React!</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="max-h-screen">
        <Swipu />
      </div>
      <Rest />
    </div>
  );
}

export default App;
