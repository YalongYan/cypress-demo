import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // 基础URL
    baseUrl: 'http://localhost:5173/',
    
    // 测试文件的位置
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // 支持文件的位置
    supportFile: 'cypress/support/e2e.js',
    
    // 视窗设置
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // 其他配置
    defaultCommandTimeout: 10000,
    
    // 环境变量配置 - 常用测试地址
    env: {
      // 测试聊天室地址
      testChatRoomUrl: '/chatroom/23484?env=1',
      // 可以添加更多常用地址
      // testLoginUrl: '/login',
      // testProfileUrl: '/profile',
    },
    
    setupNodeEvents(on, config) {
      return config
    },
  }
})
 