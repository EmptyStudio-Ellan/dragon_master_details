import React, { useState } from 'react';
import styled from 'styled-components';
import { blocks } from './block_config';

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

const BlockSection = styled.div`
  margin-bottom: 20px;
`;

const BlockHeader = styled.h2`
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

const Block = () => {
  const [selectedBlock, setselectedBlock] = useState(blocks[0]);
  const [activeBlock, setActiveBlock] = useState(blocks[0].name);

  const handleBlockClick = (block) => {
    setselectedBlock(block);
    setActiveBlock(block.name);
  };

  return (
    <div>
      <Title>矿物介绍</Title>
      <SmallNav>
        {blocks.map((block) => (
          <SmallNavLink key={block.name} active={activeBlock === block.name} onClick={() => handleBlockClick(block)}>
            {block.name}
          </SmallNavLink>
        ))}
      </SmallNav>
      <BlockSection>
        <BlockHeader>{selectedBlock.name}</BlockHeader>
        <Table>
          <tbody>
            <tr><Th>名称</Th><Td>{selectedBlock.name}</Td></tr>
            <tr><Th>介绍</Th><Td>{selectedBlock.description}</Td></tr>
            <tr><Th>生成位置</Th><Td>{selectedBlock.spwan_location}</Td></tr>
          </tbody>
        </Table>
      </BlockSection>
    </div>
  );
};

export default Block;
