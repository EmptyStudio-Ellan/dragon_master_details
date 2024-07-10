import React, { useState } from 'react';
import styled from 'styled-components';
import DragonManual from './DragonManual';
import DragonEgg from './DragonEgg';
import NPC from './NPC';
import Recipe from './Recipe';
import Equipment from './Equipment';
import Weapon from './Weapon';
import Material from './Material';
import Blocks from './Blocks';
import Item from './Item';
import StatusEffect from './StatusEffect';

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #4CAF50;  // 添加外层边框
  border-radius: 10px;  // 倒角
`;

const Title = styled.h1`
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavLink = styled.button`
  margin: 5px;
  padding: 15px;
  font-size: 16px;
  background-color: ${props => (props.active ? '#45a049' : '#4CAF50')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ContentContainer = styled.div`
  border: 2px solid #FF5733;  // 添加子内容边框
  border-radius: 10px;  // 倒角
  padding: 20px;
  margin-top: 20px;
`;

const DragonMasterDetails = () => {
  const [activeSection, setActiveSection] = useState('dragon');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <Nav>
        <NavLink active={activeSection === 'dragon'} onClick={() => handleNavClick('dragon')}>龙</NavLink>
        <NavLink active={activeSection === 'egg'} onClick={() => handleNavClick('egg')}>龙蛋</NavLink>
        <NavLink active={activeSection === 'npc'} onClick={() => handleNavClick('npc')}>NPC</NavLink>
        {/* <NavLink active={activeSection === 'recipe'} onClick={() => handleNavClick('recipe')}>配方</NavLink> */}
        <NavLink active={activeSection === 'equipment'} onClick={() => handleNavClick('equipment')}>装备</NavLink>
        <NavLink active={activeSection === 'weapon'} onClick={() => handleNavClick('weapon')}>武器</NavLink>
        <NavLink active={activeSection === 'material'} onClick={() => handleNavClick('material')}>材料</NavLink>
        <NavLink active={activeSection === 'blocks'} onClick={() => handleNavClick('blocks')}>矿石</NavLink>
        <NavLink active={activeSection === 'item'} onClick={() => handleNavClick('item')}>道具</NavLink>
        <NavLink active={activeSection === 'status'} onClick={() => handleNavClick('status')}>状态效果</NavLink>
      </Nav>
      <ContentContainer>
        {activeSection === 'dragon' && <DragonManual />}
        {activeSection === 'egg' && <DragonEgg />}
        {activeSection === 'npc' && <NPC />}
        {/* {activeSection === 'recipe' && <Recipe />} */}
        {activeSection === 'equipment' && <Equipment />}
        {activeSection === 'weapon' && <Weapon />}
        {activeSection === 'material' && <Material />}
        {activeSection === 'blocks' && <Blocks />}
        {activeSection === 'item' && <Item />}
        {activeSection === 'status' && <StatusEffect />}
      </ContentContainer>
    </Container>
  );
};

export default DragonMasterDetails;
