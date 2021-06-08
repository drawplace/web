import setCookie from './set'

const removeCookie = (key: string) => {
	setCookie(key, '', 0)
}

export default removeCookie
