import { writable } from 'svelte/store'
import { browser } from '$app/env'

import type Message from '.'
import messagesUrl from './url'

const messages = writable<Message[] | null>(null, set => {
	if (!browser) return

	let messages: Message[] = []

	const socket = new WebSocket(messagesUrl())

	socket.addEventListener('open', () => {
		set(messages)
	})

	socket.addEventListener('message', ({ data }) => {
		data = JSON.parse(data)

		messages = Array.isArray(data)
			? [...data, ...messages]
			: [...messages, data]

		set(messages)
	})

	return () => socket.close()
})

export default messages
