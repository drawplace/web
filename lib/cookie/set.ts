import getCookie from './get'

const setCookie = (key: string, value: string, maxAge?: number) => {
	document.cookie = getCookie(key, value, maxAge)
}

export default setCookie
