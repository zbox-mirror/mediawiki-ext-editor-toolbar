'use strict';

/**
 * WikiEditor. Check ready status.
 * ------------------------------------------------------------------------------------------------------------------ */

function extJS_wikiEditorReady($data) {
  /* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar … */
  if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
    mw.loader.using('user.options').then(function () {
      // This can be the string "0" if the user disabled the preference ([[phab:T54542#555387]])
      if (mw.user.options.get('usebetatoolbar')) {
        $.when(
          mw.loader.using('ext.wikiEditor'), $.ready
        ).then($data);
      }
    });
  }
}
