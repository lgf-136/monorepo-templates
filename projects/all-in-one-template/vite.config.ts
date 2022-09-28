/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

const { defineConfig, loadEnv } = require('vite');
const path = require('path');
// import utools from 'vite-plugin-utools';

const viteBaseConfig = require('./config/vite/vite.base.config');
const viteServeConfig = require('./config/vite/vite.serve.config');
const viteBuildConfig = require('./config/vite/vite.build.config');

import utoolsPlugin from './config/utools';
// pnpm create monkey    to generate tampermonkey template with vite
const tampermonkeyPluginConfig = require('./config/tampermonkey/react-ts');
// import viteConfig from '@lgf136/config'; // 不能导入模块？？？

// 使用策略模式来加载不同的配置文件
const configResover: { [key: string]: Function } = {
  build: (env: any) => {
    console.log('build mode, will load build viteProdConfig');
    return Object.assign(viteBaseConfig, viteBuildConfig(env));
    // 等价于语句： ({...viteBaseConfig,...viteBuildConfig})
  },
  serve: (env: any) => {
    console.log('dev mode, will load build viteDevConfig');
    // console.log(Object.assign(viteBaseConfig, viteServeConfig(env)));
    return Object.assign(viteBaseConfig, viteServeConfig(env));
  },
};

const envResolver: { [key: string]: Function } = {
  development: () => {
    console.log('will load development env');
    // 后面的参数为空表示生产环境暴露所有配置参数方便调试
    return loadEnv('development', path.resolve(__dirname, './env'), '');
  },
  production: () => {
    console.log('will load production env');
    // 后面的参数 'VITE_' 便是生产幻境只暴露指定前缀为VITE_开头的配置
    return loadEnv('production', `${process.cwd()}/env`, 'VITE_');
  },
};

const utoolsPluginConfig = defineConfig(({ command = '', mode = 'development', utoolsBuildFlag = true }) => {
  const env: any = envResolver[mode]();
  const config = configResover[command](env);
  if (utoolsBuildFlag) {
    config.plugins = [ ...config.plugins, utoolsPlugin ];
  }
  return config;
});
// build utools plugin

// module.exports = utoolsPluginConfig;

// build tampermonkey plugin

module.exports = tampermonkeyPluginConfig;
