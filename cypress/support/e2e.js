// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// 全局错误处理
Cypress.on('uncaught:exception', (err, runnable) => {
  // 忽略一些常见的第三方脚本错误
  console.warn('Uncaught exception:', err.message)
  
  // 返回false防止Cypress因未捕获的异常而失败测试
  if (err.message.includes('Script error') || 
      err.message.includes('Non-Error promise rejection')) {
    return false
  }
  
  return true
}) 