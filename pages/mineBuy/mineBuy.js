// pages/mineBuy/mineBuy.js
let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList: [
      { id: 1, name: '待付款', src: '/src/pay.png',active:false},
      { id: 2, name: '待发货', src: '/src/send.png', active: false },
      { id: 3, name: '待收货', src: '/src/receive.png', active: false },
      { id: 4, name: '已收货', src: '/src/received.png', active: false },
      { id: 5, name: '售后', src: '/src/sendBack.png', active: false },
      { id: 6, name: '待服务', src: '/src/service.png', active: false},
      { id: 7, name: '已服务', src: '/src/serviced.png', active: false}
    ],
    resInfo:[
      { id: 1, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 999.99, num: 89, saleNum: 2323, discount: '包邮' },
      { id: 2, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 988.99, num: 29, saleNum: 2523, discount: '包邮' }
    ]
  },
  //自定义函数
  //改变Tab
  changeTab(e){
    var that=this;
    that.data.buyList.forEach(function (currentVal, index, arr){
      if (e.currentTarget.dataset.id == currentVal.id){
        app.util.request({
          url: ''
        })
        currentVal.active = true;
      }else{
        currentVal.active = false;
      }
      that.setData({
        buyList: arr
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options.item);
    that.data.buyList.forEach(function(currentVal,index,arr){
      if(currentVal.id==options.item){
        app.util.request({
          url:''
        })
        currentVal.active=true;
      }
      that.setData({
        buyList:arr
      })
    })
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