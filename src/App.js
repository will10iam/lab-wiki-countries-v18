import { Routes } from "react-router-dom";
import CountriesList from "./Components/CountriesList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/country-detail" element={<CountryDetail />}/>
      </Routes>
      <CountriesList />
    </div>
  );
}

export default App;
