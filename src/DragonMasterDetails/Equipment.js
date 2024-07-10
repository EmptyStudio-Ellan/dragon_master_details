import React, { useState } from 'react';
import styled from 'styled-components';
import { equipments } from './equipment_config';

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

const EquipmentSection = styled.div`
  margin-bottom: 20px;
`;

const EquipmentHeader = styled.h2`
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

const Equipment = () => {
  const [selectedEquipment, setselectedEquipment] = useState(equipments[0]);
  const [activeEquipment, setActiveEquipment] = useState(equipments[0].name);

  const handleEquipmentClick = (equipment) => {
    setselectedEquipment(equipment);
    setActiveEquipment(equipment.name);
  };

  return (
    <div>
      <Title>装备介绍</Title>
      <SmallNav>
        {equipments.map((equipment) => (
          <SmallNavLink key={equipment.name} active={activeEquipment === equipment.name} onClick={() => handleEquipmentClick(equipment)}>
            {equipment.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <EquipmentSection>
        <EquipmentHeader>{selectedEquipment.name}</EquipmentHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedEquipment.name}</Td></tr>
            <tr><Th>耐久度</Th><Td>{selectedEquipment.max_damage}</Td></tr>
            <tr><Th>防御值</Th><Td>{selectedEquipment.defense}</Td></tr>
            <tr><Th>附魔能力</Th><Td>{selectedEquipment.enchantment}</Td></tr>
            <tr><Th>韧性</Th><Td>{selectedEquipment.toughness}</Td></tr>
            <tr><Th>击退抗性</Th><Td>{selectedEquipment.knockback_resistance}</Td></tr>
            <tr><Th>物理伤害减免</Th><Td>根据装备单独计算</Td></tr>
            <tr><Th>魔法伤害减免</Th><Td>根据装备单独计算</Td></tr>
            <tr><Th>特性</Th><Td>根据装备单独计算</Td></tr>
          </tbody>
        </Table>
      </EquipmentSection>
    </div>
  );
};

export default Equipment;
