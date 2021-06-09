type Message = { id: string } & (
	| { type: 'user'; join: boolean; name: string }
	| { type: 'message'; from: string; to: string }
)

export default Message
