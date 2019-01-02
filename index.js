var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;
var ACCESS_TOKEN = process.env.ACCESS_TOKEN;
var dbx = new Dropbox({ accessToken: ACCESS_TOKEN, fetch: fetch });
var fs = require('fs');

var files_to_sync = require('./files.json');
console.log(files_to_sync);

files_to_sync.forEach(async element => {

    try {
        console.log('delete file: ' + element.dropbox_path)
        await dbx.filesDelete({ path: element.dropbox_path });
    } catch (error) {
        console.log(error);
    };

    try {
        console.log('add file: ' + element.local_path)
        var file = fs.readFileSync(element.local_path)
        await dbx.filesUpload({ path: element.dropbox_path, contents: file })
    } catch (error) {
        console.log(error);
    };
});


