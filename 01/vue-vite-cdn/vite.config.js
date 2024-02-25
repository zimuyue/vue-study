import { defineConfig } from 'vite';
// 这个 @vitejs/plugin-vue 插件会去调用 @vue/compiler-sfc API
// 所以两个都需要下载，拆分开来是为了让 nodejs 也可以使用 SFC 模式
import vue from '@vitejs/plugin-vue';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'Vue'
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});