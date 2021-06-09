import type { Handle, GetSession } from '@sveltejs/kit'
import { serialize, parse } from 'cookie'

import type Locals from '../lib/locals'
import type Session from '../lib/session'
import ID from '../lib/id/key'
import NAME from '../lib/name/key'
import CHAT_EXPANDED from '../lib/chat/expanded/key'
import DEFAULT_CHAT_EXPANDED from '../lib/chat/expanded/default'
import FOREVER from '../lib/cookie/forever'
import getToggledCookie from '../lib/cookie/toggle/get'
import newId from '../lib/id/new'
import newName from '../lib/name/new'

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	const response = await resolve(request)

	const { locals } = request
	const { headers } = response

	;(headers['set-cookie'] as unknown as string[]) = [
		locals[ID] && serialize(ID, locals[ID] as string, { maxAge: FOREVER }),
		locals[NAME] && serialize(NAME, locals[NAME] as string, { maxAge: FOREVER })
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
