import axios from '@nuxtjs/axios'

export default axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    user_key: '4fbc6c112a19f295d08dfc27f36333b6',
  }
})
