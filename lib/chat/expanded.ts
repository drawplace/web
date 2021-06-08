import type { Writable } from 'svelte/store'

type ChatExpanded = Writable<boolean>

export const CHAT_EXPANDED = 'chat-expanded'

export default ChatExpanded
