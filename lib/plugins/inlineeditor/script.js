/**
 * Javascript for inlineeditor plugin
 * 
 * @author Simon-Shlomo Poil <simon.shlomo@poil.dk>
 *	build on the quickedit plugin by  Arthur Lobert, Vincent Fleury
 */

/**
 * Class to hold some values
 */

function plugin_tagindex_class(){
    this.id = null;
    this.page = null;
    this.range = null;
    this.sack = null;
    this.done = 1;
}
var pl_si = new plugin_tagindex_class();
pl_si.sack = new sack(DOKU_BASE + 'lib/plugins/inlineeditor/ajax.php');
pl_si.sack.AjaxFailedAlert = '';
pl_si.sack.encodeURIString = false;

/**
 * Gives textual feedback
 */

function plugin_quickedit_return()
{
	data = this.response;
	if (data == '0')
	{
		document.getElementById("load"+pl_si.id+pl_si.page).style.display = 'none';
		document.getElementById("quickedit_stop"+pl_si.id+pl_si.page).style.display = 'none';
		document.getElementById("quickedit_start"+pl_si.id+pl_si.page).style.display = 'block';
		document.getElementById("old").value='0';
		return;
	}
	else
	{
		if(data.match(/[\n]/g))
		{
			var nbRetourChariot = data.match(/[\n]/g).length;
		}
		else
		{
			var nbRetourChariot = 0;
		}
		document.getElementById("quickedit_textbox"+pl_si.id+pl_si.page).id = 'wiki__text';
		document.getElementById("wiki__text").value = data;
		document.getElementById("wiki__text").rows = nbRetourChariot;	
		document.getElementById("load"+pl_si.id+pl_si.page).style.display = 'none';
		document.getElementById("quickedit_start"+pl_si.id+pl_si.page).style.display= 'none';
		document.getElementById("quickedit_stop"+pl_si.id+pl_si.page).style.display = 'block';
		
		initToolbar("quicktoolbar"+pl_si.id+pl_si.page,"wiki__text",toolbar,true);
	}
}

function quickedit_save(id, range, page)
{
	pl_si.sack.onCompletion = quickedit_save_cb;
    pl_si.sack.URLString = '';
    pl_si.id=id;
    pl_si.page=page;
    var minor = document.getElementById("minoredit"+id+page).value;
	var text = document.getElementById("wiki__text").value;
	var sub = document.getElementById("editsummary"+id+page).value;
	pl_si.sack.runAJAX('call=save_page&range='+range+'&page='+page+'&text='+text.replace(/&/g, '%26')+'&sub='+sub.replace(/&/g, '%26')+'&minor='+minor);
}

function quickedit_save_cb()
{
//	document.getElementById("quickedit_start"+pl_si.id+pl_si.page).style.display = 'block';
//	document.getElementById("quickedit_stop"+pl_si.id+pl_si.page).style.display = 'none';
	document.getElementById("load"+pl_si.id+pl_si.page).style.display = 'block';
	document.location.href="doku.php?id="+pl_si.page;
	document.getElementById("old").value = '0';
}

function plugin_quickedit_go(id,range,page,adm)
{
if(isEmpty(document.getElementsByClassName('preview'))){
if(document.getElementById("old").value == '0'){
document.getElementById("old").value = id;
	pl_si.range =range;
	pl_si.page = page;
	pl_si.id = id;
			pl_si.sack.onCompletion = plugin_quickedit_return;
			pl_si.sack.URLString = '';
			pl_si.sack.runAJAX('call=get_text&range='+pl_si.range+'&page='+pl_si.page);
			document.getElementById("quickedit_start"+pl_si.id+pl_si.page).style.display = 'none';
			document.getElementById("load"+pl_si.id+pl_si.page).style.display = 'block';
}
		}
}

function plugin_quickedit_goold(id,range,page, adm){
	if(document.getElementById("old").value == '0'){
		document.getElementById("old").value = id;
		pl_si.sack.onCompletion = plugin_quickedit_ok;
		pl_si.sack.URLString = '';
		pl_si.range = range;
		pl_si.id=id;
		pl_si.page=page;
		pl_si.sack.runAJAX('call=get_auth&page='+page);
    document.getElementById("quickedit_start"+id+page).style.display = 'none';
    document.getElementById("load"+id+page).style.display = 'block';
	}
}
	
function quickedit_cancel(id, range, page)
{
	//document.getElementById("quickedit_start"+id+page).style.display = 'block';
	document.getElementById("load"+id+page).style.display = 'block';
	//document.getElementById("old").value='0';
	document.getElementById("wiki__text").id ='quickedit_textbox'+id+page;
	pl_si.sack.onCompletion = plugin_quickedit_return;
	pl_si.sack.URLString = '';
	pl_si.range = range;
	pl_si.id = id;
	pl_si.page = page;
	pl_si.sack.runAJAX('call=unlockpage&page='+page);
	//document.location.href="doku.php?id="+pl_si.page; 
}


//Setup VIM: ex: et ts=4 enc=utf-8 :

