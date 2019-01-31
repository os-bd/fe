import resolve from 'rollup-plugin-node-resolve';
import rollupTypescript from 'rollup-plugin-typescript';

export default {
  input: 'src/main.ts', // 入口
  output: {
    name: 'fe-shared-components',
    file: 'dist/fe-shared-components.js', // 打包文件名
    format: 'umd', // 打包模块支持方案，可选 amd, cjs, es, iife, umd
  },
  plugins: [
    resolve(),
    rollupTypescript({
      lib: ["es5", "es6", "dom"],
      target: "es5"
    })
  ],
  external: [ // 不被打包的库，比如在项目中会被引入
    'vue'
  ]
}