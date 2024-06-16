import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Planet from "./components/planet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/:id"} element={<Planet />} />
        </Routes>
      </BrowserRouter>
      s ;
    </>
  );
}

export default App;
