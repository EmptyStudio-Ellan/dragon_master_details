import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
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
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const DragonEgg = () => {
  return (
    <div>
      <Title>龙蛋说明书</Title>
      <Table>
        <tr><Th>生成条件</Th><Td>1.同等级类型(例如:普通和普通,BOSS和BOSS)<br />2.性别不一致<br />3.均已驯服<br />4.用蛋糕喂食两只龙<br />5.也有可能野外随机生成哦!</Td></tr>
                  <tr><Th>龙蛋稀有度</Th><Td>不同等级的龙蛋会根据等级孵化出不同的龙,稀有等级越高的龙蛋孵化出来的龙蛋属性也越高</Td></tr>
                  <tr><Th>培育方法</Th><Td>幼龙出生后将会有三个阶段的成长期,玩家需要在不同阶段进行喂食,以使得幼龙的生命印记得到铭刻,幼龙成年后将会根据生命印记获得不一样的属性加成</Td></tr>
      </Table>
    </div>
  );
};

export default DragonEgg;
