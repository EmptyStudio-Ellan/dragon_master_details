import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import DragonMasterDetails from './DragonMasterDetails/DragonMasterDetails';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 5% 5%;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<DragonMasterDetails />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
