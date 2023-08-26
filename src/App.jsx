import { useEffect, useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {

  return (
    <div>
      <SearchInput  />
      <ImageContainer />
    </div>
  );
}

export default App;
