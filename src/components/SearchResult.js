import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { samplePartyData } from '../data/sampleData';
import { samplePartyBalanceData } from '../data/samplePartyBalanceData';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';

const SearchResult = () => {
  const navigate = useNavigate();
  const { partyId } = useParams();
  const selectedParty = samplePartyData.find((party) => party.id === partyId);
  const partyBalance = samplePartyBalanceData.find((balance) => balance.id === partyId);

  return (
    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
      <Card style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        width: '25rem',
        background: '#D3D3D3 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '5px',
        padding: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon style={{ marginRight: '1rem', fontSize: "35px" }} />
          <CardContent style={{
            textAlign: 'left',
            font: 'normal normal normal 14px/17px Roboto',
            letterSpacing: '0px',
            color: '#000000',
            opacity: 1
          }}>
            <Typography variant="h5">{selectedParty?.aliasName}</Typography>
            <Typography variant="body2">Address: {selectedParty?.address}</Typography>
            <Typography variant="body2" style={{
              fontStyle: 'italic'
            }}>Current Balance: Rs.{partyBalance?.balance}</Typography>
          </CardContent>
        </div>
        <ClearIcon
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/')
          }}
        />
      </Card>


    </div>
  );
};

export default SearchResult;
