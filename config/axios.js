import axios from '@nuxtjs/axios'

export default axios.create({
  baseUrl: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ''
  }
})
