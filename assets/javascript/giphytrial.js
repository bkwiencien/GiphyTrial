var thingToLookFor = "";
var topics = ["homer simpson","Ren and Stimpy","the family guy","duckman","futurama"];
function getStuff() {
var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
}
function searchFor() {
  thingToLookFor = $("#forma").val();
  console.log(thingToLookFor);
  var buttonContainer = document.getElementById("buttonsection");
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.value = thingToLookFor;
  newButton.setAttribute("class","button");
  newButton.setAttribute("onclick","clickHandler("+ "'" + thingToLookFor + "')");
  buttonContainer.append(" ");
  topics.push(thingToLookFor);
  buttonContainer.appendChild(newButton);
}
function clickHandler(param) {
  console.log("in clickHandler");
  console.log("param = " +param);
}
function initialize() {
  for (j=0;j<topics.length;j++) {
     var buttonContainer = document.getElementById("buttonsection");
     var newButton = document.createElement("input");
     newButton.type = "button";
     newButton.value = topics[j];
     newButton.setAttribute("class","button");
     newButton.setAttribute("onclick","clickHandler("+ "'" + topics[j] + "')");
     buttonContainer.append(" ");  
     buttonContainer.appendChild(newButton);
  }
}