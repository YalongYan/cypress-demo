describe('测试class 为 card 的元素是否可见', () => {
  beforeEach(() => {
    // 在每个测试前设置登录状态
    cy.visitTestChatRoom()
  });
  it('测试class 为 card 的元素是否可见', () => {
    cy.get('div.card')
      .should('be.visible')
  });
})