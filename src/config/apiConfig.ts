import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com/';
const refreshEndpoint = process.env.REACT_APP_API_REFRESH_URL || 'localhost';
const api = axios.create({
  baseURL: baseUrl
});

api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');

    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(refreshEndpoint, { refreshToken });
        const newAccessToken = response.data.accessToken;

        localStorage.setItem('accessToken', newAccessToken);

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.log('Refresh token failed', refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
