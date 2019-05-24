Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "基本信息",
      "工作经验",
      "项目成果",
      "猿力值"
    ],
    scrollIndex: 0,
    nowIndex: 0
  },
  onNavBarTap: function (event) {
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    this.setData({
      navbarActiveIndex: navbarTapIndex      
    })
  },
  childSwiper(e) {
    console.log(e.detail.current)
    this.setData({
      nowIndex: e.detail.current
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