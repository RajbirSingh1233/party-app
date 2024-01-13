import React, { useState } from 'react';
import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import { samplePartyData } from '../data/sampleData';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PartySearch = () => {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [partyName, setPartyName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleAddPartyClick = () => {
    setShowInput(true);
  };

  const handlePartySearch = (value) => {
    const results = samplePartyData.filter((party) =>
      party.aliasName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handlePartySelect = (event, value) => {
    if (value) {
      navigate(`/search-result/${value.id}`);
    }
  };

  return (
    <div style={{
      marginTop: "2rem",
      marginLeft: "2rem"
    }}>
      {showInput ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <AccountCircleIcon style={{ marginRight: '1rem', marginTop: "1rem", fontSize: '35px', color: "707070" }} />
        <Autocomplete
          freeSolo
          options={searchResults}
          getOptionLabel={(option) => option.aliasName}
          onInputChange={(event, value) => handlePartySearch(value)}
          onChange={handlePartySelect}
          renderOption={(props, option) => (
            <li {...props}>
              <div style={{
                font: "normal normal normal 14px/17px Roboto",
                textAlign: "left",
                color: "#868686",
                letterSpacing: "0px",
              }}>
                <Typography variant="subtitle1">{option.name}</Typography>
                <Typography variant="body2" style={{ marginTop: "6px", fontSize: "12px" }}>{option.address}</Typography>
              </div>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              style={{
                width: "20rem"
              }}
              {...params}
              label="Enter Party Name"
              variant="standard"
              value={partyName}
              onChange={(e) => setPartyName(e.target.value)}
            />
          )}
        />
      </div>
      
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', color: '#4964da', cursor: "pointer" }} onClick={handleAddPartyClick}>
          <AccountCircleIcon style={{ marginRight: '1rem', fontSize: '35px' }} />
          <p style={{ margin: '0' }}>+ add Party</p>
        </div>
      )}
    </div>
  );
};

export default PartySearch;
