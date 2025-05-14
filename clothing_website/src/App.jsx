import "./App.css";

import Navbar from "./component/Navbar";
import NewCollection from "./component/NewCollection";

function App() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/grain_Texture.png')",
        }}
      />

      {/* Content Layer */}
      <div className="space-y-6 mt-12">
        <Navbar />
        <NewCollection />
      </div>
    </>
  );
}

export default App;
