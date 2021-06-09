import type { Handle, GetSession } from '@sveltejs/kit'
import { serialize, parse } from 'cookie'
import { v4 as uuid } from 'uuid'

import type Locals from '../lib/locals'
import type Session from '../lib/session'
import ID from '../lib/id/key'
import CHAT_EXPANDED from '../lib/chat/expanded/key'
import DEFAULT_CHAT_EXPANDED from '../lib/chat/expanded/default'
import FOREVER from '../lib/cookie/forever'
import getToggledCookie from '../lib/cookie/toggle/get'

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	const response = await resolve(request)

	const { locals } = request
	const { headers } = response

	const { id } = locals
	if (id) headers['set-cookie'] = serialize(ID, id, { maxAge: FOREVER })

	return response
}

export const getSession: GetSession<Locals, Session> = ({
	locals,
	headers
}) => {
	const cookies = parse(headers.cookie ?? '')

	return {
		id: cookies.id ?? (locals.id = uuid()),
		chatExpanded: getToggledCookie(
			cookies[CHAT_EXPANDED],
			DEFAULT_CHAT_EXPANDED
		)
	}
}
