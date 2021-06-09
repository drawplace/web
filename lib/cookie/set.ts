import getCookie from './get'

const setCookie = (key: string, value: string) => {
	document.cookie = getCookie(key, value)
}

export default setCookie
