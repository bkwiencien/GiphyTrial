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
  thingToLookFor = document.getElementById("forma").value;
  console.log(thingToLookFor);
}