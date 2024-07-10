// src/config.js
export const toolsConfig = {
  '方块': ["方块_1", "方块_2"],
  '物品': ["物品_1", "物品_2"],
  '生物': ["生物_1", "生物_2"],
  '图片': ["图片_1", "图片_2"]
};

export const contentConfig = {
  '方块_1': (
    <div>
      <h2>这是方块_1的内容</h2>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>属性1</td>
            <td>值1</td>
          </tr>
          <tr>
            <td>属性2</td>
            <td>值2</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  '方块_2': (
    <div>
      <h2>这是方块_2的内容</h2>
      <p>方块_2的详细描述...</p>
    </div>
  ),
  '物品_1': (
    <div>
      <h2>这是物品_1的内容</h2>
      <ul>
        <li>特性1</li>
        <li>特性2</li>
      </ul>
    </div>
  ),
  '物品_2': (
    <div>
      <h2>这是物品_2的内容</h2>
      <p>物品_2的详细描述...</p>
    </div>
  )
};
