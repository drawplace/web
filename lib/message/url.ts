import { get } from 'svelte/store'

import session from '../session/store'
import API_SOCKET_ORIGIN from '../origin/socket'

const messagesUrl = () => {
	const { data } = get(session)
	const value = encodeURIComponent(JSON.stringify(data))

	return `${API_SOCKET_ORIGIN}/messages?data=${value}`
}

export default messagesUrl
