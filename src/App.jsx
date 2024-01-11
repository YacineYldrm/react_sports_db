import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import DetailLeague from "./pages/DetailLeague";
import DetailTeam from "./pages/DetailTeam";
import Fetch from "./components/Fetch/Fetch";
import {
  AllLeagueContext,
  FilterInputContext,
  LoadingDataContext,
  SearchStatusContext,
  SelectedValueContext
} from "./components/Context/Context";
import { useEffect, useState } from "react";
import Navbar from "./components/_Essentials/Navbar/Navbar";
import FilterList from "./components/FilterList/FilterList";
import { DarkModeProvider } from "./components/Context/DarkModeContext";
import BtnUp from "./components/_Essentials/BtnUp/BtnUp";
import ScrollToTop from "./assets/svg/ScrollToTop";
import PreLoader from "./pages/PreLoader";

function App() {
  // state for data context
  const [allLeagueData, setAllLeagueData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  console.log("App.jsx", allLeagueData);
  console.log("App.jsx loadingStatus", loadingData);

  // states for search functions
  const [userInput, setUserInput] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);
  const [ selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div >
    <DarkModeProvider>
    <AllLeagueContext.Provider value={{ allLeagueData, setAllLeagueData }}>
      <FilterInputContext.Provider value={{userInput, setUserInput}}>
        <SearchStatusContext.Provider value={{searchStatus, setSearchStatus}}>
          <SelectedValueContext.Provider value={{ selectedOptions, setSelectedOptions }}>
            <LoadingDataContext.Provider value={{ loadingData, setLoadingData }}>
              <Fetch/>
              <Navbar/>
              <ScrollToTop/>
              <Routes>
                <Route path="/" element={<PreLoader />} />
                <Route path="/results" element={ <FilterList/> } />
                <Route path="/detail-league/:id" element={<DetailLeague />} />
                <Route path="/detail-team/:idTeam" element={<DetailTeam />} />
              </Routes>
            </LoadingDataContext.Provider>
          </SelectedValueContext.Provider>
        </SearchStatusContext.Provider>
      </FilterInputContext.Provider>
    </AllLeagueContext.Provider>
    </DarkModeProvider>      

    </div>
  );
}

export default App;
