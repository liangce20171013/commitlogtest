module.exports = {
  // 可选类型
  types: [
    { value: "feat", name: "✨ Features | 新功能" },
    { value: "fix", name: "🐛 Bug Fixes | Bug 修复" },
    { value: "perf", name: "⚡ Performance Improvements | 性能优化" },
    { value: "revert", name: "⏪ Reverts | 回退" },
    { value: "chore", name: "🎫 Chores | 其他更新", hidden: true },
    { value: "docs", name: "📝 Documentation | 文档" },
    { value: "style", name: "💄 Styles | 风格", hidden: true },
    { value: "refactor", name: "♻ Code Refactoring | 代码重构" },
    { value: "test", name: "✅ Tests | 测试" },
    { value: "build", name: "👷‍ Build System | 构建" },
    { value: "ci", name: "🔧 Continuous Integration | CI 配置" },
  ],
  scopes: [{ name: "" }],
  // 消息步骤
  messages: {
    type: "请选择提交类型：",
    subject: "请简要描述提交(必填)：",
    body: "请输入详细描述(可选)：",
    footer: "请输入要关闭的issue(可选)：",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
    breaking: "列出破坏性更改（不兼容）（可选）：",
  },
  // 跳过问题
  skipQuestions: ["scope", "body", "footer"],
  allowCustomScopes: false,
  // subject文字长度默认是72
  subjectLimit: 72,
  allowBreakingChanges: ["feat", "fix"],
};
