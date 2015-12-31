/*
* @Author: lipan
* @Date:   2015-12-30 22:27:13
* @Last Modified by:   lipan
* @Last Modified time: 2015-12-31 10:46:36
*/
// LeanCloud
var AV = require('leanengine')
var APP_ID = process.env.LC_APP_ID
var APP_KEY = process.env.LC_APP_KEY
var MASTER_KEY = process.env.LC_APP_MASTER_KEY
AV.initialize(APP_ID, APP_KEY, MASTER_KEY)
// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey()

// 使用babel !! ES6 begin now
require('babel-core/register')
require('./bin/www')
