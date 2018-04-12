//let str = "Hi, my name is *( name )*. And I *( emotion )* this * ( thing )*!";
/*let delims = {open: <%, close: %>} */
/*jslint evil: true */
/* jshint multistr: true */

function template(str, delims) {
    let strBlock = [];
    let data = [];
    let copyStr = str;
    let wrapInQuotes = function(text) {
        return "'" + text + "'";
    };
    if (!delims) {
        delims = {open: '*(', close: ')*'};
    }
    if (str && delims) {
        let start = 0;
        let finish = 0;
        //Break down the string into substrings, capturing any variable elements and the blocks of strings to rebuild with afterward.
        if(str.indexOf(delims.open)!==-1 && str.indexOf(delims.close)!==-1) {
            //console.log("Scenario 1 : The string has both opening and closing delimiters present somewhere in its body");
            while(str.indexOf(delims.open)!==-1) {
                strBlock.push(wrapinQuotes(str.slice(0,str.indexOf(delims.open,-1))));
                start = str.indexOf(delims.open) + delims.open.length;
                finish = str.indexOf(delims.close);
                data.push(str.slice(start,finish));
                str = str.slice(str.indexOf(delims.close) + delims.close.length);
            }
            //If there is still something left after the last valuereplacement string then add it.
            if (str) {
                strBlock.push(wrapInQuotes(str));
            }
            //reset the str to the original string
            str = copyStr;
        }
    } else if (str && !delims) {
        //console.log("Scenario 2: there aren't any delimiters to speak of");
        //console.log(str);
        strBlock.push(wrapInQuotes(str));
        delims = {open: '*(', close: ')*'};
    } else if (!str && delims) {
        //console.log("Scenario 3: there is no string but there are delimiters");
        //console.log(str);
        strBlock.push(wrapInQuotes(str));
    } else {
        strBlock.push(wrapInQuotes(str));
    }
    if (strBlock.length == 0) {
        strBlock.push(wrapInQuotes(str));
    }
    templateString = 'while(repeat--) { console.log(' + strBlock.join( '+' ) + ')}';
    //console.log(str +' '+ delims);
    //console.log(strBlock[0] +' '+ delims);
    //console.log(delims.open + delims.close);
    //for(let i=0; i<5;i++){console.log(strBlock[0])
    return new Function( data.join( ',' ), 'repeat', templateString);
}