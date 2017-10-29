var bodyRect = document.body.getBoundingClientRect();
Info = document.getElementById('info');
buttonRect = Info.getBoundingClientRect();
buttonx = (buttonRect.left - bodyRect.left)+3;
buttony = (buttonRect.bottom - bodyRect.top)-1;
function I () {
  DM = document.getElementById('IN');
  DM.style = "display: inline; position: absolute;";
  DM.style.left = buttonx+'px';
  DM.style.top = buttony+'px';
  Info = document.getElementById('info');
  Info.style = "color: #3333ff;";
}
function IC () {
  DM = document.getElementById('IN');
  DM.style = "display: none;";
  Info = document.getElementById('info');
  Info.style = "color: darkblue;";
}