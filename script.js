// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
// Gets the random quotes of anime from internet with random background color to widget
// You can change the color of background and color of text by editing the bg_type and textcolor
// set bg_type to autofixed or anything for random color generation for background
// set bg_type to gradient for random gradient color generation for background
// set bg_type to hex value of color eg: #f3f3f3 for appling your favorate color to background
// set textcolor to any hex value of color for text
// set fontPrimarysize: 25 for full size widget, 15 for medium size widget & 10 for low size widget
// set fontSecsize: 25 for full size widget, 15 for medium size widget & 10 for low size widget

//console.log("S25");

// Initiate Widget Object
let widget = new ListWidget(); 
let bg_type = "gradient";// autofixed, gradient, color hex value
let textcolor = "#ffffff";// color hex value
let fontPrimarysize = 25;//Full Size = 25, Medium size = 15, Small = 10
let fontSecsize = 10;//Full Size = 10, Medium size = 10, Small = 7
let maxCount = 243;//Full Size = 243, Medium size = 233, Small = 141

//Get Parameters
let themeColor = new Color(textcolor);

// Generate Random Color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if(color=="ffffff"){
        themeColor = new Color("#000000");
    }
    return color;
 }

//get Json weather
async function fetchJSONData(url) {
    const request = new Request(url);
    const res = await request.loadJSON();
    return res;
  }

//Start Programming
let quotes = "";//quoteObj[0].quote;//
let characterName = "";//quoteObj[0].character;
let animeName = "";
let  t = true;
while(t==true){
let url = "https://animechan.vercel.app/api/random";
const qouteData = await fetchJSONData(url);
console.log(qouteData);
const quoteObj = qouteData;
console.log(quoteObj);
quotes = quoteObj.quote;
characterName = quoteObj.character;
animeName = quoteObj.anime;
if(quotes.length<maxCount){
  t = false;
}
}


//Apply Background
if(bg_type=="gradient"){
    console.log("gradient color");
    let gradient = new LinearGradient();
    gradient.locations = [0, 1];
    gradient.colors = [
    new Color(getRandomColor()),
    new Color(getRandomColor())
    ];

    widget.backgroundGradient = gradient;
}else if(bg_type.includes("#")){
    widget.backgroundColor = new Color(bg_type);
}else{
    widget.backgroundColor = new Color(getRandomColor());
}
console.log("len: " + quotes.length);
let x = quotes.length;
let fontsize = x
console.log(fontsize);
/*
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let update = widget.addText("Last Updated " + time);
update.font = Font.regularSystemFont(10);
update.textColor = themeColor;
update.rightAlignText();
*/
//Anime Quote
var quotetxt = widget.addText(quotes);
quotetxt.font = Font.regularSystemFont(fontPrimarysize);
quotetxt.textColor = themeColor;
quotetxt.centerAlignText();

//Anime Character
var character = widget.addText("- " + characterName);
character.font = Font.italicSystemFont(fontSecsize);
character.textColor = themeColor;
character.rightAlignText();
character.textOpacity = 0.7;

//Anime Name
var name = widget.addText("- " + animeName);
name.font = Font.italicSystemFont(fontSecsize);
name.textColor = themeColor;
name.rightAlignText();
name.textOpacity = 0.7;


widget.setPadding(10, 10, 10, 10);

Script.setWidget(widget);
