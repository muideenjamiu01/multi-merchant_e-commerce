import axios from '@nuxtjs/axios'

export default axios.create({
  baseUrl: 'http://localhost:5000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ''
  }
})
