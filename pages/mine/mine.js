// pages/mine/mine.js
let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList:[
      { id: 1, name: '待付款', src:'/src/pay.png'},
      { id: 2, name: '待发货', src: '/src/send.png' },
      { id: 3, name: '待收货', src: '/src/receive.png' },
      { id: 4, name: '已收货', src: '/src/received.png' },
      { id: 5, name: '退款/售后', src: '/src/sendBack.png' },
      { id: 6, name: '待服务', src: '/src/service.png' },
      { id: 7, name: '已服务', src: '/src/serviced.png' }
    ],
    saleList:[
      { id: 1, name: '待付款', src: '/src/pay.png' },
      { id: 2, name: '待发货', src: '/src/send.png' },
      { id: 3, name: '待收货', src: '/src/receive.png' },
      { id: 4, name: '已收货', src: '/src/received.png' },
      { id: 5, name: '退款/售后', src: '/src/sendBack.png' },
      { id: 6, name: '待服务', src: '/src/service.png' },
      { id: 7, name: '已服务', src: '/src/serviced.png' }
    ]
  },
  //自定义函数
  //跳转
  toDetail(){
    wx.navigateTo({
      url: '/pages/shopInfo/shopInfo',
    })
  },
  toMyShop(){
    wx.navigateTo({
      url: '/pages/myShop/myShop'
    })
  },
  toRules(){
    wx.navigateTo({
      url: '/pages/rules/rules',
    })
  },
  toWaterBill(){
    wx.navigateTo({
      url: '/pages/waterBill/waterBill',
    })
  },
  toShopSet(){
    wx.navigateTo({
      url: '/pages/shopSet/shopSet',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  
  }
})