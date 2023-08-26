import { useEffect, useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {

  return (
    <div className="overflow-x-hidden w-screen h-screen">
      <SearchInput  />
      <ImageContainer />
    </div>
  );
}

export default App;
