import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/jgyhw-manage/notice/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/jgyhw-manage/notice/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/jgyhw-manage/notice/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/jgyhw-manage/notice/submit',
    method: 'post',
    data: row
  })
}

export const getNotice = (id) => {
  return request({
    url: '/api/jgyhw-manage/notice/detail',
    method: 'get',
    params: {
      id
    }
  })
}

