function toggle() {
    let menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('block');
}
body = document.body;
let hTotal = body.scrollHeight;
// console.log(parseInt(h));
body.addEventListener('scroll',function(){
    console.log('scrooll');
});
window.onscroll = function(){ FunctionScroll() }

function FunctionScroll(){
    let hauteurScroll = window.pageYOffset;
    let up = document.getElementsByClassName('up_scroll')[0];
    if(hauteurScroll < 500){
    up.classList.add('hide');
    }else{
    up.classList.remove('hide');
    }
}