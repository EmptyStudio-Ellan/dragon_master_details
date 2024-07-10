import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { toolsConfig, contentConfig } from './config';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  border-radius: 25px; /* 添加圆角 */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  width: 80%;
  padding: 100px 10%;
  border: 2px solid #ccc; /* 添加边框 */
  border-radius: 16px; /* 添加圆角 */
  background-color: #fff;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 16px;
`;

const Main = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ToolsList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ToolItem = styled.li`
  list-style-type: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc(20% - 20px);
  margin: 10px;

  button {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
`;

const SubTools = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100%);
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1;

  button {
    margin: 0 5px;
    white-space: nowrap;
  }
`;

const ToolContent = styled.div`
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 20px;
  min-height: 300px;
  z-index: 2;
`;

function MinecraftTools() {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [activeSubTool, setActiveSubTool] = useState(null);

  const tools = useMemo(() => toolsConfig, []);

  const handleSubToolClick = (subTool) => {
    setActiveSubTool(subTool);
  };

  useEffect(() => {
    const firstTool = Object.keys(tools)[0];
    const firstSubTool = tools[firstTool][0];
    setActiveSubTool(firstSubTool);
  }, [tools]);

  return (
    <AppContainer>
      <InnerContainer>
        <Header>
          <Title>BedrockMinecraftDevelopmentTools</Title>
          <SearchInput type="text" placeholder="输入关键词搜索，如物品、方块等" />
        </Header>
        <Main>
          <Tools>
            <ToolsList className="visible-tools">
              {Object.keys(tools).map((tool) => (
                <ToolItem
                  key={tool}
                  onMouseEnter={() => setHoveredTool(tool)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <button>{tool}</button>
                  {hoveredTool === tool && (
                    <SubTools>
                      {tools[tool].map((subTool) => (
                        <button
                          key={subTool}
                          onClick={() => handleSubToolClick(subTool)}
                        >
                          {subTool}
                        </button>
                      ))}
                    </SubTools>
                  )}
                </ToolItem>
              ))}
            </ToolsList>
          </Tools>
          <ToolContent>
            {activeSubTool ? contentConfig[activeSubTool] : <div>请选择一个子工具</div>}
          </ToolContent>
        </Main>
      </InnerContainer>
    </AppContainer>
  );
}

export default MinecraftTools;
