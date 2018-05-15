<?php
/**
 * AJAX call handler for inlineeditor plugin
 *
 * @license    GPL 3 (http://www.gnu.org/licenses/gpl.html)
 * @author     Simon-Shlomo Poil <simon.shlomo@poil.dk>
 * 
 * build on script from the quickedit plugin by     Arthur Lobert <arthur.lobert@gmail.com>
 */

if (!defined('DOKU_INC')) define('DOKU_INC', realpath(dirname(__FILE__) . '/../../../') . '/');


//fix for Opera XMLHttpRequests
if(!count($_POST) && $HTTP_RAW_POST_DATA)
{
	parse_str($HTTP_RAW_POST_DATA, $_POST);
}

require_once(DOKU_INC.'inc/init.php');

require_once(DOKU_INC.'inc/auth.php');

require_once(DOKU_INC.'inc/common.php');
require_once(DOKU_INC.'inc/pageutils.php');


	
//close session
session_write_close();
header('Content-Type: text/plain; charset=utf-8');

//call the requested function
$call = 'ajax_'.$_POST['call'];
if(function_exists($call))
{
	$call();
}
else
{
	print "The called function '".htmlspecialchars($call)."' does not exist!";
}

function ajax_save_page()
{
global $ID;
$ID = $_POST['page'];
$INFO = pageinfo();
if($INFO['writable']==1){
		if ($_POST['range'][0] == '0' && $_POST['range'][1] == '-')
			$_POST['range'][0] = '1';
	$tab = rawWikiSlices($_POST['range'], $_POST['page']);
//	if ($tab[2])
//		$text = $tab[0].$_POST['text'].'='.$tab[2];
//	else 	
		$text = $tab[0].$_POST['text'].$tab[2];
	saveWikiText($_POST['page'],$text,$_POST['sub'], $_POST['minor']);
	unlock($_POST['page']);
	print 1;
}else{
print 0;
}
}

function ajax_get_text() {
global $ID;
$ID = $_POST['page'];
$INFO = pageinfo();
if ($INFO['writable'] == 1) {
if(checklock($_POST['page'])) {
return false;;
}
else{
		lock($_POST['page']);
		// we're finished
		if ($_POST['range'][0] == '0' && $_POST['range'][1] == '-')
			$_POST['range'][0] = '1';
		$t = rawWikiSlices($_POST['range'], $_POST['page'], false);
		print 	$t[1];
		}
} else
{
print 0;
}
	}

function ajax_unlockpage() {
unlock($_POST['page']);
print  0;
}

?>
