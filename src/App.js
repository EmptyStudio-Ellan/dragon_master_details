import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
// import MinecraftTools from './MinecraftTools/MinecraftTools';
import DragonMasterDetails from './DragonMasterDetails/DragonMasterDetails';
import NavBar from './NavBar/NavBar';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 5% 5%;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<DragonMasterDetails />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/minecrafttools" element={<MinecraftTools />} /> */}
          {/* <Route path="/dragon_master_details" element={<DragonMasterDetails />} /> */}
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
