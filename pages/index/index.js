//index.js
//获取应用实例
const app = getApp()
var Util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed:[],
    feed_length:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  getData:function(){
    var feedtemp = Util.getIndexData();
    var feedDataTemp = feedtemp.data;
    this.setData({
      feed: feedDataTemp,
      feed_length: feedDataTemp.length
    });
  },
  upper:function(){
    wx.showNavigationBarLoading();
    this.refresh();
    setTimeout(function(){
      wx.hideNavigationBarLoading();
    },2000)
    this.setData({
      scrollTop:0
    })
  },
  lower:function(){
    wx.showNavigationBarLoading();
    var that = this;
    that.nextLoad();
    setTimeout(function () { 
      wx.hideNavigationBarLoading();
    }, 1000);
    console.log("lower")
  },
  // refresh1:function(){
  //   var index_api = '';
  //   Util.getData(index_api).then(
  //     function(data){
  //       // this.setData({});
  //       console.log(data);
  //     }
  //   )
  // }
  refresh:function(){
    wx.showToast({
      title: '',
      icon:'loading'
    });
    this.getData();
    setTimeout(function(){
      wx.showToast({
        title: '',
        icon:'success'
      })
    },1500)
  },
  nextLoad:function(){
    wx.showToast({
      title: '',
      icon: 'loading'
    });
    var next = Util.getNextData();
    var next_data = next.data;
    this.setData({
      feed:this.data.feed.concat(next_data),
      feed_length:this.data.feed_length + next_data.length
    });
    setTimeout(function(){
      wx.showToast({
      title: '',
      icon:'success'
      })
    },1500)
  },
  questionTap:function(){
    wx.navigateTo({
      url: '../question/question',
    })
  },
  itemTap:function(){
    wx.navigateTo({
      url: '../answer/answer',
    })
  }
})