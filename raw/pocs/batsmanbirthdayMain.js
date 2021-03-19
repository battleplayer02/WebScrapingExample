//https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
let request = require("request");
let cheerio = require("cheerio");
const getDate = require("./getDate");
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let teamname = selectorTool(".row.no-gutters.align-items-center .col .header-title.label")

    let batsmanstable = selectorTool(".table.batsman");

    for (let i = 0; i < batsmanstable.length; i++) {
        teamname.html()
        let batsmanArr = selectorTool(batsmanstable[i]).find("tbody tr .batsman-cell");
        let batsmanArrAncor = selectorTool(batsmanstable[i]).find("tbody tr .batsman-cell .small");
        for (let j = 0; j < batsmanArr.length; j++) {
            let name = selectorTool(batsmanArr[j]).text().trim().split(" ")
            name = name[0] + " " + name[1]
            let teamnameI = selectorTool(teamname[i]).text().split("INNINGS")[0].trim()
            let link = selectorTool(batsmanArrAncor[j]).attr('href')
            getDate(link,name,teamnameI);
        }

    }
}
console.log("after");