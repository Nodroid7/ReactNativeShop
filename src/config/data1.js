

export const DASHBOARD_FAVORITE_LINKS = [{
  title: '个人资料',
  image: require('../images/个人中心_图标_个人资料.png'),
  route: 'myaccount/personal_info/index'
}, {
  title: '个人证照',
  image: require('../images/个人中心_图标_个人证照.png'),
  route: 'myaccount/personal_idcards/index'
}, {
  title: '我的公司',
  image: require('../images/个人中心_图标_我的公司.png'),
  route: 'myaccount/my_company/index'
}, {
  title: '我的地址',
  image: require('../images/个人中心_图标_我的地址.png'),
  route: 'myaccount/my_address/index'
}];

export const DASHBOARD_LINKS = [[
  {
    title: '公积金',
    image: require('../images/个人中心_图标_公积金.png'),
    route: 'myaccount/official_money/index'
  },
  {
    title: '社保',
    image: require('../images/个人中心_图标_社保.png'),
    route: 'myaccount/welfare/index'
  },
  {
    title: '个人纳税',
    image: require('../images/个人中心_图标_个人纳税.png'),
    route: 'myaccount/tax/index'
  }
], [
  {
    title: '在线办理记录',
    image: require('../images/个人中心_图标_在线办理.png'),
    route: 'myaccount/online/index'
  },
  {
    title: '窗口办理记录',
    image: require('../images/个人中心_图标_窗口办理记录.png'),
    route: 'myaccount/teller/index'
  },
  {
    title: '预约记录',
    image: require('../images/个人中心_图标_预约记录.png'),
    route: 'myaccount/appointment_hist/index'
  },
  {
    title: '咨询记录',
    image: require('../images/个人中心_图标_咨询记录.png'),
    route: 'myaccount/inquiry/index'
  },
  {
    title: '委托记录',
    image: require('../images/个人中心_图标_委托记录.png'),
    route: 'myaccount/commitment/index'
  }
], [
  {
    title: '我的收件柜',
    image: require('../images/个人中心_图标_我的收件柜.png'),
    route: 'myaccount/mydocs/index'
  },
  {
    title: '代办收藏',
    image: require('../images/个人中心_图标_代办收藏.png'),
    route: 'myaccount/proxy/index'
  },
  {
    title: '安全中心',
    image: require('../images/个人中心_图标_安全中心.png'),
    route: 'myaccount/security/index'
  }

]];

export const DROPDOWNS = {
  nationality: [{
    '汉族': {name: '汉族'},
    '满族': {name: '满族'},
    '藏族': {name: '藏族'},
  }],
  education_level: [{
    '本科': {name: '本科'},
    '研究生': {name: '研究生'},
    '大专': {name: '大专'},
  }],
  province_city: [{
    name: '辽宁省',
    id: '10',
    children: [{
      name: '沈阳市',
      id: '101'
    }, {
      name: '大连市',
      id: '102'
    }, {
      name: '丹东市',
      id: '103'
    }, {
      name: '铁岭市',
      id: '104'
    }, {
      name: '营口市',
      id: '105'
    }]
  },{
    name: '江苏省',
    id: '12',
    children: [{
      name: '无锡市',
      id: '121'
    },{
      name: '苏州市',
      id: '122'
    },{
      name: '常州市',
      id: '123'
    }]
  }, {
    name: '福建省',
    id: '13',
    children: [{
      name: '福州市',
      id: '131'
    }]
  }, {
    name: '云南省',
    id: '14',
    children: [{
      name: '昆明市',
      id: '141'
    }]
  }]
};