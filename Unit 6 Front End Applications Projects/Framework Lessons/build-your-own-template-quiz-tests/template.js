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
            //console.log("Scenario 1 : The string has both opening and closing delimiters present somewhere in its body");
        while(str.indexOf(delims.open)!==-1) {
            strBlock.push(wrapinQuotes(str.slice(0,str.indexOf(delims.open,-1))));
            start = str.indexOf(delims.open) + delims.open.length;
            finish = str.indexOf(delims.close);
            theVariable = str.slice(start,finish);
            data.push( theVariable );
            strBlock.push( theVariable );
            str = str.slice(str.indexOf(delims.close) + delims.close.length);
        }
        //If there is still something left after the last valuereplacement string then add it.
        if (str) {
            strBlock.push(wrapInQuotes(str));
        }
        //reset the str to the original string
        str = copyStr;
    }
    templateString = 'while(repeat--) { console.log(' + strBlock.join( '+' ) + ')}';
    return new Function( data.join( ',' ), 'repeat', templateString);
}