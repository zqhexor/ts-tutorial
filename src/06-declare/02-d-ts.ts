/**
 * 三斜线指令和 .d.ts
 * 习惯上，常常把外部声明写在一个后缀名为 .d.ts 的声明文件中，然后用三斜线指令引入进来
 * /// <reference path="./jquery.d.ts" />
 */
// jquery.d.ts 文件
declare let $: (selector: string) => {
  html: (content: string) => void;
};

// main.ts 文件
/// <reference path="./jquery.d.ts" />
$('body').html('hello world');

/**
 * 三斜线指令中需要注意的是 path 类型和 types 类型的区别：
 *  - path 类型声明的是对本地文件的依赖，包含路径信息
 *  - types 类型声明的是对 node_modules/@types 文件夹下的类型的依赖，不包含路径信息
 */

/// <reference path="./jquery.d.ts" />
/// <reference types="node" />
