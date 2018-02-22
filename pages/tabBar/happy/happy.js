//logs.js
const util = require('../../../utils/util.js')
// 引入happy的相关数据
const placeData = require('../../../mockData/happy')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    // 打log日志
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      placeData: placeData.place
    })
  },
  previewImage(e) {
    console.log(this.data.placeData[0].imgs)
     var current = e.target.dataset.src,
        urls = this.data.placeData[e.target.dataset.index].imgs;
      wx.previewImage({  
            current: current, // 当前显示图片的http链接  
            urls: urls // 需要预览的图片http链接列表  
        })
  }
})
