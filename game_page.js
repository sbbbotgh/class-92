var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;

    get_word = get_word.toLowerCase();

    console.log("word in lower case is " + get_word);

    charAt1 = get_word.charAt(1);

    console.log(charAt1);

    var length_word = Math.floor(get_word.length/2);

    charAt2 = get_word.charAt(length_word);
    console.log(charAt2);

    length_1 = get_word.length - 1;
    charAt3 = get_word.charAt(length_1);
    console.log(charAt3);

    remove_charAt1 = get_word.replace(charAt1,"_");
    console.log(remove_charAt1);

    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    console.log(remove_charAt2);

    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    answer_word = "<br> Answer: <input type='text' id='inputcheckbox' placeholder='type answer here'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + answer_word + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var q_turn = "player1";
var a_turn = "player2";

function check(){
    get_ans = document.getElementById("inputcheckbox").value;
    get_ans = get_ans.toLowerCase();
    console.log("Answer in lowercase:- " + get_ans);
    if (get_ans==get_word){

        if(a_turn=="player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (q_turn=="player1"){
        q_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else{
        q_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }

    if (a_turn=="player1"){
        a_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else{
        a_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}