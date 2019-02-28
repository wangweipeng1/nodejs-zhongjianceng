const axios = require('./axiosInstance')

exports.getLikeProducts = () => {
  return axios.get('products?type=like&limit=6')
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

exports.getProductByCategory = (id, page, per_page, sort) => {
  return axios.get(`categories/${id}/products?page=${page}&per_page=${per_page}&sort=${sort}`)
  .then(res => ({list: res.data, currPage: +res.headers['x-current-page'], totalPage: +res.headers['x-total-pages']}))
  .catch(err => Promise.reject(err))
}