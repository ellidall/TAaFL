import path from 'node:path'
import {Automaton} from './Automaton'

const main = () => {
	if (process.argv.length !== 5) {
		console.error('Usage: lab1/main.ts (moore-to-mealy|mealy-to-moore|minimize-mealy|minimize-moore) inputFileName outputFileName');
		process.exit(1);
	}

	const command = process.argv[2];
	let inputFilePath = process.argv[3];
	let outputFilePath = process.argv[4];
	const automaton = new Automaton();
	inputFilePath = path.join(__dirname, inputFilePath)
	outputFilePath = path.join(__dirname, outputFilePath)

	switch (command) {
		case 'moore-to-mealy':
			automaton.read(inputFilePath, 'Moore');
			automaton.write(outputFilePath, 'Mealy');
			automaton.saveGraph(outputFilePath)
			break;
		case 'mealy-to-moore':
			automaton.read(inputFilePath, 'Mealy');
			automaton.write(outputFilePath, 'Moore');
			automaton.saveGraph(outputFilePath)
			break;
		case 'minimize-mealy':
			automaton.read(inputFilePath, 'Mealy');
			automaton.minimize();
			automaton.write(outputFilePath, 'Mealy');
			automaton.saveGraph(outputFilePath)
			break;
		case 'minimize-moore':
			automaton.read(inputFilePath, 'Moore');
			automaton.minimize();
			automaton.write(outputFilePath, 'Moore');
			automaton.saveGraph(outputFilePath);
			break;
		default:
			console.error('Invalid command');
			process.exit(1);
	}
}

if (require.main === module) {
	main()
}