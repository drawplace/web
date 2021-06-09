import { writable } from 'svelte/store'
import { browser } from '$app/env'

import type Message from '../message'
import API_SOCKET_ORIGIN from './origin/socket'

const messages = writable<Message[] | null>(null, set => {
	if (!browser) return

	let messages: Message[] = []

	const socket = new WebSocket(`${API_SOCKET_ORIGIN}/messages`)

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
