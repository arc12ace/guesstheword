p1_name=localStorage.getItem("player1");
p2_name=localStorage.getItem("player2");

p1_score=0;
p2_score=0;

document.getElementById("p1_name").innerHTML=p1_name;
document.getElementById("p2_name").innerHTML=p2_name;

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="Question turn= " + p1_name;
document.getElementById("player_answer").innerHTML="Answer turn= "+ p2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word)

    letter1=word.charAt(1);
    console.log(letter1);

    replace1=word.replace(letter1, " _ ")
    console.log(replace1);

    x=Math.floor(word.length/2);
    letter2=word.charAt(x);

    replace2=replace1.replace(letter2, " _ ");
    console.log(replace2);

    y=word.length-1;
    letter3=word.charAt(y);
    console.log(letter3)

    replace3=replace2.replace(letter3, " _ ")
    console.log(replace3);

    qtag=`<h4 id="word_display"> Q. ${replace3} </h4>`
    atag=`<br> Answer: <input type="text" id="input_check_box">`
    check_button=`<br> <br> <button class="btn btn-primary onclick="check()"> Check </button> `
    document.getElementById("output").innerHTML=qtag+atag+check_button;
    document.getElementById("word").value=""

}