import type { Handle, GetSession } from '@sveltejs/kit'
import { parse } from 'cookie'

import type Locals from '../lib/locals'
import type Session from '../lib/session'
import DATA from '../lib/data/key'
import CHAT_EXPANDED from '../lib/chat/expanded/key'
import DEFAULT_CHAT_EXPANDED from '../lib/chat/expanded/default'
import getCookie from '../lib/cookie/get'
import getToggledCookie from '../lib/cookie/toggle/get'
import newData from '../lib/data/new'

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	const response = await resolve(request)

	const { locals } = request
	const { headers } = response

	if (locals[DATA])
		headers['set-cookie'] = getCookie(DATA, JSON.stringify(locals[DATA]))

	return response
}

export const getSession: GetSession<Locals, Session> = ({
	locals,
	headers
}) => {
	const cookies = parse(headers.cookie ?? '')
	const data = cookies[DATA]

	return {
		data: data ? JSON.parse(data) : (locals[DATA] = newData()),
		chatExpanded: getToggledCookie(
			cookies[CHAT_EXPANDED],
			DEFAULT_CHAT_EXPANDED
		)
	}
}
