const axios = require('./axiosInstance')
// 获取全部的商品
exports.getCategory = () => {
    return axios
                .get('categories?format=tree')
                .then(res => res.data)
                .catch(err => Promise.reject(err))
}
// 获取单类的商品
exports.getBreadcrumb = (id) => {
    return axios
                .get(`categories/${id}?include=parent`)
                .then(res => res.data)
                .catch(err => Promise.reject(err))
}