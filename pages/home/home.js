const app = getApp();

Page({
  data: {
    name: '张三',
    now: app.globalData.now,
    items: ['事项 A', '事项 B', '事项 C'],
    inputValue: ''
  },

  buttonHandler(event) {
    // console.log(event);
    const that = this; // 页面示例指针
    wx.showModal({
      title: '操作确认',
      content: '你确认要修改吗？',
      success (res) {      
        if (res.confirm) {
          that.setData({ // that 指向页面示例
            name: '李四'
          }, function () {
             wx.showToast({
               title: '操作完成',
               duration: 700
             });
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  },

  inputHandler(event) {
    this.setData({
      inputValue: (event.detail.value || '').trim()
    })
  },

  ensureButton(event) {
    const newItem = this.data.inputValue;
    if (!newItem) {
      return;
    }

    const itemArr = [...this.data.items, newItem];
    wx.setStorageSync('items', itemArr);
    this.setData({ items: itemArr });
  },

  onLoad() {
    const itemArr = wx.getStorageSync('items') || []; 
    this.setData({ items: itemArr });
  }
});