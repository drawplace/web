import setCookie from '../set'

const toggleCookie = (key: string, value: boolean) => {
	setCookie(key, value ? '1' : '0')
}

export default toggleCookie
