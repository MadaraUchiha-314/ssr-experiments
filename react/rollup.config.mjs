import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: {
    server: 'src/server/server.tsx',
    client: 'src/client/client.tsx',
  },
  output: {
    dir: 'dist',
    format: 'cjs',
    entryFileNames: '[name].cjs'
  },
  plugins: [
    typescript(),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    nodeResolve(),
    commonjs(),
  ],
};