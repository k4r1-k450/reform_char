export default function reformChar(char_data, string){

    var reformed = "";

    for (let i = 0; i < string.length; i++) {
        try {
            if(string[i].match(/[A-Z]/)) {
                reformed += String.fromCodePoint(parseInt(char_data["Upper"]["Suns_Selif"]["Bold"], 16) + (string[i].codePointAt() - "A".codePointAt()))
            } else if(string[i].match(/[a-z]/)) {
                reformed += String.fromCodePoint(parseInt(char_data["Lower"]["Suns_Selif"]["Bold"], 16) + (string[i].codePointAt() - "a".codePointAt()))
            } else if(string[i].match(/[0-9]/)) {
                reformed += String.fromCodePoint(parseInt(char_data["Number"]["Suns_Selif"]["Bold"], 16) + (string[i].codePointAt() - "0".codePointAt()))
            } else {
                reformed += string[i];
            }
        } catch (e) {
            reformed += string[i];
        }
    }
    
    return reformed;
}
