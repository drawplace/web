import API_ORIGIN from '.'

const API_SOCKET_ORIGIN = API_ORIGIN.replace(/^http/, 'ws')

export default API_SOCKET_ORIGIN
