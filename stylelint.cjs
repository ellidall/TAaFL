const stylelint = require('stylelint');

(async () => {
	const result = await stylelint.lint({
		fix: true,
		configFile: '.stylelintrc',
		files: ['src/**/*.css'],
		formatter: 'string',
	})
	if (result.errored) {
		console.log(result.output)
		return Promise.reject()
	}
})().catch((error) => {
	process.exitCode = 1
	console.error(error)
})