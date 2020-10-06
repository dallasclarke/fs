const fs = require('fs');
const path = require('path');
// Create directory called fs-try
fs.mkdir('fs-try', (err) => {
    if(err) return console.log(err);
    console.log('Directory fs-try was created!');
})

// - Using fs module:
// - create a directory called content using fs method and it should log 'content folder created'
// - create a file using fs method called randomText.txt that lives outside the content directory
// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory
fs.mkdir('content', (err) => {
    if(err) return console.log(err);
    console.log('Content folder created!');
});
fs.writeFile('randomText.txt', 'Random text', (err) => {
    if(err) return console.log(err);
    console.log('randomText.txt was created')
});

fs.readFile('randomText.txt', 'utf-8', (err, info) => {
    if(err) return console.log('Somethings wrong!');

    fs.writeFile('verbage.txt', info, (err) => {
        if(err) return console.log(err);
        console.log('verbage.txt created');

    })
});

setTimeout(() => {
    fs.rmdir('./content', (err) => {
        return console.log(err);
        console.log('Content directory deleted');
    })
}, 7000);
    

