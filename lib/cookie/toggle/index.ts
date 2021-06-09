import setCookie from '../set'

const toggleCookie = (key: string, value: boolean, maxAge: number) => {
	setCookie(key, value ? '1' : '0', maxAge)
}

export default toggleCookie
