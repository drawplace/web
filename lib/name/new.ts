import {
	Config,
	adjectives,
	animals,
	uniqueNamesGenerator
} from 'unique-names-generator'

const config: Config = {
	dictionaries: [adjectives, animals],
	separator: ' '
}

const newName = () => uniqueNamesGenerator(config)

export default newName
