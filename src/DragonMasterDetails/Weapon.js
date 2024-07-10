import React, { useState } from 'react';
import styled from 'styled-components';
import { weapons } from './weapon_config';

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

const WeaponSection = styled.div`
  margin-bottom: 20px;
`;

const WeaponHeader = styled.h2`
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

const Weapon = () => {
  const [selectedWeapon, setselectedWeapon] = useState(weapons[0]);
  const [activeWeapon, setActiveWeapon] = useState(weapons[0].name);

  const handleWeaponClick = (weapon) => {
    setselectedWeapon(weapon);
    setActiveWeapon(weapon.name);
  };

  return (
    <div>
      <Title>武器介绍</Title>
      <SmallNav>
        {weapons.map((weapon) => (
          <SmallNavLink key={weapon.name} active={activeWeapon === weapon.name} onClick={() => handleWeaponClick(weapon)}>
            {weapon.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <WeaponSection>
        <WeaponHeader>{selectedWeapon.name}</WeaponHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedWeapon.name}</Td></tr>
            <tr><Th>耐久度</Th><Td>{selectedWeapon.max_damage}</Td></tr>
            <tr><Th>攻击伤害</Th><Td>{selectedWeapon.attack_damage}</Td></tr>
            <tr><Th>附魔能力</Th><Td>{selectedWeapon.enchantment}</Td></tr>
            <tr><Th>攻击速度增益</Th><Td>{selectedWeapon.AttackSpeedAmplifier}</Td></tr>
            <tr><Th>攻击间隔</Th><Td>{selectedWeapon.AttackInterval}</Td></tr>
            <tr><Th>每秒攻击次数</Th><Td>{selectedWeapon.AttackSecondCount}</Td></tr>
            <tr><Th>DPS</Th><Td>{selectedWeapon.DPS}</Td></tr>
          </tbody>
        </Table>
      </WeaponSection>
    </div>
  );
};

export default Weapon;
