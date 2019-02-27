const axios = require('./axiosInstance')

exports.getCategory = (req, res, next) => {
    return axios
                .get('categories?format=tree')
                .then(res => res.data)
                .catch(err => Promise.reject(err))
}