const axios = require('./axiosInstance')

// 获取轮播图数据
exports.getSliders = () => {
    return axios
        .get('settings/home_slides')
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}