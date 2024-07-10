import React, { useState } from 'react';
import styled from 'styled-components';
import { npcs } from './npc_config';

const Title = styled.h1`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
`;

const SmallNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const SmallNavLink = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: ${props => (props.active ? '#45a049' : '#4CAF50')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const NpcSection = styled.div`
  margin-bottom: 20px;
`;

const NpcHeader = styled.h2`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Npc = () => {
  const [selectedNpc, setselectedNpc] = useState(npcs[0]);
  const [activeNpc, setActiveNpc] = useState(npcs[0].name);

  const handleNpcClick = (npc) => {
    setselectedNpc(npc);
    setActiveNpc(npc.name);
  };

  return (
    <div>
      <Title>npc介绍</Title>
      <SmallNav>
        {npcs.map((npc) => (
          <SmallNavLink key={npc.name} active={activeNpc === npc.name} onClick={() => handleNpcClick(npc)}>
            {npc.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <NpcSection>
        <NpcHeader>{selectedNpc.name}</NpcHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedNpc.name}</Td></tr>
            <tr><Th>介绍</Th><Td>{selectedNpc.description}</Td></tr>
            <tr><Th>掉落物</Th><Td>{selectedNpc.dropItems}</Td></tr>
            <tr><Th>交易物品</Th><Td>{selectedNpc.exchange_items}</Td></tr>
          </tbody>
        </Table>
      </NpcSection>
    </div>
  );
};

export default Npc;
