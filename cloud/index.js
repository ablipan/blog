/*
* 云代码
* @Author: lipan
* @Date:   2015-12-31 10:40:13
* @Last Modified by:   lipan
* @Last Modified time: 2015-12-31 10:41:33
*/
import AV from 'leanengine'

AV.Cloud.define('hello', (request, response)=>{
  response.success('Hello Cloud !')
})

export default AV.Cloud
