var Util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    feed: [],
    feed_length: 0
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
  switchTab:function(e) {
    console.log(e.target.dataset.idx);
    this.setData({
      currentTab: e.target.dataset.idx
    })
  },
  getData: function () {
    var feedtemp = Util.getIndexData();
    var feedDataTemp = feedtemp.data;
    this.setData({
      feed: feedDataTemp,
      feed_length: feedDataTemp.length
    });
  }

})