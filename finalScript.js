$(function(){
  //ready
  alert ("document ready");

  $('#searchform').submit(function(){
    var searchterms=$("#searchterms").val();
    //call search youtube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  //call api using ajax
  //build url for the request
  var url ="http://www.giantbomb.com/api/search/?api_key=[YOUR-KEY]&format=json&query=searchterms&resources=game" ;
  //use jquery json shortcut
  $.getJSON(url,function(jsondata){
    //handle the results
    addResultTitles(jsondata);
  });


}


function addResultTitles(jsondata){
  var htmlstring = "";
  for (var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  $("#results").html(htmlstring);
}
