/**
 * Created by huguoliang on 2017/7/6.
 * GRPC服务实例初始化类
 */
'use strict';

module.exports = app => {
  app.addSingleton('mysql', CreateGRPCServer);
};

function CreateGRPCServer(config, app) {
  const {bind} = config;
  console.log('config', config);
}