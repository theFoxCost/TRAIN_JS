// select Buttons and Define Them
const btn1 = document.getElementById('btn1') 
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const body = document.getElementById('body');
// list of alphabet and numbers because HEX is combine of them
hexlist = {
    alphabetshex : ['a', 'b', 'c', 'd','e', 'f'],
    numbershex : ['1', '2','3','4','5','6','7','8','9'],
}
 // function thta make or generate random hex code
function makeHex() {
    const hexList = {
        alphabetsHex: ['A', 'B', 'C', 'D', 'E', 'F'],
        numbersHex: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    };
    function getRandomHexDigit() {
        const combinedHex = [...hexList.alphabetsHex, ...hexList.numbersHex];
        const randomIndex = Math.floor(Math.random() * combinedHex.length);
        return combinedHex[randomIndex];
    }
    const hexColor = `#${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}`;
    body.style.backgroundColor = hexColor
}
//when click a page changed color
btn1.addEventListener('click', () => 
    body.style.backgroundColor= `green`
)
btn2.addEventListener('click', () => 
    body.style.backgroundColor= `red`
)
btn3.addEventListener('click', () => 
    body.style.backgroundColor= `blue`
)
btn4.addEventListener('click', () => 
    body.style.backgroundColor= `black`
)
//when click on button,function of making hex trigerred
btn5.addEventListener('click', () => 
    makeHex()
)
