const getToggledCookie = (value: string | undefined, defaultValue: boolean) => {
	switch (value) {
		case '0':
			return false
		case '1':
			return true
		default:
			return defaultValue
	}
}

export default getToggledCookie
