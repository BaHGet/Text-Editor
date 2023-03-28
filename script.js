const textarea = document.querySelector('#textSource')
const words = document.querySelector('#words')
const chars = document.querySelector('#char')
let text = textarea.value
let textWithoutSpacing;
let charNum;
let wordsNum;

const onChange =  () =>{
    text = textarea.value
    textWithoutSpacing = text.replace(/\s/g,"");
    charNum = textWithoutSpacing.length;
    if(text ===""){
        wordsNum = 0;
    }else{
        wordsNum = text.split(' ').length;
    }
    words.dataset.content = wordsNum
    chars.dataset.content = charNum
}   

textarea.addEventListener('input',onChange)

const clear = () =>{
    textarea.value = ''
    wordsNum =0
    charNum =0
    words.dataset.content = wordsNum
    chars.dataset.content = charNum
}

document.addEventListener('click', clear)