Page({
  data: { name: '' },
  buttonHandler(event) {
    if (!event.detail.userInfo) return;
    console.log(event.detail.userInfo)
    this.setData({
      name: event.detail.userInfo.nickName
    });
  }
});