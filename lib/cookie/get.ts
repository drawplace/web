import { serialize } from 'cookie'
import { dev } from '$app/env'

const FOREVER = 60 * 60 * 24 * 365

const getCookie = (key: string, value: string) =>
	serialize(key, value, { maxAge: FOREVER, secure: !dev })

export default getCookie
