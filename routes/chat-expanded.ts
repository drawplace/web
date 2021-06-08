import type { RequestHandler } from '@sveltejs/kit'

import { CHAT_EXPANDED } from '../lib/chat/expanded'
import getCookie from '../lib/cookie/get'

export const get: RequestHandler = ({ headers }) => ({
	body: getCookie(headers.cookie, CHAT_EXPANDED) === '1'
})
