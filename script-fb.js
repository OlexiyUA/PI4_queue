const types = {
  "cotton":155,
  "synth":85,
  "wool":55,
  "silk":55,
  "express":15
};
const queuenode = document.getElementById("queue");
var lasttime = new Date();

function addToQueue()
{
  var type = document.inputform.formtype.value;
  if (type == "")
  {
    alert("Виберіть режим!");
    return;
  }
  var room = document.inputform.room.value;
  if (room == "")
  {
    alert("Введіть номер кімнати!");
    return;
  }

  var tr = document.createElement("tr");
  queuenode.appendChild(tr);

  var currtime = new Date();
  var td = document.createElement("td");
  var newtime = (currtime > lasttime) ? currtime : lasttime;
  var text = document.createTextNode(newtime.toLocaleTimeString("uk"));
  tr.appendChild(td);
  td.appendChild(text);
  td = document.createElement("td");
  lasttime = new Date(newtime.getTime() + types[type] * 1000);
  text = document.createTextNode(lasttime.toLocaleTimeString("uk"));
  tr.appendChild(td);
  td.appendChild(text);
  td = document.createElement("td");
  text = document.createTextNode(room);
  tr.appendChild(td);
  td.appendChild(text);

  setTimeout(() => {
      queuenode.removeChild(queuenode.firstChild.nextSibling.nextSibling);
    }, lasttime - currtime);
}

$("#clrwhite").click(() => {
  $("body").removeClass();
  $("a").removeClass();
  $("#pgdiv").removeClass();
  $("body").addClass("bg-light");
  $("a").addClass("text-secondary");
  $("#pgdiv").addClass("container text-dark");
});

$("#clrsec").click(() => {
  $("body").removeClass();
  $("a").removeClass();
  $("#pgdiv").removeClass();
  $("#pgdiv").addClass("container text-dark");
  $("a").addClass("text-light");
  $("body").addClass("bg-secondary");
});

$("#clrdark").click(() => {
  $("body").removeClass();
  $("a").removeClass();
  $("#pgdiv").removeClass();
  $("#pgdiv").addClass("container text-light");
  $("a").addClass("text-secondary");
  $("body").addClass("bg-dark");
});

$("#dirleft").click(() => {
  $(".dbgmid").css("margin", "0 0");
});

$("#dircenter").click(() => {
  $(".dbgmid").css("margin", "0 auto");
});

$("img").click(() => {
    FB.getLoginStatus(function(response) {
        if (response["status"] != "connected")
            FB.login();
    });

    window.open("http://www.facebook.com/dialog/send?app_id=435022673987553&link=https://i.gifer.com/origin/b2/b2f4b18aa4a9a3b65d1c78edeced27f9_w200.gif");

});
