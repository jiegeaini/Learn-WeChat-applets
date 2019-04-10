var url = "https://maguangjie.com/wxdemo/addComment_m";
const app = getApp();

var GetList = function (name,text) {

  wx.request({
    url: url,
    data: {
      name: name,
      content:text
    },
    success: function (res) {
      console.log(res.data)
      if(res.data == true){
        wx.showToast({
          title: '发表成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }else{
        wx.showToast({
          title: '发表失败',
          icon: 'none',
          duration: 1000,
          mask: true
        })
      }
    }
  }); 
}
Page({
  data: {
    name:"",
    text:"",
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
  },
  name:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  text:function(e){
    this.setData({
      text: e.detail.value
    })
  },
  subMess:function(e){
    var that = this;
      if(this.data.name.length != 0 && this.data.text.length != 0){
        GetList(this.data.name,this.data.text);
        wx.navigateTo({
          url: "/pages/message/message"
        })
      }else{
        wx.showToast({
          title: '请填写完整信息',
          icon: 'none',
          duration: 1000,
          mask: true
        })
      }
  },
 
}) 