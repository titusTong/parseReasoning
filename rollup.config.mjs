// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.js', // 你的入口文件
    output: {
      file: 'dist/parseReasoning.cjs.js', // 输出的 CJS 文件
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js', // 你的入口文件
    output: {
      file: 'dist/parseReasoning.esm.js', // 输出的 ESM 文件
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
    ],
  },
];