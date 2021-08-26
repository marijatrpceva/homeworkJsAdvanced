//pristap do file system
const fs = require('fs')

//nekoj path i imeto na toa sto sakame da go kreirame
const filePath = "./test.txt"

//
module.exports = {
    addText: function(text) {
        fs.writeFile(filePath,text,function(err) {
            if (err) {
                console.log(err);
                return;
            } 
            console.log("The file is saved")
        })
    } ,
    appendText: function(text) {
        fs.appendFile(filePath,text,function(err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("The text is added")
        })
    },
    readTxt: function() {
        return fs.readFileSync(filePath, {encoding:`utf-8`})
    }
}