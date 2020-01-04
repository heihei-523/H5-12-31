import request from '../utils/request'

export function one () {
  return request({
    method: 'GET',
    url: '/news/index'
  })
}
