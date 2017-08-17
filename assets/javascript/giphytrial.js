var thingToLookFor = "";
var topics = ["homer","batman","simpsons","duckman","futurama"];
function getStuff() {
//var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
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
  if (thingToLookFor.length > 0) {
     buttonContainer.appendChild(newButton);
  }   
}
function clickHandler(param) {
  var headOfUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var tailOfUrl = "&api_key=dc6zaTOxFJmzC&limit=10";
  var stringToUse = removeSpaces(param);
  var queryURL = headOfUrl + stringToUse + tailOfUrl;
  console.log("in clickHandler");
  console.log("param = " +param);
  console.log(stringToUse);
  console.log(queryURL);
  $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
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
function removeSpaces(stringin){
  var stringToReturn =  stringin.trim();
  stringToReturn = stringToReturn.replace(/\s/g, '+');
  return(stringToReturn);
}