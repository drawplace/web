import type { Handle, GetSession } from '@sveltejs/kit'
import { parse } from 'cookie'

import type Locals from '../lib/locals'
import type Session from '../lib/session'
import ID from '../lib/id/key'
import NAME from '../lib/name/key'
import CHAT_EXPANDED from '../lib/chat/expanded/key'
import DEFAULT_CHAT_EXPANDED from '../lib/chat/expanded/default'
import getCookie from '../lib/cookie/get'
import getToggledCookie from '../lib/cookie/toggle/get'
import newId from '../lib/id/new'
import newName from '../lib/name/new'

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	const response = await resolve(request)

	const { locals } = request
	const { headers } = response

	;(headers['set-cookie'] as unknown as string[]) = [
		locals[ID] && getCookie(ID, locals[ID] as string),
		locals[NAME] && getCookie(NAME, locals[NAME] as string)
	].filter(Boolean) as string[]

	return response
}

export const getSession: GetSession<Locals, Session> = ({
	locals,
	headers
}) => {
	const cookies = parse(headers.cookie ?? '')

	return {
		id: cookies[ID] ?? (locals[ID] = newId()),
		name: cookies[NAME] ?? (locals[NAME] = newName()),
		chatExpanded: getToggledCookie(
			cookies[CHAT_EXPANDED],
			DEFAULT_CHAT_EXPANDED
		)
	}
}
