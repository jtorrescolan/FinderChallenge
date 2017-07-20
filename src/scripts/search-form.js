function searchForm(){

  var searchInput = $('.search-input');
  var searchButton = $('.search-button');
  var awesomplete = new Awesomplete(searchInput.get(0));

  awesomplete.list = getlListSearch();

  searchInput.keyup(function(event){
    var $this = $(this);

    if($this.val().length > 2)
      searchButton.removeAttr('disabled');
    else
      searchButton.attr('disabled', true);

    if(event.which == 13 && !searchButton.attr('disabled')){
      searchButton.click();
    }

  });

  searchButton.click(function(event){
    
    var listSearch = [];
    var searchVal = searchInput.val();

    loadJSON(JSON_FILE, function(response){
      var data =  response.data;
      
      for(var ind in data){
        data[ind].title
        if(data[ind].title.search(RegExp(searchVal, "i")) != -1 ){
          listSearch.push(data[ind]);
        }
      }

      showSearch(listSearch);
    });

  });

}

function getlListSearch(){
  var list = [];
  loadJSON(JSON_FILE, function(response){
    var data =  response.data;
    
    for(var ind in data){
      list.push(data[ind].title);
    }
  });

  return list;
}

function showSearch(result){
  $('content').empty();
  templateContent(result, result.length);
}
