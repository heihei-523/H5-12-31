import Mock from 'mockjs'
const mockData = {
  'venueInfo': { // 场地信息
    'venueId': 301106,
    'venueName': '彩票客流统计',
    'keywords': '测试场馆，请勿预订！',
    'regionId': '4825',
    'regionName': '朱剪炉',
    'updateTime': null,
    'place': '测试地址让你猜',
    'phone': '18000000001',
    'canswip': 1,
    'canpark': 1,
    'mapaddr': null,
    'imgs': 'https://img.dongsport.com/img/38/85/79537643-851b-41fb-844c-55384c7827ef.jpg',
    'signImg': 'https://img.dongsport.com/img/79/97/61726284-f3eb-42f4-bc18-bbe7291d8aad.jpg',
    'parentId': 0,
    'tags': '',
    'ifpass': 1,
    'opentime': '',
    'priceDesc': null,
    'transform': '测试场馆，请勿预订！',
    'content': '<p>测试场馆，请勿预订！</p>',
    'sport': '0L20,0L06,0L11,0L18,0L22',
    'sportName': '羽毛球,篮球,乒乓球,网球,足球',
    'cheapestpro': '',
    'mainweb': '',
    'lat': -84.2319474622,
    'lon': 66.97265625,
    'fieldDesc': '测试场馆，请勿预订！',
    'ispartner': 1,
    'pronum': 20,
    'verify': 1,
    'ishome': 1,
    'tel400': '',
    'click': 0,
    'hot': 0,
    'venueGrade': 1,
    'commentnum': 0,
    'viewId': null,
    'areaId': '10011',
    'status': 0,
    'parentCustId': null,
    'userId': 'ceshi',
    'cityId': '1001107',
    'minPrice': 0.01,
    'orderNum': 0,
    'geohash': null,
    'isOrder': 0,
    'openHour': '10',
    'closeHour': '22',
    'marketPrice': 0.01,
    'memo': '测试场馆，请勿预订！',
    'reminder': '测试场馆，请勿预订!!!!!!!!!!!!!!!!!!!!!',
    'facility': '1,2,3,5,6,7,8',
    'holdPeople': 5000
  },
  'showSite': 1,
  'venueInfoList': [ // 分馆
    {
      'venueId': 301415,
      'venueName': '测试分店',
      'keywords': '1',
      'regionId': '',
      'regionName': '',
      'updateTime': null,
      'place': '北京市',
      'phone': '18000000000',
      'canswip': 1,
      'canpark': 1,
      'mapaddr': null,
      'imgs': 'https://img.dongsport.com/img/44/47/90b26f2b-a93f-4ae6-853d-7745ea435851.png',
      'signImg': 'https://img.dongsport.com/img/92/94/906e536d-f314-46ee-b3f8-38d7c7816119.png',
      'opentime': '',
      'content': '<p>1111分店</p>',
      'sport': '0L20,0L06',
      'sportName': '羽毛球,篮球',
      'fieldDesc': '1',
      'tel400': '',
      'commentnum': 0,
      'minPrice': null,
      'orderNum': 0,
      'isOrder': 1,
      'openHour': '9',
      'closeHour': '22',
      'createTime': '2019-05-10T18:59:10',
      'marketPrice': 0,
      'memo': '',
      'holdPeople': 0
    },
    {
      'venueId': 301416,
      'venueName': '测试分店',
      'keywords': '1',
      'regionId': '',
      'regionName': '',
      'updateTime': null,
      'place': '北京市',
      'phone': '18000000000',
      'canswip': 1,
      'canpark': 1,
      'mapaddr': null,
      'imgs': 'https://img.dongsport.com/img/44/47/90b26f2b-a93f-4ae6-853d-7745ea435851.png',
      'signImg': 'https://img.dongsport.com/img/92/94/906e536d-f314-46ee-b3f8-38d7c7816119.png',
      'opentime': '',
      'content': '<p>1111分店</p>',
      'sport': '0L20,0L06',
      'sportName': '羽毛球,篮球',
      'fieldDesc': '1',
      'tel400': '',
      'commentnum': 0,
      'minPrice': null,
      'orderNum': 0,
      'isOrder': 1,
      'openHour': '9',
      'closeHour': '22',
      'createTime': '2019-05-10T18:59:10',
      'marketPrice': 0,
      'memo': '',
      'holdPeople': 0
    }
  ],
  'type': 2, // 2是多个场馆，9或1代表单个场馆
  'list': [ // 运动类型
    {
      'flag': true,
      'sportType': '0L20',
      'name': '羽毛球',
      'venueSiteId': 304700
    },
    {
      'flag': true,
      'sportType': '0L06',
      'name': '篮球',
      'venueSiteId': 304701
    }
  ]
}
// 3.场馆详情和门票详情
const VenueDetails = {
  'venueId': 301024,
  'venueName': '【帮你订】测试场馆勿定下错单不退',
  'remainder': '',
  'signImg': 'https://img.dongsport.com/img/56/90/e65889be-b736-495a-bc12-2d1ffa70cffe.jpg',
  'open': '9:00',
  'close': '22:00',
  'address': '北京',
  'phone': '4006625170',
  'lat': 39.983322,
  'lon': 116.412371,
  'content': '',
  'facilities': [
    {
      'id': 1,
      'name': 'WIFI',
      'icon': 'wifi'
    },
    {
      'id': 2,
      'name': '停车场',
      'icon': 'tingchechang'
    },
    {
      'id': 3,
      'name': '休息区',
      'icon': 'xiuxiqu'
    },
    {
      'id': 5,
      'name': '热水淋浴',
      'icon': 'reshuilinyu'
    },
    {
      'id': 6,
      'name': '装备租赁',
      'icon': 'zhuangbeizulin'
    },
    {
      'id': 7,
      'name': '食品饮料',
      'icon': 'shipinyinliao'
    },
    {
      'id': 8,
      'name': '更衣室',
      'icon': 'gengyishi'
    }
  ],
  'sites': [ // 运动类型
    {
      'sportTypeName': '篮球',
      'siteId': 304484
    },
    {
      'sportTypeName': '羽毛球',
      'siteId': 304483
    },
    {
      'sportTypeName': '羽毛球',
      'siteId': 304665
    },
    {
      'sportTypeName': '篮球',
      'siteId': 304664
    }
  ],
  'tickets': [
    {
      'ticketId': 123,
      'ticketName': '篮球',
      'ticketPrice': 100,
      'orderNum': 304664
    },
    {
      'ticketId': 124,
      'ticketName': '篮球',
      'ticketPrice': 100,
      'orderNum': 304664
    }
  ]
}
// 场地块数据
const GroundBlock = {
  'num': 20,
  'siteId': 304701,
  'siteName': '篮球',
  'orderType': 0,
  'orderTime': 1,
  'openTime': '09:00',
  'closeTime': '22:00',
  'itemList': [
    {
      'itemId': 100000005,
      'itemName': '1',
      'stockList': [
        {
          'startTime': '09:00',
          'endTime': '10:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '10:00',
          'endTime': '11:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '11:00',
          'endTime': '12:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '12:00',
          'endTime': '13:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '13:00',
          'endTime': '14:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '14:00',
          'endTime': '15:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '15:00',
          'endTime': '16:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '16:00',
          'endTime': '17:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '17:00',
          'endTime': '18:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '18:00',
          'endTime': '19:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '19:00',
          'endTime': '20:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '20:00',
          'endTime': '21:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        },
        {
          'startTime': '21:00',
          'endTime': '22:00',
          'itemType': 0,
          'groupType': 0,
          'marketPrice': 20,
          'salePrice': 20,
          'isLock': 0
        }

      ]
    }
  ]
}

Mock.mock('/news/index', 'get', mockData)
Mock.mock('/news/VenueDetails', 'get', VenueDetails)
Mock.mock('/news/GroundBlock', 'get', GroundBlock)
