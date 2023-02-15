module.exports = {
	root: true,
	extends: ['eslint-config-react-app', 'prettier'],
	rules: {},
	settings: {
		next: {
			rootDir: ['apps/*/'],
		},
	},
};
