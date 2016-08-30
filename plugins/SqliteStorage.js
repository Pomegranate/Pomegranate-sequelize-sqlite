/**
 * Created by monstertke on 8/30/16.
 */

/**
 * @file loadModels
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-sequelize-pg
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var path = require('path');

/**
 *
 * @module loadModels
 */

exports.options = {
  filename: 'data.sqlite',
  workDir: './sqlitestore'
}

exports.metadata = {
  name: 'SQLiteStorage',
  param: 'SQLStore',
  type: 'service',
  depends: ['SequelizeCore']
}

exports.plugin = {
  load: function(inject, loaded) {
    var storageFile = path.join(this.options.workDir, this.options.filename)
    this.Logger.log('Using Storage file  - ' + storageFile)
    loaded(null, storageFile)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
};