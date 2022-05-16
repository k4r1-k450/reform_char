"use strict";

let input = document.getElementById("input");
let reform_button = document.getElementById("button");
let output = document.getElementById("output");

import {char_data} from "./char_data.js";
import reformChar from "./reformChar.js";

reform_button.addEventListener("click", function(){
    var reformed = reformChar(char_data, input.value);
    output.innerHTML = reformed;
});
