const textarea = document.querySelector('#textSource')
const words = document.querySelector('#words')
const chars = document.querySelector('#char')

const onChange =  () =>{
    let text = textarea.value
    let textWithoutSpacing = text.replace(/\s/g,"");
    let charNum = textWithoutSpacing.length;
    let wordsNum;
    if(text ===""){
        wordsNum = 0;
    }else{
        wordsNum = text.split(' ').length;
    }
    words.dataset.content = wordsNum
    chars.dataset.content = charNum
}   

textarea.addEventListener('input',onChange)