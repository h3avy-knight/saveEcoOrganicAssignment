import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./Components/Pokemon";
import SingleCard from "./Components/SingleCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/:id" element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
