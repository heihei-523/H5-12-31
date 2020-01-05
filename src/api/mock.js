import request from '../utils/request'

export function one () {
  return request({
    method: 'GET',
    url: '/news/index'
  })
}
// 场馆详情
export function venueBetails () {
  return request({
    method: 'GET',
    url: '/news/VenueDetails'
  })
}
