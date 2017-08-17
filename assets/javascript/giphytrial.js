
var thingToLookFor = "";
var topics = ["homer","batman","simpsons","duckman","futurama"];
function searchFor() {
  thingToLookFor = $("#forma").val();
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
  console.log(stringToUse);
  console.log(queryURL);
  $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      // console.log(response);
      for (i=0;i<response.data.length;i++) {
       // console.log(response.data[i].url);
        var pic = document.createElement("img");
        console.log(response.data[i].images.original.url);
        var picUrl = response.data[i].images.original.url;
        console.log(picUrl);
        pic.src=picUrl;
       // var ele = document.getElementById("#displaysection");
        $("#displaysection").append(pic);
        //console.log("i have displayed it");          
      }
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