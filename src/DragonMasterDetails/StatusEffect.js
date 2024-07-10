import React, { useState } from 'react';
import styled from 'styled-components';
import { status_effects } from './status_effect_config';

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

const StatusEffectSection = styled.div`
  margin-bottom: 20px;
`;

const StatusEffectHeader = styled.h2`
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

const StatusEffect = () => {
  const [selectedStatusEffect, setselectedStatusEffect] = useState(status_effects[0]);
  const [activeStatusEffect, setActiveStatusEffect] = useState(status_effects[0].name);

  const handleStatusEffectClick = (status_effect) => {
    setselectedStatusEffect(status_effect);
    setActiveStatusEffect(status_effect.name);
  };

  return (
    <div>
      <Title>状态效果介绍</Title>
      <SmallNav>
        {status_effects.map((status_effect) => (
          <SmallNavLink key={status_effect.name} active={activeStatusEffect === status_effect.name} onClick={() => handleStatusEffectClick(status_effect)}>
            {status_effect.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <StatusEffectSection>
        <StatusEffectHeader>{selectedStatusEffect.name}</StatusEffectHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedStatusEffect.name}</Td></tr>
            <tr><Th>介绍</Th><Td>{selectedStatusEffect.description}</Td></tr>
          </tbody>
        </Table>
      </StatusEffectSection>
    </div>
  );
};

export default StatusEffect;
