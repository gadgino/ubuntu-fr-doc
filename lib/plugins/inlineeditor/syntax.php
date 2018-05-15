<?php
/**
 * DokuWiki Syntax Plugin inlineeditor
 *
 * 
 * 
 *
 * Syntax:  ~~QUICKEDIT~~
 * 
 * @license GPL 3 (http://www.gnu.org/licenses/gpl.html)
 * @author  Simon-Shlomo Poil <simon.shlomo@poil.dk>
* build on the quickedit plugin by  Arthur Lobert, Vincent Fleury
 */
// must be run within DokuWiki
if(!defined('DOKU_INC')) die();

if(!defined('DOKU_PLUGIN')) define('DOKU_PLUGIN',DOKU_INC.'lib/plugins/');
require_once(DOKU_PLUGIN.'syntax.php');
 
/**
 * All DokuWiki plugins to extend the parser/rendering mechanism
 * need to inherit from this class
 */
class syntax_plugin_inlineeditor extends DokuWiki_Syntax_Plugin {
 
    /**
     * return some info
     */
    function getInfo(){
        return array(
            'author' => 'Simon-Shlomo Poil',
            'email'  => 'simon.shlomo@poil.dk',
            'date'   => '1 August 2011',
            'name'   => 'Plugin inlineeditor (syntax component)',
            'desc'   => 'Edit your page directly by doubleclicking the text',
            'url'    => 'http://dokuwiki.org/plugin:inlineeditor',
        );
    }
 
    /**
     * Syntax Type
     *
     * Needs to return one of the mode types defined in $PARSER_MODES in parser.php
     */
    function getType()  { return 'substition'; }
    function getPType() { return 'block'; }
    function getSort()  { return 304; }

    /**
     * Connect pattern to lexer
     */
    function connectTo($mode) { $this->Lexer->addSpecialPattern('~~INLINEEDITORSTART~~',$mode,'plugin_inlineeditor'); 
    	// $this->Lexer->addSpecialPattern('~~QUICKEDIT~~',$mode,'plugin_quickedit'); 
   }
 		
    /**
     * Handle the match
     */
   // function handle($match, $state, $pos, &$handler){    
   // }
 
    /**
     * Create output
     */
    function render($mode, &$renderer, $data) {
    	global $ID;
    	
    	if  ($data[0] == 'start')
    	{
		$tuto = $data[1]. $ID;
    		$toto = 'quickedit_start'. $tuto;
    		$titi = 'quickedit_stop'. $tuto;
    		$renderer->doc .= "
    		<div id='quickedit' onDblClick= 'plugin_quickedit_go(".$data[1].",\"".$data[2]."\",\"".$ID."\",\"".$_REQUEST['do']."\" )'>
    			<div id= '".$toto."' style = 'border : 0px black solid ; display : block'>
    			<input type='hidden' id='old' value='0' />";
    	}
    	if ($data[0] == 'stop')
    	{
		$tuto = $data[1]. $ID;
    		$toto = 'quickedit_start'. $tuto;
    		$titi = 'quickedit_stop'. $tuto;
    		$renderer->doc .= "</div>
    			<div id='".$titi."' style ='border : 1px lightgrey solid ; padding : 5px 10px 5px 5px ; display : none'>
					<div id='quicktoolbar".$tuto."'></div>
					
    					<textarea id='quickedit_textbox".$tuto."' rows=3 cols=100 style='width:100%;height:100%' ></textarea>
    					<div style= 'margin-top : 5px;'>
					
    					<label class='nowrap' for='edit__summary'>Edit summary 
    						<input type='text' id='editsummary".$tuto."' name='summary' value='' class='edit' size='50' tabindex='2' />
    					</label>
    					<label class='nowrap' for='minoredit'>
    						<input type='checkbox' id='minoredit".$tuto."' name='minor' value='1' tabindex='3' />
    							<span>
    							 	Minor Changes
    							</span>
    					</label>
    					<input style='position : relative ; bottom : -4px' type='image' src='lib/plugins/inlineeditor/ressources/add.gif' onClick='quickedit_save(".$data[1].",\"".$data[2]."\",\"".$ID."\")'/>
    					<input style='position : relative ; bottom : -4px ' type='image' src='lib/plugins/inlineeditor/ressources/delete.gif' onClick='quickedit_cancel(".$data[1].",\"".$data[2]."\",\"".$ID."\")'/>
    				</div>
    			</div>
    			<div id='load".$tuto."' style = 'display : none'>
    				<img src='lib/images/loading.gif' />
    			</div>
    		</div>";}

	}
}
// vim:ts=4:sw=4:et:enc=utf-8:
