let request = require("request");
let cheerio = require("cheerio");
module.exports = async function (url,name,teamnameI) {
    let birthdate;
    request(url, cb);
    function cb(error, response, html) {
        if (error) {
            console.log(error)
        } else {
            // console.log(html);
            extractHtml(html);
        }
    }
    function extractHtml(html) {
        let selectorTool = cheerio.load(html);
        birthdate = selectorTool(selectorTool(".ciPlayerinformationtxt span")[1]).text()
        console.log("Name :", name, "of", teamnameI,"Birth Date:",birthdate);
        console.log("````````````````````````````````````````````````````````````````````````````");
    }
    return birthdate;
}