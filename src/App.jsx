import { useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {

  const [input, setInput] = useState("");

  return (
    <div className="overflow-x-hidden w-screen h-screen">
      <SearchInput input={input} updatedInput={setInput} />
      <ImageContainer />
    </div>
  );
}

export default App;
