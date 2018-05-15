<?php
/**
 * DokuWiki Action Plugin inlineeditor
 * 
 * @license    GPL 3 (http://www.gnu.org/licenses/gpl.html)
 * @author     Simon-Shlomo Poil (simon.shlomo@poil.dk)
 * build on the quickedit plugin by Arthur Lobert, Vincent Fleury 
 */
// must be run within Dokuwiki
if(!defined('DOKU_INC')) die();

if(!defined('DOKU_PLUGIN')) define('DOKU_PLUGIN', DOKU_INC.'lib/plugins/');
if(!defined('DOKU_LF')) define('DOKU_LF', "\n");

require_once(DOKU_PLUGIN.'action.php');

/**
 * All DokuWiki plugins to extend the admin function
 * need to inherit from this class
 */

class action_plugin_inlineeditor extends DokuWiki_Action_Plugin {

    function getInfo() {
        return array(
                'author' => 'Simon-Shlomo Poil',
                'email'  => 'simon.shlomo@poil.dk',
                'date'   => '1 August 2011',
                'name'   => 'inlineeditor Plugin ',
                'desc'   => 'inline editor',
                'url'    => 'http://dokuwiki.org/plugin:inlineeditor',
            );
    }

    // register hook
    function register(&$controller) {
        $controller->register_hook('PARSER_HANDLER_DONE', 'BEFORE', $this, 'insert_inlineeditor');
    }

    
    function insert_inlineeditor(&$event, $param){

    	$ins_new = array();
        $ins =& $event->data->calls;
        $num = count($ins);
        $nb_push = 0;
        $no_par = 0;
        for($i=0;$i<$num;$i++) {
        	if($ins[$i - 1][0] == 'section_open') {
          		$nb = $ins[$i - 1][2];
          		$tmp = $i + $nb_push ;
        		$inlineeditor_start = array('plugin', array('inlineeditor', array ('start', $tmp, $nb), 1, '~~INLINEEDITORSTART~~'));
        		array_push($ins_new, $inlineeditor_start);
            	$nb_push+=2;
        		$no_par = 1;
        	}
    		if($ins[$i][0] == 'section_close') {

    			$ins_new[$tmp][1][1][2] .='-'.$ins[$i][2];
  			
    			$inlineeditor_stop = array('plugin', array('inlineeditor', array ('stop',$tmp, $ins_new[$tmp][1][1][2]), 1, '~~INLINEEDITORSTOP~~'));
                array_push($ins_new, $inlineeditor_stop);
    			$no_par = 0;
    		}
//    		if($ins[$i - 1][0] == 'p_open' && $no_par == 0)
  //  		{	
    //			$nb = $ins[$i - 1][2];
      //    		$tmp = $i + $nb_push ;
        //		$quickedit_start = array('plugin', array('quickedit', array ('start', $tmp, $nb), 1, '~~QUICKEDITSTART~~'));
    //    		array_push($ins_new, $quickedit_start);
     //       	$nb_push+=2;
    //		}
    //		if($ins[$i][0] == 'p_close' && $no_par == 0) {
    //			$ins_new[$tmp][1][1][2] .= '-'.($ins[$i][2]);
    //			$quickedit_stop = array('plugin', array('quickedit', array ('stop',$tmp, $ins_new[$tmp][1][1][2]), 1, '~~QUICKEDITSTOP~~'));
      //         array_push($ins_new, $quickedit_stop);
    	//	}
    		array_push($ins_new, $ins[$i]);
    		
        }
        $ins = $ins_new;	     
    }
}

// vim:ts=4:sw=4:et:enc=utf-8:
