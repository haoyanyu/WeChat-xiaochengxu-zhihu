const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

var index = require('../datas/data-index.js')
var index_next = require('../datas/data-index-next.js')

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header:{},
      success:function(res){
        console.log('success');
        resolve(res);
      },
      fail:function(err){
        reject(err);
        console.log('fail')
      }
    })
  })
}

function getIndexData(){
  return index.index
}
function getNextData(){
  return index_next.next
}

module.exports.getData = getData;
module.exports.getIndexData = getIndexData;
module.exports.getNextData = getNextData;