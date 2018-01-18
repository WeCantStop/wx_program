// components/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    },

    dataSource: {
      type: Object,
      value: {}
    },

    imgIcon: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: {
      name: 'will',
      age: 20,
      gender: 'male'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickBtn() {
      this.triggerEvent('getData', this.data);
    },

    clickItem() {
      this.triggerEvent('clickItem', this.data.dataSource);
    }
  }
})
