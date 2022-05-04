let div = document.createElement("div");
div.className = "container";
document.body.appendChild(div);
//h1
let tytle = document.createElement("h1")
div.appendChild(tytle);
tytle.textContent = "Virtual Keyboard"
//textarea
let text = document.createElement("textarea");
text.className = "textarea";
text.id = "write";
div.appendChild(text);
//keyboard
let ul = document.createElement("ul");
ul.className = "board";
ul.id = "keyboard";
div.appendChild(ul);
let symbol = document.createElement("li");
symbol.className = "symbol";
ul.appendChild(symbol);
let spanOff = document.createElement("span");
spanOff.className = "off";
spanOff.textContent = "`"
symbol.appendChild(spanOff);
let spanOn = document.createElement("span");
spanOn.className = "on";
spanOn.textContent = "~"
symbol.prepend(spanOn);
const objOff = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
const objOn = ["~","!","@","#","$","%",":","?","*","(",")","_","+"]
const objLetter = [ "q", "w", "e", "r", "t", "z", "u", "i", "o", "p"]
const objOff2 = ["[", "]"];
const objOn2 = ["{", "}"];
const objLetter3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l",]
const objOff3 = [";", "'"];
const objOn3 = [":"];
const objLetter4 = [ "z", "x", "c", "v", "b", "n", "m",];
const objOff4 =[",", ".", "/"];
const objOn4 = ["<",">","?"]
function create () {
    for (var i = 0; i < 12; i++ ) {
        let symbol = document.createElement("li");
symbol.className = "symbol";
ul.appendChild(symbol);
let spanOff = document.createElement("span");
spanOff.className = "off";
spanOff.textContent = objOff[i];
symbol.appendChild(spanOff);
let spanOn = document.createElement("span");
spanOn.className = "on";
spanOn.textContent = objOn[i]
symbol.prepend(spanOn)
        }
        let del = document.createElement("li");
        del.className = "lastitem";
        del.textContent = "Backspace";
        ul.append(del)
}
create()
//row2
let ul2 = document.createElement("ul");
ul2.className = "board";
ul2.id = "keyboard";
div.appendChild(ul2);
let tab = document.createElement("li");
tab.className = "tab";
tab.textContent = "Tab";
ul2.appendChild(tab);


function create2() {
    for (var i = 0; i < 10; i++ ) {
        let letter = document.createElement("li");
        letter.className = "letter";
        ul2.appendChild(letter);
        letter.textContent = objLetter[i]
    }
    for (var i=0;i<2;i++){
        let symbol2 = document.createElement("li");
symbol2.className = "symbol";
ul2.appendChild(symbol2);
let spanOff2 = document.createElement("span");
spanOff2.className = "off";
spanOff2.textContent = objOff2[i];
symbol2.appendChild(spanOff2);
let spanOn2 = document.createElement("span");
spanOn2.className = "on";
spanOn2.textContent = objOn2[i];
symbol2.appendChild(spanOn2);
    }
    let sl = document.createElement("li");
    sl.className = "symbol";
    sl.innerHTML = "&#92";
    ul2.append(sl);
    let dell =  document.createElement("li");
    dell.className = "lastitem";
dell.textContent = "Del";
ul2.append(dell)
}
create2()
//row3
let ul3 = document.createElement("ul");
ul3.className = "board";
ul3.id = "keyboard";
div.appendChild(ul3);
let caps = document.createElement("li");
caps.className = "capslock";
caps.textContent = "Capslock";
ul3.appendChild(caps);

function create3 () {
    for (var i = 0; i < 8; i++ ) {
        let letter = document.createElement("li");
        letter.className = "letter";
        ul3.appendChild(letter);
        letter.textContent = objLetter3[i]
    }
    for (var i=0;i<2;i++){
        let symbol2 = document.createElement("li");
        symbol2.className = "symbol";
        ul3.appendChild(symbol2);
        let spanOff2 = document.createElement("span");
        spanOff2.className = "off";
        spanOff2.textContent = objOff3[i];
        symbol2.appendChild(spanOff2);
        let spanOn2 = document.createElement("span");
        spanOn2.className = "on";
        spanOn2.textContent = objOn3[i];
        symbol2.appendChild(spanOn2);
    }
    let entr =  document.createElement("li");
    entr.className = "enter";
entr.textContent = "Enter";
ul3.append(entr)
}
create3()

//row4
let ul4 = document.createElement("ul");
ul4.className = "board";
ul4.id = "keyboard";
div.appendChild(ul4);
let leftShift = document.createElement("li");
leftShift.className = "left-shift";
leftShift.textContent = "Shift";
ul4.appendChild(leftShift);

function create4 () {
    for (var i = 0; i < 7; i++ ) {
        let letter = document.createElement("li");
        letter.className = "letter";
        ul4.appendChild(letter);
        letter.textContent = objLetter4[i]
    }
    for (var i=0;i<3;i++){
        let symbol2 = document.createElement("li");
        symbol2.className = "symbol";
        ul4.appendChild(symbol2);
        let spanOff2 = document.createElement("span");
        spanOff2.className = "off";
        spanOff2.textContent = objOff4[i];
        symbol2.appendChild(spanOff2);
        let spanOn2 = document.createElement("span");
        spanOn2.className = "on";
        spanOn2.textContent = objOn4[i];
        symbol2.appendChild(spanOn2);
    }
    let up =  document.createElement("li");
    up.className = "up";
up.innerHTML = "&#9650";
ul4.append(up);
let rightShift = document.createElement("li");
rightShift.className = "right-shift";
rightShift.textContent = "Shift";
ul4.appendChild(rightShift);
}
create4()
//row5 
let ul5 = document.createElement("ul");
ul5.className = "board";
ul5.id = "keyboard";
div.appendChild(ul5);
let ctrl = document.createElement("li");
ctrl.className = "ctrl";
ctrl.textContent = "Ctrl";
ul5.appendChild(ctrl);
let win = document.createElement("li");
win.className = "win";
win.textContent = "Win";
ul5.appendChild(win);
let alt = document.createElement("li");
alt.className = "alt";
alt.textContent = "Alt";
ul5.appendChild(alt);
let space = document.createElement("li");
space.className = "space";
space.textContent = " ";
ul5.appendChild(space);
let rightAlt = document.createElement("li");
rightAlt.className = "alt";
rightAlt.textContent = "Alt";
ul5.appendChild(rightAlt);
let left =  document.createElement("li");
left.className = "left";
left.innerHTML = "&#9668";
ul5.append(left);
let down =  document.createElement("li");
down.className = "down";
down.innerHTML = "&#9660";
ul5.append(down);
let right =  document.createElement("li");
right.className = "right";
right.innerHTML = "&#9658";
ul5.append(right);
let rightCtrl = document.createElement("li");
rightCtrl.className = "ctrl";
rightCtrl.textContent = "Ctrl";
ul5.appendChild(rightCtrl);

//ps
let about  = document.createElement("p");
about.className = "about";
about.id = "about-board";
about.textContent = "Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + alt";
div.appendChild(about);