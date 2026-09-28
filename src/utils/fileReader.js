const fs = require('fs');

class FileReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    read() {
        return fs.readFileSync(this.filePath, 'utf8');
    }
}