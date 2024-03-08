function showFullGif(gifPath) {
    const rightPane = document.querySelector('.right-pane');
    rightPane.innerHTML = `<img src="${gifPath}" alt="Full Gif" width="88%">`;
}


var beginnerPage = "../Files/Beginner.html";
var easyPage = "../Files/Easy.html";
var normalPage ="../Files/Normal.html";
var hardPage = "../Files/Hard.html";
var tempPage ="";

function gotoNextPage(currNum) {
    switch(currNum) {
    case 0:
        tempPage = easyPage;
        break;
    case 1:
        tempPage = normalPage;
        break;
    case 2:
        tempPage = hardPage;
        break;
    case 3:
        tempPage = beginnerPage;
        break;
    }
    window.location.href = tempPage;

}

function gotoPrevPage(currNum) {
    switch(currNum) {
    case 0:
        tempPage = hardPage;
        break;
    case 1:
        tempPage = beginnerPage;
        break;
    case 2:
        tempPage = easyPage;
        break;
    case 3:
        tempPage = normalPage;
        break;
    }
    window.location.href = tempPage;

}

function getCurrentPage() {
    var currPage = window.location.pathname;
    if (currPage.includes("Beginner")){
        currNum = 0;
    }
    if (currPage.includes("Easy")){
        currNum = 1;
    }
    if (currPage.includes("Normal")){
        currNum = 2;
    }
    if (currPage.includes("Hard")){
        currNum = 3;
    }
    return currNum;
}



document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    gotoPrevPage(getCurrentPage());
}
if (event.keyCode == 39) {
    gotoNextPage(getCurrentPage());
}
});