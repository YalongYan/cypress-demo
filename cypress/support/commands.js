// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// ***********************************************

// 等待页面加载完成
Cypress.Commands.add('waitForPageLoad', () => {
  // 等待页面基本元素加载
  cy.get('body').should('be.visible')
  cy.wait(3000) // 等待3秒确保页面完全加载
});

// 设置登录cookie
Cypress.Commands.add('setLoginCookie', () => {
  cy.setCookie(
    'Demo_Passport', 
    'SDASDSADWEQWGTG65GFFWEF2FDSFASD',
    {
      domain: '.abc.com',
      path: '/'
    }
  )
});

// 访问测试聊天室（带登录状态）
Cypress.Commands.add('visitTestChatRoom', () => {
  cy.visit('/')
  cy.setLoginCookie()
});