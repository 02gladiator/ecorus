import { generate } from 'openapi-typescript-codegen';
import { exec } from 'child_process';

generate({
	input: `http://ecoapp-itis.ru/docs-json`,
	output: '../types',
	indent: 'tab',
	exportServices: false,
	exportCore: false,
}).then(() =>
	exec(`npm run prettier --write "src/types/generated/**/*.ts"`)
);