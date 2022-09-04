function extJS_toolbarGroups() {
  let customizeToolbar = function () {
    const wpTextbox1 = $('#wpTextbox1');

    wpTextbox1.wikiEditor('addToToolbar', {
      'section': 'extended',
      'groups': {
        'general': {
          'label': 'General'
        },
        'code': {
          'label': 'Code'
        },
        'note': {
          'label': 'Note'
        },
        'spoiler': {
          'label': 'Spoiler'
        },
        'align': {
          'label': 'Align'
        },
        'float': {
          'label': 'Float'
        },
        'format': {
          'label': 'Format'
        }
      }
    });
  };

  extJS_wikiEditorReady(customizeToolbar);
}

$(function () {
  extJS_toolbarGroups();
});