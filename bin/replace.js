let replace = require("replace");

let regex = /((\[\s*)|(\',\s*))('[^']+)\.scss/ig;

replace({
    regex: regex,
    replacement: '$1$4.css',
    paths: ['compiled'],
    include: '*.ts',
    recursive: true,
    silent: true,
});