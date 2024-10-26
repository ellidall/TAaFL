const { ESLint } = require('eslint');

// https://eslint.org/docs/latest/integrate/nodejs-api
(async () => {
    const eslint = new ESLint({ fix: true })

    const results = await eslint.lintFiles([
        'src/**/*.ts',
        'src/**/*.tsx',
    ]);

    await ESLint.outputFixes(results)

    const formatter = await eslint.loadFormatter('stylish')
    const resultText = formatter.format(results)

    console.log(resultText)
})().catch((error) => {
    process.exitCode = 1
    console.error(error)
})