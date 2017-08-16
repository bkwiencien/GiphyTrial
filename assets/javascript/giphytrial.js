var thingToLookFor = "";
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
  console.log("in searchFor");
  //thingToLookFor = document.getElementById("forma").value;
  thingToLookFor = $("#forma").val();
  console.log(thingToLookFor);
  var buttonContainer = document.getElementById("buttonsection");
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.value = thingToLookFor;
  newButton.class = "button";
 // newButton.click =  "clickHandler(" + thingToLookFor +"'')";                                 
 //newButton.onclick = function(){alert('clicked');};  // This worked
 newButton.addEventListener("click",clickHandler());


  buttonContainer.appendChild(newButton);
}
function clickHandler(param) {
  console.log("in clickHandler");
  console.log("param = " +param);
}