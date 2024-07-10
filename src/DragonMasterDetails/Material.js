import React, { useState } from 'react';
import styled from 'styled-components';
import { materials } from './material_config';

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

const MaterialSection = styled.div`
  margin-bottom: 20px;
`;

const MaterialHeader = styled.h2`
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

const Material = () => {
  const [selectedMaterial, setselectedMaterial] = useState(materials[0]);
  const [activeMaterial, setActiveMaterial] = useState(materials[0].name);

  const handleMaterialClick = (material) => {
    setselectedMaterial(material);
    setActiveMaterial(material.name);
  };

  return (
    <div>
      <Title>材料介绍</Title>
      <SmallNav>
        {materials.map((material) => (
          <SmallNavLink key={material.name} active={activeMaterial === material.name} onClick={() => handleMaterialClick(material)}>
            {material.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <MaterialSection>
        <MaterialHeader>{selectedMaterial.name}</MaterialHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedMaterial.name}</Td></tr>
            <tr><Th>介绍</Th><Td>{selectedMaterial.description}</Td></tr>
            <tr><Th>取得方式</Th><Td>{selectedMaterial.get_function}</Td></tr>
          </tbody>
        </Table>
      </MaterialSection>
    </div>
  );
};

export default Material;
