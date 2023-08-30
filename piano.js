
function changeLink()
{
    var a = document.getElementById("aaa");
    a.setAttribute("href", "www.facebook.com");
}

function Play(note)
{
    var audio=new Audio("./notes/note"+note+".wav")
    audio.play();
}

