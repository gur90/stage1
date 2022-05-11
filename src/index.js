
const div = document.createElement('div');
div.className = 'container';
document.body.appendChild(div);
// h1
const tytle = document.createElement('h1');
div.appendChild(tytle);
tytle.textContent = 'Virtual Keyboard';
// textarea
const text = document.createElement('textarea')
text.className = 'textarea';
text.id = 'write';
div.appendChild(text);
// keyboard
const ul = document.createElement('ul');
ul.className = 'board';
ul.id = 'keyboard';
div.appendChild(ul);

const objOff = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const objOn = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+'];
const objLetter = ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p'];
const objOff2 = ['[', ']'];
const objOn2 = ['{', '}'];
const objLetter3 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const objOff3 = [';', "'"];
const objOn3 = [':'];
const objLetter4 = ['y', 'x', 'c', 'v', 'b', 'n', 'm'];
const objOff4 = [',', '.', '/'];
const objOn4 = ['<', '>', '?'];
const obj = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '{', '}',':', '|','<', '>', '?' ]
const obj2 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','[', ']', ';', "'", ',', '.', '/']
const objLet = ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Y', 'X', 'C', 'V', 'B', 'N', 'M']
const objLet2 = ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l','y', 'x', 'c', 'v', 'b', 'n', 'm' ]
const objRuOff = ["ё", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',"х", "ъ","ж","э","б","ю", "."]
const objRu =["й", "ц","у","к", "е","н", "г", "ш","щ","з","ф","ы","в", "а", "п","р","о","л", "д","я","ч","с","м","и","т","ь"]
const objRuCaps =["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Ф","Ы","В","А","П","Р","О","Л","Д","Я","Ч","С","М","И","Т","Ь"]
const objRuOffCaps = ["Ё",'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',"Х", "Ъ","Ж","Э","Б","Ю", "."]
var cursor = 0;
function create() {
  for (let i = 0; i < 13; i++) {
    const symbol = document.createElement('li');
    symbol.className = 'symbol';
    ul.appendChild(symbol);
    const spanOff = document.createElement('span');
    spanOff.className = 'off';
    spanOff.textContent = objOff[i];
    symbol.appendChild(spanOff);
  }
  const del = document.createElement('li');
  del.className = 'backspace';
  del.textContent = 'Backspace';
  ul.append(del);
 
}
create();
// row2
const ul2 = document.createElement('ul');
ul2.className = 'board';
ul2.id = 'keyboard';
div.appendChild(ul2);
const tab = document.createElement('li');
tab.className = 'tab';
tab.textContent = 'Tab';
ul2.appendChild(tab);

function create2() {
  for (var i = 0; i < 10; i++) {
    const letter = document.createElement('li');
    letter.className = 'letter';
    ul2.appendChild(letter);
    letter.textContent = objLetter[i];
   
  }
  for (var i = 0; i < 2; i++) {
    const symbol2 = document.createElement('li');
    symbol2.className = 'symbol';
    ul2.appendChild(symbol2);
    const spanOff2 = document.createElement('span');
    spanOff2.className = 'off';
    spanOff2.textContent = objOff2[i];
    symbol2.appendChild(spanOff2);
  
  
  }
  const sl = document.createElement('li');
  sl.className = 'symbol';
  sl.innerHTML = '&#92';
  ul2.append(sl);
  const dell = document.createElement('li');
  dell.className = 'lastitem';
  dell.textContent = 'Del';
  ul2.append(dell);
 
}
create2();

// row3
const ul3 = document.createElement('ul');
ul3.className = 'board';
ul3.id = 'keyboard';
div.appendChild(ul3);
const caps = document.createElement('li');
caps.className = 'capslock';
caps.textContent = 'Capslock';
ul3.appendChild(caps);

function create3() {
  for (var i = 0; i < 9; i++) {
    const letter = document.createElement('li');
    letter.className = 'letter';
    ul3.appendChild(letter);
    letter.textContent = objLetter3[i];
  }
  for (var i = 0; i < 2; i++) {
    const symbol2 = document.createElement('li');
    symbol2.className = 'symbol';
    ul3.appendChild(symbol2);
    const spanOff2 = document.createElement('span');
    spanOff2.className = 'off';
    spanOff2.textContent = objOff3[i];
    symbol2.appendChild(spanOff2);
   
  }
  const entr = document.createElement('li');
  entr.className = 'enter';
  entr.textContent = 'Enter';
  ul3.append(entr);
}
create3();

// row4
const ul4 = document.createElement('ul');
ul4.className = 'board';
ul4.id = 'keyboard';
div.appendChild(ul4);
const leftShift = document.createElement('li');
leftShift.className = 'left-shift';
leftShift.textContent = 'Shift';
ul4.appendChild(leftShift);

function create4() {
  for (var i = 0; i < 7; i++) {
    const letter = document.createElement('li');
    letter.className = 'letter';
    ul4.appendChild(letter);
    letter.textContent = objLetter4[i];
  }
  for (var i = 0; i < 3; i++) {
    const symbol2 = document.createElement('li');
    symbol2.className = 'symbol';
    ul4.appendChild(symbol2);
    const spanOff2 = document.createElement('span');
    spanOff2.className = 'off';
    spanOff2.textContent = objOff4[i];
    symbol2.appendChild(spanOff2);
   
  }
  const up = document.createElement('li');
  up.className = 'up';
  up.innerHTML = '&#9650';
  ul4.append(up);
  const rightShift = document.createElement('li');
  rightShift.className = 'right-shift';
  rightShift.textContent = 'Shift';
  ul4.appendChild(rightShift);
}
create4();
// row5
const ul5 = document.createElement('ul');
ul5.className = 'board';
ul5.id = 'keyboard';
div.appendChild(ul5);
const ctrl = document.createElement('li');
ctrl.className = 'ctrl';
ctrl.textContent = 'Ctrl';
ul5.appendChild(ctrl);
const win = document.createElement('li');
win.className = 'win';
win.textContent = 'Win';
ul5.appendChild(win);
const alt = document.createElement('li');
alt.className = 'alt';
alt.textContent = 'Alt';
ul5.appendChild(alt);
const space = document.createElement('li');
space.className = 'space';
space.textContent = ' ';
ul5.appendChild(space);
const rightAlt = document.createElement('li');
rightAlt.className = 'alt';
rightAlt.textContent = 'Alt';
ul5.appendChild(rightAlt);
const left = document.createElement('li');
left.className = 'left';
left.innerHTML = '&#9668';
ul5.append(left);
const down = document.createElement('li');
down.className = 'down';
down.innerHTML = '&#9660';
ul5.append(down);
const right = document.createElement('li');
right.className = 'right';
right.innerHTML = '&#9658';
ul5.append(right);
const rightCtrl = document.createElement('li');
rightCtrl.className = 'ctrl';
rightCtrl.textContent = 'Ctrl';
ul5.appendChild(rightCtrl);

// ps
const about = document.createElement('p');
about.className = 'about';
about.id = 'about-board';
about.textContent = 'Клавиатура создана в операционной системе Windows. Для переключения языка: Win';
div.appendChild(about);

// textarea
let shift = false;
let capslock = false;
let winRu = false;
let lng = "en";
document.querySelectorAll('li').forEach((el) => {
  el.addEventListener('click', () => {
    text.focus();
    if (el.classList.contains('space') == true) {
      text.innerHTML += '&nbsp;';
      el.classList.add('active');
      setTimeout(() => {
        el.classList.remove('active');
      }, 500);
    }
    else if (el.classList.contains('alt')==true ||el.classList.contains('ctrl')==true ) {
        text.textContent += '';
        el.classList.add('active');
        setTimeout(() => {
          el.classList.remove('active');
        }, 500);
    }
    else if (el.classList.contains('enter')==true){
        text.textContent += '';
        text.innerHTML += '\n';
        console.log('no');
        el.classList.add('active');
        setTimeout(() => {
          el.classList.remove('active');
        }, 500);
    }
    else if (el.classList.contains('tab')==true) {
        text.innerHTML += '&nbsp;&nbsp;&nbsp;';
        el.classList.add('active');
        setTimeout(() => {
          el.classList.remove('active');
        }, 500);
    }
    else if (el.classList.contains('lastitem') == true) {
      text.textContent = '';
      el.classList.add('active');
      setTimeout(() => {
        el.classList.remove('active');
      }, 500);
    }
    else if (el.classList.contains('backspace')==true) {
        text.textContent = text.textContent.slice(0,-1);
        el.classList.add('active');
        setTimeout(() => {
          el.classList.remove('active');
        }, 500);
    }
    else if (el.classList.contains('capslock')== true) {
        capslock= !capslock;
      
            let spanOff = document.querySelectorAll('.off')
            let letr = document.querySelectorAll('.letter')
            for(i=0; i<20; i++) {
                if(capslock==true){
                    spanOff[i].textContent = obj[i]
                  
                } else {
                    spanOff[i].textContent = obj2[i]
                  
               }
               el.classList.add('active');
               setTimeout(() => {
                 el.classList.remove('active');
               }, 500);
            }
            for(i=0; i<30; i++) {
              
                if(capslock==true){
                    letr[i].textContent = objLet[i]
                } else {
                    letr[i].textContent = objLet2[i]
                }
            }
           
    }
    else if (el.classList.contains('left-shift')==true || el.classList.contains('right-shift')==true) {
        shift = !shift;
        let spanOff = document.querySelectorAll('.off')
        let letr = document.querySelectorAll('.letter')
        for(i=0; i<20; i++) {
            if(shift==true){
               spanOff[i].textContent = obj[i]
             
               
            } else {
               spanOff[i].textContent = obj2[i]
              
           }
           el.classList.add('active');
           setTimeout(() => {
             el.classList.remove('active');
           }, 500);
        }
        for(i=0; i<30; i++) {
            if(shift==true){
                letr[i].textContent =  objLet[i]
            } else {
                letr[i].textContent = objLet2[i]
            }
        }
    }
    else if (el.classList.contains('win')==true ){
        
        winRu=!winRu
            let spanOff = document.querySelectorAll('.off')
            let letr = document.querySelectorAll('.letter')
            for(i=0; i<20; i++){
                if(winRu==true){
                spanOff[i].textContent = objRuOff[i]
               language = "ru"
            } else {
                spanOff[i].textContent = obj2[i]   
                language = "en" 
           }
            }
            for(i=0; i<28; i++) {
                if(winRu==true){
                    letr[i].textContent =  objRu[i];
                    language = "ru"
                } else {
                    letr[i].textContent = objLet2[i]
                    language = "en"
                }
            }
          
    }
    
    else {
        el.click;
      text.textContent += el.textContent;
      cursor++
      el.classList.add('active');
      setTimeout(() => {
        el.classList.remove('active');
      }, 500);
    }
  });
});

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }
  runOnKeys(
    () => 
    console.log("Привет!"),
    "ShiftLeft",
    "ControlLeft",
  );
  const setLocalStorage = () => {
    localStorage.setItem("language", language);
   
  };
  window.addEventListener("beforeunload", setLocalStorage);
  

  