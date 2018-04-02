//app.js
App({
  onLaunch: function () {
    var that = this;
    that.util.getUserInfo(function (response) {
      that.globalData.userInfo = response.wxInfo
    })
  },
  onHide: function () {

  },
  onError: function (msg) {

  },
  util: require('theme/js/util.js'),
  tabBar: {},
  globalData: {
    userInfo: null
  },
  siteInfo: {
    "uniacid": "11",
    "acid": "11",
    "multiid": "0",
    "version": "1",
    "siteroot": "https://sport.mtgjiaxiang.com/app/index.php",
    'method_design': '3'
  }
})