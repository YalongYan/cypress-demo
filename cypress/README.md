# Cypress 测试文档

## 概述

本项目使用 Cypress 进行简单的 E2E 测试，检查聊天室页面的基本功能。

## 目录结构

```
cypress/
├── e2e/
│   └── simple-test.cy.js         # 简单的功能测试
├── support/
│   ├── commands.js               # 自定义命令
│   └── e2e.js                   # E2E 测试配置
└── README.md                     # 本文档
```

## 运行测试

### 1. 安装依赖（如果尚未安装）

```bash
npm install
```

### 2. 运行测试

```bash
# 在图形界面中打开 Cypress（推荐）
npm run cypress:open

# 或在命令行中运行测试
npm run cypress:run
```

## 测试说明

### 当前测试用例

**simple-test.cy.js** - 包含两个测试用例：

#### 1. 下载客户端链接测试
- 先设置登录cookie以模拟用户登录状态
- 访问 `https://y-dev.tuwan.com/chatroom/157?env=1`
- 检查是否存在 `a.downloadexe` 元素
- 验证链接的 href 属性指向正确的下载地址
- 验证链接在新窗口打开（target="_blank"）
- 验证链接文本包含"下载客户端"

#### 2. 创建车队弹窗交互测试
- 检查创建车队按钮（`div.opbutton.show[data-type="creatteam"]`）是否存在且可见
- 验证按钮文本包含"创建车队"
- 检查弹窗（`.carauto-create-mask`）初始状态为隐藏
- 点击创建车队按钮
- 验证弹窗显示状态变为 `display: block`
- 检查关闭按钮（`.carauto-create-close`）是否存在且可见
- 点击关闭按钮
- 验证弹窗隐藏状态变为 `display: none`

## 配置说明

- **baseUrl**: `https://y-dev.tuwan.com` - 测试基础URL
- **viewportWidth/Height**: `1280x720` - 测试视窗大小
- **defaultCommandTimeout**: `10000ms` - 默认命令超时时间

## 自定义命令

### `cy.waitForPageLoad()`
等待页面基本加载完成。

```javascript
cy.visit('/chatroom/157?env=1')
cy.waitForPageLoad()
```

### `cy.setLoginCookie()`
设置登录cookie以模拟用户登录状态。

```javascript
cy.visit('/')
cy.setLoginCookie()
cy.visit('/chatroom/157?env=1')
```

## 添加新测试

要添加新的测试用例，在 `cypress/e2e/` 目录下创建新的 `.cy.js` 文件：

```javascript
describe('测试描述', () => {
  beforeEach(() => {
    // 设置登录状态和访问页面
    cy.visit('/')
    cy.setLoginCookie()
    cy.visit('/chatroom/157?env=1')
    cy.waitForPageLoad()
  })

  it('测试用例描述', () => {
    // 你的测试逻辑
    cy.get('selector').should('exist')
  })
})
```

## 故障排除

如果测试失败：
1. 确认目标页面可以正常访问
2. 检查元素选择器是否正确
3. 查看 Cypress 测试运行器中的错误信息
4. 增加等待时间或使用更具体的选择器
5. 确认cookie设置是否成功（可在开发者工具中查看） 