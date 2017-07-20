function loadContent(){
  loadJSON(JSON_FILE, function(response){
    templateContent(response.data, 9);
  });
}