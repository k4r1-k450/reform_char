"use strict";

let input = document.getElementById("input");
let reform_button = document.getElementById("button");
let output = document.getElementById("output");

var char_data;

getCharData().then(function(r){
    char_data = JSON.parse(r);
    console.log(char_data);
})

reform_button.addEventListener("click", async() => {
    var reformed = reformChar(input.value);
    output.innerHTML = reformed;
});

function getCharData(){
    return new Promise(function(r) {
        var request = new XMLHttpRequest();
        request.open("GET", chrome.runtime.getURL("char_data.json"), true);
        request.onreadystatechange = function() {
            if(request.readyState == XMLHttpRequest.DONE){
                r(request.responseText);
            }
        };
        request.send();
    });
}

function reformChar(string){
    var reformed = "";

    for (let i = 0; i < string.length; i++) {
        if(string[i].match(/[A-Z]/)) {
            reformed += String.fromCodePoint(parseInt(char_data["Upper"]["Suns_Selif"]["Bold"], 16) + (string[i].codePointAt() - "A".codePointAt()))
        } else if(string[i].match(/[a-z]/)) {
            reformed += String.fromCodePoint(parseInt(char_data["Lower"]["Suns_Selif"]["Bold"], 16) + (string[i].codePointAt() - "a".codePointAt()))
        } else if(string[i].match(/[0-9]/)) {
            reformed += String.fromCodePoint(parseInt(char_data["Number"]["Suns_Selif"]["Bold"], 16) + (string[i].codePointAt() - "0".codePointAt()))
        } else {
            reformed += string[i];
        }
    }
    
    return reformed;
}

