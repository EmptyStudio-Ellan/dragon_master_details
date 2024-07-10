import React, { useState } from 'react';
import styled from 'styled-components';
import { items } from './item_config';

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

const ItemSection = styled.div`
  margin-bottom: 20px;
`;

const ItemHeader = styled.h2`
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

const Item = () => {
  const [selectedItem, setselectedItem] = useState(items[0]);
  const [activeItem, setActiveItem] = useState(items[0].name);

  const handleItemClick = (item) => {
    setselectedItem(item);
    setActiveItem(item.name);
  };

  return (
    <div>
      <Title>道具介绍</Title>
      <SmallNav>
        {items.map((item) => (
          <SmallNavLink key={item.name} active={activeItem === item.name} onClick={() => handleItemClick(item)}>
            {item.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <ItemSection>
        <ItemHeader>{selectedItem.name}</ItemHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedItem.name}</Td></tr>
            <tr><Th>介绍</Th><Td>{selectedItem.description}</Td></tr>
          </tbody>
        </Table>
      </ItemSection>
    </div>
  );
};

export default Item;
