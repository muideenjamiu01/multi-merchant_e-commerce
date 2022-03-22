export default function ({ $axios }) {
    $axios.onRequest(config => {
        config.params = {
            ...config.params,
            user_key: '4fbc6c112a19f295d08dfc27f36333b6',
        }
        if (config.url === '/api/users/v1/customers/one/')
            config.params.userType = window.localStorage.getItem("ys.user_type")
    })
}