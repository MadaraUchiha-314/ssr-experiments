import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

const base = {
  plugins: [
    typescript(),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    nodeResolve(),
    commonjs(),
  ],
};

export default [{
  ...base,
  input: {
    server: 'src/server/server.tsx',
  },
  output: {
    dir: 'dist',
    format: 'cjs',
    entryFileNames: '[name].cjs'
  },
}, {
  ...base,
  input: {
    client: 'src/client/client.tsx',
  },
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name].mjs'
  },
}];