import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (cb) => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
        cb(res.data)
    })
    .catch(err => {
        console.error(err)
    })
}

export default fetchColorService;