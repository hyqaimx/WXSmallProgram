// pages/car/car.js
let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasThing:true,
    carThings:[
      { id: 1, name: '养生八月-纯手工制作', src: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', content: '纯手工制作牛扎饼干，无添加（口味自行选择内有蔓越莓干，蓝莓，草莓，芒果，抹茶）,阿斯蒂芬阿斯蒂芬阿斯蒂芬回公司共苦V字领空间阿斯顿啊圣诞节快疯了吉安爱，a阿斯顿爱的阿斯蒂芬爱的大师傅阿斯蒂芬阿斯顿发小床呢啊收到了开房间', price: 893,checked:false},
      { id: 2, name: '养生七月-纯手工制作', src: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', content: '纯手工制作牛扎饼干，无添加（口味自行选择内有蔓越莓干，蓝莓，草莓，芒果，抹茶）,阿斯蒂芬阿斯蒂芬阿斯蒂芬回公司共苦V字领空间阿斯顿啊圣诞节快疯了吉安爱，a阿斯顿爱的阿斯蒂芬爱的大师傅阿斯蒂芬阿斯顿发小床呢啊收到了开房间', price: 333, checked: false},
      { id: 3, name: '养生六月-纯手工制作', src: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', content: '纯手工制作牛扎饼干，无添加（口味自行选择内有蔓越莓干，蓝莓，草莓，芒果，抹茶）,阿斯蒂芬阿斯蒂芬阿斯蒂芬回公司共苦V字领空间阿斯顿啊圣诞节快疯了吉安爱，a阿斯顿爱的阿斯蒂芬爱的大师傅阿斯蒂芬阿斯顿发小床呢啊收到了开房间', price: 453,checked:false}
    ],
    carHandleInfo:[

    ],
    totalPrice:0
  },

  //自定义函数
  //全选
  checkAll(){
    var that=this;
    let total=0;
    that.data.carThings.forEach(function(currentValue, index, arr) { 
      currentValue.checked = true; 
      total += currentValue.price;
      that.setData({
        carThings:arr,
        totalPrice:total,
        num:index+1
        })
      })
  },
  //全不选
  checkNone(){
    var that = this;
    let total = 0;
    that.data.carThings.forEach(function (currentValue, index, arr) {
      currentValue.checked = false;
      total = 0;
      that.setData({
        carThings: arr,
        totalPrice: total,
        num: 0
      })
    })
  },
  //反选
  checkInvert(){
    var that = this;
    let total = 0;
    let checkNum=0;
    that.data.carThings.forEach(function (currentValue, index, arr) {
      currentValue.checked = !currentValue.checked;
      if(currentValue.checked==true){
        total+=currentValue.price;
        checkNum++;
      }
      that.setData({
        carThings: arr,
        totalPrice: total,
        num: checkNum
      })
    })
  },
  //单选
  checkOne(e){
    var that=this;
    let total = 0;
    let checkNum = 0;
    let id = e.currentTarget.dataset.id;
    that.data.carThings.forEach(function (currentValue, index, arr) {
      if(currentValue.id==id){
        currentValue.checked = !currentValue.checked;
      }
      if (currentValue.checked == true) {
        total += currentValue.price;
        checkNum++;
      }
      that.setData({
        carThings: arr,
        totalPrice: total,
        num: checkNum
      })
    })
  },
  //删除购物车
  deleteCar(){
    var that = this;
    let total = 0;
    let checkNum = 0;
    let notCheck=[];
    let checked=[];
    that.data.carThings.forEach(function(currentValue,index,arr){
      if(currentValue.checked!=true){
        notCheck.push(currentValue);
      }else{
        checked.push(currentValue.id);
      }
    })
    app.util.request({
      'url': 'entry/wxapp/list',
      success(res) {
        if (notCheck.length == 0) {
          that.setData({
            hasThing: false,
          })
        }
        that.setData({
          carThings: notCheck,
          totalPrice: total,
          num: 0
        })
      }
    })
    // let ids=[]
    // that.data.carThings.forEach(function (currentValue, index, arr) {
    //   if (currentValue.checked == true) {
    //     ids.push(currentValue.id)
    //   }
    //   that.setData({
    //     carThings: arr,
    //     totalPrice: total,
    //     num: checkNum
    //   })
    // })
    // console.log(ids);
    // app.util.request({

    // })
  },
  //结算
  settle(){
    var that=this;
    let ids=[];
    that.data.carThings.forEach(function (currentValue, index, arr){
      if (currentValue.checked == true) {
        ids.push(currentValue.id);
      }
    })
    app.util.request({
      'url': 'entry/wxapp/list',
      success(res) {
        that.setData({
          carThings: notCheck,
          totalPrice: total,
          num: 0
        })
      }
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