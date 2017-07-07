/**
 * Created by huguoliang on 2017/7/6.
 */
'use strict';

const load_grpc = require('./lib/server_loader');

module.exports = app => {
  load_grpc(app);
};