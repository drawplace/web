import { serialize } from 'cookie'
import { dev } from '$app/env'

import FOREVER from './forever'

const getCookie = (key: string, value: string, maxAge: number = FOREVER) =>
	serialize(key, value, {
		maxAge,
		sameSite: dev ? 'strict' : 'none',
		secure: !dev
	})

export default getCookie
