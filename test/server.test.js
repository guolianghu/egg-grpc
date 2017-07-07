/**
 * Created by huguoliang on 2017/7/7.
 */
'use strict';

const mm = require('egg-mock');

describe('test/server.test.js', () => {
  let app;

  before(() => {
    app = mm.app({
      baseDir: 'apps/mysqlapp',
    });
    return app.ready();
  });

});