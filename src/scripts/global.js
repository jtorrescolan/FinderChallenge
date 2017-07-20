/*
  constants and global functions
*/

var JSON_FILE = '/books-schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", url, true);
  xobj.onreadystatechange = function(responseText){
    if(xobj.readyState == 4 && xobj.status == "200"){
      var content = JSON.parse(xobj.responseText);
      callback.call(this, content);
    }
  };
  xobj.send(null);
};


var templateEntities = function(dataEntity, titleEntity){

  var htmlEntities = '';
  var htmlEntitiesItem = '';

  for(var ind in dataEntity){
      
    var item = dataEntity[ind];
    var htmlTemplate;
    var htmlTemplateItem;

    htmlTemplate = $('#template-list-filters').html();
    htmlTemplate = htmlTemplate.split('% title %').join(titleEntity);

    htmlEntitiesItem = '';

    $.each(item, function(i, v){
      htmlTemplateItem = $('#template-list-filters-item').html();
      htmlTemplateItem = htmlTemplateItem.split('% id %').join(v.id);
      htmlTemplateItem = htmlTemplateItem.split('% label %').join(v.label);
      htmlEntitiesItem = htmlEntitiesItem + htmlTemplateItem;
    });

    htmlEntities = htmlEntities + htmlTemplate;
    htmlEntities = $(htmlEntities);
    htmlEntities.eq(2).append($(htmlEntitiesItem));
  }

  $('.filters').append(htmlEntities);
}

var templateContent =  function(data, showNumber){
  var htmlContent = '';
  var counter = 0;

  for(ind in data){

    if(counter<showNumber){
      var item = data[ind];

      var htmlTemplateContent = $('#template-list-content').html();
      htmlTemplateContent = htmlTemplateContent.split('% id %').join(item.id);
      htmlTemplateContent = htmlTemplateContent.split('% img %').join(item.image);
      htmlTemplateContent = htmlTemplateContent.split('% title %').join(item.title);
      htmlTemplateContent = htmlTemplateContent.split('% teaser %').join(item.teaser);

      htmlContent = htmlContent + htmlTemplateContent;

      counter++;
    }
  }

  $('content').append($(htmlContent));
}
