var url = "https://maguangjie.com/wxdemo/getAll_comment";
var page = 1;

var GetList = function (that) {
  wx.request({
    url: url,
    data: {
      number: page
    },
    success: function (res) {
      var l = that.data.list
      for (var i = 0; i < res.data.length; i++) {
        l.push(res.data[i])
      }
      that.setData({
        list: l
      });
      page++;
    }
  });
}
Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    var that = this;
    page = 1;
    GetList(that)
  },
  addMessage:function(){
    wx.navigateTo({ 
      url: "/pages/addMessage/addMessage"
    })
  },
  onPullDownRefresh: function () {
    //下拉  
    console.log("下拉");
    page = 1;
    this.setData({
      list: [],
    });
    var that = this
    GetList(that)
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    //上拉  
    console.log("上拉")
    var that = this
    GetList(that)
  }
}) 