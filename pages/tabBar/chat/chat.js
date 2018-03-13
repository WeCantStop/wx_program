
const chatPlace = require('../../../mockData/chat');

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    chatPlace: chatPlace.chatPlace, //这是个对像，对象里边才是数组
    scale: 13,
    latitude: '',
    longitude: '',
    markers: [],
    controls: [{
      id: 1,
      iconPath: '../../../assets/imgs/common/minus.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '../../../assets/imgs/common/plus.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: []
  },
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) { //点击减号的时候触发
      that.setData({
        scale: --this.data.scale
      })
    } else { // 点击加号的时候触发
      that.setData({
        scale: ++this.data.scale
      })
    }
  },
  onLoad: function(){
    var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          _this.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              latitude: res.latitude,
              longitude: res.longitude,
              width: 50,
              height: 50,
              iconPath: '../../../assets/imgs/common/dog.png',
              title: 'dog'
            }],
            circles: [{
              latitude: res.latitude,
              longitude: res.longitude,
              color: '#FF0000DD',
              fillColor: '#7cb5ec88',
              radius: 3000,
              strokeWidth: 1
            }]
          })
        }
      })
  }
})
