function testCSSApply() {
  const ID = 'id' + new Date().getTime();

  // include styles
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
  :root {
    --${ID}: {
      font-family: ${ID};
    }
  }
  #${ID}{
    @apply --${ID};
  }
  `;
  document.head.appendChild(styleEl);

  // include element
  const el = document.createElement('i');
  el.setAttribute('id', ID)
  document.documentElement.appendChild(el);

  // test
  const styles = getComputedStyle(el);
  const doesSupport = styles.fontFamily === ID;

  // cleaning
  document.head.removeChild(styleEl);
  document.documentElement.removeChild(el);

  return doesSupport;
}

if(testCSSApply()){
  console.log('浏览器是支持@apply');
}else {
  console.log('浏览器不支持@apply');
};
