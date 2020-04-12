// import axios from 'axios'

// const axiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_baseAPIURL,
//     withCredentials: true,
// });

// axiosInstance.interceptors.response.use(
//     res => {

//         return res;
//     },
//     error => {
//         return Promise.reject(error.response)
//     }
// );

// export const init = () => {
//     return axiosInstance.post('/init').then(user => {
//         return user.data
//     })
// }