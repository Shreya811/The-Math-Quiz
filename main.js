function addUser()
{
    user1_name=document.getElementById("user1_name_input").value;
   user2_name=document.getElementById("user2_name_input").value;

    localStorage.setItem("user1_name",user1_name);
    localStorage.setItem("user2_name",user2_name);

    window.location.replace("game_page.html");
}

user1_name=localStorage.getItem("user1_name");
user2_name=localStorage.getItem("user2_name");

user1_score=0;
user2_score=0;

document.getElementById("user1_name").innerHTML=user1_name+":";
document.getElementById("user2_name").innerHTML=user2_name+":";

document.getElementById("user1_score").innerHTML=user1_score;
document.getElementById("user2_score").innerHTML=user2_score;

document.getElementById("user_question").innerHTML="Question turn-"+user1_name;
document.getElementById("user_answer").innerHTML="Answer turn-"+user2_name;

