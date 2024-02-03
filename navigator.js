var basehr="https://people.tamu.edu/~joshmperry/"

function toHome(){
    location.href=basehr;
}
function toAbout(){
    location.href=basehr+"AboutMe";
}
function toProjects(){
    location.href=basehr+"Projects";
}
function toExperience(){
    location.href=basehr+"Experience";
}
function toAI(){
    location.href=basehr+"AIInsight";
}

function changeStyle(){
    var style=localStorage.getItem("style");
    if(style=="vers2"){
        localStorage.setItem("style","vers1");
        document.getElementById("style").setAttribute("href","classic.css");
    }else{
        localStorage.setItem("style","vers2");
        document.getElementById("style").setAttribute("href","tsstyle.css");
    }
}


window.onload=function(){
    var style=localStorage.getItem("style");
    if(style=="vers2"){
        document.getElementById("style").setAttribute("href","tsstyle.css");
    }
}