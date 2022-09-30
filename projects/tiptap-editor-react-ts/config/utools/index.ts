import utools from 'vite-plugin-utools';

const utoolsPlugin = utools({
  external: 'uTools',
  preload: {
    path: './utools/preload.ts',
    watch: true,
    name: 'window.preload',
  },
  buildUpx: {
    pluginPath: './utools/plugin.json',
    outDir: './dist/upx',
    outName: '[pluginName]_[version].upx',
  },
});

module.exports = utoolsPlugin;
