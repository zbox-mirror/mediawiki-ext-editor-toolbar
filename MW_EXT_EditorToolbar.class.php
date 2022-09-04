<?php

namespace MediaWiki\Extension\CMFStore;

use OutputPage, Skin;

/**
 * Class MW_EXT_Key
 */
class MW_EXT_EditorToolbar
{
  /**
   * Load resource function.
   *
   * @param OutputPage $out
   * @param Skin $skin
   *
   * @return bool
   */
  public static function onBeforePageDisplay(OutputPage $out, Skin $skin)
  {
    $out->addModules(['ext.mw.editor-toolbar']);
    $out->addModuleStyles(['ext.mw.editor-toolbar.styles']);

    return true;
  }
}
