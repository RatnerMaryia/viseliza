let letter_user = "";
let attempt=0;
let pic=["iflower01.png","iflower014.png","iflower013.png","iflower012.png","iflower011.png"]
level=1
let balance = 100;
function entry(letter){
    flag=false;
    elem=document.getElementById(letter);
    for( let i=0; i<word.length;i++){
        if(letter == word[i]){
            elem.style.color="lightgreen";
            word_for_user[i]=word[i];
            flag=true;
            print_answer.innerText = word_for_user.join("  ");
        }
    }
    if (flag==false){
        elem.style.color="red";
        picture_vis.src=pic[attempt];
        container_img.appendChild(picture_vis);
        attempt++;
        if(attempt>5){
            setTimeout(function(){
                container_answer.removeChild(print_answer);
                container_words.style.visibility="hidden";
            },200);
        }
    }
    if(word_for_user.includes("-")==false){
        setTimeout(function(){
           word_for_user=[];
           level++;
           balance = balance+50;
           document.getElementById("clue").src="light1.png";
           document.getElementById("bl").innerHTML = "Balance: "+balance;

           if (attempt>0)
                container_img.removeChild(picture_vis);
           attempt=0;
           new_word();
           print_answer.innerText = word_for_user.join("  ");
           container_lvl.innerText = "Уровень "+level;
           for(let i=0; i<container_words.children.length;i++){
            container_words.children[i].style.color="black";}
           
        },1000);
    }
}
let container_answer=document.getElementById("container_answer");
let container_img=document.getElementById("container_img");
let print_answer = document.createElement("p");

let picture_vis=document.createElement("img");
let container_words=document.getElementById("container_words")
let container_lvl=document.getElementById("level")

let header = document.getElementById("header")

function play(){
    new_word();
    document.getElementById("levelbox").style.display = "flex";     //запуск игры//
    container_words.style.visibility="visible";
    let button_start=document.getElementById("start");
    button_start.remove();
    print_answer.innerText = word_for_user.join("  ");
    container_answer.appendChild(print_answer);
    container_lvl.innerText = "Уровень "+level

}
let words=['hello','doll','apple','music','dance','school','family','cinema','avocado','friend','breakfast','library','computer','kingdom','beautiful','castle','marathon','treasure','noodles','queue','technology','community',''];
let word = "";
word_for_user=[];
function new_word(){
    word=words[level-1];
    for(i=0; i<word.length;i++){
        word_for_user.push("-");
    }
}
function clue(){                                                       //подсказка//  
    if( balance>=30){
         balance=balance-30                                             
        document.getElementById("bl").innerHTML = "Balance: "+balance;
        let insex = word_for_user.indexOf("-");
        entry(word[insex]);
    }
    else document.getElementById("clue").src="light.black.1.png";
}