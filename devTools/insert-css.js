// 插入css
(function(window) {
  window._self.insertCss = function(code) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) { // IE
      style.styleSheet.cssText = code;
    } else { // Other browsers
      style.innerHTML = code;
    }
    document.getElementsByTagName("head")[0].appendChild(style);
  };
  window._self.insertCssHighContrast = function() {
    var css = '\
      * { background: white ! important; color: black !important } \
      :link, :link * { color: #0000EE !important } \
      :visited, :visited * { color: #551A8B !important } \
    ';
    window._self.insertCss(css);
  };
})(window);
