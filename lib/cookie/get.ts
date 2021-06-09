import { serialize } from 'cookie'
import { dev } from '$app/env'

const FOREVER = 60 * 60 * 24 * 365

const getCookie = (key: string, value: string, http = false) =>
	serialize(key, value, {
		maxAge: FOREVER,
		sameSite: dev ? 'strict' : 'none',
		secure: !dev,
		httpOnly: http
	})

export default getCookie
