/**
 * TypeScript 的模块系统采用的是ES6的 export 语法，两者并不兼容
 * 为了支持 CommonJS 的模块系统，TypeScript增加了支持语法:
 *  // CommonJS 导出
 *  export = 模块导出
 *
 *  // CommonJS 导入
 *  import 名字 = require(模块)
 *
 * 当你在 TypeScript 代码中采用 export = 导出语法时，编译选项 `module` 必须设置为 `commonjs` 或 `amd`
 */
let myobj = {
  a: 1,
  b: 2,
};
// export = myobj;
// export = 相当于默认导出 export default，因而该语法在一个模块中只能出现一次
// export = {} // error

// Uncaught ReferenceError: require is not defined
// import moduleB = require("./b");
// console.log(moduleB);
