const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'cypress', 'reports', 'mocha', '.jsons', 'report.json');
const destinationPath = path.join(__dirname, 'cypress', 'reports', 'mocha', 'report.json');

fs.rename(sourcePath, destinationPath, (err) => {
    if (err) {
        console.error('Error moving report.json:', err);
    } else {
        console.log('report.json moved successfully to mocha folder.');
    }
});
