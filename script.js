function openTheForm(n) {
    document.getElementById(n).style.display = "block";
    showClose();
}

var counter = 0;

function closeTheForm() {
    for (let i = 1; i <= 4; i++)
        document.getElementById(i).style.display = "none";
    hideClose();
}

function showClose() {
    document.getElementById("5").style.display = "block";
}
function hideClose() {
    document.getElementById("5").style.display = "none";
}


function audio_click() {
    var mouseclick = new Audio();
    mouseclick.src = "src/audio/click.wav";
    mouseclick.play();
}

function quest() {
    var name = prompt('Enter your name', 'Roman');
    var elem = document.getElementById("6");
    do {
        var rating = prompt(name + ', rate this website 0 - 5', 5);
    } while (rating > 5 || rating < 0);
    if (rating >= 4)
        alert('Thanks for rating ' + rating + ' ' + name + '!');
    else if (rating >= 2)
        alert('Ok...thanks, you rated ' + rating + ', ' + name);
    else
        alert(rating + '? You are wrong, ' + name);
    elem.innerHTML = elem.innerHTML.replace("Rating", rating);
}

function resize_text() {
    var elem = document.getElementById("10");
    elem.innerHTML = elem.innerHTML.replace("drain gang", "DRAIN GANG");
}

function recolor_text()
{
    var elem = document.getElementById("10");
    if (counter == 255)
        counter = 0;
    elem.style.color = "rgb(" + counter++ + ',' + counter++ + ',' + counter++ + ')';
    console.log(elem.style.color)

}