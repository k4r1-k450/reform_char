"use strict";

import reformChar from "./reformChar.js";

let input = document.getElementById("input");
let reform_button = document.getElementById("button");
let output = document.getElementById("output");

let font = document.getElementsByName("font");
let type = document.getElementsByName("type");

console.log(font, type);

reform_button.addEventListener("click", function(){
    let reformType = {"font" : "", "type" : ""};

    for (const fontRadio of font) {
        if (fontRadio.checked) {
            reformType.font = fontRadio.value;
            break;
        }
    }

    for (const typeRadio of type) {
        if (typeRadio.checked) {
            reformType.type = typeRadio.value;
            break;
        }
    }

    var reformed = reformChar(input.value, reformType.font, reformType.type);
    output.innerHTML = reformed;
});
