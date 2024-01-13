import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PartySearch from './components/PartySearch';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PartySearch />} />
        <Route path="/search-result/:partyId" element={<SearchResult />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <PartySearch />
    </div>
  );
};

const AddParty = () => {
  return (
    <div>
      input
    </div>
  );
};

export default App;
