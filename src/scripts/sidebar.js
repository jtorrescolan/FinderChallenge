
function loadSidebar(){
  loadJSON(JSON_FILE, function(data){
    
    templateEntities(data.entities.categories, 'Categorías');
    templateEntities(data.entities.lang, 'Idioma');
    templateEntities(data.entities.edition, 'Presentación');

  });
}