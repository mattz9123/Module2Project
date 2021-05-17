$(document).ready(function() {
    const SIZE = 5;
$('#boneCount').html("<h2>Bones left : 5</h2>");

    for (let col = 0; col < SIZE; col++) {
        for (let row = 0; row < SIZE; row++) {
            let id = (col + "" + row)
            let newSpan = $("<span onclick='getId(this.id)'>");
            newSpan.attr('id', id);
            $("p").append(newSpan);
        }
        $("p").append("<br>")
    }

})
let count = 5;
let correct = 0;
function getId(id){
    let square = document.getElementById(id);
    let randImg = Math.ceil(Math.random() * 2);
    switch (randImg){
        case 1: //if bone is found
            correct+=5; // meter goes up slower
            let correctString = correct + "%";
            count--;
            $('#boneCount').html("<h2>Bones left : " + count+ "</h2>");
            square.setAttribute("class", "dogBone");
            square.innerHTML = "<img src='bone.jpg' class='dogBone'>";
            square.setAttribute("onclick", "");
            $('#progressBar').css("width", correctString);//sets the width based on percent
            $('#endGame').html("<h2>YOU WIN!</h2>")
            break;
        case 2: //if bone is not found
            correct+=15; //meter goes up quicker
            let incorrectString = correct + "%";
            square.setAttribute("class", "dirt");
            square.setAttribute("onclick", "");
            $('#progressBar').css("width", incorrectString);
            $('#endGame').html("<h2>GAME OVER!</h2>")
            break;
    }

    if (count == 0 || correct >= 100){
        $('p').hide();
        $('#endGame').show();
    }
}
