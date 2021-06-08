import { parse } from 'cookie'

const getCookie = (
	cookies: string | undefined,
	key: string
): string | undefined => parse(cookies ?? '')[key]

export default getCookie
