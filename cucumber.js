// cucumber.js
let common = [
    'src/tests/features/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require src/tests/step-definitions/*.steps.ts',   // Load step definitions
    '--format progress-bar',
    '--publish'// Load custom formatter
    //'--format node_modules/cucumber-pretty'// Load custom formatter
].join(' ');

module.exports = {
    default: common
};