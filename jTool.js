(function () {
    var jTool = {
       query: function(){
          if (/^#/.test(selector)) {
              return document.getElementById(selector.substr(1));
          }
       },
       hasClass: function(elm, cls){
          return (new RegExp('\\b' + cls + '\\b', 'g')).test(elm.className);
       }
      
    };
  
    $ = jTool;
})();