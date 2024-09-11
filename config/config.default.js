/* eslint valid-jsdoc: "off" */

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: true,
        ignore: ctx => ctx.request.url.startsWith('/upload'), // 忽略 /api/ 路径的 CSRF 检查
      },
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1724837902446_6816';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  

  config.mysql = {
    client: {
      host: '47.113.228.135',
      port: '3306',
      user: 'chenwq',
      password: '123123123',
      database: 'my_egg_db',
    },
    app: true,
    agent: false,
  };

  config.multipart = {
    mode: 'file',
    whitelist: () => true, // 允许所有文件类型（根据需要调整）
    tmpdir: path.join(__dirname, '../tmp'), // 指定文件上传的临时存储目录，当文件上传完成后，可以选择将文件从临时目录移动到最终存储目录（uploadDir）。
    uploadDir: path.join(__dirname, '../app/public/uploads'), // 文件保存路径
  };

  return {
    ...config,
    ...userConfig
  };
};
