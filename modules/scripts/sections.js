function extJS_toolbarSections() {
  let customizeToolbar = function () {
    const wpTextbox1 = $('#wpTextbox1');

    wpTextbox1.wikiEditor('addToToolbar', {
      'sections': {
        'extended': {
          'type': 'toolbar',
          'label': 'Extended'
        }
      }
    });
  };

  extJS_wikiEditorReady(customizeToolbar);
}

$(function () {
  extJS_toolbarSections();
});