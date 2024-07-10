import React, { useState } from 'react';
import styled from 'styled-components';
import { useGesture } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import { dragons } from './dragon_config';
import allDragonsComparisonImage from './all-dragons-comparison.png';
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

const DragonSection = styled.div`
  margin-bottom: 20px;
`;

const DragonHeader = styled.h2`
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

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  cursor: pointer;
`;

const ZoomedImageContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ZoomedImage = styled(animated.img)`
  max-width: 90%;
  max-height: 90%;
  cursor: grab;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #ff4c4c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff1c1c;
  }
`;

const DragonManual = () => {
  const [selectedDragon, setSelectedDragon] = useState(dragons[0]);
  const [showAllDragonsImage, setShowAllDragonsImage] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeDragon, setActiveDragon] = useState(dragons[0].name);

  const [{ zoom, x, y }, api] = useSpring(() => ({ zoom: 1, x: 0, y: 0 }));

  const handleDragonClick = (dragon) => {
    setSelectedDragon(dragon);
    setActiveDragon(dragon.name);
    setShowAllDragonsImage(false);
    setIsZoomed(false);
  };

  const handleAllDragonsImageClick = () => {
    setShowAllDragonsImage(!showAllDragonsImage);
    setIsZoomed(false);
  };

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseClick = () => {
    setIsZoomed(false);
  };

  const bind = useGesture(
    {
      onPinch: ({ offset: [d] }) => api({ zoom: d / 100 + 1 }),
      onWheel: ({ event, memo = zoom.get() }) => {
        event.preventDefault();
        api({ zoom: memo - event.deltaY / 200 });
        return memo;
      },
      onDrag: ({ movement: [mx, my], memo = { x: x.get(), y: y.get() } }) => {
        const scaleFactor = 60;  // 调整每次拖动的敏感度
        api({ x: memo.x + mx * scaleFactor, y: memo.y + my * scaleFactor });
        return memo;
      },
    },
    { drag: { filterTaps: true, bounds: { left: -1000, right: 1000, top: -1000, bottom: 1000 } }, pinch: { scaleBounds: { min: 1, max: 4 } } }
  );

  return (
    <div>
      <Title>龙族说明书</Title>
      <SmallNav>
        {dragons.map((dragon) => (
          <SmallNavLink key={dragon.name} active={activeDragon === dragon.name} onClick={() => handleDragonClick(dragon)}>
            {dragon.name}
          </SmallNavLink>
        ))}
        <SmallNavLink active={showAllDragonsImage} onClick={handleAllDragonsImageClick}>
          所有龙属性对比图
        </SmallNavLink>
      </SmallNav>
      {showAllDragonsImage ? (
        <StyledImage src={allDragonsComparisonImage} alt="所有龙属性对比图" onClick={handleImageClick} />
      ) : (
        <DragonSection>
          <DragonHeader>{selectedDragon.name}</DragonHeader>
          <Table>
            <tbody>
              <tr><Th>中文名称</Th><Td>{selectedDragon.name}</Td></tr>
              <tr><Th>介绍</Th><Td>{selectedDragon.description}</Td></tr>
              <tr><Th>生成位置</Th><Td>{selectedDragon.habitat}</Td></tr>
              <tr><Th>可骑乘</Th><Td>{selectedDragon.rideable}</Td></tr>
              <tr><Th>可滑翔</Th><Td>{selectedDragon.glide}</Td></tr>
              <tr><Th>活动时间</Th><Td>{selectedDragon.activeTime}</Td></tr>
              <tr><Th>主动攻击</Th><Td>{selectedDragon.aggressive}</Td></tr>
              <tr><Th>群居</Th><Td>{selectedDragon.social}</Td></tr>
              <tr><Th>攻击力范围</Th><Td>{selectedDragon.attackRange}</Td></tr>
              <tr><Th>速度范围</Th><Td>{selectedDragon.speedRange}</Td></tr>
              <tr><Th>防御力范围</Th><Td>{selectedDragon.defenseRange}</Td></tr>
              <tr><Th>生命值范围</Th><Td>{selectedDragon.healthRange}</Td></tr>
              <tr><Th>耐力范围</Th><Td>{selectedDragon.staminaRange}</Td></tr>
              <tr><Th>抗性范围</Th><Td>{selectedDragon.resistanceRange}</Td></tr>
              <tr><Th>灵活性范围</Th><Td>{selectedDragon.agilityRange}</Td></tr>
              <tr><Th>攻击范围</Th><Td>{selectedDragon.attackAreaRange}</Td></tr>
              <tr><Th>最大技能储存次数范围</Th><Td>{selectedDragon.maxSkillStorageRange}</Td></tr>
              <tr><Th>负重范围</Th><Td>{selectedDragon.carryingRange}</Td></tr>
              <tr><Th>隐秘性范围</Th><Td>{selectedDragon.stealthRange}</Td></tr>
              <tr><Th>食物驯服进度</Th><Td>{selectedDragon.tamingProgress}</Td></tr>
              <tr><Th>掉落物</Th><Td>{selectedDragon.dropItems}</Td></tr>
              <tr><Th>驯养条件</Th><Td>{selectedDragon.tamingConditions}</Td></tr>
              <tr><Th>生育方式</Th><Td>1.同等级类型(例如:普通和普通,BOSS和BOSS)<br />2.性别不一致<br />3.均已驯服<br />4.用蛋糕喂食两只龙<br /></Td></tr>
              <tr><Th>特性</Th><Td>{selectedDragon.characteristic}</Td></tr>
            </tbody>
          </Table>
        </DragonSection>
      )}
      {isZoomed && (
        <ZoomedImageContainer {...bind()}>
          <ZoomedImage src={allDragonsComparisonImage} alt="所有龙属性对比图" style={{ transform: zoom.to(z => `scale(${z})`), x, y }} />
          <CloseButton onClick={handleCloseClick}>关闭</CloseButton>
        </ZoomedImageContainer>
      )}
    </div>
  );
};

export default DragonManual;
