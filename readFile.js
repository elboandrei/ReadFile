const fs = require('fs');

fs.readFile('lorem-ipsum.txt', 'utf8', (err, data) => {
    if (err) throw  (err);
    console.log(data);
});