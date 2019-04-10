//test.js  
//获取应用实例  
var app = getApp()
var getZhi = function (that,id) {
  wx.request({
    url: 'https://maguangjie.com/wxdemo/getCid',
    data: {
      id: id
    },
    success: function (res) {
      that.setData({
        url: res.data.url
      });
    }
})
}

Page({
  data:{
    url:1
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.url);  
    getZhi(this, options.url);
  }
})
