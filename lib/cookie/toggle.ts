import setCookie from './set'
import removeCookie from './remove'

const toggleCookie = (key: string, value: boolean, maxAge: number) => {
	value ? setCookie(key, '1', maxAge) : removeCookie(key)
}

export default toggleCookie
