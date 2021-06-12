import { v4 as uuid } from 'uuid'
import {
	Config,
	adjectives,
	animals,
	uniqueNamesGenerator
} from 'unique-names-generator'
import randomColor from 'randomcolor'

import type Data from '.'

const config: Config = {
	dictionaries: [adjectives, animals],
	separator: ' '
}

const newData = (): Data => ({
	id: uuid(),
	name: uniqueNamesGenerator(config),
	color: randomColor()
})

export default newData
