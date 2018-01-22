const lyricData = require('../../../mockData/lover');

// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://img4.imgtn.bdimg.com/it/u=3144924393,3018911819&fm=27&gp=0.jpg',
    name: '等你下课(等宝宝下班)',
    author: '周杰伦(哥哥)',
    src: 'http://dl.stream.qqmusic.qq.com/C400001J5QJL1pRQYB.m4a?vkey=9D9780AC322B48BFAB1B328C896C169C898B117084D46B6EF8B68A1DE304AEC7D93E100344BD5023987950C4F8CC5594F88FEB1FD207FAFA&guid=3194516672&uin=379599806&fromtag=66'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lyric: lyricData.lyric
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
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
  
  }
})