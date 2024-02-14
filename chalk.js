import { blue, red, bgGreen, bold, underline, cyan } from 'chalk';

// Basic colors
console.log(blue('This text is blue'));
console.log(red('This text is red'));

// Background colors
console.log(bgGreen('This has a green background'));

// Text styling
console.log(bold('This text is bold'));
console.log(underline('This text is underlined'));

// Combining styles
console.log(bold.blue('This text is both bold and blue'));

// Custom styles
const customStyle = cyan.italic;
console.log(customStyle('This text is cyan and italic'));