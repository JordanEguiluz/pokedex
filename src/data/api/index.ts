import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const configuration: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
}

const client: AxiosInstance = axios.create(configuration)

client.defaults.headers['Content-type'] = 'application/json'

export default client
