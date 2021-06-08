import { serialize } from 'cookie'

const setCookie = (key: string, value: string, maxAge: number) => {
	document.cookie = serialize(key, value, { maxAge })
}

export default setCookie
