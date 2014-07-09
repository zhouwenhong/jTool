/*!
 * JavaScript Tools v1.0
 */
 
(function() {
  var jTool = {
    trim: function(str) {
      return str.replace(/^\s+/, '').replace(/\s+$/, '');
    },
    query: function(selector, context) {
      if (/^#/.test(selector)) {
        return document.getElementById(selector.substr(1));
      }
    },
    hasClass: function(elm, cls) {
      return (new RegExp('\\b' + cls + '\\b', 'g')).test(elm.className);
    },
    addClass: function(elm, cls) {
      if (!jTool.hasClass(elm, cls)) {
        elm.className = jTool.trim(elm.className + ' ' + cls);
      }
    },
    removeClass: function(elm, cls) {
      elm.className = jTool.trim(elm.className.replace(cls, '').replace(/\s+/, ' '));
    }

  };

  $ = jTool;
})();