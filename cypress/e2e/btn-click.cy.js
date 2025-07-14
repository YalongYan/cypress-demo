describe('测试class 为 countBtn 的按钮点击', () => {
  beforeEach(() => {
    // 在每个测试前设置登录状态
    cy.visitTestChatRoom()
  });
  /**
   * 点击 class 为 countBtn 的按钮，点击后 class 为 countBtn 的按钮的文本内容要加1,
   * 最开始是count is 0， 点击一次后，文本内容要变成 count is 1， 再点击一次后，文本内容要变成 count is 2
   */
  it('测试class 为 countBtn 的按钮点击', () => {
    cy.get('button.countBtn')
      .should('be.visible')
      .click()
      .should('have.text', 'count is 1')
      .click()
      .should('have.text', 'count is 2')
  });
})