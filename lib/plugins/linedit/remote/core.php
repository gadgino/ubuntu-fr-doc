<?php
/**
 * DokuWiki Plugin linedit (Action Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  youssouf <youssouf.bologna@lilo.org>
 */

// must be run within Dokuwiki
if (!defined('DOKU_INC')) {
    die();
}

/**
 * All public methods of this class are automagically public methods of your API
 */
class remote_plugin_linedit_core extends DokuWiki_Remote_Plugin
{

    /**
     * Example function
     */
    public function myExample($id)
    {
        // FIXME handle security in your method!
        $id = cleanID($id);
        if (auth_quickaclcheck($id) < AUTH_READ) {
            throw new RemoteAccessDeniedException('You are not allowed to read this file', 111);
        }

        return 'example';
    }
}

