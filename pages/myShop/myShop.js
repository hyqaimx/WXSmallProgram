// pages/myShop/myShop.js
const { Tab, extend } = require('../../theme/dist/index');
let app=getApp();
Page(extend({}, Tab, {
  data: {
    tab1: {
      list: [{
        id: 'saleing',
        title: '上架中'
      }, {
        id: 'saled',
        title: '已下架'
      }],
      selectedId: 'saleing'
    },
    saleingThings:[
      { id: 1, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 999.99, num: 89, saleNum: 2323, discount: '包邮' },
      { id: 2, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 988.99, num: 29, saleNum: 2523, discount: '包邮' }
    ],
    saledThings: [
      { id: 1, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 999.99, num: 89, saleNum: 2323, discount: '包邮' },
      { id: 2, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 988.99, num: 29, saleNum: 2523, discount: '包邮' },
      { id: 3, name: '红烧牛肉【虚拟商品】【有库存】【有sku】', url: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg', price: 977.99, num: 59, saleNum: 123, discount: '包邮' }
    ]
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    console.log(componentId + selectedId);
    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));
