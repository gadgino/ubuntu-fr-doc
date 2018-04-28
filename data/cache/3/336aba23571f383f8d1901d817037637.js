var DOKU_BASE   = '/ubuntu-fr-doc/';var DOKU_TPL    = '/ubuntu-fr-doc/lib/tpl/bootstrap3/';var DOKU_COOKIE_PARAM = {"path":"\/ubuntu-fr-doc\/","secure":false};Object.defineProperty(window, 'DOKU_UHN', { get: function() { console.warn('Using DOKU_UHN is deprecated. Please use JSINFO.useHeadingNavigation instead'); return JSINFO.useHeadingNavigation; } });Object.defineProperty(window, 'DOKU_UHC', { get: function() { console.warn('Using DOKU_UHC is deprecated. Please use JSINFO.useHeadingContent instead'); return JSINFO.useHeadingContent; } });LANG = {"search_toggle_tools":"(d\u00e9)activer les outils de recherche","willexpire":"Votre blocage pour la modification de cette page expire dans une minute.\\nPour \u00e9viter les conflits, utilisez le bouton \u00ab Aper\u00e7u \u00bb pour r\u00e9initialiser le minuteur.","notsavedyet":"Les modifications non enregistr\u00e9es seront perdues. Voulez-vous vraiment continuer ?","searchmedia":"Chercher des fichiers","keepopen":"Toujours conserver cette fen\u00eatre ouverte","hidedetails":"Masquer les d\u00e9tails","mediatitle":"Param\u00e8tres de lien","mediadisplay":"Type de lien","mediaalign":"Alignement","mediasize":"Taille de l'image","mediatarget":"Cible du lien","mediaclose":"Fermer","mediainsert":"Ins\u00e9rer","mediadisplayimg":"Afficher l'image.","mediadisplaylnk":"N'afficher que le lien.","mediasmall":"Petite taille","mediamedium":"Taille moyenne","medialarge":"Grande taille","mediaoriginal":"Taille originelle","medialnk":"Lien vers la page de d\u00e9tail","mediadirect":"Lien direct vers l'original","medianolnk":"Aucun lien","medianolink":"Ne pas lier l'image","medialeft":"Aligner l'image \u00e0 gauche.","mediaright":"Aligner l'image \u00e0 droite.","mediacenter":"Centrer l'image.","medianoalign":"Ne pas aligner.","nosmblinks":"Les liens vers les partages Windows ne fonctionnent qu'avec Microsoft Internet Explorer.\\nVous pouvez toujours copier puis coller le lien.","linkwiz":"Assistant Lien","linkto":"Lien vers\u00a0:","del_confirm":"Voulez-vous vraiment effacer ce(s) \u00e9l\u00e9ment(s) ?","restore_confirm":"Voulez-vous vraiment restaurer cette version ?","media_diff":"Voir les diff\u00e9rences :","media_diff_both":"C\u00f4te \u00e0 c\u00f4te","media_diff_opacity":"Calque","media_diff_portions":"Curseur","media_select":"S\u00e9lection de fichiers\u2026","media_upload_btn":"Envoyer","media_done_btn":"Termin\u00e9","media_drop":"D\u00e9posez des fichiers ici pour les envoyer","media_cancel":"supprimer","media_overwrt":"\u00c9craser les fichiers existants","plugins":{"extension":{"reallydel":"Vraiment d\u00e9sinstaller cette extension","display_viewoptions":"Voir les options:","display_enabled":"activ\u00e9","display_disabled":"d\u00e9sactiv\u00e9","display_updatable":"Mise \u00e0 jour possible"},"gallery":{"addgal":"Utiliser cette cat\u00e9gorie comme galerie"},"vshare":{"button":"Ins\u00e8re une vid\u00e9o depuis des sites de partage vid\u00e9o","prompt":"Copiez\/collez le lien complet de la page contenant la vid\u00e9o ici :","notfound":"D\u00e9sol\u00e9, cette URL n'a pas \u00e9t\u00e9 reconnue. Consultez la documentation sur la syntaxe pour ins\u00e9rer une vid\u00e9o manuellement."},"styling":{"loader":"La pr\u00e9visualisation est en chargement... <br \/>Si rien ne se passe, les donn\u00e9es sont peut-\u00eatre erron\u00e9es","popup":"Ouvrir dans une nouvelle fen\u00eatre"}}};
var toolbar = [{"type":"format","title":"Gras","icon":"bold.png","key":"b","open":"**","close":"**","block":false},{"type":"format","title":"Italique","icon":"italic.png","key":"i","open":"\/\/","close":"\/\/","block":false},{"type":"format","title":"Soulignage","icon":"underline.png","key":"u","open":"__","close":"__","block":false},{"type":"format","title":"Code \u00ab\u00a0machine \u00e0 \u00e9crire\u00a0\u00bb","icon":"mono.png","key":"m","open":"''","close":"''","block":false},{"type":"format","title":"Barr\u00e9","icon":"strike.png","key":"d","open":"<del>","close":"<\/del>","block":false},{"type":"autohead","title":"Titre de m\u00eame niveau","icon":"hequal.png","key":"8","text":"Titre","mod":0,"block":true},{"type":"autohead","title":"Titre de niveau inf\u00e9rieur","icon":"hminus.png","key":"9","text":"Titre","mod":1,"block":true},{"type":"autohead","title":"Titre de niveau sup\u00e9rieur","icon":"hplus.png","key":"0","text":"Titre","mod":-1,"block":true},{"type":"picker","title":"S\u00e9lectionner la ligne de titre","icon":"h.png","class":"pk_hl","list":[{"type":"format","title":"Titre de niveau 1","icon":"h1.png","key":"1","open":"====== ","close":" ======\\n"},{"type":"format","title":"Titre de niveau 2","icon":"h2.png","key":"2","open":"===== ","close":" =====\\n"},{"type":"format","title":"Titre de niveau 3","icon":"h3.png","key":"3","open":"==== ","close":" ====\\n"},{"type":"format","title":"Titre de niveau 4","icon":"h4.png","key":"4","open":"=== ","close":" ===\\n"},{"type":"format","title":"Titre de niveau 5","icon":"h5.png","key":"5","open":"== ","close":" ==\\n"}],"block":true},{"type":"linkwiz","title":"Lien interne","icon":"link.png","key":"l","open":"[[","close":"]]","block":false},{"type":"format","title":"Lien externe","icon":"linkextern.png","open":"[[","close":"]]","sample":"http:\/\/example.com|Lien externe","block":false},{"type":"formatln","title":"Liste num\u00e9rot\u00e9e","icon":"ol.png","open":"  - ","close":"","key":"-","block":true},{"type":"formatln","title":"Liste \u00e0 puce","icon":"ul.png","open":"  * ","close":"","key":".","block":true},{"type":"insert","title":"Ligne horizontale","icon":"hr.png","insert":"\\n----\\n","block":true},{"type":"mediapopup","title":"Ajouter des images ou autres fichiers","icon":"image.png","url":"lib\/exe\/mediamanager.php?ns=","name":"mediaselect","options":"width=750,height=500,left=20,top=20,scrollbars=yes,resizable=yes","block":false},{"type":"picker","title":"\u00c9moticones","icon":"smiley.png","list":{"8-)":"icon_cool.gif","8-O":"icon_eek.gif","8-o":"icon_eek.gif",":-(":"icon_sad.gif",":-)":"icon_smile.gif","=)":"icon_smile2.gif",":-\/":"icon_doubt.gif",":-\\":"icon_doubt2.gif",":-?":"icon_confused.gif",":-D":"icon_biggrin.gif",":-P":"icon_razz.gif",":-o":"icon_surprised.gif",":-O":"icon_surprised.gif",":-x":"icon_silenced.gif",":-X":"icon_silenced.gif",":-|":"icon_neutral.gif",";-)":"icon_wink.gif","m(":"facepalm.gif","^_^":"icon_fun.gif",":?:":"icon_question.gif",":!:":"icon_exclaim.gif","LOL":"icon_lol.gif","FIXME":"fixme.gif","DELETEME":"delete.gif"},"icobase":"smileys","block":false},{"type":"picker","title":"Caract\u00e8res sp\u00e9ciaux","icon":"chars.png","list":["\u00c0","\u00e0","\u00c1","\u00e1","\u00c2","\u00e2","\u00c3","\u00e3","\u00c4","\u00e4","\u01cd","\u01ce","\u0102","\u0103","\u00c5","\u00e5","\u0100","\u0101","\u0104","\u0105","\u00c6","\u00e6","\u0106","\u0107","\u00c7","\u00e7","\u010c","\u010d","\u0108","\u0109","\u010a","\u010b","\u00d0","\u0111","\u00f0","\u010e","\u010f","\u00c8","\u00e8","\u00c9","\u00e9","\u00ca","\u00ea","\u00cb","\u00eb","\u011a","\u011b","\u0112","\u0113","\u0116","\u0117","\u0118","\u0119","\u0122","\u0123","\u011c","\u011d","\u011e","\u011f","\u0120","\u0121","\u0124","\u0125","\u00cc","\u00ec","\u00cd","\u00ed","\u00ce","\u00ee","\u00cf","\u00ef","\u01cf","\u01d0","\u012a","\u012b","\u0130","\u0131","\u012e","\u012f","\u0134","\u0135","\u0136","\u0137","\u0139","\u013a","\u013b","\u013c","\u013d","\u013e","\u0141","\u0142","\u013f","\u0140","\u0143","\u0144","\u00d1","\u00f1","\u0145","\u0146","\u0147","\u0148","\u00d2","\u00f2","\u00d3","\u00f3","\u00d4","\u00f4","\u00d5","\u00f5","\u00d6","\u00f6","\u01d1","\u01d2","\u014c","\u014d","\u0150","\u0151","\u0152","\u0153","\u00d8","\u00f8","\u0154","\u0155","\u0156","\u0157","\u0158","\u0159","\u015a","\u015b","\u015e","\u015f","\u0160","\u0161","\u015c","\u015d","\u0162","\u0163","\u0164","\u0165","\u00d9","\u00f9","\u00da","\u00fa","\u00db","\u00fb","\u00dc","\u00fc","\u01d3","\u01d4","\u016c","\u016d","\u016a","\u016b","\u016e","\u016f","\u01d6","\u01d8","\u01da","\u01dc","\u0172","\u0173","\u0170","\u0171","\u0174","\u0175","\u00dd","\u00fd","\u0178","\u00ff","\u0176","\u0177","\u0179","\u017a","\u017d","\u017e","\u017b","\u017c","\u00de","\u00fe","\u00df","\u0126","\u0127","\u00bf","\u00a1","\u00a2","\u00a3","\u00a4","\u00a5","\u20ac","\u00a6","\u00a7","\u00aa","\u00ac","\u00af","\u00b0","\u00b1","\u00f7","\u2030","\u00bc","\u00bd","\u00be","\u00b9","\u00b2","\u00b3","\u00b5","\u00b6","\u2020","\u2021","\u00b7","\u2022","\u00ba","\u2200","\u2202","\u2203","\u018f","\u0259","\u2205","\u2207","\u2208","\u2209","\u220b","\u220f","\u2211","\u203e","\u2212","\u2217","\u00d7","\u2044","\u221a","\u221d","\u221e","\u2220","\u2227","\u2228","\u2229","\u222a","\u222b","\u2234","\u223c","\u2245","\u2248","\u2260","\u2261","\u2264","\u2265","\u2282","\u2283","\u2284","\u2286","\u2287","\u2295","\u2297","\u22a5","\u22c5","\u25ca","\u2118","\u2111","\u211c","\u2135","\u2660","\u2663","\u2665","\u2666","\u03b1","\u03b2","\u0393","\u03b3","\u0394","\u03b4","\u03b5","\u03b6","\u03b7","\u0398","\u03b8","\u03b9","\u03ba","\u039b","\u03bb","\u03bc","\u039e","\u03be","\u03a0","\u03c0","\u03c1","\u03a3","\u03c3","\u03a4","\u03c4","\u03c5","\u03a6","\u03c6","\u03c7","\u03a8","\u03c8","\u03a9","\u03c9","\u2605","\u2606","\u260e","\u261a","\u261b","\u261c","\u261d","\u261e","\u261f","\u2639","\u263a","\u2714","\u2718","\u201e","\u201c","\u201d","\u201a","\u2018","\u2019","\u00ab","\u00bb","\u2039","\u203a","\u2014","\u2013","\u2026","\u2190","\u2191","\u2192","\u2193","\u2194","\u21d0","\u21d1","\u21d2","\u21d3","\u21d4","\u00a9","\u2122","\u00ae","\u2032","\u2033","[","]","{","}","~","(",")","%","\u00a7","$","#","|","@"],"block":false},{"type":"signature","title":"Ins\u00e9rer une signature","icon":"sig.png","key":"y","block":false},{"type":"picker","title":"Extension Wrap","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/picker.png","list":[{"type":"format","title":"colonnes","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/column.png","open":"<WRAP group>\\n<WRAP half column>\\n","close":"\\n<\/WRAP>\\n\\n<WRAP half column>\\n\\n<\/WRAP>\\n<\/WRAP>\\n"},{"type":"format","title":"bloc simple","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/box.png","open":"<WRAP center round box 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc information","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/info.png","open":"<WRAP center round info 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc astuce","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/tip.png","open":"<WRAP center round tip 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc important","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/important.png","open":"<WRAP center round important 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc alerte","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/alert.png","open":"<WRAP center round alert 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc aide","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/help.png","open":"<WRAP center round help 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc t\u00e9l\u00e9chargement","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/download.png","open":"<WRAP center round download 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"bloc \u00e0 faire","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/todo.png","open":"<WRAP center round todo 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"insert","title":"r\u00e9tablir le flux apr\u00e8s un \u00e9l\u00e9ment flottant","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/clear.png","insert":"<WRAP clear\/>\\n"},{"type":"format","title":"particuli\u00e8rement important","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/em.png","open":"<wrap em>","close":"<\/wrap>"},{"type":"format","title":"important","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/hi.png","open":"<wrap hi>","close":"<\/wrap>"},{"type":"format","title":"peu important","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/lo.png","open":"<wrap lo>","close":"<\/wrap>"}]}];


/* XXXXXXXXXX begin of lib/scripts/jquery/jquery.cookie.js XXXXXXXXXX */

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));



/* XXXXXXXXXX end of lib/scripts/jquery/jquery.cookie.js XXXXXXXXXX */



/* XXXXXXXXXX begin of inc/lang/fr/jquery.ui.datepicker.js XXXXXXXXXX */


try {
/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  Stéphane Nahmani (sholby@sholby.net),
			  Stéphane Raimbault <stephane.raimbault@gmail.com> */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.fr = {
	closeText: "Fermer",
	prevText: "Précédent",
	nextText: "Suivant",
	currentText: "Aujourd'hui",
	monthNames: [ "janvier", "février", "mars", "avril", "mai", "juin",
		"juillet", "août", "septembre", "octobre", "novembre", "décembre" ],
	monthNamesShort: [ "janv.", "févr.", "mars", "avr.", "mai", "juin",
		"juil.", "août", "sept.", "oct.", "nov.", "déc." ],
	dayNames: [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ],
	dayNamesShort: [ "dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam." ],
	dayNamesMin: [ "D","L","M","M","J","V","S" ],
	weekHeader: "Sem.",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.fr );

return datepicker.regional.fr;

} ) );


} catch (e) {
   logError(e, 'inc/lang/fr/jquery.ui.datepicker.js');
}


/* XXXXXXXXXX end of inc/lang/fr/jquery.ui.datepicker.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/fileuploader.js XXXXXXXXXX */

/**
 * http://github.com/valums/file-uploader
 *
 * Multiple file upload component with progress-bar, drag-and-drop.
 * © 2010 Andrew Valums ( andrew(at)valums.com )
 *
 * Licensed under GNU GPL 2 or later and GNU LGPL 2 or later, see license.txt.
 */

//
// Helper functions
//

var qq = qq || {};

/**
 * Adds all missing properties from second obj to first obj
 */
qq.extend = function(first, second){
    for (var prop in second){
        first[prop] = second[prop];
    }
};

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function(arr, elt, from){
    if (arr.indexOf) return arr.indexOf(elt, from);

    from = from || 0;
    var len = arr.length;

    if (from < 0) from += len;

    for (; from < len; from++){
        if (from in arr && arr[from] === elt){
            return from;
        }
    }
    return -1;
};

qq.getUniqueId = (function(){
    var id = 0;
    return function(){ return id++; };
})();

//
// Events

qq.attach = function(element, type, fn){
    if (element.addEventListener){
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.attachEvent('on' + type, fn);
    }
};
qq.detach = function(element, type, fn){
    if (element.removeEventListener){
        element.removeEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.detachEvent('on' + type, fn);
    }
};

qq.preventDefault = function(e){
    if (e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function(a, b){
    b.parentNode.insertBefore(a, b);
};
qq.remove = function(element){
    element.parentNode.removeChild(element);
};

qq.contains = function(parent, descendant){
    // compareposition returns false in this case
    if (parent == descendant) return true;

    if (parent.contains){
        return parent.contains(descendant);
    } else {
        return !!(descendant.compareDocumentPosition(parent) & 8);
    }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = (function(){
    var div = document.createElement('div');
    return function(html){
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
    };
})();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function(element, styles){
    if (styles.opacity != null){
        if (typeof element.style.opacity != 'string' && typeof(element.filters) != 'undefined'){
            styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
        }
    }
    qq.extend(element.style, styles);
};
qq.hasClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    return re.test(element.className);
};
qq.addClass = function(element, name){
    if (!qq.hasClass(element, name)){
        element.className += ' ' + name;
    }
};
qq.removeClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function(element, text){
    element.innerText = text;
    element.textContent = text;
};

//
// Selecting elements

qq.children = function(element){
    var children = [],
    child = element.firstChild;

    while (child){
        if (child.nodeType == 1){
            children.push(child);
        }
        child = child.nextSibling;
    }

    return children;
};

qq.getByClass = function(element, className){
    if (element.querySelectorAll){
        return element.querySelectorAll('.' + className);
    }

    var result = [];
    var candidates = element.getElementsByTagName("*");
    var len = candidates.length;

    for (var i = 0; i < len; i++){
        if (qq.hasClass(candidates[i], className)){
            result.push(candidates[i]);
        }
    }
    return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 *
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function(obj, temp, prefixDone){
    var uristrings = [],
        prefix = '&',
        add = function(nextObj, i){
            var nextTemp = temp
                ? (/\[\]$/.test(temp)) // prevent double-encoding
                   ? temp
                   : temp+'['+i+']'
                : i;
            if ((nextTemp != 'undefined') && (i != 'undefined')) {
                uristrings.push(
                    (typeof nextObj === 'object')
                        ? qq.obj2url(nextObj, nextTemp, true)
                        : (Object.prototype.toString.call(nextObj) === '[object Function]')
                            ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj())
                            : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj)
                );
            }
        };

    if (!prefixDone && temp) {
      prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '&' : '?';
      uristrings.push(temp);
      uristrings.push(qq.obj2url(obj));
    } else if ((Object.prototype.toString.call(obj) === '[object Array]') && (typeof obj != 'undefined') ) {
        // we wont use a for-in-loop on an array (performance)
        for (var i = 0, len = obj.length; i < len; ++i){
            add(obj[i], i);
        }
    } else if ((typeof obj != 'undefined') && (obj !== null) && (typeof obj === "object")){
        // for anything else but a scalar, we will use for-in-loop
        for (var i in obj){
            if(obj.hasOwnProperty(i) && typeof obj[i] != 'function') {
                add(obj[i], i);
            }
        }
    } else {
        uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
    }

    return uristrings.join(prefix)
                     .replace(/^&/, '')
                     .replace(/%20/g, '+');
};

//
//
// Uploader Classes
//
//

var qq = qq || {};

/**
 * Creates upload button, validates upload, but doesn't create file list or dd.
 */
qq.FileUploaderBasic = function(o){
    this._options = {
        // set to true to see the server response
        debug: false,
        action: '/server/upload',
        params: {},
        button: null,
        multiple: true,
        maxConnections: 3,
        // validation
        allowedExtensions: [],
        sizeLimit: 0,
        minSizeLimit: 0,
        // events
        // return false to cancel submit
        onSubmit: function(id, fileName){},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, responseJSON){},
        onCancel: function(id, fileName){},
        // messages
        messages: {
            typeError: "{file} has invalid extension. Only {extensions} are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
        },
        showMessage: function(message){
            alert(message);
        }
    };
    qq.extend(this._options, o);

    // number of files being uploaded
    this._filesInProgress = 0;
    this._handler = this._createUploadHandler();

    if (this._options.button){
        this._button = this._createUploadButton(this._options.button);
    }

    this._preventLeaveInProgress();
};

qq.FileUploaderBasic.prototype = {
    setParams: function(params){
        this._options.params = params;
    },
    getInProgress: function(){
        return this._filesInProgress;
    },
    _createUploadButton: function(element){
        var self = this;

        return new qq.UploadButton({
            element: element,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            onChange: function(input){
                self._onInputChange(input);
            }
        });
    },
    _createUploadHandler: function(){
        var self = this,
            handlerClass;

        if(qq.UploadHandlerXhr.isSupported()){
            handlerClass = 'UploadHandlerXhr';
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,
            maxConnections: this._options.maxConnections,
            onProgress: function(id, fileName, loaded, total){
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);
            },
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            }
        });

        return handler;
    },
    _preventLeaveInProgress: function(){
        var self = this;

        qq.attach(window, 'beforeunload', function(e){
            if (!self._filesInProgress){return;}

            var e = e || window.event;
            // for ie, ff
            e.returnValue = self._options.messages.onLeave;
            // for webkit
            return self._options.messages.onLeave;
        });
    },
    _onSubmit: function(id, fileName){
        this._filesInProgress++;
    },
    _onProgress: function(id, fileName, loaded, total){
    },
    _onComplete: function(id, fileName, result){
        this._filesInProgress--;
        if (result.error){
            this._options.showMessage(result.error);
        }
    },
    _onCancel: function(id, fileName){
        this._filesInProgress--;
    },
    _onInputChange: function(input){
        if (this._handler instanceof qq.UploadHandlerXhr){
            this._uploadFileList(input.files);
        } else {
            if (this._validateFile(input)){
                this._uploadFile(input);
            }
        }
        this._button.reset();
    },
    _uploadFileList: function(files){
        for (var i=0; i<files.length; i++){
            if ( !this._validateFile(files[i])){
                return;
            }
        }

        for (var i=0; i<files.length; i++){
            this._uploadFile(files[i]);
        }
    },
    _uploadFile: function(fileContainer){
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);

        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
            this._handler.upload(id, this._options.params);
        }
    },
    _validateFile: function(file){
        var name, size;

        if (file.value){
            // it is a file input
            // get input value and remove path to normalize
            name = file.value.replace(/.*(\/|\\)/, "");
        } else {
            // fix missing properties in Safari
            name = file.fileName != null ? file.fileName : file.name;
            size = file.fileSize != null ? file.fileSize : file.size;
        }

        if (! this._isAllowedExtension(name)){
            this._error('typeError', name);
            return false;

        } else if (size === 0){
            this._error('emptyError', name);
            return false;

        } else if (size && this._options.sizeLimit && size > this._options.sizeLimit){
            this._error('sizeError', name);
            return false;

        } else if (size && size < this._options.minSizeLimit){
            this._error('minSizeError', name);
            return false;
        }

        return true;
    },
    _error: function(code, fileName){
        var message = this._options.messages[code];
        function r(name, replacement){ message = message.replace(name, replacement); }

        r('{file}', this._formatFileName(fileName));
        r('{extensions}', this._options.allowedExtensions.join(', '));
        r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
        r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));

        this._options.showMessage(message);
    },
    _formatFileName: function(name){
        if (name.length > 33){
            name = name.slice(0, 19) + '...' + name.slice(-13);
        }
        return name;
    },
    _isAllowedExtension: function(fileName){
        var ext = (-1 !== fileName.indexOf('.')) ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
        var allowed = this._options.allowedExtensions;

        if (!allowed.length){return true;}

        for (var i=0; i<allowed.length; i++){
            if (allowed[i].toLowerCase() == ext){ return true;}
        }

        return false;
    },
    _formatSize: function(bytes){
        var i = -1;
        do {
            bytes = bytes / 1024;
            i++;
        } while (bytes > 99);

        return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
    }
};


/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploader = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    // additional options
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,

        template: '<div class="qq-uploader">' +
                '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                '<div class="qq-upload-button">Upload a file</div>' +
                '<ul class="qq-upload-list"></ul>' +
             '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
                '<span class="qq-upload-file"></span>' +
                '<span class="qq-upload-spinner"></span>' +
                '<span class="qq-upload-size"></span>' +
                '<a class="qq-upload-cancel" href="#">Cancel</a>' +
                '<span class="qq-upload-failed-text">Failed</span>' +
            '</li>',

        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',

            file: 'qq-upload-file',
            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail'
        }
    });
    // overwrite options with user supplied
    qq.extend(this._options, o);

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    this._bindCancelEvent();
    this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploader.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){
        var element = qq.getByClass(parent, this._options.classes[type])[0];
        if (!element){
            throw new Error('element not found ' + type);
        }

        return element;
    },
    _setupDragDrop: function(){
        var self = this,
            dropArea = this._find(this._element, 'drop');

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);
            }
        });

        dropArea.style.display = 'none';

        qq.attach(document, 'dragenter', function(e){
            if (!dz._isValidFileDrag(e)) return;

            dropArea.style.display = 'block';
        });
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){
                dropArea.style.display = 'none';
            }
        });
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        size.style.display = 'inline';

        var text;
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {
            text = this._formatSize(total);
        }

        qq.setText(size, text);
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        // mark completed
        var item = this._getItemByFileId(id);
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));

        if (result.success){
            qq.addClass(item, this._classes.success);
        } else {
            qq.addClass(item, this._classes.fail);
        }
    },
    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, this._formatFileName(fileName));
        this._find(item, 'size').style.display = 'none';

        this._listElement.appendChild(item);
    },
    _getItemByFileId: function(id){
        var item = this._listElement.firstChild;

        // there can't be txt nodes in dynamically created list
        // and we can  use nextSibling
        while (item){
            if (item.qqFileId == id) return item;
            item = item.nextSibling;
        }
    },
    /**
     * delegate click event for cancel link
     **/
    _bindCancelEvent: function(){
        var self = this,
            list = this._listElement;

        qq.attach(list, 'click', function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (qq.hasClass(target, self._classes.cancel)){
                qq.preventDefault(e);

                var item = target.parentNode;
                self._handler.cancel(item.qqFileId);
                qq.remove(item);
            }
        });
    }
});

qq.UploadDropZone = function(o){
    this._options = {
        element: null,
        onEnter: function(e){},
        onLeave: function(e){},
        // is not fired when leaving element by hovering descendants
        onLeaveNotDescendants: function(e){},
        onDrop: function(e){}
    };
    qq.extend(this._options, o);

    this._element = this._options.element;

    this._disableDropOutside();
    this._attachEvents();
};

qq.UploadDropZone.prototype = {
    _disableDropOutside: function(e){
        // run only once for all instances
        if (!qq.UploadDropZone.dropOutsideDisabled ){

            qq.attach(document, 'dragover', function(e){
                if (e.dataTransfer){
                    e.dataTransfer.dropEffect = 'none';
                    e.preventDefault();
                }
            });

            qq.UploadDropZone.dropOutsideDisabled = true;
        }
    },
    _attachEvents: function(){
        var self = this;

        qq.attach(self._element, 'dragover', function(e){
            if (!self._isValidFileDrag(e)) return;

            var effect = e.dataTransfer.effectAllowed;
            if (effect == 'move' || effect == 'linkMove'){
                e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)
            } else {
                e.dataTransfer.dropEffect = 'copy'; // for Chrome
            }

            e.stopPropagation();
            e.preventDefault();
        });

        qq.attach(self._element, 'dragenter', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onEnter(e);
        });

        qq.attach(self._element, 'dragleave', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onLeave(e);

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // do not fire when moving a mouse over a descendant
            if (qq.contains(this, relatedTarget)) return;

            self._options.onLeaveNotDescendants(e);
        });

        qq.attach(self._element, 'drop', function(e){
            if (!self._isValidFileDrag(e)) return;

            e.preventDefault();
            self._options.onDrop(e);
        });
    },
    _isValidFileDrag: function(e){
        var dt = e.dataTransfer,
            // do not check dt.types.contains in webkit, because it crashes safari 4
            isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox
        return dt && dt.effectAllowed != 'none' &&
            (dt.files || (!isWebkit && dt.types.contains && dt.types.contains('Files')));

    }
};

qq.UploadButton = function(o){
    this._options = {
        element: null,
        // if set to true adds multiple attribute to file input
        multiple: false,
        // name attribute of file input
        name: 'file',
        onChange: function(input){},
        hoverClass: 'qq-upload-button-hover',
        focusClass: 'qq-upload-button-focus'
    };

    qq.extend(this._options, o);

    this._element = this._options.element;

    // make button suitable container for input
    qq.css(this._element, {
        position: 'relative',
        overflow: 'hidden',
        // Make sure browse button is in the right side
        // in Internet Explorer
        direction: 'ltr'
    });

    this._input = this._createInput();
};

qq.UploadButton.prototype = {
    /* returns file input element */
    getInput: function(){
        return this._input;
    },
    /* cleans/recreates the file input */
    reset: function(){
        if (this._input.parentNode){
            qq.remove(this._input);
        }

        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput();
    },
    _createInput: function(){
        var input = document.createElement("input");

        if (this._options.multiple){
            input.setAttribute("multiple", "multiple");
        }

        input.setAttribute("type", "file");
        input.setAttribute("name", this._options.name);

        qq.css(input, {
            position: 'absolute',
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: 'Arial',
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: '118px',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            opacity: 0
        });

        this._element.appendChild(input);

        var self = this;
        qq.attach(input, 'change', function(){
            self._options.onChange(input);
        });

        qq.attach(input, 'mouseover', function(){
            qq.addClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'mouseout', function(){
            qq.removeClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'focus', function(){
            qq.addClass(self._element, self._options.focusClass);
        });
        qq.attach(input, 'blur', function(){
            qq.removeClass(self._element, self._options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent){
            // it is IE or Opera
            input.setAttribute('tabIndex', "-1");
        }

        return input;
    }
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function(o){
    this._options = {
        debug: false,
        action: '/upload.php',
        // maximum number of concurrent uploads
        maxConnections: 999,
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response){},
        onCancel: function(id, fileName){}
    };
    qq.extend(this._options, o);

    this._queue = [];
    // params for files in queue
    this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
    log: function(str){
        if (this._options.debug && window.console) console.log('[uploader] ' + str);
    },
    /**
     * Adds file or file input to the queue
     * @returns id
     **/
    add: function(file){},
    /**
     * Sends the file identified by id and additional query params to the server
     */
    upload: function(id, params){
        var len = this._queue.push(id);

        var copy = {};
        qq.extend(copy, params);
        this._params[id] = copy;

        // if too many active uploads, wait...
        if (len <= this._options.maxConnections){
            this._upload(id, this._params[id]);
        }
    },
    /**
     * Cancels file upload by id
     */
    cancel: function(id){
        this._cancel(id);
        this._dequeue(id);
    },
    /**
     * Cancells all uploads
     */
    cancelAll: function(){
        for (var i=0; i<this._queue.length; i++){
            this._cancel(this._queue[i]);
        }
        this._queue = [];
    },
    /**
     * Returns name of the file identified by id
     */
    getName: function(id){},
    /**
     * Returns size of the file identified by id
     */
    getSize: function(id){},
    /**
     * Returns id of files being uploaded or
     * waiting for their turn
     */
    getQueue: function(){
        return this._queue;
    },
    /**
     * Actual upload method
     */
    _upload: function(id){},
    /**
     * Actual cancel method
     */
    _cancel: function(id){},
    /**
     * Removes element from queue, starts upload of next
     */
    _dequeue: function(id){
        var i = qq.indexOf(this._queue, id);
        this._queue.splice(i, 1);

        var max = this._options.maxConnections;

        if (this._queue.length >= max && i < max){
            var nextId = this._queue[max-1];
            this._upload(nextId, this._params[nextId]);
        }
    }
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(fileInput){
        fileInput.setAttribute('name', 'qqfile');
        var id = 'qq-upload-handler-iframe' + qq.getUniqueId();

        this._inputs[id] = fileInput;

        // remove file input from DOM
        if (fileInput.parentNode){
            qq.remove(fileInput);
        }

        return id;
    },
    getName: function(id){
        // get input value and remove path to normalize
        return this._inputs[id].value.replace(/.*(\/|\\)/, "");
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        delete this._inputs[id];

        var iframe = document.getElementById(id);
        if (iframe){
            // to cancel request set src to something else
            // we use src="javascript:false;" because it doesn't
            // trigger ie6 prompt on https
            iframe.setAttribute('src', 'javascript:false;');

            qq.remove(iframe);
        }
    },
    _upload: function(id, params){
        var input = this._inputs[id];

        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }

        var fileName = this.getName(id);

        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var self = this;
        this._attachLoadEvent(iframe, function(){
            self.log('iframe loaded');

            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);

            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();
        qq.remove(form);

        return id;
    },
    _attachLoadEvent: function(iframe, callback){
        qq.attach(iframe, 'load', function(){
            // when we remove iframe from dom
            // the request stops, but in IE load
            // event fires
            if (!iframe.parentNode){
                return;
            }

            // fixing Opera 10.53
            if (iframe.contentDocument &&
                iframe.contentDocument.body &&
                iframe.contentDocument.body.innerHTML == "false"){
                // In Opera event is fired second time
                // when body.innerHTML changed from false
                // to server response approx. after 1 sec
                // when we upload file with iframe
                return;
            }

            callback();
        });
    },
    /**
     * Returns json object received by iframe from server.
     */
    _getIframeContentJSON: function(iframe){
        // iframe.contentWindow.document - for IE<7
        var doc = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document,
            response;

        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + doc.body.innerHTML);

        try {
            response = eval("(" + doc.body.innerHTML + ")");
        } catch(err){
            response = {};
        }

        return response;
    },
    /**
     * Creates iframe with unique name
     */
    _createIframe: function(id){
        // We can't use following code as the name attribute
        // won't be properly registered in IE6, and new window
        // on form submit will open
        // var iframe = document.createElement('iframe');
        // iframe.setAttribute('name', id);

        var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '" />');
        // src="javascript:false;" removes ie6 prompt on https

        iframe.setAttribute('id', id);

        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        return iframe;
    },
    /**
     * Creates form, that will be submitted to iframe
     */
    _createForm: function(iframe, params){
        // We can't use the following code in IE6
        // var form = document.createElement('form');
        // form.setAttribute('method', 'post');
        // form.setAttribute('enctype', 'multipart/form-data');
        // Because in this case file won't be attached to request
        var form = qq.toElement('<form method="post" enctype="multipart/form-data"></form>');

        var queryString = qq.obj2url(params, this._options.action);

        form.setAttribute('action', queryString);
        form.setAttribute('target', iframe.name);
        form.style.display = 'none';
        document.body.appendChild(form);

        return form;
    }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._files = [];
    this._xhrs = [];

    // current loaded size in bytes for each file
    this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function(){
    var input = document.createElement('input');
    input.type = 'file';

    return (
        'multiple' in input &&
        typeof File != "undefined" &&
        typeof (new XMLHttpRequest()).upload != "undefined" );
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerXhr.prototype, {
    /**
     * Adds file to the queue
     * Returns id to use with upload, cancel
     **/
    add: function(file){
        if (!(file instanceof File)){
            throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
        }

        return this._files.push(file) - 1;
    },
    getName: function(id){
        var file = this._files[id];
        // fix missing name in Safari 4
        return file.fileName != null ? file.fileName : file.name;
    },
    getSize: function(id){
        var file = this._files[id];
        return file.fileSize != null ? file.fileSize : file.size;
    },
    /**
     * Returns uploaded bytes for file identified by id
     */
    getLoaded: function(id){
        return this._loaded[id] || 0;
    },
    /**
     * Sends the file identified by id and additional query params to the server
     * @param {Object} params name-value string pairs
     */
    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);

        this._loaded[id] = 0;

        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;

        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);
            }
        };

        // build query string
        params = params || {};
        params['qqfile'] = name;
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open("POST", queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.send(file);
    },
    _onComplete: function(id, xhr){
        // the request was aborted/cancelled
        if (!this._files[id]) return;

        var name = this.getName(id);
        var size = this.getSize(id);

        this._options.onProgress(id, name, size, size);

        if (xhr.status == 200){
            this.log("xhr - server response received");
            this.log("responseText = " + xhr.responseText);

            var response;

            try {
                response = eval("(" + xhr.responseText + ")");
            } catch(err){
                response = {};
            }

            this._options.onComplete(id, name, response);

        } else {
            this._options.onComplete(id, name, {});
        }

        this._files[id] = null;
        this._xhrs[id] = null;
        this._dequeue(id);
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        this._files[id] = null;

        if (this._xhrs[id]){
            this._xhrs[id].abort();
            this._xhrs[id] = null;
        }
    }
});


/* XXXXXXXXXX end of lib/scripts/fileuploader.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/fileuploaderextended.js XXXXXXXXXX */

qq.extend(qq.FileUploader.prototype, {
    _createUploadHandler: function(){
        var self = this,
            handlerClass;

        if(qq.UploadHandlerXhr.isSupported()){
            handlerClass = 'UploadHandlerXhr';
            //handlerClass = 'UploadHandlerForm';
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,
            maxConnections: this._options.maxConnections,
            onProgress: function(id, fileName, loaded, total){
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);
            },
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            },
            onUpload: function(){
                self._onUpload();
            }
        });

        return handler;
    },

    _onUpload: function(){
        this._handler.uploadAll(this._options.params);
    },

    _uploadFile: function(fileContainer){
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);

        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
        }
    },

    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, fileName);
        this._find(item, 'size').style.display = 'none';

        // name suggestion (simplified cleanID)
        var nameElement = this._find(item, 'nameInput');
        fileName = fileName.toLowerCase();
        fileName = fileName.replace(/([ !"#$%&\'()+,\/;<=>?@[\]^`{|}~:]+)/g, '_');
        fileName = fileName.replace(/^_+/,'');
        nameElement.value = fileName;
        nameElement.id = 'mediamanager__upload_item'+id;

        this._listElement.appendChild(item);
    }

});

qq.FileUploaderExtended = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,

        template: '<div class="qq-uploader">' +
            '<div class="qq-upload-drop-area"><span>' + LANG.media_drop + '</span></div>' +
            '<div class="qq-upload-button">' + LANG.media_select + '</div>' +
            '<ul class="qq-upload-list"></ul>' +
            '<div class="qq-action-container">' +
            '  <button class="qq-upload-action" type="submit" id="mediamanager__upload_button">' + LANG.media_upload_btn + '</button>' +
            '  <label class="qq-overwrite-check"><input type="checkbox" value="1" name="ow" class="dw__ow"> <span>' + LANG.media_overwrt + '</span></label>' +
            '</div>' +
            '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
              '<span class="qq-upload-file hidden"></span>' +
            '  <input class="qq-upload-name-input edit" type="text" value="" />' +
            '  <span class="qq-upload-spinner hidden"></span>' +
            '  <span class="qq-upload-size"></span>' +
            '  <a class="qq-upload-cancel" href="#">' + LANG.media_cancel + '</a>' +
            '  <span class="qq-upload-failed-text error">Failed</span>' +
            '</li>',

        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',
            nameInput: 'qq-upload-name-input',
            overwriteInput: 'qq-overwrite-check',
            uploadButton: 'qq-upload-action',
            file: 'qq-upload-file',

            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail',
            failedText: 'qq-upload-failed-text'
        }
    });

    qq.extend(this._options, o);

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    this._bindCancelEvent();
    this._bindUploadEvent();
    this._setupDragDrop();
};

qq.extend(qq.FileUploaderExtended.prototype, qq.FileUploader.prototype);

qq.extend(qq.FileUploaderExtended.prototype, {
    _bindUploadEvent: function(){
        var self = this,
            list = this._listElement;

        qq.attach(document.getElementById('mediamanager__upload_button'), 'click', function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            qq.preventDefault(e);
            self._handler._options.onUpload();

            jQuery(".qq-upload-name-input").each(function (i) {
                jQuery(this).attr('disabled', 'disabled');
            });
        });
    },

    _onComplete: function(id, fileName, result){
        this._filesInProgress--;

        // mark completed
        var item = this._getItemByFileId(id);
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));

        var nameInput = this._find(item, 'nameInput');
        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, nameInput.value);
        qq.removeClass(fileElement, 'hidden');
        qq.remove(nameInput);
        jQuery('.qq-upload-button, #mediamanager__upload_button').remove();
        jQuery('.dw__ow').parent().hide();
        jQuery('.qq-upload-drop-area').remove();

        if (result.success){
            qq.addClass(item, this._classes.success);
            $link = '<a href="' + result.link + '" id="h_:' + result.id + '" class="select">' + nameInput.value + '</a>';
            jQuery(fileElement).html($link);

        } else {
            qq.addClass(item, this._classes.fail);
            var fail = this._find(item, 'failedText');
            if (result.error) qq.setText(fail, result.error);
        }

        if (document.getElementById('media__content') && !document.getElementById('mediamanager__done_form')) {
            var action = document.location.href;
            var i = action.indexOf('?');
            if (i) action = action.substr(0, i);
            var button = '<form method="post" action="' + action + '" id="mediamanager__done_form"><div>';
            button += '<input type="hidden" value="' + result.ns + '" name="ns">';
            button += '<input type="hidden" value="1" name="recent">';
            button += '<button type="submit">' + LANG.media_done_btn + '</button></div></form>';
            jQuery('#mediamanager__uploader').append(button);
        }
    }

});

qq.extend(qq.UploadHandlerForm.prototype, {
    uploadAll: function(params){
        this._uploadAll(params);
    },

    getName: function(id){
        var file = this._inputs[id];
        var name = document.getElementById('mediamanager__upload_item'+id);
        if (name != null) {
            return name.value;
        } else {
            if (file != null) {
                // get input value and remove path to normalize
                return file.value.replace(/.*(\/|\\)/, "");
            } else {
                return null;
            }
        }
    },

    _uploadAll: function(params){
         jQuery(".qq-upload-spinner").each(function (i) {
            jQuery(this).removeClass('hidden');
        });
        for (key in this._inputs) {
            this.upload(key, params);
        }

    },

    _upload: function(id, params){
        var input = this._inputs[id];

        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }

        var fileName = this.getName(id);

        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var nameInput = qq.toElement('<input name="mediaid" value="' + fileName + '" type="text">');
        form.appendChild(nameInput);

        var checked = jQuery('.dw__ow').is(':checked');
        var owCheckbox = jQuery('.dw__ow').clone();
        owCheckbox.attr('checked', checked);
        jQuery(form).append(owCheckbox);

        var self = this;
        this._attachLoadEvent(iframe, function(){
            self.log('iframe loaded');

            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);

            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();
        qq.remove(form);

        return id;
    }
});

qq.extend(qq.UploadHandlerXhr.prototype, {
    uploadAll: function(params){
        this._uploadAll(params);
    },

    getName: function(id){
        var file = this._files[id];
        var name = document.getElementById('mediamanager__upload_item'+id);
        if (name != null) {
            return name.value;
        } else {
            if (file != null) {
                // fix missing name in Safari 4
                return file.fileName != null ? file.fileName : file.name;
            } else {
                return null;
            }
        }
    },

    getSize: function(id){
        var file = this._files[id];
        if (file == null) return null;
        return file.fileSize != null ? file.fileSize : file.size;
    },

    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);
        if (name == null || size == null) return;

        this._loaded[id] = 0;

        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;

        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);
            }
        };

        // build query string
        params = params || {};
        params['qqfile'] = name;
        params['ow'] = jQuery('.dw__ow').is(':checked');
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open("POST", queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.send(file);
    },

    _uploadAll: function(params){
        jQuery(".qq-upload-spinner").each(function (i) {
            jQuery(this).removeClass('hidden');
        });
        for (key in this._files) {
            this.upload(key, params);
        }

    }
});



/* XXXXXXXXXX end of lib/scripts/fileuploaderextended.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/helpers.js XXXXXXXXXX */

/**
 * Various helper functions
 */

/**
 * A PHP-style substr_replace
 *
 * Supports negative start and length and omitting length, but not
 * str and replace arrays.
 * See http://php.net/substr-replace for further documentation.
 */
function substr_replace(str, replace, start, length) {
    var a2, b1;
    a2 = (start < 0 ? str.length : 0) + start;
    if (typeof length === 'undefined') {
        length = str.length - a2;
    } else if (length < 0 && start < 0 && length <= start) {
        length = 0;
    }
    b1 = (length < 0 ? str.length : a2) + length;
    return str.substring(0, a2) + replace + str.substring(b1);
}

/**
 * Bind variables to a function call creating a closure
 *
 * Use this to circumvent variable scope problems when creating closures
 * inside a loop
 *
 * @author  Adrian Lang <lang@cosmocode.de>
 * @link    http://www.cosmocode.de/en/blog/gohr/2009-10/15-javascript-fixing-the-closure-scope-in-loops
 * @param   functionref fnc - the function to be called
 * @param   mixed - any arguments to be passed to the function
 * @returns functionref
 */
function bind(fnc/*, ... */) {
    var Aps = Array.prototype.slice,
    // Store passed arguments in this scope.
    // Since arguments is no Array nor has an own slice method,
    // we have to apply the slice method from the Array.prototype
        static_args = Aps.call(arguments, 1);

    // Return a function evaluating the passed function with the
    // given args and optional arguments passed on invocation.
    return function (/* ... */) {
        // Same here, but we use Array.prototype.slice solely for
        // converting arguments to an Array.
        return fnc.apply(this,
                         static_args.concat(Aps.call(arguments, 0)));
    };
}

/**
 * Report an error from a JS file to the console
 *
 * @param e    The error object
 * @param file The file in which the error occurred
 */
function logError(e, file) {
    if (window.console && console.error) {
        console.error('The error "%s: %s" occurred in file "%s". ' +
            'If this is in a plugin try updating or disabling the plugin, ' +
            'if this is in a template try updating the template or switching to the "dokuwiki" template.',
            e.name, e.message, file);
        if(e.stack) {
            console.error(e.stack);
        }
    }
}



/* XXXXXXXXXX end of lib/scripts/helpers.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/delay.js XXXXXXXXXX */

/**
 * Manage delayed and timed actions
 *
 * @license GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author  Adrian Lang <lang@cosmocode.de>
 */

/**
 * Provide a global callback for window.setTimeout
 *
 * To get a timeout for non-global functions, just call
 * delay.add(func, timeout).
 */
var timer = {
    _cur_id: 0,
    _handlers: {},

    execDispatch: function (id) {
        timer._handlers[id]();
    },

    add: function (func, timeout) {
        var id = ++timer._cur_id;
        timer._handlers[id] = func;
        return window.setTimeout('timer.execDispatch(' + id + ')', timeout);
    }
};

/**
 * Provide a delayed start
 *
 * To call a function with a delay, just create a new Delay(func, timeout) and
 * call that object’s method “start”.
 */
function Delay (func, timeout) {
    this.func = func;
    if (timeout) {
        this.timeout = timeout;
    }
}

Delay.prototype = {
    func: null,
    timeout: 500,

    delTimer: function () {
        if (this.timer !== null) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    },

    start: function () {
        DEPRECATED('don\'t use the Delay object, use window.timeout with a callback instead');
        this.delTimer();
        var _this = this;
        this.timer = timer.add(function () { _this.exec.call(_this); },
                               this.timeout);

        this._data = {
            _this: arguments[0],
            _params: Array.prototype.slice.call(arguments, 2)
        };
    },

    exec: function () {
        this.delTimer();
        this.func.call(this._data._this, this._data._params);
    }
};



/* XXXXXXXXXX end of lib/scripts/delay.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/cookie.js XXXXXXXXXX */

/**
* Handles the cookie used by several JavaScript functions
*
* Only a single cookie is written and read. You may only save
* simple name-value pairs - no complex types!
*
* You should only use the getValue and setValue methods
*
* @author Andreas Gohr <andi@splitbrain.org>
* @author Michal Rezler <m.rezler@centrum.cz>
*/
var DokuCookie = {
    data: {},
    name: 'DOKU_PREFS',

    /**
     * Save a value to the cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    setValue: function(key,val){
        var text = [],
            _this = this;
        this.init();
        this.data[key] = val;

        //save the whole data array
        jQuery.each(_this.data, function (key, val) {
            if (_this.data.hasOwnProperty(key)) {
                text.push(encodeURIComponent(key)+'#'+encodeURIComponent(val));
            }
        });
        jQuery.cookie(this.name, text.join('#'), {expires: 365, path: DOKU_COOKIE_PARAM.path, secure: DOKU_COOKIE_PARAM.secure});
    },

    /**
     * Get a Value from the Cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    getValue: function(key){
        this.init();
        return this.data[key];
    },

    /**
     * Loads the current set cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    init: function(){
        var text, parts, i;
        if(!jQuery.isEmptyObject(this.data)) {
            return;
        }
        text = jQuery.cookie(this.name);
        if(text){
            parts = text.split('#');
            for(i = 0; i < parts.length; i += 2){
                this.data[decodeURIComponent(parts[i])] = decodeURIComponent(parts[i+1]);
            }
        }
    }
};



/* XXXXXXXXXX end of lib/scripts/cookie.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/script.js XXXXXXXXXX */

// if jQuery was loaded, let's make it noConflict here.
if ('function' === typeof jQuery && 'function' === typeof jQuery.noConflict) {
    jQuery.noConflict();
}

/**
 * Some browser detection
 */
var clientPC  = navigator.userAgent.toLowerCase(); // Get client info
var is_macos  = navigator.appVersion.indexOf('Mac') != -1;
var is_gecko  = ((clientPC.indexOf('gecko')!=-1) && (clientPC.indexOf('spoofer')==-1) &&
                (clientPC.indexOf('khtml') == -1) && (clientPC.indexOf('netscape/7.0')==-1));
var is_safari = ((clientPC.indexOf('applewebkit')!=-1) && (clientPC.indexOf('spoofer')==-1));
var is_khtml  = (navigator.vendor == 'KDE' || ( document.childNodes && !document.all && !navigator.taintEnabled ));
if (clientPC.indexOf('opera')!=-1) {
    var is_opera = true;
    var is_opera_preseven = (window.opera && !document.childNodes);
    var is_opera_seven = (window.opera && document.childNodes);
}

/**
 * Handler to close all open Popups
 */
function closePopups(){
    jQuery('div.JSpopup').hide();
}

jQuery(function () {
    jQuery(document).click(closePopups);
});



/* XXXXXXXXXX end of lib/scripts/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/qsearch.js XXXXXXXXXX */

/**
 * AJAX functions for the pagename quicksearch
 *
 * @license  GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author   Andreas Gohr <andi@splitbrain.org>
 * @author   Adrian Lang <lang@cosmocode.de>
 * @author   Michal Rezler <m.rezler@centrum.cz>
 */
jQuery.fn.dw_qsearch = function (overrides) {

    var dw_qsearch = {

        output: '#qsearch__out',

        $inObj: this,
        $outObj: null,
        timer: null,
        curRequest: null,

        /**
         * initialize the quick search
         *
         * Attaches the event handlers
         *
         */
        init: function () {
            var do_qsearch;

            dw_qsearch.$outObj = jQuery(dw_qsearch.output);

            // objects found?
            if (dw_qsearch.$inObj.length === 0 ||
                dw_qsearch.$outObj.length === 0) {
                return;
            }

            // attach eventhandler to search field
            do_qsearch = function () {
                // abort any previous request
                if (dw_qsearch.curRequest != null) {
                    dw_qsearch.curRequest.abort();
                }
                var value = dw_qsearch.getSearchterm();
                if (value === '') {
                    dw_qsearch.clear_results();
                    return;
                }
                dw_qsearch.$inObj.parents('form').addClass('searching');
                dw_qsearch.curRequest = jQuery.post(
                    DOKU_BASE + 'lib/exe/ajax.php',
                    {
                        call: 'qsearch',
                        q: encodeURI(value)
                    },
                    dw_qsearch.onCompletion,
                    'html'
                );
            };

            dw_qsearch.$inObj.keyup(
                function () {
                    if (dw_qsearch.timer) {
                        window.clearTimeout(dw_qsearch.timer);
                        dw_qsearch.timer = null;
                    }
                    dw_qsearch.timer = window.setTimeout(do_qsearch, 500);
                }
            );

            // attach eventhandler to output field
            dw_qsearch.$outObj.click(dw_qsearch.clear_results);
        },

        /**
         * Read search term from input
         */
        getSearchterm: function() {
            return dw_qsearch.$inObj.val();
        },

        /**
         * Empty and hide the output div
         */
        clear_results: function () {
            dw_qsearch.$inObj.parents('form').removeClass('searching');
            dw_qsearch.$outObj.hide();
            dw_qsearch.$outObj.text('');
        },

        /**
         * Callback. Reformat and display the results.
         *
         * Namespaces are shortened here to keep the results from overflowing
         * or wrapping
         *
         * @param data The result HTML
         */
        onCompletion: function (data) {
            var max, $links, too_big;
            dw_qsearch.$inObj.parents('form').removeClass('searching');

            dw_qsearch.curRequest = null;

            if (data === '') {
                dw_qsearch.clear_results();
                return;
            }

            dw_qsearch.$outObj
                .html(data)
                .show()
                .css('white-space', 'nowrap');

            // disable overflow during shortening
            dw_qsearch.$outObj.find('li').css('overflow', 'visible');

            $links = dw_qsearch.$outObj.find('a');
            max = dw_qsearch.$outObj[0].clientWidth; // maximum width allowed (but take away paddings below)
            if (document.documentElement.dir === 'rtl') {
                max -= parseInt(dw_qsearch.$outObj.css('padding-left'));
                too_big = function (l) {
                    return l.offsetLeft < 0;
                };
            } else {
                max -= parseInt(dw_qsearch.$outObj.css('padding-right'));
                too_big = function (l) {
                    return l.offsetWidth + l.offsetLeft > max;
                };
            }

            $links.each(function () {
                var start, length, replace, nsL, nsR, eli, runaway;

                if (!too_big(this)) {
                    return;
                }

                nsL = this.textContent.indexOf('(');
                nsR = this.textContent.indexOf(')');
                eli = 0;
                runaway = 0;

                while ((nsR - nsL > 3) && too_big(this) && runaway++ < 500) {
                    if (eli !== 0) {
                        // elipsis already inserted
                        if ((eli - nsL) > (nsR - eli)) {
                            // cut left
                            start = eli - 2;
                            length = 2;
                        } else {
                            // cut right
                            start = eli + 1;
                            length = 1;
                        }
                        replace = '';
                    } else {
                        // replace middle with ellipsis
                        start = Math.floor(nsL + ((nsR - nsL) / 2));
                        length = 1;
                        replace = '…';
                    }
                    this.textContent = substr_replace(this.textContent,
                        replace, start, length);

                    eli = this.textContent.indexOf('…');
                    nsL = this.textContent.indexOf('(');
                    nsR = this.textContent.indexOf(')');
                }
            });

            // reenable overflow
            dw_qsearch.$outObj.find('li').css('overflow', 'hidden').css('text-overflow', 'ellipsis');
        }


    };

    jQuery.extend(dw_qsearch, overrides);

    if (!overrides.deferInit) {
        dw_qsearch.init();
    }

    return dw_qsearch;
};

jQuery(function () {
    jQuery('#qsearch__in').dw_qsearch({
        output: '#qsearch__out'
    });
});



/* XXXXXXXXXX end of lib/scripts/qsearch.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/search.js XXXXXXXXXX */

jQuery(function () {
    'use strict';

    const $searchForm = jQuery('.search-results-form');
    if (!$searchForm.length) {
        return;
    }

    const $toggleAssistanceButton = jQuery('<button>')
        .addClass('toggleAssistant')
        .attr('type', 'button')
        .attr('aria-expanded', 'false')
        .text(LANG.search_toggle_tools)
        .prependTo($searchForm.find('fieldset'))
    ;

    $toggleAssistanceButton.on('click', function () {
        jQuery('.advancedOptions').toggle(0, function () {
            var $me = jQuery(this);
            if ($me.attr('aria-hidden')) {
                $me.removeAttr('aria-hidden');
                $toggleAssistanceButton.attr('aria-expanded', 'true');
                DokuCookie.setValue('sa', 'on');
            } else {
                $me.attr('aria-hidden', 'true');
                $toggleAssistanceButton.attr('aria-expanded', 'false');
                DokuCookie.setValue('sa', 'off');
            }
        });
    });

    if (DokuCookie.getValue('sa') === 'on') {
        $toggleAssistanceButton.click();
    }

    $searchForm.find('.advancedOptions .toggle div.current').on('click', function () {
        var $me = jQuery(this);
        $me.parent().siblings().removeClass('open');
        $me.parent().siblings().find('ul:first').attr('aria-expanded', 'false');
        $me.parent().toggleClass('open');
        if ($me.parent().hasClass('open')) {
            $me.parent().find('ul:first').attr('aria-expanded', 'true');
        } else {
            $me.parent().find('ul:first').attr('aria-expanded', 'false');
        }
    });

});



/* XXXXXXXXXX end of lib/scripts/search.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/tree.js XXXXXXXXXX */

jQuery.fn.dw_tree = function(overrides) {
    var dw_tree = {

        /**
         * Delay in ms before showing the throbber.
         * Used to skip the throbber for fast AJAX calls.
         */
        throbber_delay: 500,

        $obj: this,

        toggle_selector: 'a.idx_dir',

        init: function () {
            this.$obj.on('click', this.toggle_selector, this,
                               this.toggle);
            jQuery('ul:first', this.$obj).attr('role', 'tree');
            jQuery('ul', this.$obj).not(':first').attr('role', 'group');
            jQuery('li', this.$obj).attr('role', 'treeitem');
            jQuery('li.open > ul', this.$obj).attr('aria-expanded', 'true');
            jQuery('li.closed > ul', this.$obj).attr('aria-expanded', 'false');
            jQuery('li.closed', this.$obj).attr('aria-live', 'assertive');
        },

        /**
         * Open or close a subtree using AJAX
         * The contents of subtrees are "cached" until the page is reloaded.
         * A "loading" indicator is shown only when the AJAX call is slow.
         *
         * @author Andreas Gohr <andi@splitbrain.org>
         * @author Ben Coburn <btcoburn@silicodon.net>
         * @author Pierre Spring <pierre.spring@caillou.ch>
         */
        toggle: function (e) {
            var $listitem, $sublist, timeout, $clicky, show_sublist, dw_tree, opening;

            e.preventDefault();

            dw_tree = e.data;
            $clicky = jQuery(this);
            $listitem = $clicky.closest('li');
            $sublist = $listitem.find('ul').first();
            opening = $listitem.hasClass('closed');
            dw_tree.toggle_display($clicky, opening);
            if ($sublist.is(':visible')) {
                $listitem.removeClass('open').addClass('closed');
                $sublist.attr('aria-expanded', 'false');
            } else {
                $listitem.removeClass('closed').addClass('open');
                $sublist.attr('aria-expanded', 'true');
            }

            // if already open, close by hiding the sublist
            if (!opening) {
                $sublist.dw_hide();
                return;
            }

            show_sublist = function (data) {
                $sublist.hide();
                if (typeof data !== 'undefined') {
                    $sublist.html(data);
                    $sublist.parent().attr('aria-busy', 'false').removeAttr('aria-live');
                    jQuery('li.closed', $sublist).attr('aria-live', 'assertive');
                }
                if ($listitem.hasClass('open')) {
                    // Only show if user didn’t close the list since starting
                    // to load the content
                    $sublist.dw_show();
                }
            };

            // just show if already loaded
            if ($sublist.length > 0) {
                show_sublist();
                return;
            }

            //prepare the new ul
            $sublist = jQuery('<ul class="idx" role="group"/>');
            $listitem.append($sublist);

            timeout = window.setTimeout(
                bind(show_sublist, '<li aria-busy="true"><img src="' + DOKU_BASE + 'lib/images/throbber.gif" alt="loading..." title="loading..." /></li>'), dw_tree.throbber_delay);

            dw_tree.load_data(function (data) {
                                  window.clearTimeout(timeout);
                                  show_sublist(data);
                              }, $clicky);
        },

        toggle_display: function ($clicky, opening) {
        },

        load_data: function (show_data, $clicky) {
            show_data();
        }
    };

    jQuery.extend(dw_tree, overrides);

    if (!overrides.deferInit) {
        dw_tree.init();
    }

    return dw_tree;
};



/* XXXXXXXXXX end of lib/scripts/tree.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/index.js XXXXXXXXXX */

var dw_index = jQuery('#index__tree').dw_tree({deferInit: true,
    load_data: function  (show_sublist, $clicky) {
        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            $clicky[0].search.substr(1) + '&call=index',
            show_sublist, 'html'
        );
    }
});
jQuery(function () {
    var $tree = jQuery('#index__tree');

    dw_index.$obj = $tree;

    dw_index.init();
});



/* XXXXXXXXXX end of lib/scripts/index.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/textselection.js XXXXXXXXXX */

/**
 * Text selection related functions.
 */

/**
 * selection prototype
 *
 * Object that capsulates the selection in a textarea. Returned by DWgetSelection.
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function selection_class(){
    this.start     = 0;
    this.end       = 0;
    this.obj       = null;
    this.scroll    = 0;
    this.fix       = 0;

    this.getLength = function(){
        return this.end - this.start;
    };

    this.getText = function(){
        return (!this.obj) ? '' : this.obj.value.substring(this.start,this.end);
    };
}

/**
 * Get current selection/cursor position in a given textArea
 *
 * @link   http://groups.drupal.org/node/1210
 * @author Andreas Gohr <andi@splitbrain.org>
 * @link   http://linebyline.blogspot.com/2006/11/textarea-cursor-position-in-internet.html
 * @returns object - a selection object
 */
function DWgetSelection(textArea) {
    var sel = new selection_class();

    textArea.focus();
    sel.obj   = textArea;
    sel.start  = textArea.selectionStart;
    sel.end    = textArea.selectionEnd;
    sel.scroll = textArea.scrollTop;
    return sel;
}

/**
 * Set the selection
 *
 * You need to get a selection object via DWgetSelection() first, then modify the
 * start and end properties and pass it back to this function.
 *
 * @link http://groups.drupal.org/node/1210
 * @author Andreas Gohr <andi@splitbrain.org>
 * @param {selection_class} selection  a selection object as returned by DWgetSelection()
 */
function DWsetSelection(selection){
    selection.obj.setSelectionRange(selection.start, selection.end);
    if(selection.scroll) selection.obj.scrollTop = selection.scroll;
}

/**
 * Inserts the given text at the current cursor position or replaces the current
 * selection
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @param {string}  text           the new text to be pasted
 * @param {selection_class}  selection     selection object returned by DWgetSelection
 * @param {int}     opts.startofs  number of charcters at the start to skip from new selection
 * @param {int}     opts.endofs    number of characters at the end to skip from new selection
 * @param {boolean} opts.nosel     set true if new text should not be selected
 */
function pasteText(selection,text,opts){
    if(!opts) opts = {};
    // replace the content

    selection.obj.value =
        selection.obj.value.substring(0, selection.start) + text +
        selection.obj.value.substring(selection.end, selection.obj.value.length);

    // set new selection
    if (is_opera) {
        // Opera replaces \n by \r\n when inserting text.
        selection.end = selection.start + text.replace(/\r?\n/g, '\r\n').length;
    } else {
        selection.end = selection.start + text.length;
    }


    // modify the new selection if wanted
    if(opts.startofs) selection.start += opts.startofs;
    if(opts.endofs)   selection.end   -= opts.endofs;

    // no selection wanted? set cursor to end position
    if(opts.nosel) selection.start = selection.end;

    DWsetSelection(selection);
}


/**
 * Format selection
 *
 * Apply tagOpen/tagClose to selection in textarea, use sampleText instead
 * of selection if there is none.
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function insertTags(textAreaID, tagOpen, tagClose, sampleText){
    var txtarea = jQuery('#' + textAreaID)[0];

    var selection = DWgetSelection(txtarea);
    var text = selection.getText();
    var opts;

    // don't include trailing space in selection
    if(text.charAt(text.length - 1) == ' '){
        selection.end--;
        text = selection.getText();
    }

    if(!text){
        // nothing selected, use the sample text and select it
        text = sampleText;
        opts = {
            startofs: tagOpen.length,
            endofs: tagClose.length
        };
    }else{
        // place cursor at the end
        opts = {
            nosel: true
        };
    }

    // surround with tags
    text = tagOpen + text + tagClose;

    // do it
    pasteText(selection,text,opts);
}

/**
 * Wraps around pasteText() for backward compatibility
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function insertAtCarret(textAreaID, text){
    var txtarea = jQuery('#' + textAreaID)[0];
    var selection = DWgetSelection(txtarea);
    pasteText(selection,text,{nosel: true});
}



/* XXXXXXXXXX end of lib/scripts/textselection.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/toolbar.js XXXXXXXXXX */

// used to identify pickers
var pickercounter=0;

/**
 * Create a toolbar
 *
 * @param  string tbid       ID of the element where to insert the toolbar
 * @param  string edid       ID of the editor textarea
 * @param  array  tb         Associative array defining the buttons
 * @param  bool   allowblock Allow buttons creating multiline content
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function initToolbar(tbid,edid,tb, allowblock){
    var $toolbar, $edit;
    if (typeof tbid == 'string') {
        $toolbar = jQuery('#' + tbid);
    } else {
        $toolbar = jQuery(tbid);
    }

    $edit = jQuery('#' + edid);

    if ($toolbar.length == 0 || $edit.length == 0 || $edit.attr('readOnly')) {
        return;
    }

    if (typeof allowblock === 'undefined') {
        allowblock = true;
    }

    //empty the toolbar area:
    $toolbar.html('');

    jQuery.each(tb, function (k, val) {
        if (!tb.hasOwnProperty(k) || (!allowblock && val.block === true)) {
            return;
        }
        var actionFunc, $btn;

        // create new button (jQuery object)
        $btn = jQuery(createToolButton(val.icon, val.title, val.key, val.id,
                                       val['class']));

        // type is a tb function -> assign it as onclick
        actionFunc = 'tb_'+val.type;
        if( jQuery.isFunction(window[actionFunc]) ){
            $btn.on('click', bind(window[actionFunc],$btn,val,edid) );
            $toolbar.append($btn);
            return;
        }

        // type is a init function -> execute it
        actionFunc = 'addBtnAction'+val.type.charAt(0).toUpperCase()+val.type.substring(1);
        if( jQuery.isFunction(window[actionFunc]) ){
            var pickerid = window[actionFunc]($btn, val, edid);
            if(pickerid !== ''){
                $toolbar.append($btn);
                $btn.attr('aria-controls', pickerid);
                if (actionFunc === 'addBtnActionPicker') {
                    $btn.attr('aria-haspopup', 'true');
                }
            }
            return;
        }

        alert('unknown toolbar type: '+val.type+'  '+actionFunc);
    });
}

/**
 * Button action for format buttons
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_format(btn, props, edid) {
    var sample = props.sample || props.title;
    insertTags(edid,
               fixtxt(props.open),
               fixtxt(props.close),
               fixtxt(sample));
    pickerClose();
    return false;
}

/**
 * Button action for format buttons
 *
 * This works exactly as tb_format() except that, if multiple lines
 * are selected, each line will be formatted seperately
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_formatln(btn, props, edid) {
    var sample = props.sample || props.title,
        opts,
        selection = DWgetSelection(jQuery('#'+edid)[0]);

    sample = fixtxt(sample);
    props.open  = fixtxt(props.open);
    props.close = fixtxt(props.close);

    // is something selected?
    if(selection.getLength()){
        sample = selection.getText();
        opts = {nosel: true};
    }else{
        opts = {
            startofs: props.open.length,
            endofs: props.close.length
        };
    }

    sample = sample.split("\n").join(props.close+"\n"+props.open);
    sample = props.open+sample+props.close;

    pasteText(selection,sample,opts);

    pickerClose();
    return false;
}

/**
 * Button action for insert buttons
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_insert(btn, props, edid) {
    insertAtCarret(edid,fixtxt(props.insert));
    pickerClose();
    return false;
}

/**
 * Button action for the media popup
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_mediapopup(btn, props, edid) {
    window.open(
        DOKU_BASE+props.url+encodeURIComponent(NS)+'&edid='+encodeURIComponent(edid),
        props.name,
        props.options);
    return false;
}

/**
 * Button action for automatic headlines
 *
 * Insert a new headline based on the current section level
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_autohead(btn, props, edid){
    var lvl = currentHeadlineLevel(edid),
        tags;

    // determine new level
    lvl += props.mod;
    if(lvl < 1) lvl = 1;
    if(lvl > 5) lvl = 5;

    tags = (new Array(8 - lvl)).join('=');
    insertTags(edid, tags+' ', ' '+tags+"\n", props.text);
    pickerClose();
    return false;
}


/**
 * Add button action for picker buttons and create picker element
 *
 * @param  jQuery      btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Gabriel Birke <birke@d-scribe.de>
 */
function addBtnActionPicker($btn, props, edid) {
    var pickerid = 'picker'+(pickercounter++);
    var picker = createPicker(pickerid, props, edid);
    jQuery(picker).attr('aria-hidden', 'true');

    $btn.click(
        function(e) {
            pickerToggle(pickerid,$btn);
            e.preventDefault();
            return '';
        }
    );

    return pickerid;
}

/**
 * Add button action for the link wizard button
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
function addBtnActionLinkwiz($btn, props, edid) {
    dw_linkwiz.init(jQuery('#'+edid));
    jQuery($btn).click(function(e){
        dw_linkwiz.val = props;
        dw_linkwiz.toggle();
        e.preventDefault();
        return '';
    });
    return 'link__wiz';
}


/**
 * Show/Hide a previously created picker window
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerToggle(pickerid,$btn){
    var $picker = jQuery('#' + pickerid),
        pos = $btn.offset();
    if ($picker.hasClass('a11y')) {
        $picker.removeClass('a11y').attr('aria-hidden', 'false');
    } else {
        $picker.addClass('a11y').attr('aria-hidden', 'true');
    }
    var picker_left = pos.left + 3,
        picker_width = $picker.width(),
        window_width = jQuery(window).width();
    if (picker_width > 300) {
        $picker.css("max-width", "300");
        picker_width = 300;
    }
    if ((picker_left + picker_width + 40) > window_width) {
        picker_left = window_width - picker_width - 40;
    }
    if (picker_left < 0) {
        picker_left = 0;
    }
    $picker.offset({left: picker_left, top: pos.top+$btn[0].offsetHeight+3});
}

/**
 * Close all open pickers
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerClose(){
    jQuery('.picker').addClass('a11y');
}


/**
 * Replaces \n with linebreaks
 */
function fixtxt(str){
    return str.replace(/\\n/g,"\n");
}

jQuery(function () {
    initToolbar('tool__bar','wiki__text',toolbar);
    jQuery('#tool__bar').attr('role', 'toolbar');
});



/* XXXXXXXXXX end of lib/scripts/toolbar.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/edit.js XXXXXXXXXX */

/**
 * Functions for text editing (toolbar stuff)
 *
 * @todo most of the stuff in here should be revamped and then moved to toolbar.js
 * @author Andreas Gohr <andi@splitbrain.org>
 */

/**
 * Creates a toolbar button through the DOM
 * Called for each entry of toolbar definition array (built by inc/toolbar.php and extended via js)
 *
 * Style the buttons through the toolbutton class
 *
 * @param {string} icon      image filename, relative to folder lib/images/toolbar/
 * @param {string} label     title of button, show on mouseover
 * @param {string} key       hint in title of button for access key
 * @param {string} id        id of button, and '<id>_ico' of icon
 * @param {string} classname for styling buttons
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Michal Rezler <m.rezler@centrum.cz>
 */
function createToolButton(icon,label,key,id,classname){
    var $btn = jQuery(document.createElement('button')),
        $ico = jQuery(document.createElement('img'));

    // prepare the basic button stuff
    $btn.addClass('toolbutton');
    if(classname){
        $btn.addClass(classname);
    }

    $btn.attr('title', label).attr('aria-controls', 'wiki__text');
    if(key){
        $btn.attr('title', label + ' ['+key.toUpperCase()+']')
            .attr('accessKey', key);
    }

    // set IDs if given
    if(id){
        $btn.attr('id', id);
        $ico.attr('id', id+'_ico');
    }

    // create the icon and add it to the button
    if(icon.substr(0,1) !== '/'){
        icon = DOKU_BASE + 'lib/images/toolbar/' + icon;
    }
    $ico.attr('src', icon);
    $ico.attr('alt', '');
    $ico.attr('width', 16);
    $ico.attr('height', 16);
    $btn.append($ico);

    // we have to return a DOM object (for compatibility reasons)
    return $btn[0];
}

/**
 * Creates a picker window for inserting text
 *
 * The given list can be an associative array with text,icon pairs
 * or a simple list of text. Style the picker window through the picker
 * class or the picker buttons with the pickerbutton class. Picker
 * windows are appended to the body and created invisible.
 *
 * @param  {string} id    the ID to assign to the picker
 * @param  {Array}  props the properties for the picker
 * @param  {string} edid  the ID of the textarea
 * @return DOMobject    the created picker
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function createPicker(id,props,edid){
    // create the wrapping div
    var $picker = jQuery(document.createElement('div'));

    $picker.addClass('picker a11y');
    if(props['class']){
        $picker.addClass(props['class']);
    }

    $picker.attr('id', id).css('position', 'absolute');

    function $makebutton(title) {
        var $btn = jQuery(document.createElement('button'))
            .addClass('pickerbutton').attr('title', title)
            .attr('aria-controls', edid)
            .on('click', bind(pickerInsert, title, edid))
            .appendTo($picker);
        return $btn;
    }

    jQuery.each(props.list, function (key, item) {
        if (!props.list.hasOwnProperty(key)) {
            return;
        }

        if(isNaN(key)){
            // associative array -> treat as text => image pairs
            if (item.substr(0,1) !== '/') {
                item = DOKU_BASE+'lib/images/'+props.icobase+'/'+item;
            }
            jQuery(document.createElement('img'))
                .attr('src', item)
                .attr('alt', '')
                .appendTo($makebutton(key));
        }else if (typeof item == 'string'){
            // a list of text -> treat as text picker
            $makebutton(item).text(item);
        }else{
            // a list of lists -> treat it as subtoolbar
            initToolbar($picker,edid,props.list);
            return false; // all buttons handled already
        }

    });
    jQuery('body').append($picker);

    // we have to return a DOM object (for compatibility reasons)
    return $picker[0];
}

/**
 * Called by picker buttons to insert Text and close the picker again
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerInsert(text,edid){
    insertAtCarret(edid,text);
    pickerClose();
}

/**
 * Add button action for signature button
 *
 * @param  {jQuery} $btn   Button element to add the action to
 * @param  {Array}  props  Associative array of button properties
 * @param  {string} edid   ID of the editor textarea
 * @return {string} picker id for aria-controls attribute
 * @author Gabriel Birke <birke@d-scribe.de>
 */
function addBtnActionSignature($btn, props, edid) {
    if(typeof SIG != 'undefined' && SIG != ''){
        $btn.on('click', function (e) {
            insertAtCarret(edid,SIG);
            e.preventDefault();
        });
        return edid;
    }
    return '';
}

/**
 * Determine the current section level while editing
 *
 * @param {string} textboxId   ID of the text field
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
function currentHeadlineLevel(textboxId){
    var field = jQuery('#' + textboxId)[0],
        s = false,
        opts = [field.value.substr(0,DWgetSelection(field).start)];
    if (field.form.prefix) {
        // we need to look in prefix context
        opts.push(field.form.prefix.value);
    }

    jQuery.each(opts, function (_, opt) {
        // Check whether there is a headline in the given string
        var str = "\n" + opt,
            lasthl = str.lastIndexOf("\n==");
        if (lasthl !== -1) {
            s = str.substr(lasthl+1,6);
            return false;
        }
    });
    if (s === false) {
        return 0;
    }
    return 7 - s.match(/^={2,6}/)[0].length;
}


/**
 * global var used for not saved yet warning
 */
window.textChanged = false;

/**
 * global var which stores original editor content
 */
window.doku_edit_text_content = '';
/**
 * Delete the draft before leaving the page
 */
function deleteDraft() {
    if (is_opera || window.keepDraft) {
        return;
    }

    var $dwform = jQuery('#dw__editform');

    if($dwform.length === 0) {
        return;
    }

    // remove a possibly saved draft using ajax
    jQuery.post(DOKU_BASE + 'lib/exe/ajax.php',
        {
            call: 'draftdel',
            id: $dwform.find('input[name=id]').val()
        }
    );
}

/**
 * Activate "not saved" dialog, add draft deletion to page unload,
 * add handlers to monitor changes
 * Note: textChanged could be set by e.g. html_edit() as well
 *
 * Sets focus to the editbox as well
 */
jQuery(function () {
    var $editform = jQuery('#dw__editform');
    if ($editform.length == 0) {
        return;
    }

    var $edit_text = jQuery('#wiki__text');
    if ($edit_text.length > 0) {
        if($edit_text.attr('readOnly')) {
            return;
        }

        // set focus and place cursor at the start
        var sel = DWgetSelection($edit_text[0]);
        sel.start = 0;
        sel.end   = 0;
        DWsetSelection(sel);
        $edit_text.focus();

        doku_edit_text_content = $edit_text.val();
    }

    var changeHandler = function() {
        doku_hasTextBeenModified();

        doku_summaryCheck();
    };

    $editform.change(changeHandler);
    $editform.keydown(changeHandler);

    window.onbeforeunload = function(){
        if(window.textChanged) {
            return LANG.notsavedyet;
        }
    };
    window.onunload = deleteDraft;

    // reset change memory var on submit
    jQuery('#edbtn__save').click(
        function() {
            window.onbeforeunload = '';
            textChanged = false;
        }
    );
    jQuery('#edbtn__preview').click(
        function() {
            window.onbeforeunload = '';
            textChanged = false;
            window.keepDraft = true; // needed to keep draft on page unload
        }
    );

    var $summary = jQuery('#edit__summary');
    $summary.change(doku_summaryCheck);
    $summary.keyup(doku_summaryCheck);

    if (textChanged) doku_summaryCheck();
});

/**
 * Updates textChanged variable if content of the editor has been modified
 */
function doku_hasTextBeenModified() {
    if (!textChanged) {
        var $edit_text = jQuery('#wiki__text');

        if ($edit_text.length > 0) {
            textChanged = doku_edit_text_content != $edit_text.val();
        } else {
            textChanged = true;
        }
    }
}

/**
 * Checks if a summary was entered - if not the style is changed
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function doku_summaryCheck(){
    var $sum = jQuery('#edit__summary'),
        missing = $sum.val() === '';
    $sum.toggleClass('missing', missing).toggleClass('edit', !missing);
}



/* XXXXXXXXXX end of lib/scripts/edit.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/editor.js XXXXXXXXXX */

/**
 * The DokuWiki editor features
 *
 * These are the advanced features of the editor. It does NOT contain any
 * code for the toolbar buttons and it functions. See toolbar.js for that.
 */

var dw_editor = {

    /**
     * initialize the default editor functionality
     *
     * All other functions can also be called separately for non-default
     * textareas
     */
    init: function(){
        var $editor = jQuery('#wiki__text');
        if($editor.length === 0) {
            return;
        }

        dw_editor.initSizeCtl('#size__ctl',$editor);

        if($editor.attr('readOnly')) {
            return;
        }

        $editor.keydown(dw_editor.keyHandler);

    },

    /**
     * Add the edit window size and wrap controls
     *
     * Initial values are read from cookie if it exists
     *
     * @param selector ctlarea the div to place the controls
     * @param selector editor  the textarea to control
     */
    initSizeCtl: function(ctlarea,editor){
        var $ctl      = jQuery(ctlarea),
            $textarea = jQuery(editor);

        if($ctl.length === 0 || $textarea.length === 0) {
            return;
        }

        $textarea.css('height', DokuCookie.getValue('sizeCtl') || '300px');

        var wrp = DokuCookie.getValue('wrapCtl');
        if(wrp){
            dw_editor.setWrap($textarea[0], wrp);
        } // else use default value

        jQuery.each([
            ['larger', function(){dw_editor.sizeCtl(editor,100);}],
            ['smaller', function(){dw_editor.sizeCtl(editor,-100);}],
            ['wrap', function(){dw_editor.toggleWrap(editor);}]
        ], function (_, img) {
            jQuery(document.createElement('img'))
                .attr('src', DOKU_BASE+'lib/images/' + img[0] + '.gif')
                .attr('alt', '')
                .click(img[1])
                .appendTo($ctl);
        });
    },

    /**
     * This sets the vertical size of the editbox and adjusts the cookie
     *
     * @param selector editor  the textarea to control
     * @param int val          the relative value to resize in pixel
     */
    sizeCtl: function(editor,val){
        var $textarea = jQuery(editor),
            height = parseInt($textarea.css('height')) + val;
        $textarea.css('height', height+'px');
        DokuCookie.setValue('sizeCtl',$textarea.css('height'));
    },

    /**
     * Toggle the wrapping mode of the editor textarea and adjusts the
     * cookie
     *
     * @param selector editor  the textarea to control
     */
    toggleWrap: function(editor){
        var $textarea = jQuery(editor),
            wrap = $textarea.attr('wrap');
        dw_editor.setWrap($textarea[0],
                          (wrap && wrap.toLowerCase() == 'off') ? 'soft' : 'off');
        DokuCookie.setValue('wrapCtl',$textarea.attr('wrap'));
    },

    /**
     * Set the wrapping mode of a textarea
     *
     * @author Fluffy Convict <fluffyconvict@hotmail.com>
     * @author <shutdown@flashmail.com>
     * @link   http://news.hping.org/comp.lang.javascript.archive/12265.html
     * @link   https://bugzilla.mozilla.org/show_bug.cgi?id=41464
     * @param  DomObject textarea
     * @param  string wrapAttrValue
     */
    setWrap: function(textarea, wrapAttrValue){
        textarea.setAttribute('wrap', wrapAttrValue);

        // Fix display for mozilla
        var parNod = textarea.parentNode;
        var nxtSib = textarea.nextSibling;
        parNod.removeChild(textarea);
        parNod.insertBefore(textarea, nxtSib);
    },

    /**
     * Make intended formattings easier to handle
     *
     * Listens to all key inputs and handle indentions
     * of lists and code blocks
     *
     * Currently handles space, backspace, enter and
     * ctrl-enter presses
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @fixme handle tabs
     * @param event e - the key press event object
     */
    keyHandler: function(e){
        if(jQuery.inArray(e.keyCode,[8, 10, 13, 32]) === -1) {
            return;
        }
        var selection = DWgetSelection(this);
        if(selection.getLength() > 0) {
            return; //there was text selected, keep standard behavior
        }
        var search    = "\n"+this.value.substr(0,selection.start);
        var linestart = Math.max(search.lastIndexOf("\n"),
                                 search.lastIndexOf("\r")); //IE workaround
        search = search.substr(linestart);

        if((e.keyCode == 13 || e.keyCode == 10) && e.ctrlKey) { // Ctrl-Enter (With Chrome workaround)
            // Submit current edit
            jQuery('#edbtn__save').click();
            e.preventDefault(); // prevent enter key
            return false;
        }else if(e.keyCode == 13){ // Enter
            // keep current indention for lists and code
            var match = search.match(/(\n  +([\*-] ?)?)/);
            if(match){
                var scroll = this.scrollHeight;
                var match2 = search.match(/^\n  +[\*-]\s*$/);
                // Cancel list if the last item is empty (i. e. two times enter)
                if (match2 && this.value.substr(selection.start).match(/^($|\r?\n)/)) {
                    this.value = this.value.substr(0, linestart) + "\n" +
                                 this.value.substr(selection.start);
                    selection.start = linestart + 1;
                    selection.end = linestart + 1;
                    DWsetSelection(selection);
                } else {
                    insertAtCarret(this.id,match[1]);
                }
                this.scrollTop += (this.scrollHeight - scroll);
                e.preventDefault(); // prevent enter key
                return false;
            }
        }else if(e.keyCode == 8){ // Backspace
            // unindent lists
            var match = search.match(/(\n  +)([*-] ?)$/);
            if(match){
                var spaces = match[1].length-1;

                if(spaces > 3){ // unindent one level
                    this.value = this.value.substr(0,linestart)+
                                 this.value.substr(linestart+2);
                    selection.start = selection.start - 2;
                    selection.end   = selection.start;
                }else{ // delete list point
                    this.value = this.value.substr(0,linestart)+
                                 this.value.substr(selection.start);
                    selection.start = linestart;
                    selection.end   = linestart;
                }
                DWsetSelection(selection);
                e.preventDefault(); // prevent backspace
                return false;
            }
        }else if(e.keyCode == 32){ // Space
            // intend list item
            var match = search.match(/(\n  +)([*-] )$/);
            if(match){
                this.value = this.value.substr(0,linestart)+'  '+
                             this.value.substr(linestart);
                selection.start = selection.start + 2;
                selection.end   = selection.start;
                DWsetSelection(selection);
                e.preventDefault(); // prevent space
                return false;
            }
        }
    }


};

jQuery(dw_editor.init);



/* XXXXXXXXXX end of lib/scripts/editor.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/locktimer.js XXXXXXXXXX */

/**
 * Class managing the timer to display a warning on a expiring lock
 */
var dw_locktimer = {
    timeout: 0,
    draft: false,
    timerID: null,
    lasttime: null,
    msg: LANG.willexpire,
    pageid: '',

    /**
     * Initialize the lock timer
     *
     * @param {int}    timeout Length of timeout in seconds
     * @param {bool}   draft   Whether to save drafts
     * @param {string} edid    Optional; ID of an edit object which has to be present
     */
    init: function(timeout,draft,edid){
        var $edit;

        edid = edid || 'wiki__text';

        $edit = jQuery('#' + edid);
        if($edit.length === 0 || $edit.attr('readonly')) {
            return;
        }

        // init values
        dw_locktimer.timeout  = timeout*1000;
        dw_locktimer.draft    = draft;
        dw_locktimer.lasttime = new Date();

        dw_locktimer.pageid   = jQuery('#dw__editform').find('input[name=id]').val();
        if(!dw_locktimer.pageid) {
            return;
        }

        // register refresh event
        $edit.keypress(dw_locktimer.refresh);
        // start timer
        dw_locktimer.reset();
    },

    /**
     * (Re)start the warning timer
     */
    reset: function(){
        dw_locktimer.clear();
        dw_locktimer.timerID = window.setTimeout(dw_locktimer.warning, dw_locktimer.timeout);
    },

    /**
     * Display the warning about the expiring lock
     */
    warning: function(){
        dw_locktimer.clear();
        alert(fixtxt(dw_locktimer.msg));
    },

    /**
     * Remove the current warning timer
     */
    clear: function(){
        if(dw_locktimer.timerID !== null){
            window.clearTimeout(dw_locktimer.timerID);
            dw_locktimer.timerID = null;
        }
    },

    /**
     * Refresh the lock via AJAX
     *
     * Called on keypresses in the edit area
     */
    refresh: function(){
        var now = new Date(),
            params = 'call=lock&id=' + dw_locktimer.pageid + '&';

        // refresh every minute only
        if(now.getTime() - dw_locktimer.lasttime.getTime() <= 30*1000) {
            return;
        }

        // POST everything necessary for draft saving
        if(dw_locktimer.draft && jQuery('#dw__editform').find('textarea[name=wikitext]').length > 0){
            params += jQuery('#dw__editform').find('input[name=prefix], ' +
                                                   'textarea[name=wikitext], ' +
                                                   'input[name=suffix], ' +
                                                   'input[name=date]').serialize();
        }

        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            params,
            dw_locktimer.refreshed,
            'html'
        );
        dw_locktimer.lasttime = now;
    },

    /**
     * Callback. Resets the warning timer
     */
    refreshed: function(data){
        var error = data.charAt(0);
        data = data.substring(1);

        jQuery('#draft__status').html(data);
        if(error != '1') {
            return; // locking failed
        }
        dw_locktimer.reset();
    }
};



/* XXXXXXXXXX end of lib/scripts/locktimer.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/linkwiz.js XXXXXXXXXX */

/**
 * The Link Wizard
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 * @author Pierre Spring <pierre.spring@caillou.ch>
 */
var dw_linkwiz = {
    $wiz: null,
    $entry: null,
    result: null,
    timer: null,
    textArea: null,
    selected: null,
    selection: null,

    /**
     * Initialize the dw_linkwizard by creating the needed HTML
     * and attaching the eventhandlers
     */
    init: function($editor){
        // position relative to the text area
        var pos = $editor.position();

        // create HTML Structure
        if(dw_linkwiz.$wiz)
            return;
        dw_linkwiz.$wiz = jQuery(document.createElement('div'))
               .dialog({
                   autoOpen: false,
                   draggable: true,
                   title: LANG.linkwiz,
                   resizable: false
               })
               .html(
                    '<div>'+LANG.linkto+' <input type="text" class="edit" id="link__wiz_entry" autocomplete="off" /></div>'+
                    '<div id="link__wiz_result"></div>'
                    )
               .parent()
               .attr('id','link__wiz')
               .css({
                    'position':    'absolute',
                    'top':         (pos.top+20)+'px',
                    'left':        (pos.left+80)+'px'
                   })
               .hide()
               .appendTo('.dokuwiki:first');

        dw_linkwiz.textArea = $editor[0];
        dw_linkwiz.result = jQuery('#link__wiz_result')[0];

        // scrollview correction on arrow up/down gets easier
        jQuery(dw_linkwiz.result).css('position', 'relative');

        dw_linkwiz.$entry = jQuery('#link__wiz_entry');
        if(JSINFO.namespace){
            dw_linkwiz.$entry.val(JSINFO.namespace+':');
        }

        // attach event handlers
        jQuery('#link__wiz .ui-dialog-titlebar-close').click(dw_linkwiz.hide);
        dw_linkwiz.$entry.keyup(dw_linkwiz.onEntry);
        jQuery(dw_linkwiz.result).on('click', 'a', dw_linkwiz.onResultClick);
    },

    /**
     * handle all keyup events in the entry field
     */
    onEntry: function(e){
        if(e.keyCode == 37 || e.keyCode == 39){ //left/right
            return true; //ignore
        }
        if(e.keyCode == 27){ //Escape
            dw_linkwiz.hide();
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 38){ //Up
            dw_linkwiz.select(dw_linkwiz.selected -1);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 40){ //Down
            dw_linkwiz.select(dw_linkwiz.selected +1);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 13){ //Enter
            if(dw_linkwiz.selected > -1){
                var $obj = dw_linkwiz.$getResult(dw_linkwiz.selected);
                if($obj.length > 0){
                    dw_linkwiz.resultClick($obj.find('a')[0]);
                }
            }else if(dw_linkwiz.$entry.val()){
                dw_linkwiz.insertLink(dw_linkwiz.$entry.val());
            }

            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        dw_linkwiz.autocomplete();
    },

    /**
     * Get one of the results by index
     *
     * @param   num int result div to return
     * @returns DOMObject or null
     */
    getResult: function(num){
        DEPRECATED('use dw_linkwiz.$getResult()[0] instead');
        return dw_linkwiz.$getResult()[0] || null;
    },

    /**
     * Get one of the results by index
     *
     * @param   num int result div to return
     * @returns jQuery object
     */
    $getResult: function(num) {
        return jQuery(dw_linkwiz.result).find('div').eq(num);
    },

    /**
     * Select the given result
     */
    select: function(num){
        if(num < 0){
            dw_linkwiz.deselect();
            return;
        }

        var $obj = dw_linkwiz.$getResult(num);
        if ($obj.length === 0) {
            return;
        }

        dw_linkwiz.deselect();
        $obj.addClass('selected');

        // make sure the item is viewable in the scroll view

        //getting child position within the parent
        var childPos = $obj.position().top;
        //getting difference between the childs top and parents viewable area
        var yDiff = childPos + $obj.outerHeight() - jQuery(dw_linkwiz.result).innerHeight();

        if (childPos < 0) {
            //if childPos is above viewable area (that's why it goes negative)
            jQuery(dw_linkwiz.result)[0].scrollTop += childPos;
        } else if(yDiff > 0) {
            // if difference between childs top and parents viewable area is
            // greater than the height of a childDiv
            jQuery(dw_linkwiz.result)[0].scrollTop += yDiff;
        }

        dw_linkwiz.selected = num;
    },

    /**
     * deselect a result if any is selected
     */
    deselect: function(){
        if(dw_linkwiz.selected > -1){
            dw_linkwiz.$getResult(dw_linkwiz.selected).removeClass('selected');
        }
        dw_linkwiz.selected = -1;
    },

    /**
     * Handle clicks in the result set an dispatch them to
     * resultClick()
     */
    onResultClick: function(e){
        if(!jQuery(this).is('a')) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        dw_linkwiz.resultClick(this);
        return false;
    },

    /**
     * Handles the "click" on a given result anchor
     */
    resultClick: function(a){
        dw_linkwiz.$entry.val(a.title);
        if(a.title == '' || a.title.substr(a.title.length-1) == ':'){
            dw_linkwiz.autocomplete_exec();
        }else{
            if (jQuery(a.nextSibling).is('span')) {
                dw_linkwiz.insertLink(a.nextSibling.innerHTML);
            }else{
                dw_linkwiz.insertLink('');
            }
        }
    },

    /**
     * Insert the id currently in the entry box to the textarea,
     * replacing the current selection or at the cursor position.
     * When no selection is available the given title will be used
     * as link title instead
     */
    insertLink: function(title){
        var link = dw_linkwiz.$entry.val(),
            sel, stxt;
        if(!link) {
            return;
        }

        sel = DWgetSelection(dw_linkwiz.textArea);
        if(sel.start == 0 && sel.end == 0) {
            sel = dw_linkwiz.selection;
        }

        stxt = sel.getText();

        // don't include trailing space in selection
        if(stxt.charAt(stxt.length - 1) == ' '){
            sel.end--;
            stxt = sel.getText();
        }

        if(!stxt && !DOKU_UHC) {
            stxt=title;
        }

        // prepend colon inside namespaces for non namespace pages
        if(dw_linkwiz.textArea.form.id.value.indexOf(':') != -1 &&
           link.indexOf(':') == -1){
           link = ':' + link;
        }

        var so = link.length;
        var eo = 0;
        if(dw_linkwiz.val){
            if(dw_linkwiz.val.open) {
                so += dw_linkwiz.val.open.length;
                link = dw_linkwiz.val.open+link;
            }
            link += '|';
            so += 1;
            if(stxt) {
                link += stxt;
            }
            if(dw_linkwiz.val.close) {
                link += dw_linkwiz.val.close;
                eo = dw_linkwiz.val.close.length;
            }
        }

        pasteText(sel,link,{startofs: so, endofs: eo});
        dw_linkwiz.hide();

        // reset the entry to the parent namespace
        var externallinkpattern = new RegExp('^((f|ht)tps?:)?//', 'i'),
            entry_value;
        if (externallinkpattern.test(dw_linkwiz.$entry.val())) {
            if (JSINFO.namespace) {
                entry_value = JSINFO.namespace + ':';
            } else {
                entry_value = ''; //reset whole external links
            }
        } else {
            entry_value = dw_linkwiz.$entry.val().replace(/[^:]*$/, '')
        }
        dw_linkwiz.$entry.val(entry_value);
    },

    /**
     * Start the page/namespace lookup timer
     *
     * Calls autocomplete_exec when the timer runs out
     */
    autocomplete: function(){
        if(dw_linkwiz.timer !== null){
            window.clearTimeout(dw_linkwiz.timer);
            dw_linkwiz.timer = null;
        }

        dw_linkwiz.timer = window.setTimeout(dw_linkwiz.autocomplete_exec,350);
    },

    /**
     * Executes the AJAX call for the page/namespace lookup
     */
    autocomplete_exec: function(){
        var $res = jQuery(dw_linkwiz.result);
        dw_linkwiz.deselect();
        $res.html('<img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="" width="16" height="16" />')
            .load(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'linkwiz',
                q: dw_linkwiz.$entry.val()
            }
        );
    },

    /**
     * Show the link wizard
     */
    show: function(){
        dw_linkwiz.selection  = DWgetSelection(dw_linkwiz.textArea);
        dw_linkwiz.$wiz.show();
        dw_linkwiz.$entry.focus();
        dw_linkwiz.autocomplete();

        // Move the cursor to the end of the input
        var temp = dw_linkwiz.$entry.val();
        dw_linkwiz.$entry.val('');
        dw_linkwiz.$entry.val(temp);
    },

    /**
     * Hide the link wizard
     */
    hide: function(){
        dw_linkwiz.$wiz.hide();
        dw_linkwiz.textArea.focus();
    },

    /**
     * Toggle the link wizard
     */
    toggle: function(){
        if(dw_linkwiz.$wiz.css('display') == 'none'){
            dw_linkwiz.show();
        }else{
            dw_linkwiz.hide();
        }
    }
};



/* XXXXXXXXXX end of lib/scripts/linkwiz.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/media.js XXXXXXXXXX */

/**
 * JavaScript functionality for the media management popup
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Pierre Spring <pierre.spring@caillou.ch>
 */

var dw_mediamanager = {
    keepopen: false,
    hide: false,
    popup: false,
    display: false,
    ext: false,
    $popup: null,

    // Image insertion opts
    align: false,
    link: false,
    size: false,
    forbidden_opts: {},

    // File list options
    view_opts: {list: false, sort: false},

    layout_width: 0,

    // The minimum height of the full-screen mediamanager in px
    minHeights: {thumbs: 200, rows: 100},

    init: function () {
        var $content, $tree;
        $content = jQuery('#media__content');
        $tree = jQuery('#media__tree');
        if (!$tree.length) return;

        dw_mediamanager.prepare_content($content);

        dw_mediamanager.attachoptions();
        dw_mediamanager.initpopup();

        // add the action to autofill the "upload as" field
        $content
            .on('change', '#upload__file', dw_mediamanager.suggest)
            // Attach the image selector action to all links
            .on('click', 'a.select', dw_mediamanager.select)
            // Attach deletion confirmation dialog to the delete buttons
            .on('click', '#media__content a.btn_media_delete', dw_mediamanager.confirmattach)
            .on('submit', '#mediamanager__done_form', dw_mediamanager.list);

        $tree.dw_tree({
            toggle_selector: 'img',
            load_data: function (show_sublist, $clicky) {
                // get the enclosed link (is always the first one)
                var $link = $clicky.parent().find('div.li a.idx_dir');

                jQuery.post(
                    DOKU_BASE + 'lib/exe/ajax.php',
                    $link[0].search.substr(1) + '&call=medians',
                    show_sublist,
                    'html'
                );
            },

            toggle_display: function ($clicky, opening) {
                $clicky.attr('src', DOKU_BASE + 'lib/images/' + (opening ? 'minus' : 'plus') + '.gif');
            }
        });
        $tree.on('click', 'a', dw_mediamanager.list);

        // Init view property
        dw_mediamanager.set_fileview_list();

        dw_mediamanager.init_options();

        dw_mediamanager.image_diff();
        dw_mediamanager.init_ajax_uploader();

        // changing opened tab in the file list panel
        var $page = jQuery('#mediamanager__page');
        $page.find('div.filelist')
            .on('click', 'ul.tabs a', dw_mediamanager.list)
            // loading file details
            .on('click', 'div.panelContent a', dw_mediamanager.details)
            // search form
            .on('submit', '#dw__mediasearch', dw_mediamanager.list)
            // "upload as" field autofill
            .on('change', '#upload__file', dw_mediamanager.suggest)
            // uploaded images
            .on('click', '.qq-upload-file a', dw_mediamanager.details);

        // changing opened tab in the file details panel
        $page.find('div.file')
            .on('click', 'ul.tabs a', dw_mediamanager.details)
            // "update new version" button
            .on('submit', '#mediamanager__btn_update', dw_mediamanager.list)
            // revisions form
            .on('submit', '#page__revisions', dw_mediamanager.details)
            .on('click', '#page__revisions a', dw_mediamanager.details)
            // meta edit form
            .on('submit', '#mediamanager__save_meta', dw_mediamanager.details)
            // delete button
            .on('submit', '#mediamanager__btn_delete', dw_mediamanager.details)
            // "restore this version" button
            .on('submit', '#mediamanager__btn_restore', dw_mediamanager.details)
            // less/more recent buttons in media revisions form
            .on('submit', '.btn_newer, .btn_older', dw_mediamanager.details);

        dw_mediamanager.update_resizable();
        dw_mediamanager.layout_width = $page.width();
        jQuery(window).resize(dw_mediamanager.window_resize);
    },

    init_options: function () {
        var $options = jQuery('div.filelist div.panelHeader form.options'),
            $listType, $sortBy, $both;
        if ($options.length === 0) {
            return;
        }

        $listType = $options.find('li.listType');
        $sortBy = $options.find('li.sortBy');
        $both = $listType.add($sortBy);

        // Remove the submit button
        $options.find('button[type=submit]').parent().hide();

        // Prepare HTML for jQuery UI buttonset
        $both.find('label').each(function () {
            var $this = jQuery(this);
            $this.children('input').appendTo($this.parent());
        });

        // Init buttonset
        $both.find("input[type='radio']").checkboxradio({icon: false});
        $both.controlgroup();

        // Change handlers
        $listType.children('input').change(function () {
            dw_mediamanager.set_fileview_list();
        });
        $sortBy.children('input').change(function (event) {
            dw_mediamanager.set_fileview_sort();
            dw_mediamanager.list.call(jQuery('#dw__mediasearch')[0] || this, event);
        });
    },

    /**
     * build the popup window
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    initpopup: function () {
        var opts, $insp, $insbtn;

        dw_mediamanager.$popup = jQuery(document.createElement('div'))
            .attr('id', 'media__popup_content')
            .dialog({
                autoOpen: false, width: 280, modal: true,
                draggable: true, title: LANG.mediatitle,
                resizable: false
            });

        opts = [
            {
                id: 'link', label: LANG.mediatarget,
                btns: ['lnk', 'direct', 'nolnk', 'displaylnk']
            },
            {
                id: 'align', label: LANG.mediaalign,
                btns: ['noalign', 'left', 'center', 'right']
            },
            {
                id: 'size', label: LANG.mediasize,
                btns: ['small', 'medium', 'large', 'original']
            }
        ];

        jQuery.each(opts, function (_, opt) {
            var $p, $l;
            $p = jQuery(document.createElement('p'))
                .attr('id', 'media__' + opt.id);

            if (dw_mediamanager.display === "2") {
                $p.hide();
            }

            $l = jQuery(document.createElement('label'))
                .text(opt.label);
            $p.append($l);

            jQuery.each(opt.btns, function (i, text) {
                var $btn, $img;
                $btn = jQuery(document.createElement('button'))
                    .addClass('button')
                    .attr('id', "media__" + opt.id + "btn" + (i + 1))
                    .attr('title', LANG['media' + text])
                    .click(bind(dw_mediamanager.setOpt, opt.id));

                $img = jQuery(document.createElement('img'))
                    .attr('src', DOKU_BASE + 'lib/images/media_' + opt.id + '_' + text + '.png');

                $btn.append($img);
                $p.append($btn);
            });

            dw_mediamanager.$popup.append($p);
        });

        // insert button
        $insp = jQuery(document.createElement('p'));
        dw_mediamanager.$popup.append($insp);

        $insbtn = jQuery(document.createElement('input'))
            .attr('id', 'media__sendbtn')
            .attr('type', 'button')
            .addClass('button')
            .val(LANG.mediainsert);
        $insp.append($insbtn);
    },

    /**
     * Insert the clicked image into the opener's textarea
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    insert: function (id) {
        var opts, cb, edid, s;

        // set syntax options
        dw_mediamanager.$popup.dialog('close');

        opts = '';

        if ({img: 1, swf: 1}[dw_mediamanager.ext] === 1) {

            if (dw_mediamanager.link === '4') {
                opts = '?linkonly';
            } else {

                if (dw_mediamanager.link === "3" && dw_mediamanager.ext === 'img') {
                    opts = '?nolink';
                } else if (dw_mediamanager.link === "2" && dw_mediamanager.ext === 'img') {
                    opts = '?direct';
                }

                s = parseInt(dw_mediamanager.size, 10);
                var size = s * 200;

                if (s && s >= 1 && s < 4) {
                    opts += (opts.length) ? '&' : '?';
                    opts += size;
                    if (dw_mediamanager.ext === 'swf') {
                        switch (s) {
                            case 1:
                                opts += 'x62';
                                break;
                            case 2:
                                opts += 'x123';
                                break;
                            case 3:
                                opts += 'x185';
                                break;
                        }
                    }
                }
            }
        }
        edid = String.prototype.match.call(document.location, /&edid=([^&]+)/);
        edid = edid ? edid[1] : 'wiki__text';
        cb = String.prototype.match.call(document.location, /&onselect=([^&]+)/);
        cb = cb ? cb[1].replace(/[^\w]+/, '') : 'dw_mediamanager_item_select';

        // arguments here only match the dw_mediamanager_item_select function, these will need to change if you override cb with onselect GET param
        opener[cb](edid, id, opts, dw_mediamanager.align, dw_mediamanager.keepopen);
        if (!dw_mediamanager.keepopen) {
            window.close();
        }
        opener.focus();
        return false;
    },


    /**
     * Prefills the wikiname.
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    suggest: function () {
        var $file, $name, text;

        $file = jQuery(this);
        $name = jQuery('#upload__name');

        if ($name.val() != '') return;

        if (!$file.length || !$name.length) {
            return;
        }

        text = $file.val();
        text = text.substr(text.lastIndexOf('/') + 1);
        text = text.substr(text.lastIndexOf('\\') + 1);
        $name.val(text);
    },

    /**
     * list the content of a namespace using AJAX
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    list: function (event) {
        var $link, $content, params;

        if (event) {
            event.preventDefault();
        }

        jQuery('div.success, div.info, div.error, div.notify').remove();

        $link = jQuery(this);

        //popup
        $content = jQuery('#media__content');

        if ($content.length === 0) {
            //fullscreen media manager
            $content = jQuery('div.filelist');

            if ($link.hasClass('idx_dir')) {
                //changing namespace
                jQuery('div.file').empty();
                jQuery('div.namespaces .selected').removeClass('selected');
                $link.addClass('selected');
            }
        }

        params = 'call=medialist&';

        if ($link[0].search) {
            params += $link[0].search.substr(1);
        } else if ($link.is('form')) {
            params += dw_mediamanager.form_params($link);
        } else if ($link.closest('form').length > 0) {
            params += dw_mediamanager.form_params($link.closest('form'));
        }

        // fetch the subtree
        dw_mediamanager.update_content($content, params);
    },

    /**
     * Returns form parameters
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    form_params: function ($form) {
        if (!$form.length) return;

        var action = '';
        var i = $form[0].action.indexOf('?');
        if (i >= 0) {
            action = $form[0].action.substr(i + 1);
        }
        return action + '&' + $form.serialize();
    },

    set_fileview_list: function (new_type) {
        dw_mediamanager.set_fileview_opt(['list', 'listType', function (new_type) {
            jQuery('div.filelist div.panelContent ul')
                .toggleClass('rows', new_type === 'rows')
                .toggleClass('thumbs', new_type === 'thumbs');
        }], new_type);

        // FIXME: Move to onchange handler (opt[2])?
        dw_mediamanager.resize();
    },

    set_fileview_sort: function (new_sort) {
        dw_mediamanager.set_fileview_opt(['sort', 'sortBy', function (new_sort) {
            // FIXME
        }], new_sort);
    },

    set_fileview_opt: function (opt, new_val) {
        if (typeof new_val === 'undefined') {
            new_val = jQuery('form.options li.' + opt[1] + ' input')
                .filter(':checked').val();
            // if new_val is still undefined (because form.options is not in active tab), set to most spacious option
            if (typeof new_val === 'undefined') {
                new_val = 'thumbs';
            }
        }

        if (new_val !== dw_mediamanager.view_opts[opt[0]]) {
            opt[2](new_val);

            DokuCookie.setValue(opt[0], new_val);

            dw_mediamanager.view_opts[opt[0]] = new_val;
        }
    },

    /**
     * Lists the content of the right column (image details) using AJAX
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    details: function (event) {
        var $link, $content, params, update_list;
        $link = jQuery(this);
        event.preventDefault();

        jQuery('div.success, div.info, div.error, div.notify').remove();

        if ($link[0].id == 'mediamanager__btn_delete' && !confirm(LANG.del_confirm)) {
            return false;
        }
        if ($link[0].id == 'mediamanager__btn_restore' && !confirm(LANG.restore_confirm)) {
            return false;
        }

        $content = jQuery('div.file');
        params = 'call=mediadetails&';

        if ($link[0].search) {
            params += $link[0].search.substr(1);
        } else if ($link.is('form')) {
            params += dw_mediamanager.form_params($link);
        } else if ($link.closest('form').length > 0) {
            params += dw_mediamanager.form_params($link.closest('form'));
        }

        update_list = ($link[0].id == 'mediamanager__btn_delete' ||
        $link[0].id == 'mediamanager__btn_restore');

        dw_mediamanager.update_content($content, params, update_list);
    },

    update_content: function ($content, params, update_list) {
        var $container;

        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            params,
            function (data) {
                dw_mediamanager.$resizables().resizable('destroy');

                if (update_list) {
                    dw_mediamanager.list.call(jQuery('#mediamanager__page').find('form.options button[type="submit"]')[0]);
                }

                $content.html(data);

                dw_mediamanager.prepare_content($content);
                dw_mediamanager.updatehide();

                dw_mediamanager.update_resizable();
                dw_behaviour.revisionBoxHandler();

                // Make sure that the list view style stays the same
                dw_mediamanager.set_fileview_list(dw_mediamanager.view_opts.list);

                dw_mediamanager.image_diff();
                dw_mediamanager.init_ajax_uploader();
                dw_mediamanager.init_options();

            },
            'html'
        );
        $container = $content.find('div.panelContent');
        if ($container.length === 0) {
            $container = $content;
        }
        $container.html('<img src="' + DOKU_BASE + 'lib/images/loading.gif" alt="..." class="load" />');
    },

    window_resize: function () {
        dw_mediamanager.resize();

        dw_mediamanager.opacity_slider();
        dw_mediamanager.portions_slider();
    },

    $resizables: function () {
        return jQuery('#mediamanager__page').find('div.namespaces, div.filelist');
    },

    /**
     * Updates mediamanager layout
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    update_resizable: function () {
        var $resizables = dw_mediamanager.$resizables();

        $resizables.resizable({
            handles: (jQuery('html[dir=rtl]').length ? 'w' : 'e'),
            resize: function (event, ui) {
                var $page = jQuery('#mediamanager__page');
                var widthFull = $page.width();
                var widthResizables = 0;
                $resizables.each(function () {
                    widthResizables += jQuery(this).width();
                });
                var $filePanel = $page.find('div.panel.file');

                // set max width of resizable column
                var widthOtherResizable = widthResizables - jQuery(this).width();
                var minWidthNonResizable = parseFloat($filePanel.css("min-width"));
                var maxWidth = widthFull - (widthOtherResizable + minWidthNonResizable) - 1;
                $resizables.resizable("option", "maxWidth", maxWidth);

                // width of file panel in % = 100% - width of resizables in %
                // this calculates with 99.9 and not 100 to overcome rounding errors
                var relWidthNonResizable = 99.9 - (100 * widthResizables / widthFull);
                // set width of file panel
                $filePanel.width(relWidthNonResizable + '%');

                dw_mediamanager.resize();

                dw_mediamanager.opacity_slider();
                dw_mediamanager.portions_slider();
            }
        });

        dw_mediamanager.resize();
    },

    resize: function () {
        var $contents = jQuery('#mediamanager__page').find('div.panelContent'),
            height = jQuery(window).height() - jQuery(document.body).height() +
                Math.max.apply(null, jQuery.map($contents, function (v) {
                    return jQuery(v).height();
                }));

        // If the screen is too small, don’t try to resize
        if (height < dw_mediamanager.minHeights[dw_mediamanager.view_opts.list]) {
            $contents.add(dw_mediamanager.$resizables()).height('auto');
        } else {
            $contents.height(height);
            dw_mediamanager.$resizables().each(function () {
                var $this = jQuery(this);
                $this.height(height + $this.find('div.panelContent').offset().top - $this.offset().top);
            });
        }
    },

    /**
     * Prints 'select' for image difference representation type
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    image_diff: function () {
        if (jQuery('#mediamanager__difftype').length) return;

        var $form = jQuery('#mediamanager__form_diffview');
        if (!$form.length) return;

        var $label = jQuery(document.createElement('label'));
        $label.append('<span>' + LANG.media_diff + '</span> ');
        var $select = jQuery(document.createElement('select'))
            .attr('id', 'mediamanager__difftype')
            .attr('name', 'difftype')
            .change(dw_mediamanager.change_diff_type);
        $select.append(new Option(LANG.media_diff_both, "both"));
        $select.append(new Option(LANG.media_diff_opacity, "opacity"));
        $select.append(new Option(LANG.media_diff_portions, "portions"));
        $label.append($select);
        $form.append($label);

        // for IE
        var select = document.getElementById('mediamanager__difftype');
        select.options[0].text = LANG.media_diff_both;
        select.options[1].text = LANG.media_diff_opacity;
        select.options[2].text = LANG.media_diff_portions;
    },

    /**
     * Handles selection of image difference representation type
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    change_diff_type: function () {
        var $select = jQuery('#mediamanager__difftype');
        var $content = jQuery('#mediamanager__diff');

        var params = dw_mediamanager.form_params($select.closest('form')) + '&call=mediadiff';
        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            params,
            function (data) {
                $content.html(data);
                dw_mediamanager.portions_slider();
                dw_mediamanager.opacity_slider();
            },
            'html'
        );
    },

    /**
     * Sets options for opacity diff slider
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    opacity_slider: function () {
        var $diff = jQuery("#mediamanager__diff");
        var $slider = $diff.find("div.slider");
        if (!$slider.length) return;

        var $image = $diff.find('div.imageDiff.opacity div.image1 img');
        if (!$image.length) return;
        $slider.width($image.width() - 20);

        $slider.slider();
        $slider.slider("option", "min", 0);
        $slider.slider("option", "max", 0.999);
        $slider.slider("option", "step", 0.001);
        $slider.slider("option", "value", 0.5);
        $slider.on("slide", function (event, ui) {
            jQuery('#mediamanager__diff').find('div.imageDiff.opacity div.image2 img').css({opacity: $slider.slider("option", "value")});
        });
    },

    /**
     * Sets options for red line diff slider
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    portions_slider: function () {
        var $diff = jQuery("#mediamanager__diff");
        if (!$diff.length) return;

        var $image1 = $diff.find('div.imageDiff.portions div.image1 img');
        var $image2 = $diff.find('div.imageDiff.portions div.image2 img');
        if (!$image1.length || !$image2.length) return;

        $diff.width('100%');
        $image2.parent().width('97%');
        $image1.width('100%');
        $image2.width('100%');

        if ($image1.width() < $diff.width()) {
            $diff.width($image1.width());
        }

        $image2.parent().width('50%');
        $image2.width($image1.width());
        $image1.width($image1.width());

        var $slider = $diff.find("div.slider");
        if (!$slider.length) return;
        $slider.width($image1.width() - 20);

        $slider.slider();
        $slider.slider("option", "min", 0);
        $slider.slider("option", "max", 97);
        $slider.slider("option", "step", 1);
        $slider.slider("option", "value", 50);
        $slider.on("slide", function (event, ui) {
            jQuery('#mediamanager__diff').find('div.imageDiff.portions div.image2').css({width: $slider.slider("option", "value") + '%'});
        });
    },

    /**
     * Parse a URI query string to an associative array
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    params_toarray: function (str) {
        var vars = [], hash;
        var hashes = str.split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[decodeURIComponent(hash[0])] = decodeURIComponent(hash[1]);
        }
        return vars;
    },

    init_ajax_uploader: function () {
        if (!jQuery('#mediamanager__uploader').length) return;
        if (jQuery('.qq-upload-list').length) return;

        var params = dw_mediamanager.form_params(jQuery('#dw__upload')) + '&call=mediaupload';
        params = dw_mediamanager.params_toarray(params);

        var uploader = new qq.FileUploaderExtended({
            element: document.getElementById('mediamanager__uploader'),
            action: DOKU_BASE + 'lib/exe/ajax.php',
            params: params
        });
    },

    prepare_content: function ($content) {
        // hide syntax example
        $content.find('div.example:visible').hide();
    },

    /**
     * shows the popup for a image link
     */
    select: function (event) {
        var $link, id, dot, ext;

        event.preventDefault();

        $link = jQuery(this);
        id = $link.attr('id').substr(2);

        if (!opener) {
            // if we don't run in popup display example
            // the id's are a bit wierd and jQuery('#ex_wiki_dokuwiki-128.png')
            // will not be found by Sizzle (the CSS Selector Engine
            // used by jQuery), hence the document.getElementById() call
            jQuery(document.getElementById('ex_' + id.replace(/:/g, '_').replace(/^_/, ''))).dw_toggle();
            return;
        }

        dw_mediamanager.ext = false;
        dot = id.lastIndexOf(".");

        if (-1 === dot) {
            dw_mediamanager.insert(id);
            return;
        }

        ext = id.substr(dot);

        if ({'.jpg': 1, '.jpeg': 1, '.png': 1, '.gif': 1, '.swf': 1}[ext] !== 1) {
            dw_mediamanager.insert(id);
            return;
        }

        // remove old callback from the insert button and set the new one.
        var $sendbtn = jQuery('#media__sendbtn');
        $sendbtn.off().click(bind(dw_mediamanager.insert, id));

        dw_mediamanager.unforbid('ext');
        if (ext === '.swf') {
            dw_mediamanager.ext = 'swf';
            dw_mediamanager.forbid('ext', {
                link: ['1', '2'],
                size: ['4']
            });
        } else {
            dw_mediamanager.ext = 'img';
        }

        // Set to defaults
        dw_mediamanager.setOpt('link');
        dw_mediamanager.setOpt('align');
        dw_mediamanager.setOpt('size');

        // toggle buttons for detail and linked image, original size
        jQuery('#media__linkbtn1, #media__linkbtn2, #media__sizebtn4')
            .toggle(dw_mediamanager.ext === 'img');

        dw_mediamanager.$popup.dialog('open');

        $sendbtn.focus();
    },

    /**
     * Deletion confirmation dialog to the delete buttons.
     *
     * @author Michael Klier <chi@chimeric.de>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    confirmattach: function (e) {
        if (!confirm(LANG.del_confirm + "\n" + jQuery(this).attr('title'))) {
            e.preventDefault();
        }
    },

    /**
     * Creates checkboxes for additional options
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    attachoptions: function () {
        var $obj, opts;

        $obj = jQuery('#media__opts');
        if ($obj.length === 0) {
            return;
        }

        opts = [];
        // keep open
        if (opener) {
            opts.push(['keepopen', 'keepopen']);
        }
        opts.push(['hide', 'hidedetails']);

        jQuery.each(opts,
            function (_, opt) {
                var $box, $lbl;
                $box = jQuery(document.createElement('input'))
                    .attr('type', 'checkbox')
                    .attr('id', 'media__' + opt[0])
                    .click(bind(dw_mediamanager.toggleOption, opt[0]));

                if (DokuCookie.getValue(opt[0])) {
                    $box.prop('checked', true);
                    dw_mediamanager[opt[0]] = true;
                }

                $lbl = jQuery(document.createElement('label'))
                    .attr('for', 'media__' + opt[0])
                    .text(LANG[opt[1]]);

                $obj.append($box, $lbl, document.createElement('br'));
            });

        dw_mediamanager.updatehide();
    },

    /**
     * Generalized toggler
     *
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    toggleOption: function (variable) {
        if (jQuery(this).prop('checked')) {
            DokuCookie.setValue(variable, 1);
            dw_mediamanager[variable] = true;
        } else {
            DokuCookie.setValue(variable, '');
            dw_mediamanager[variable] = false;
        }
        if (variable === 'hide') {
            dw_mediamanager.updatehide();
        }
    },

    /**
     * Sets the visibility of the image details accordingly to the
     * chosen hide state
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    updatehide: function () {
        jQuery('#media__content').find('div.detail').dw_toggle(!dw_mediamanager.hide);
    },

    /**
     * set media insertion option
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    setOpt: function (opt, e) {
        var val, i;
        if (typeof e !== 'undefined') {
            val = this.id.substring(this.id.length - 1);
        } else {
            val = dw_mediamanager.getOpt(opt);
        }

        if (val === false) {
            DokuCookie.setValue(opt, '');
            dw_mediamanager[opt] = false;
            return;
        }

        if (opt === 'link') {
            if (val !== '4' && dw_mediamanager.link === '4') {
                dw_mediamanager.unforbid('linkonly');
                dw_mediamanager.setOpt('align');
                dw_mediamanager.setOpt('size');
            } else if (val === '4') {
                dw_mediamanager.forbid('linkonly', {align: false, size: false});
            }

            jQuery("#media__size, #media__align").dw_toggle(val !== '4');
        }

        DokuCookie.setValue(opt, val);
        dw_mediamanager[opt] = val;

        for (i = 1; i <= 4; i++) {
            jQuery("#media__" + opt + "btn" + i).removeClass('selected');
        }
        jQuery('#media__' + opt + 'btn' + val).addClass('selected');
    },

    unforbid: function (group) {
        delete dw_mediamanager.forbidden_opts[group];
    },

    forbid: function (group, forbids) {
        dw_mediamanager.forbidden_opts[group] = forbids;
    },

    allowedOpt: function (opt, val) {
        var ret = true;
        jQuery.each(dw_mediamanager.forbidden_opts,
            function (_, forbids) {
                ret = forbids[opt] !== false &&
                    jQuery.inArray(val, forbids[opt]) === -1;
                return ret;
            });
        return ret;
    },

    getOpt: function (opt) {
        var allowed = bind(dw_mediamanager.allowedOpt, opt);

        // Current value
        if (dw_mediamanager[opt] !== false && allowed(dw_mediamanager[opt])) {
            return dw_mediamanager[opt];
        }

        // From cookie
        if (DokuCookie.getValue(opt) && allowed(DokuCookie.getValue(opt))) {
            return DokuCookie.getValue(opt);
        }

        // size default
        if (opt === 'size' && allowed('2')) {
            return '2';
        }

        // Whatever is allowed, and be it false
        return jQuery.grep(['1', '2', '3', '4'], allowed)[0] || false;
    }
};

/**
 * Default implementation for the media manager's select action
 *
 * Can be overriden with the onselect URL parameter. Is called on the opener context
 *
 * @param {string} edid
 * @param {string} mediaid
 * @param {string} opts
 * @param {string} align [none, left, center, right]
 */
function dw_mediamanager_item_select(edid, mediaid, opts, align, keepopen) {
    var alignleft = '';
    var alignright = '';

    // Get the 2 characters after the cursor to check if we're currently inside an image tag
    var cursorInImageTag = false;
    var textArea = jQuery('#' + edid)[0];
    var selection = DWgetSelection(textArea);
    selection.end = selection.end + 2;
    var charsAfterCursor = selection.getText();
    if (charsAfterCursor === '}}') {
        cursorInImageTag = true;
    }

    if (align !== '1') {
        alignleft = align === '2' ? '' : ' ';
        alignright = align === '4' ? '' : ' ';
    }
    if (keepopen && cursorInImageTag) {
        selection.start = selection.start + 2;
        DWsetSelection(selection);
    }
    insertTags(edid, '{{' + alignleft + mediaid + opts + alignright + '|', '}}', '');
}

jQuery(dw_mediamanager.init);



/* XXXXXXXXXX end of lib/scripts/media.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/compatibility.js XXXXXXXXXX */

/**
 * Mark a JavaScript function as deprecated
 *
 * This will print a warning to the JavaScript console (if available) in
 * Firebug and Chrome and a stack trace (if available) to easily locate the
 * problematic function call.
 *
 * @param msg optional message to print
 */
function DEPRECATED(msg){
    if(!window.console) return;
    if(!msg) msg = '';

    var func;
    if(arguments.callee) func = arguments.callee.caller.name;
    if(func) func = ' '+func+'()';
    var line = 'DEPRECATED function call'+func+'. '+msg;

    if(console.warn){
        console.warn(line);
    }else{
        console.log(line);
    }

    if(console.trace) console.trace();
}

/**
 * Construct a wrapper function for deprecated function names
 *
 * This function returns a wrapper function which just calls DEPRECATED
 * and the new function.
 *
 * @param func    The new function
 * @param context Optional; The context (`this`) of the call
 */
function DEPRECATED_WRAP(func, context) {
    return function () {
        DEPRECATED();
        return func.apply(context || this, arguments);
    };
}



/* XXXXXXXXXX end of lib/scripts/compatibility.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/behaviour.js XXXXXXXXXX */

/**
 * Hides elements with a slide animation
 *
 * @param {function} fn optional callback to run after hiding
 * @param {bool} noaria supress aria-expanded state setting
 * @author Adrian Lang <mail@adrianlang.de>
 */
jQuery.fn.dw_hide = function(fn, noaria) {
    if(!noaria) this.attr('aria-expanded', 'false');
    return this.slideUp('fast', fn);
};

/**
 * Unhides elements with a slide animation
 *
 * @param {function} fn optional callback to run after hiding
 * @param {bool} noaria supress aria-expanded state setting
 * @author Adrian Lang <mail@adrianlang.de>
 */
jQuery.fn.dw_show = function(fn, noaria) {
    if(!noaria) this.attr('aria-expanded', 'true');
    return this.slideDown('fast', fn);
};

/**
 * Toggles visibility of an element using a slide element
 *
 * @param {bool} state the current state of the element (optional)
 * @param {function} fn callback after the state has been toggled
 * @param {bool} noaria supress aria-expanded state setting
 */
jQuery.fn.dw_toggle = function(state, fn, noaria) {
    return this.each(function() {
        var $this = jQuery(this);
        if (typeof state === 'undefined') {
            state = $this.is(':hidden');
        }
        $this[state ? "dw_show" : "dw_hide" ](fn, noaria);
    });
};

/**
 * Automatic behaviours
 *
 * This class wraps various JavaScript functionalities that are triggered
 * automatically whenever a certain object is in the DOM or a certain CSS
 * class was found
 */
var dw_behaviour = {

    init: function(){
        dw_behaviour.focusMarker();
        dw_behaviour.scrollToMarker();
        dw_behaviour.removeHighlightOnClick();
        dw_behaviour.quickSelect();
        dw_behaviour.checkWindowsShares();
        dw_behaviour.subscription();

        dw_behaviour.revisionBoxHandler();
        jQuery(document).on('click','#page__revisions input[type=checkbox]',
            dw_behaviour.revisionBoxHandler
        );

        jQuery('.bounce').effect('bounce', {times:10}, 2000 );
    },

    /**
     * Looks for an element with the ID scroll__here at scrolls to it
     */
    scrollToMarker: function(){
        var $obj = jQuery('#scroll__here');
        if($obj.length) {
            if($obj.offset().top != 0) {
                jQuery('html, body').animate({
                    scrollTop: $obj.offset().top - 100
                }, 500);
            } else {
                // hidden object have no offset but can still be scrolled into view
                $obj[0].scrollIntoView();
            }
        }
    },

    /**
     * Looks for an element with the ID focus__this at sets focus to it
     */
    focusMarker: function(){
        jQuery('#focus__this').focus();
    },

    /**
     * Remove all search highlighting when clicking on a highlighted term
     */
    removeHighlightOnClick: function(){
        jQuery('span.search_hit').click(
            function(e){
                jQuery(e.target).removeClass('search_hit', 1000);
            }
        );
    },

    /**
     * Autosubmit quick select forms
     *
     * When a <select> tag has the class "quickselect", this script will
     * automatically submit its parent form when the select value changes.
     * It also hides the submit button of the form.
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    quickSelect: function(){
        jQuery('select.quickselect')
            .change(function(e){ e.target.form.submit(); })
            .closest('form').find(':button').not('.show').hide();
    },

    /**
     * Display error for Windows Shares on browsers other than IE
     *
     * @author Michael Klier <chi@chimeric.de>
     */
    checkWindowsShares: function() {
        if(!LANG.nosmblinks || navigator.userAgent.match(/(Trident|MSIE)/)) {
            // No warning requested or none necessary
            return;
        }

        jQuery('a.windows').on('click', function(){
            alert(LANG.nosmblinks.replace(/\\n/,"\n"));
        });
    },

    /**
     * Hide list subscription style if target is a page
     *
     * @author Adrian Lang <lang@cosmocode.de>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    subscription: function(){
        var $form, $list, $digest;

        $form = jQuery('#subscribe__form');
        if (0 === $form.length) return;

        $list = $form.find("input[name='sub_style'][value='list']");
        $digest = $form.find("input[name='sub_style'][value='digest']");

        $form.find("input[name='sub_target']")
            .click(
                function () {
                    var $this = jQuery(this), show_list;
                    if (!$this.prop('checked')) {
                        return;
                    }

                    show_list = $this.val().match(/:$/);
                    $list.parent().dw_toggle(show_list);
                    if (!show_list && $list.prop('checked')) {
                        $digest.prop('checked', 'checked');
                    }
                }
            )
            .filter(':checked')
            .click();
    },

    /**
     * disable multiple revisions checkboxes if two are checked
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Anika Henke <anika@selfthinker.org>
     */
    revisionBoxHandler: function() {
        var $revisions = jQuery('#page__revisions');
        var $all       = jQuery('input[type=checkbox]', $revisions);
        var $checked   = $all.filter(':checked');
        var $button    = jQuery('button', $revisions);

        if($checked.length < 2) {
            $all.removeAttr('disabled');
            $button.attr('disabled', true);
        } else {
            $all.attr('disabled', true);
            $button.removeAttr('disabled');
            $checked.each(function(i) {
                jQuery(this).removeAttr('disabled');
                if(i>1) {
                    jQuery(this).attr('checked', false);
                }
            });
        }
    }
};

jQuery(dw_behaviour.init);



/* XXXXXXXXXX end of lib/scripts/behaviour.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/page.js XXXXXXXXXX */

/**
 * Page behaviours
 *
 * This class adds various behaviours to the rendered page
 */
dw_page = {
    /**
     * initialize page behaviours
     */
    init: function(){
        dw_page.sectionHighlight();
        jQuery('a.fn_top').mouseover(dw_page.footnoteDisplay);
        dw_page.makeToggle('#dw__toc h3','#dw__toc > div');
    },

    /**
     * Highlight the section when hovering over the appropriate section edit button
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    sectionHighlight: function() {
        jQuery('form.btn_secedit')
            .mouseover(function(){
                var $tgt = jQuery(this).parent(),
                    nr = $tgt.attr('class').match(/(\s+|^)editbutton_(\d+)(\s+|$)/)[2],
                    $highlight = jQuery(),                                             // holder for elements in the section to be highlighted
                    $highlightWrap = jQuery('<div class="section_highlight"></div>');  // section highlight wrapper

                // Walk the dom tree in reverse to find the sibling which is or contains the section edit marker
                while($tgt.length > 0 && !($tgt.hasClass('sectionedit' + nr) || $tgt.find('.sectionedit' + nr).length)) {
                    $tgt = $tgt.prev();
                    $highlight = $highlight.add($tgt);
                }
              // insert the section highlight wrapper before the last element added to $highlight
              $highlight.filter(':last').before($highlightWrap);
              // and move the elements to be highlighted inside the section highlight wrapper
              $highlight.detach().appendTo($highlightWrap);
            })
            .mouseout(function(){
                // find the section highlight wrapper...
                var $highlightWrap = jQuery('.section_highlight');
                // ...move its children in front of it (as siblings)...
                $highlightWrap.before($highlightWrap.children().detach());
                // ...and remove the section highlight wrapper
                $highlightWrap.detach();
            });
    },

    /**
     * Create/get a insitu popup used by the footnotes
     *
     * @param target - the DOM element at which the popup should be aligned at
     * @param popup_id - the ID of the (new) DOM popup
     * @return the Popup jQuery object
     */
    insituPopup: function(target, popup_id) {
        // get or create the popup div
        var $fndiv = jQuery('#' + popup_id);

        // popup doesn't exist, yet -> create it
        if($fndiv.length === 0){
            $fndiv = jQuery(document.createElement('div'))
                .attr('id', popup_id)
                .addClass('insitu-footnote JSpopup')
                .attr('aria-hidden', 'true')
                .mouseleave(function () {jQuery(this).hide().attr('aria-hidden', 'true');})
                .attr('role', 'tooltip');
            jQuery('.dokuwiki:first').append($fndiv);
        }

        // position() does not support hidden elements
        $fndiv.show().position({
            my: 'left top',
            at: 'left center',
            of: target
        }).hide();

        return $fndiv;
    },

    /**
     * Display an insitu footnote popup
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Chris Smith <chris@jalakai.co.uk>
     * @author Anika Henke <anika@selfthinker.org>
     */
    footnoteDisplay: function () {
        var $content = jQuery(jQuery(this).attr('href')) // Footnote text anchor
                      .parent().siblings('.content').clone();

        if (!$content) {
            return;
        }

        // prefix ids on any elements with "insitu__" to ensure they remain unique
        jQuery('[id]', $content).each(function(){
            var id = jQuery(this).attr('id');
            jQuery(this).attr('id', 'insitu__' + id);
        });

        var content = $content.html().trim();
        // now put the content into the wrapper
        dw_page.insituPopup(this, 'insitu__fn').html(content)
        .show().attr('aria-hidden', 'false');
    },

    /**
     * Makes an element foldable by clicking its handle
     *
     * This is used for the TOC toggling, but can be used for other elements
     * as well. A state indicator is inserted into the handle and can be styled
     * by CSS.
     *
     * To properly reserve space for the expanded element, the sliding animation is
     * done on the children of the content. To make that look good and to make sure aria
     * attributes are assigned correctly, it's recommended to make sure that the content
     * element contains a single child element only.
     *
     * @param {selector} handle What should be clicked to toggle
     * @param {selector} content This element will be toggled
     * @param {int} state initial state (-1 = open, 1 = closed)
     */
    makeToggle: function(handle, content, state){
        var $handle, $content, $clicky, $child, setClicky;
        $handle = jQuery(handle);
        if(!$handle.length) return;
        $content = jQuery(content);
        if(!$content.length) return;

        // we animate the children
        $child = $content.children();

        // class/display toggling
        setClicky = function(hiding){
            if(hiding){
                $clicky.html('<span>+</span>');
                $handle.addClass('closed');
                $handle.removeClass('open');
            }else{
                $clicky.html('<span>−</span>');
                $handle.addClass('open');
                $handle.removeClass('closed');
            }
        };

        $handle[0].setState = function(state){
            var hidden;
            if(!state) state = 1;

            // Assert that content instantly takes the whole space
            $content.css('min-height', $content.height()).show();

            // stop any running animation
            $child.stop(true, true);

            // was a state given or do we toggle?
            if(state === -1) {
                hidden = false;
            } else if(state === 1) {
                hidden = true;
            } else {
                hidden = $child.is(':hidden');
            }

            // update the state
            setClicky(!hidden);

            // Start animation and assure that $toc is hidden/visible
            $child.dw_toggle(hidden, function () {
                $content.toggle(hidden);
                $content.attr('aria-expanded', hidden);
                $content.css('min-height',''); // remove min-height again
            }, true);
        };

        // the state indicator
        $clicky = jQuery(document.createElement('strong'));

        // click function
        $handle.css('cursor','pointer')
               .click($handle[0].setState)
               .prepend($clicky);

        // initial state
        $handle[0].setState(state);
    }
};

jQuery(dw_page.init);



/* XXXXXXXXXX end of lib/scripts/page.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/tpl/bootstrap3/script.js XXXXXXXXXX */


try {
/*!
 * DokuWiki Bootstrap3 Template: Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

jQuery(document).ready(function() {

  //'use strict';

  if (typeof JSINFO.bootstrap3 === 'undefined') {
    JSINFO.bootstrap3 = {};
  }

  function dw_mode(id) {
    return ((JSINFO.bootstrap3.mode === id) ? true : false);
  }

  function dw_admin(page) {
    return ((JSINFO.bootstrap3.admin === page) ? true : false);
  }

  function mediaSize(media) {
    return jQuery(['#screen__mode .visible-', media, '-block'].join('')).is(':visible');
  }

  jQuery(window).resize(function() {
    jQuery(document).trigger('bootstrap3:mobile-layout');
    jQuery(document).trigger('bootstrap3:collapse-sections');
    jQuery(document).trigger('bootstrap3:toc-resize');
  });


  // Add typeahead support for quick seach
  jQuery("#qsearch").typeahead({

    source: function(query, process) {

      return jQuery.post(DOKU_BASE + 'lib/exe/ajax.php', {
        call: 'qsearch',
        q: encodeURI(query)
      },

      function(data) {

        var results = [];

        jQuery(data).find('a').each(function(){

          var page = jQuery(this);

          results.push({
            name     : page.text(),
            href     : page.attr('href'),
            title    : page.attr('title'),
            category : page.attr('title').replace(/:/g, ' » '),
          });

        });

        return process(results);

      });
    },

    itemLink: function (item) {
      return item.href;
    },

    itemTitle: function (item) {
      return item.title;
    },

    followLinkOnSelect : true,
    autoSelect         : false,
    items              : 50,
    fitToElement       : true,
    delay              : 500,

  });


  // Replace ALL input[type=submit|reset|button] (with no events) to button[type=submit|reset|button] for CSS styling
  jQuery.fn.extend({

    input2button: function() {

      return this.each(function() {

        var attrs = { 'type' : 'button' },
            label = '',
            node  = jQuery(this);

        if (typeof node.data('events') === 'undefined' && node.prop('tagName') == 'INPUT') {

          jQuery(node[0].attributes).each(function(index, attribute) {
            if (attribute.name == 'value') {
              label = attribute.value;
            } else {
              attrs[attribute.name] = attribute.value;
            }
          });

          var newNode = jQuery('<button/>', attrs).html(label);
          node.replaceWith(newNode);

        }

      });

    }

  });


  /*!
 * DokuWiki Bootstrap3 Template: Template Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */


// Normalization & Basic Styling
jQuery(document).on('bootstrap3:init', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    var $dw_content = jQuery('#dokuwiki__content, #media__manager');  // Page Content node

    // Abbr tooltips
    jQuery('abbr').tooltip();

    // Fix accesskey issue on dropdown menu
    if (jQuery('#dw__pagetools').length) {
      jQuery('ul.dropdown-menu li a[accesskey]')
        .closest('.top, .revs, .show, .edit')
        .removeAttr('accesskey');
    }

    // Form and controls
    // TODO ported
    $dw_content.find(':submit, :button, :reset').addClass('btn btn-default');
    jQuery('input, select, textarea')
      .not('[type=submit], [type=reset], [type=button], [type=hidden], [type=image], [type=checkbox], [type=radio]')
      .addClass('form-control');
    jQuery('input[type=checkbox]').addClass('checkbox-inline');
    jQuery('input[type=radio]').addClass('radio-inline');
    jQuery('label').addClass('control-label');
    jQuery('main form:not(.form-horizontal)').addClass('form-inline');

    // Toolbar
    jQuery('#tool__bar').addClass('btn-group btn-group-xs');

    // Picker
    // TODO ported
//     if (dw_mode('edit')) {
//       jQuery('.picker').addClass('btn-group');
//     }

    // Footer links
    jQuery('footer a').addClass('navbar-link');

    // Personal Home-Page icon
    if (NS == 'user' && dw_mode('show') && ! jQuery('.notFound').length) {
      jQuery('.mode_show #dokuwiki__content h1').prepend('<i class="fa fa-fw fa-user"/> ');
    }

    // Scrolling animation (on TOC and FootNotes)
    jQuery('#dw__toc a, #dw__toc_menu a, a.fn_top, a.fn_bot').on('click', function(e) {

      var $link = jQuery(this);

      if ($link.attr('href').match(/^#/) && $link.attr('href').length > 1) {

        e.preventDefault();

        if (mediaSize('xs') && $link.hasClass('fn_top')) {
          return false;
        }

        if (JSINFO.bootstrap3.config.tocCollapseOnScroll && JSINFO.bootstrap3.config.tocAffix) {
          jQuery(document).trigger('bootstrap3:toc-close');
        }

        var $target = jQuery('body ' + $link.attr('href'));

        if ($target.length) {

          var body_offset      = (parseInt(jQuery('body').css('marginTop')) || 0),
              target_position  = Math.round($target.offset().top - body_offset);

          jQuery('html, body').animate({
            scrollTop: target_position
          }, 600);

          document.location.hash = $link.attr('href');

        }

        return false;

      }

    });

  }, 0);

});


// Nav
jQuery(document).on('bootstrap3:nav', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    // Unwrap unnecessary tags inside list items for Bootstrap nav component
    jQuery('.nav div.li')
      .contents().unwrap();

    // Move the font-icons inside a link
    var $links = jQuery('.nav li i + a');
    if ($links.length) {
      jQuery.each($links, function() {
        var $link = jQuery(this),
            $icon = $link.prev();
        $icon.prependTo($link);
        $icon.after(' ');
      });
    }

  }, 0);

});


// Tabs
jQuery(document).on('bootstrap3:tabs', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    jQuery('ul.tabs').addClass('nav nav-tabs');

    jQuery('.nav-tabs strong').replaceWith(function() {

      jQuery(this).parent().addClass('active');
      return jQuery('<a href="#"/>').html(jQuery(this).contents());

    });

  }, 0);

});


// Buttons
// TODO remove from init
jQuery(document).on('bootstrap3:buttons', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    // TODO ported
    jQuery('.button').removeClass('button'); // Not ported
    jQuery('.alert button').removeClass('btn btn-default');
    jQuery('#dw__login, #dw__register, #subscribe__form, #media__manager').find(':submit').addClass('btn-success');
    jQuery('#dw__profiledelete').find(':submit').addClass('btn-danger');
    jQuery('#edbtn__save').addClass('btn-success');

    // Section Button edit
    // TODO ported
    jQuery('.btn_secedit .btn').input2button();
    jQuery('.btn_secedit .btn').addClass('btn-xs');

  }, 0);

});


// Back To Top
jQuery(document).on('bootstrap3:back-to-top', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    jQuery('.back-to-top').click(function(e) {
      e.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, 600);
    });

    // Display back-to-top during scroll
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop()) {
        jQuery('.back-to-top').fadeIn();
      } else {
        jQuery('.back-to-top').fadeOut();
      }
    });

  }, 0);

});


// Container Fluid
jQuery(document).on('bootstrap3:fluid-container', function(event) {

  // console.debug(event.type + ' event fired');

  jQuery('.btn-fluid-container').on('click', function() {

    var selectors = 'body > div, header, header nav > div, article, footer > div';

    if (! jQuery('.navbar-fixed-top').length) {
      selectors = 'body > div, header, article, footer > div';
    }

    var $button     = jQuery(this),
        $containers = jQuery(selectors);

    if (jQuery('body > div.container').length) {

      $containers
        .removeClass('container')
        .addClass('container-fluid');
      $button.parent().addClass('active');

      DokuCookie.setValue('fluidContainer', 1);

    } else {

      $containers
        .removeClass('container-fluid')
        .addClass('container');
      $button.parent().removeClass('active');

      DokuCookie.setValue('fluidContainer', 0);

    }

  });

});


// Footnote
jQuery(document).on('bootstrap3:footnotes', function(event) {

  if (! jQuery('.footnotes').length) return false;

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    jQuery(document).bind('DOMNodeInserted', function(){
      jQuery('#insitu__fn').addClass('panel panel-body panel-default');
    });

  }, 0);

});


jQuery(document).on('bootstrap3:toc-resize', function(event) {

  var $dw_toc = jQuery('#dw__toc');
  if (! $dw_toc.length) return false;

  // console.debug(event.type + ' event fired');

  if (JSINFO.bootstrap3.config.tocAffix) {
    $dw_toc.affix('checkPosition');
  }

  jQuery('#dw__toc .toc-body > ul').css({
    'max-height' : (jQuery(window).height() - 50 - jQuery('main').position().top) + 'px',
    'overflow-y' : 'scroll'
  });

  jQuery('.toc-body').width(jQuery('.dw-toc').width());

});


jQuery(document).on('bootstrap3:toc-close', function(event) {

  var $dw_toc = jQuery('#dw__toc');
  if (! $dw_toc.length) return false;

  // console.debug(event.type + ' event fired');

  if (! $dw_toc.hasClass('affix-bottom')) {
    jQuery('.dw-content-page').addClass('dw-toc-closed');
    $dw_toc.find('.toc-body').collapse('hide');
  }

});


jQuery(document).on('bootstrap3:toc-open', function(event) {

  var $dw_toc = jQuery('#dw__toc');
  if (! $dw_toc.length) return false;

  // console.debug(event.type + ' event fired');

  jQuery('.dw-content-page').removeClass('dw-toc-closed');

  $dw_toc.find('.toc-body').collapse('show');

});


// Table of Contents (Navbar)
jQuery(document).on('bootstrap3:toc-menu', function(event) {

  if (! jQuery("#dw__toc_menu").length) return false;

  // console.debug(event.type + ' event fired');

  if (jQuery(JSINFO.bootstrap3.toc.length)) {
    jQuery("#dw__toc_menu").removeClass("hide");
  }

  jQuery.each(JSINFO.bootstrap3.toc, function(idx, item) {

    var indent = "";

    if (item.level > 1) {
      for (var i=0; i<= item.level; i++) {
        indent += "&nbsp;&nbsp;"
      }
    }

    jQuery("#dw__toc_menu ul").append(['<li><a class="small" href="', item.link, '">', indent , item.title, '</a></li>'].join(''));

  });

});


// Table of Contents
jQuery(document).on('bootstrap3:toc', function(event) {

  setTimeout(function() {

    var $dw_toc = jQuery('#dw__toc');
    if (! $dw_toc.length) return false;

    // console.debug(event.type + ' event fired');

    // Set TOC Affix
    if (JSINFO.bootstrap3.config.tocAffix) {
      $dw_toc.affix({
        offset : {
          top    : (jQuery("main").position().top),
          bottom : (jQuery(document).height() - jQuery("main").height()),
        }
      });
    }

    // ScrollSpy
    var scrollspy_target = '#dw__toc';

    if (JSINFO.bootstrap3.config.tocLayout == 'navbar') {
      scrollspy_target = '#dw__navbar_items';
    }

    jQuery('body').scrollspy({
      target : scrollspy_target,
      offset : ((parseInt(jQuery('body').css('marginTop')) || 0) + 10),
    });

    jQuery(document).trigger('bootstrap3:toc-resize');

    if (mediaSize('xs')) {
      jQuery(document).trigger('bootstrap3:toc-close');
    }

    $dw_toc.css('backgroundColor', jQuery('article > .panel').css('backgroundColor'));
    $dw_toc.find('a').css('color', jQuery('body').css('color'));

    if (JSINFO.bootstrap3.config.tocCollapseOnScroll && JSINFO.bootstrap3.config.tocAffix) {

      $dw_toc.on('affix.bs.affix', function() {
        jQuery(document).trigger('bootstrap3:toc-close');
      });

      if (! JSINFO.bootstrap3.config.tocCollapsed) {
        $dw_toc.on('affix-top.bs.affix', function() {
          jQuery(document).trigger('bootstrap3:toc-open');
        });
      }

    }

    $dw_toc.find('.toc-title').on('click', function() {

      jQuery('.dw-content-page').toggleClass('dw-toc-closed');

      if (jQuery('.dw-toc').hasClass('dw-toc-bootstrap')) {
        if (jQuery('.dw-content-page').hasClass('dw-toc-closed')) {
          jQuery('.dw-toc').removeClass('col-md-3');
          jQuery('.dw-content-page').removeClass('col-md-9').addClass('col-md-12');
        } else {
          jQuery('.dw-toc').addClass('col-md-3');
          jQuery('.dw-content-page').removeClass('col-md-12').addClass('col-md-9');
          jQuery(document).trigger('bootstrap3:toc-resize');
        }
      }

      if (! jQuery('.dw-toc-closed').length) {
        jQuery(document).trigger('bootstrap3:toc-resize');
      }

    });

    if ((jQuery(window).height() < $dw_toc.height())) {
      jQuery(document).trigger('bootstrap3:toc-resize');
    }

  }, 0);

});


// Alerts
// TODO ported -- no remove (used for standard DokuWiki messages with html_msgarea)
jQuery(document).on('bootstrap3:alerts', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    // Info
    jQuery('div.info')
      .removeClass('info')
      .addClass('alert alert-info')
      .prepend('<i class="fa fa-fw fa-info-circle"/> ');

    // Error
    jQuery('div.error')
      .removeClass('error')
      .addClass('alert alert-danger')
      .prepend('<i class="fa fa-fw fa-times-circle"/> ');

    // Success
    jQuery('div.success')
      .removeClass('success')
      .addClass('alert alert-success')
      .prepend('<i class="fa fa-fw fa-check-circle"/> ');

    // Notify
    jQuery('div.notify')
      .removeClass('notify')
      .addClass('alert alert-warning')
      .prepend('<i class="fa fa-fw fa-warning"/> ');

  }, 0);

});


// Media Manager
jQuery(document).on('bootstrap3:media-manager', function(event) {

  setTimeout(function() {

    var $media_popup    = jQuery('#media__content'),     // Media Manager (pop-up)
        $media_manager  = jQuery('#mediamanager__page'); // Media Manager (page)

    // Media Manager (pop-up)
    if ($media_popup.length || $media_manager.length) {

      // console.debug(event.type + ' event fired');

      jQuery('.qq-upload-button').addClass('btn btn-default');
      jQuery('.qq-upload-action').addClass('btn btn-success');

    }

    // Media Manager (page)
    if ($media_manager.length) {

      // console.debug(event.type + ' event fired');

      var $sort_buttons = jQuery('.ui-buttonset');

      $media_manager.find('.file dl').addClass('dl-horizontal');
      $media_manager.find('.panel').removeClass('panel').addClass('pull-left');

      $sort_buttons.addClass('btn-group');
      $sort_buttons.find('label').addClass('btn btn-xs btn-default');
      $sort_buttons.find('input').hide();

      function buttonHandler() {

        var $button    = jQuery(this),
            option_for = $button.attr('for'),
            option_set = option_for.replace('sortBy__', '').replace('listType__', '');

        $sort_buttons.find('.active').removeClass('active');
        $button.addClass('active');
        $sort_buttons.find('#'+ option_for).prop('checked', true);

        switch (option_set) {
          case 'thumbs':
          case 'rows':
            dw_mediamanager.set_fileview_list(option_set);
            $sort_buttons.find('[name=list_dwmedia]').val(option_set);
            break;
          case 'name':
          case 'date':
            dw_mediamanager.set_fileview_sort(option_set);
            $sort_buttons.find('[name=sort_dwmedia]').val(option_set);
            dw_mediamanager.list.call(jQuery('#dw__mediasearch')[0] || this, event);
            break;
        }

      }

      $sort_buttons.find('label').on('click', buttonHandler);

    }

  }, 0);

});


// Detail page
jQuery(document).on('bootstrap3:detail', function(event) {

  setTimeout(function() {

    var $detail_page = jQuery('#dokuwiki__detail'); // Detail Page node

    if (! $detail_page.length) return false;

    // console.debug(event.type + ' event fired');

    $detail_page.find('img.img_detail')
      .addClass('img-responsive');
    $detail_page.find('dl')
      .addClass('dl-horizontal');

  }, 0);

});


// Index Page
jQuery(document).on('bootstrap3:mode-index', function(event) {

  if (! dw_mode('index')) return false;

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    var $directories = jQuery('ul.idx a.idx_dir'),
        $pages       = jQuery('ul.idx a.wikilink1');

    jQuery.each($directories, function() {

      var $directory = jQuery(this),
          $closed    = $directory.parents('.closed'),
          $open      = $directory.parents('.open');

      if (! $directory.find('.fa').length) {
        $directory.prepend('<i class="fa text-primary"/> ');
      }

      if ($open.length) {
        $directory.find('i')
          .removeClass('fa-folder')
          .addClass('fa-folder-open');
      }

      if ($closed.length) {
        $directory.find('i')
          .removeClass('fa-folder-open')
          .addClass('fa-folder');
      }

    });

    jQuery.each($pages, function() {

      var $page = jQuery(this);

      if (! $page.find('i').length) {
        $page.prepend('<i class="fa fa-fw fa-file-text-o text-muted"/> ');
      }

    });

  }, 0);

});


// Page Tools (animaton)
jQuery(document).on('bootstrap3:page-tools', function(event) {

  // console.debug(event.type + ' event fired');

  // Page Tools Affix
  jQuery('#dw__pagetools .tools').affix({
    offset : {
      top    : (jQuery('main').position().top),
      bottom : ((   jQuery(document).height()
                  - jQuery('article').height()
                  - jQuery('#dokuwiki__pageheader').height()
                  - jQuery('#dokuwiki__header').height() ))
    }
  });

  var $page_tools       = jQuery('#dw__pagetools'),
      $page_tools_items = $page_tools.find('ul li a'),
      $animation        = $page_tools.find('.tools-animation');

  if (! ($page_tools_items.length && $animation.length)) return false;

  $page_tools_items.on('mouseenter', function () {
    var $icon = jQuery(this);
    $icon.find('i').addClass('fa-2x', 250);
  });

  $page_tools_items.on('mouseleave', function () {
    var $icon = jQuery(this);
    $icon.find('i').removeClass('fa-2x', 250);
  });

});


// Dropdown-Page
jQuery(document).on('bootstrap3:dropdown-page', function(event) {

  // console.debug(event.type + ' event fired');

  jQuery('.dw__dropdown_page .dropdown').hover(function() {
    if (! jQuery('#screen_mode').find('.visible-xs').is(':visible')) {
      jQuery(this).addClass('open');
    }
  },
  function() {
    if (! jQuery('#screen_mode').find('.visible-xs').is(':visible')) {
      jQuery(this).removeClass('open');
    }
  });

});


// Cookie-Law
jQuery(document).on('bootstrap3:cookie-law', function(event) {

  // console.debug(event.type + ' event fired');

  jQuery('#cookieDismiss').click(function(){
    jQuery('#cookieNotice').hide();
    DokuCookie.setValue('cookieNoticeAccepted', true);
  });

});


// AnchorJS
jQuery(document).on('bootstrap3:anchorjs', function(event) {

  // console.debug(event.type + ' event fired');

  anchors.add('.mode_show article .dw-content h1, .mode_show article ' + 
              '.dw-content h2, .mode_show article .dw-content h3, '    + 
              '.mode_show article .dw-content h4, .mode_show article ' + 
              '.dw-content h5');

});


// Page icons
jQuery(document).on('bootstrap3:page-icons', function(event) {

  var $dw_page_icons = jQuery('.dw-page-icons');

  if (! $dw_page_icons.length) return false;

  // console.debug(event.type + ' event fired');

  var title = encodeURIComponent(document.title),
      url   = encodeURIComponent(location),
      window_options = 'width=600,height=460,menubar=no,location=no,status=no';

  var share_to = {
    'google-plus' : (function(){ return [ 'https://plus.google.com/share?ur\l=', url ].join(''); })(),
    'twitter'     : (function(){ return [ 'https://twitter.com/intent/tweet?text=', title, '&url=', url ].join(''); })(),
    'linkedin'    : (function(){ return [ 'https://www.linkedin.com/shareArticle?mini=true&url=', url, '&title=', title ].join(''); })(),
    'facebook'    : (function(){ return [ 'https://www.facebook.com/sharer/sharer.php?u=', url, '&t=', title ].join(''); })(),
    'pinterest'   : (function(){ return [ 'https://pinterest.com/pin/create/button/?url=', url, '&description=', title ].join(''); })(),
    'telegram'    : (function(){ return [ 'https://telegram.me/share/url?url=', url ].join(''); })(),
    'whatsapp'    : (function(){ return [ 'whatsapp://send?text=', title, ': ', url ].join(''); })(),
    'send-mail'   : (function(){ return [ 'mailto:?subject=', document.title, '&body=', document.URL ].join(''); })(),
  };

  $dw_page_icons.find('.share-google-plus').on('click', function() {
    window.open(share_to['google-plus'], 'Share to Google+', window_options);
  });

  $dw_page_icons.find('.share-twitter').on('click', function() {
    window.open(share_to.twitter, 'Share to Twitter', window_options);
  });

  $dw_page_icons.find('.share-linkedin').on('click', function() {
    window.open(share_to.linkedin, 'Share to Linkedin', window_options);
  });

  $dw_page_icons.find('.share-facebook').on('click', function() {
    window.open(share_to.facebook, 'Share to Facebook', window_options);
  });

  $dw_page_icons.find('.share-pinterest').on('click', function() {
    window.open(share_to.pinterest, 'Share to Pinterest', window_options);
  });

  $dw_page_icons.find('.share-telegram').on('click', function() {
    window.open(share_to.telegram, 'Share to Telegram', window_options);
  });

  $dw_page_icons.find('.send-mail').on('click', function(e) {
    e.preventDefault();
    window.location = share_to['send-mail'];
  });

  $dw_page_icons.find('.share-whatsapp').attr('href', share_to.whatsapp);

});


// Collapse sections on mobile (XS media)
jQuery(document).on('bootstrap3:collapse-sections', function(event) {

  if (! JSINFO.bootstrap3.config.collapsibleSections) return false;

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

  var $sections = jQuery('article div.level2'),
      $headings = $sections.prev();

  if (mediaSize('xs')) {

    $sections.addClass('hide');

    if (! $headings.find('i').length) {

      $headings
        .css('cursor', 'pointer')
        .prepend(jQuery('<i class="fa fa-fw fa-chevron-down fa-pull-left" style="font-size:12px; padding:10px 0"/>'));

      $headings.on('click', function() {

        var $heading = jQuery(this),
            $icon    = $heading.find('i'),
            $section = $heading.nextUntil('h2');

        $section.toggleClass('hide');
        $heading.css('cursor', 'pointer');

        $icon.hasClass('fa-chevron-down')
          ? $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up')
          : $icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');

      });

      if (mediaSize('xs')) {
        $headings.trigger('click');
      }

    }

  } else {
    if ($sections.hasClass('hide')) {
      $sections.removeClass('hide');
    }
  }

  }, 0);

});


// Mobile Layout
jQuery(document).on('bootstrap3:mobile-layout', function(event) {

  setTimeout(function() {

    var $dw_aside = jQuery('.dw__sidebar');
    if (! $dw_aside.length) return false;

    // console.debug(event.type + ' event fired');

    if (mediaSize('xs')) {

      if (JSINFO.bootstrap3.config.sidebarOnNavbar) {

        if (! jQuery('header aside').length) {
          jQuery('<aside/>').prependTo('header nav div .navbar-collapse');
          $dw_aside.find('.dw-sidebar-content').clone().appendTo('header aside');
          jQuery('header aside .dw-sidebar-title').addClass('navbar-text');
        }
        jQuery('header aside').show();
        $dw_aside.hide();

      } else {

        if (! $dw_aside.find('.dw-sidebar-content').hasClass('panel')) {
          $dw_aside.find('.dw-sidebar-content').addClass('panel panel-default');
          $dw_aside.find('.dw-sidebar-title').addClass('panel-heading');
          $dw_aside.find('.dw-sidebar-body').addClass('panel-body').removeClass('in');
        }

      }

    } else {

      jQuery('header aside').hide();
      $dw_aside.find('.dw-sidebar-content').removeClass('panel panel-default');
      $dw_aside.find('.dw-sidebar-title').removeClass('panel-heading');
      $dw_aside.find('.dw-sidebar-body').removeClass('panel-body').addClass('in');
      $dw_aside.show();
    }

  }, 0);

});


jQuery(document).on('bootstrap3:components', function(event) {

  // console.debug(event.type + ' event fired');

  setTimeout(function() {

    var events = [
      'mobile-layout',
      'fluid-container',
      'toc',
      'tabs',
      'toc-menu',
      'nav',
      'back-to-top',
      'page-tools',
      'page-icons',
      'dropdown-page',
      'footnotes',
      'media-manager',
      'collapse-sections',
    ];

    for (var i in events) {
      jQuery(document).trigger('bootstrap3:' + events[i]);
    }

  }, 0);

});



  // Init template
  jQuery(document).trigger('bootstrap3:init');

  // Init other components
  jQuery(document).trigger('bootstrap3:components');

  /*!
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

jQuery(document).on('bootstrap3:plugins', function(event) {

  //console.debug(event.type + ' event fired');

  setTimeout(function() {

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// CSV Plugin

var $csv = jQuery('table tbody tr.row0 th.col0');

if ($csv.length) {

  $csv.each(function() {
    var $table = jQuery(this).parents('table');
    if ($table.find('tr.row1 th').length == 0) {
      $table.prepend('<thead/>');
      $header = $table.find('tr.row0');
      $table.find('thead').append($header);
    }
  });

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Data Plugin

var $dataplugin_entry = jQuery('.dataplugin_entry'),
    $dataplugin_table = jQuery('.dataplugin_table');

// Data Plugin: Entry
if ($dataplugin_entry.length) {
  $dataplugin_entry.find('dl').addClass('panel panel-default');
}


// Data Plugin: Table
if ($dataplugin_table.length) {

  $dataplugin_table.find('input').addClass('input-sm');

  var $header = $dataplugin_table.find('th[style]'),
      $inputs = $dataplugin_table.find('th input'),
      header_width = [],
      i = 0;

  $header.each(function() {
    header_width.push(this.style.width);
  });

  $inputs.each(function() {
    this.style.width = header_width[i];
    i++;
  });

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Database2 Plugin

var $database2 = jQuery('table.database2, table.database2-single-editor');

if ($database2.length) {
  $database2.find('.label').removeClass('label').addClass('database2-label');
  $database2.find('input[type="submit"]:first').addClass('btn-success');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// DataTables Plugin

var $datatables = jQuery('.dt-wrapper');

if ($datatables.length) {
  $datatables.find('.table-responsive').removeClass('table-responsive');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// DAVCal Plugin

var $davcal = jQuery('#fullCalendar');

if ($davcal.length) {
  $davcal.find('.fc-button-group').addClass('btn-group');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Discussion plugin

var $discussion = jQuery('.comment_wrapper');

if ($discussion.length) {

  $discussion.find('h2').addClass('page-header');
  $discussion.find('.comment_buttons').addClass('text-right');
  $discussion.find('#discussion__section').prepend('<i class="fa fa-fw fa-comments"/> ');

  $discussion.find('.hentry').addClass('panel panel-default');
  $discussion.find('.hentry .comment_head').addClass('panel-heading');
  $discussion.find('.hentry .comment_body').addClass('panel-body');
  $discussion.find('.toolbar').addClass('btn-group');
  $discussion.find('.comment_buttons [type=submit]').addClass('btn-xs');
  $discussion.find('.comment_buttons .discussion__delete .btn').addClass('btn-danger');
  $discussion.find('.comment_buttons .discussion__reply .btn').addClass('btn-success');
  $discussion.find('#discussion__btn_submit').addClass('btn-success');

  jQuery(document).bind('DOMNodeInserted', function(){
    $discussion.find('.toolbutton').addClass('btn btn-xs');
  });

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Explain Plugin

var $explain = jQuery('.explain');

if ($explain.length) {

  $explain.each(function(){

   var $self    = jQuery(this),
       $tooltip = $self.find('.tooltip');

   $self.attr({
     'data-toggle'    : 'tooltip',
     'data-placement' : 'bottom',
     'title'          : $tooltip.html(),
   }).addClass('wikilink1').removeClass('explain');

   $tooltip.remove();

  });

  jQuery('[data-toggle="tooltip"]').tooltip();

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Gallery Plugin (Media Manager)

 if (dw_mode('media')) {
   jQuery(document).ajaxSuccess(function() {
     jQuery('.mode_media .meta .row').removeClass('row');
   });
 }

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Include Plugin

var $include_readmore = jQuery('.include_readmore');

// Include Plugin (Read More)
if ($include_readmore.length) {
  $include_readmore.find('a').addClass('btn btn-default btn-xs');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// InlineTOC Plugin

var $toc  = jQuery('#dw__toc, #dokuwiki__toc'),  // DokuWiki TOC
    $toc2 = jQuery('div.inlinetoc2');            // InlineTOC Plugin

// InlineTOC Plugin
if ($toc2.length && $toc.length) {
  $toc.css('display', 'none');
  $toc2.addClass('panel panel-default');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Overlay Plugin
var $overlay = jQuery('#overlay');

if ($overlay.length) {

  $overlay.addClass('panel panel-default small');

  $overlay.css('border',     jQuery('.panel').css('border'));
  $overlay.css('background', jQuery('.panel').css('background'));

  var $title = $overlay.find('.close'),
      $btn   = $title.find('a');

  $btn.wrapAll('<ul class="text-right list-inline dw-action-icon" />');
  $btn.wrap('<li/>');
  $btn.addClass('text-muted');

  $title.nextAll().wrapAll('<div class="panel-body" />');
  $title.removeClass('close').addClass('panel-heading');

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Publish Plugin

var $publish = jQuery('.approval');

if ($publish.length) {

  $publish.prependTo('.page');

  $publish.removeClass('approval').addClass('alert');

  jQuery('.apr_table').removeClass('table-striped');

  if ($publish.hasClass('approved_no')) {
    $publish.removeClass('approved_no')
      .addClass('alert-warning')
      .prepend('<i class="fa fa-fw fa-info-circle"/> ');
  }
  if ($publish.hasClass('approved_yes')) {
    $publish.removeClass('approved_yes')
      .addClass('alert-success')
      .prepend('<i class="fa fa-fw fa-check-circle"/> ');
  }

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Semantic Plugin

var $wikilinks = jQuery('article .wikilink1');

if (typeof JSINFO.plugin === 'undefined') {
  JSINFO.plugin = {};
}

if (typeof JSINFO.plugin.semantic === 'undefined') {
  JSINFO.plugin.semantic = {};
}

if (    $wikilinks.length
     && JSINFO.plugin.semantic.exposeWebService
     && JSINFO.bootstrap3.config.showSemanticPopup ) {

  $wikilinks.hover(function() {

    $wikilinks.popover('destroy');

    var $wikilink = jQuery(this),
        page_id   = $wikilink.attr('title');

    // Disable popup for linked tabs/navs items (Bootstrap Wrapper Plugin)
    if ($wikilink.parents('.bs-wrap-nav').length) {
      return false;
    }

    if (! page_id) return false;

    jQuery.post(
      DOKU_BASE + 'lib/exe/ajax.php',
      { call: 'plugin_semantic', id: page_id },
      function(data) {

        var jsonld = data[0];

        if (! (jsonld.headline && jsonld.description)) return false;

        $wikilink.data('original-title', page_id);
        $wikilink.attr('title', '');

        var title       = jsonld.headline;
        var image       = ('image' in jsonld) ? [ '<img src="', jsonld.image.url, '" alt="" class="img-responsive" /><br/>' ].join('') : '';
        var description = jQuery.trim(jsonld.description.replace(/\t\*$/, ''))
                            .replace(/\*(.*)/g, '<i class="fa fa-circle small"></i> $1')
                            .replace(/\n/g, "<br/>\n")
                            .replace(/\t/g, '&nbsp;');

        var content = [ '<div class="row small"><div class="col-md-12">', image, description, ' ... </div></div>' ].join('');

        $wikilink.popover({
          trigger   : 'manual',
          html      : true,
          title     : title,
          content   : content,
          placement : 'auto left',
        }).popover('show');

        $wikilink.attr('title', page_id);

      });

  }, function() {

    var self = this;

    setTimeout(function() {
      if ( jQuery(self).next('.popover').length && ! jQuery(self).next('.popover:hover').length ) {
        jQuery(self).popover('destroy');
      }
    }, 300);

  });

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Simple Navi Plugin

var $simplenavi = jQuery('.plugin__simplenavi');

if ($simplenavi.length) {

  $simplenavi.find('li.open strong').contents().unwrap();
  $simplenavi.find('li.closed a').prepend('<i class="fa fa-fw fa-folder"/> ');
  $simplenavi.find('li.open > a').prepend('<i class="fa fa-fw fa-folder-open"/> ');
  $simplenavi.find('li').not('.closed').not('.open').find('a').prepend('<i class="fa fa-fw fa-file-text-o text-muted"/> ');

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Struct Plugin

if (dw_admin('struct_schemas') || dw_admin('struct_assignments')) {
  // Display all elements in TOC
  jQuery('.toc-body .toc').addClass('show');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Tag Plugin

var $tags = jQuery('.tags'),
    $page = jQuery('table tbody th.page:even');

// Tag Plugin: Count
if ($page.length) {

  $page.each(function(){
    var $table  = jQuery(this).parents('table'),
        $header = $table.find('th');
    $table.prepend('<thead><tr/></thead>');
    $table.find('thead tr').append($header);
    $header.removeClass('page');
  });

}

// Tag Plugin: Tags
if ($tags.length) {

  $tags.each(function() {

    var $tag = jQuery(this);
    $tag.html($tag.html().replace(/,/g, ''));

    var $tagLabel = $tag.find('a').addClass('label label-default')
                                  .prepend('<i class="fa fa-fw fa-tag"/> ');


    if (JSINFO.bootstrap3.config.tagsOnTop && $tag.prop('tagName').toLowerCase() == 'div' && ! $tag.parents('.plugin_include_content').length) {
      $tag.remove();
      $tagLabel.prependTo('.pageId');
    }

    if ($tag.parents('.plugin_include_content').length) {
      $tag.find('span').contents().unwrap();
    }

  });

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

 // Tagging plugin
var $tagging_edit = jQuery('.plugin_tagging_edit');

if ($tagging_edit.length) {
  $tagging_edit.find(':submit').addClass('btn btn-default btn-xs');
  $tagging_edit.find('[type=text]').addClass('input-sm');
  $tagging_edit.find('#tagging__edit_save').addClass('btn-success');
}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

 // Translation Plugin
var $translation = jQuery('#dw__translation');

if ($translation.length) {

 var $current = $translation.find('.cur'),
     $lang    = $current.text(),
     $iso     = $lang.match(/\(([a-z]*)\)/),
     $flag    = $current.find('img');

 $current.parent().addClass('active');
 $translation.find('.wikilink2').removeClass('wikilink2').css('opacity', '0.5');

 if ($flag.length) {
   $translation.find('.dropdown-toggle i').hide();
   $translation.find('.dropdown-toggle').prepend(
     jQuery('<img/>').attr({
       'src'   : $flag.attr('src'),
       'title' : $flag.attr('title') }));
 }

}

    /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Wrap Plugin

var $wrap = jQuery('.plugin_wrap');

if ($wrap.length) {

  if ($wrap.hasClass('tabs')) {
    var $tabs = jQuery('.plugin_wrap.tabs');
    $tabs.find('div.li').contents().unwrap();
    $tabs.find('.curid').parent().addClass('active');
    $tabs.find('ul').addClass('nav nav-tabs');
  }

}


  }, 0);

});


  // Init plugins
  jQuery(document).trigger('bootstrap3:plugins');


  // Re-initialize some components in media-manager
  if (dw_mode('media') || jQuery('#media__manager')) {

   jQuery(document).ajaxSuccess(function() {
     jQuery(document).trigger('bootstrap3:init');
     jQuery(document).trigger('bootstrap3:buttons');
     jQuery(document).trigger('bootstrap3:tabs');
     jQuery(document).trigger('bootstrap3:media-manager');
     jQuery(document).trigger('bootstrap3:alerts')
   });

  }

  // Init AnchorJS
  if (JSINFO.bootstrap3.config.useAnchorJS) {
    jQuery(document).trigger('bootstrap3:anchorjs');
  }

  // Hash change
  if (JSINFO.bootstrap3.config.fixedTopNavbar) {

    var scrollOnHashChange = function() {
      scrollBy(0, - (parseInt(jQuery('body').css('marginTop')) || 0));
    };

    if (location.hash) {
      setTimeout(function() {
        scrollOnHashChange();
      }, 1);
    }

    jQuery(window).on('hashchange', function() {
      scrollOnHashChange();
    });

  }

  // Index mode
  if (dw_mode('index')) {

   jQuery(document).trigger('bootstrap3:mode-index');

   jQuery(document).ajaxSuccess(function() {
     jQuery(document).trigger('bootstrap3:mode-index');
   });

   jQuery('#index__tree').click(function(e) {
     jQuery(document).trigger('bootstrap3:mode-index');
   });

  }

});


} catch (e) {
   logError(e, 'lib/tpl/bootstrap3/script.js');
}


/* XXXXXXXXXX end of lib/tpl/bootstrap3/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/captcha/script.js XXXXXXXXXX */


try {

jQuery(function () {
    var $wrap = jQuery('#plugin__captcha_wrapper');
    if(!$wrap.length) return;

    /**
     * Autofill and hide the whole CAPTCHA stuff in the simple JS mode
     */
    var $code = jQuery('#plugin__captcha_code');
    if ($code.length) {
        var $box = $wrap.find('input[type=text]');
        $box.first().val($code.text().replace(/([^A-Z])+/g, ''));
        $wrap.hide();
    }

    /**
     * Add a HTML5 player for the audio version of the CAPTCHA
     */
    var $audiolink = $wrap.find('a');
    if($audiolink.length) {
        var audio = document.createElement('audio');
        if(audio) {
            audio.src = $audiolink.attr('href');
            $wrap.append(audio);
            $audiolink.click(function (e) {
                audio.play();
                e.preventDefault();
                e.stopPropagation();
            });
        }
    }
});


} catch (e) {
   logError(e, 'lib/plugins/captcha/script.js');
}


/* XXXXXXXXXX end of lib/plugins/captcha/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/extension/script.js XXXXXXXXXX */


try {
jQuery(function(){

    var $extmgr = jQuery('#extension__manager');

    /**
     * Confirm uninstalling
     */
    $extmgr.find('button.uninstall').click(function(e){
        if(!window.confirm(LANG.plugins.extension.reallydel)){
            e.preventDefault();
            return false;
        }
        return true;
    });

    /**
     * very simple lightbox
     * @link http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/super-simple-lightbox-with-css-and-jquery/
     */
    $extmgr.find('a.extension_screenshot').click(function(e) {
        e.preventDefault();

        //Get clicked link href
        var image_href = jQuery(this).attr("href");

        // create lightbox if needed
        var $lightbox = jQuery('#plugin__extensionlightbox');
        if(!$lightbox.length){
            $lightbox = jQuery('<div id="plugin__extensionlightbox"><p>Click to close</p><div></div></div>')
                .appendTo(jQuery('body'))
                .hide()
                .click(function(){
                    $lightbox.hide();
                });
        }

        // fill and show it
        $lightbox
            .show()
            .find('div').html('<img src="' + image_href + '" />');


        return false;
    });

    /**
     * Enable/Disable extension via AJAX
     */
    $extmgr.find('button.disable, button.enable').click(function (e) {
        e.preventDefault();
        var $btn = jQuery(this);

        // get current state
        var extension = $btn.attr('name').split('[')[2];
        extension = extension.substr(0, extension.length - 1);
        var act = ($btn.hasClass('disable')) ? 'disable' : 'enable';

        // disable while we wait
        $btn.attr('disabled', 'disabled');
        $btn.css('cursor', 'wait');

        // execute
        jQuery.get(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'plugin_extension',
                ext:  extension,
                act:  act
            },
            function (data) {
                $btn.css('cursor', '')
                    .removeAttr('disabled')
                    .removeClass('disable')
                    .removeClass('enable')
                    .text(data.label)
                    .addClass(data.reverse)
                .parents('li')
                    .removeClass('disabled')
                    .removeClass('enabled')
                    .addClass(data.state);
            }
        );
    });

    /**
     * AJAX detail infos
     */
    $extmgr.find('a.info').click(function(e){
        e.preventDefault();

        var $link = jQuery(this);
        var $details = $link.parent().find('dl.details');
        if($details.length){
            $link.toggleClass('close');
            $details.toggle();
            return;
        }

        $link.addClass('close');
        jQuery.get(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'plugin_extension',
                ext: $link.data('extid'),
                act: 'info'
            },
            function(data){
                $link.parent().append(data);
            }
        );
    });

    /**
        Create section for enabling/disabling viewing options
     */
    if ( $extmgr.find('.plugins, .templates').hasClass('active') ) {
        var $extlist = jQuery('#extension__list');
        $extlist.addClass('hasDisplayOptions');

        var $displayOpts = jQuery('<p>', { id: 'extension__viewoptions'} ).appendTo($extmgr.find( '.panelHeader' ));
        $displayOpts.append(LANG.plugins.extension.display_viewoptions);

        var displayOptionsHandler = function(){
            $extlist.toggleClass( this.name );
            DokuCookie.setValue('ext_'+this.name, $extlist.hasClass(this.name) ? '1' : '0');
        };

        jQuery(['enabled', 'disabled', 'updatable']).each(function(index, chkName){
            var $label = jQuery( '<label></label>' )
                .appendTo($displayOpts);
            var $input = jQuery( '<input />', { type: 'checkbox', name: chkName })
                .change(displayOptionsHandler)
                .appendTo($label);

            var previous = DokuCookie.getValue('ext_'+chkName);
            if(typeof previous === "undefined" || previous == '1') {
                $input.click();
            }

            jQuery( '<span/>' )
                .append(' '+LANG.plugins.extension['display_'+chkName])
                .appendTo($label);
        });
    }
});


} catch (e) {
   logError(e, 'lib/plugins/extension/script.js');
}


/* XXXXXXXXXX end of lib/plugins/extension/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/translation/script.js XXXXXXXXXX */


try {
/**
 * Remove go button from translation dropdown
 */
jQuery(function(){
    var $frm = jQuery('#translation__dropdown');
    if(!$frm.length) return;
    $frm.find('input[name=go]').hide();
    $frm.find('select[name=id]').change(function(){
        var id = jQuery(this).val();
        // this should hopefully detect rewriting good enough:
        var action = $frm.attr('action');
        if(action.substr(action.length-1) == '/'){
            var link = action + id;
        }else{
            var link = action + '?id=' + id;
        }

        window.location.href= link;
    });
});


} catch (e) {
   logError(e, 'lib/plugins/translation/script.js');
}


/* XXXXXXXXXX end of lib/plugins/translation/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/acl/script.js XXXXXXXXXX */


try {
/**
 * ACL Manager AJAX enhancements
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
var dw_acl = {
    /**
     * Initialize the object and attach the event handlers
     */
    init: function () {
        var $tree;

        //FIXME only one underscore!!
        if (jQuery('#acl_manager').length === 0) {
            return;
        }

        jQuery('#acl__user select').change(dw_acl.userselhandler);
        jQuery('#acl__user button').click(dw_acl.loadinfo);

        $tree = jQuery('#acl__tree');
        $tree.dw_tree({toggle_selector: 'img',
                       load_data: function (show_sublist, $clicky) {
                           // get the enclosed link and the edit form
                           var $frm = jQuery('#acl__detail form');

                           jQuery.post(
                               DOKU_BASE + 'lib/exe/ajax.php',
                               jQuery.extend(dw_acl.parseatt($clicky.parent().find('a')[0].search),
                                             {call: 'plugin_acl',
                                              ajax: 'tree',
                                              current_ns: $frm.find('input[name=ns]').val(),
                                              current_id: $frm.find('input[name=id]').val()}),
                               show_sublist,
                               'html'
                           );
                       },

                       toggle_display: function ($clicky, opening) {
                           $clicky.attr('src',
                                        DOKU_BASE + 'lib/images/' +
                                        (opening ? 'minus' : 'plus') + '.gif');
                       }});
        $tree.delegate('a', 'click', dw_acl.treehandler);
    },

    /**
     * Handle user dropdown
     *
     * Hides or shows the user/group entry box depending on what was selected in the
     * dropdown element
     */
    userselhandler: function () {
        // make entry field visible/invisible
        jQuery('#acl__user input').toggle(this.value === '__g__' ||
                                          this.value === '__u__');
        dw_acl.loadinfo();
    },

    /**
     * Load the current permission info and edit form
     */
    loadinfo: function () {
        jQuery('#acl__info')
            .attr('role', 'alert')
            .html('<img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="..." />')
            .load(
                DOKU_BASE + 'lib/exe/ajax.php',
                jQuery('#acl__detail form').serialize() + '&call=plugin_acl&ajax=info'
            );
        return false;
    },

    /**
     * parse URL attributes into a associative array
     *
     * @todo put into global script lib?
     */
    parseatt: function (str) {
        if (str[0] === '?') {
            str = str.substr(1);
        }
        var attributes = {};
        var all = str.split('&');
        for (var i = 0; i < all.length; i++) {
            var att = all[i].split('=');
            attributes[att[0]] = decodeURIComponent(att[1]);
        }
        return attributes;
    },

    /**
     * Handles clicks to the tree nodes
     */
    treehandler: function () {
        var $link, $frm;

        $link = jQuery(this);

            // remove highlighting
            jQuery('#acl__tree a.cur').removeClass('cur');

            // add new highlighting
        $link.addClass('cur');

            // set new page to detail form
        $frm = jQuery('#acl__detail form');
        if ($link.hasClass('wikilink1')) {
            $frm.find('input[name=ns]').val('');
            $frm.find('input[name=id]').val(dw_acl.parseatt($link[0].search).id);
        } else if ($link.hasClass('idx_dir')) {
            $frm.find('input[name=ns]').val(dw_acl.parseatt($link[0].search).ns);
            $frm.find('input[name=id]').val('');
            }
        dw_acl.loadinfo();

        return false;
    }
};

jQuery(dw_acl.init);


} catch (e) {
   logError(e, 'lib/plugins/acl/script.js');
}


/* XXXXXXXXXX end of lib/plugins/acl/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/gallery/script.js XXXXXXXXXX */


try {
/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */

;( function ( window, document, $, undefined ) {

	$.swipebox = function( elem, options ) {

		// Default options
		var ui,
			defaults = {
				useCSS : true,
				useSVG : true,
				initialIndexOnArray : 0,
				removeBarsOnMobile : true,
				hideCloseButtonOnMobile : false,
				hideBarsDelay : 3000,
				videoMaxWidth : 1140,
				vimeoColor : 'cccccc',
				beforeOpen: null,
				afterOpen: null,
				afterClose: null,
				afterMedia: null,
				nextSlide: null,
				prevSlide: null,
				loopAtEnd: false,
				autoplayVideos: false,
				queryStringData: {},
				toggleClassOnLoad: '',
				titleAttribute: 'title',
				captionAttribute: 'data-caption',
				selector: null
			},

			plugin = this,
			elements = [], // slides array [ { href:'...', title:'...' }, ...],
			$elem,
			isMobile = navigator.userAgent.match( /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i ),
			isTouch = isMobile !== null || document.createTouch !== undefined || ( 'ontouchstart' in window ) || ( 'onmsgesturechange' in window ) || navigator.msMaxTouchPoints,
			supportSVG = !! document.createElementNS && !! document.createElementNS( 'http://www.w3.org/2000/svg', 'svg').createSVGRect,
			winWidth = window.innerWidth ? window.innerWidth : $( window ).width(),
			winHeight = window.innerHeight ? window.innerHeight : $( window ).height(),
			currentX = 0,
			/* jshint multistr: true */
			html = '<div id="swipebox-overlay">\
					<div id="swipebox-container">\
						<div id="swipebox-slider"></div>\
						<div id="swipebox-top-bar">\
							<div id="swipebox-title"></div>\
						</div>\
						<div id="swipebox-bottom-bar">\
							<div id="swipebox-arrows">\
								<a id="swipebox-prev"></a>\
								<a id="swipebox-next"></a>\
							</div>\
						</div>\
						<a id="swipebox-close"></a>\
					</div>\
			</div>';

		plugin.settings = {};

		$.swipebox.close = function () {
			ui.closeSlide();
		};

		$.swipebox.extend = function () {
			return ui;
		};

		plugin.init = function() {

			plugin.settings = $.extend( {}, defaults, options );

			if ( $.isArray( elem ) ) {

				elements = elem;
				ui.target = $( window );
				ui.init( plugin.settings.initialIndexOnArray );

			} else {

				$( elem ).on( 'click', plugin.settings.selector, function( event ) {

					// console.log( isTouch );

					if ( event.target.parentNode.className === 'slide current' ) {

						return false;
					}

					ui.destroy();

					if ( plugin.settings.selector === null ) {
						$elem = $( elem );
					} else {
						$elem = $( elem ).find( plugin.settings.selector );
					}

					elements = [];
					var index, relType, relVal;

					// Allow for HTML5 compliant attribute before legacy use of rel
					if ( ! relVal ) {
						relType = 'data-rel';
						relVal = $( this ).attr( relType );
					}

					if ( ! relVal ) {
						relType = 'rel';
						relVal = $( this ).attr( relType );
					}

					if ( relVal && relVal !== '' && relVal !== 'nofollow' ) {
						$elem = $elem.filter( '[' + relType + '="' + relVal + '"]' );
					}

					$elem.each( function() {

						var title = null,
							caption = null,
							href = null;

						if ( $( this ).attr( plugin.settings.titleAttribute ) ) {
							title = $( this ).attr( plugin.settings.titleAttribute );
						}

						if ( $( this ).attr( plugin.settings.captionAttribute ) ) {
							caption = $( this ).attr( plugin.settings.captionAttribute );
						}

						if ( $( this ).attr( 'href' ) ) {
							href = $( this ).attr( 'href' );
						}

						elements.push( {
							href: href,
							title: title,
							caption: caption
						} );
					} );

					index = $elem.index( $( this ) );
					event.preventDefault();
					event.stopPropagation();
					ui.target = $( event.target );
					ui.init( index );
				} );
			}
		};

		ui = {

			/**
			 * Initiate Swipebox
			 */
			init : function( index ) {
				if ( plugin.settings.beforeOpen ) {
					plugin.settings.beforeOpen();
				}
				this.target.trigger( 'swipebox-start' );
				$.swipebox.isOpen = true;
				this.build();
				this.openSlide( index );
				this.openMedia( index );
				this.preloadMedia( index+1 );
				this.preloadMedia( index-1 );
				if ( plugin.settings.afterOpen ) {
					plugin.settings.afterOpen(index);
				}
			},

			/**
			 * Built HTML containers and fire main functions
			 */
			build : function () {
				var $this = this, bg;

				$( 'body' ).append( html );

				if ( supportSVG && plugin.settings.useSVG === true ) {
					bg = $( '#swipebox-close' ).css( 'background-image' );
					bg = bg.replace( 'png', 'svg' );
					$( '#swipebox-prev, #swipebox-next, #swipebox-close' ).css( {
						'background-image' : bg
					} );
				}

				if ( isMobile && plugin.settings.removeBarsOnMobile ) {
					$( '#swipebox-bottom-bar, #swipebox-top-bar' ).remove();
				}

				$.each( elements,  function() {
					$( '#swipebox-slider' ).append( '<div class="slide"></div>' );
				} );

				$this.setDim();
				$this.actions();

				if ( isTouch ) {
					$this.gesture();
				}

				// Devices can have both touch and keyboard input so always allow key events
				$this.keyboard();

				$this.animBars();
				$this.resize();

			},

			/**
			 * Set dimensions depending on windows width and height
			 */
			setDim : function () {

				var width, height, sliderCss = {};

				// Reset dimensions on mobile orientation change
				if ( 'onorientationchange' in window ) {

					window.addEventListener( 'orientationchange', function() {
						if ( window.orientation === 0 ) {
							width = winWidth;
							height = winHeight;
						} else if ( window.orientation === 90 || window.orientation === -90 ) {
							width = winHeight;
							height = winWidth;
						}
					}, false );


				} else {

					width = window.innerWidth ? window.innerWidth : $( window ).width();
					height = window.innerHeight ? window.innerHeight : $( window ).height();
				}

				sliderCss = {
					width : width,
					height : height
				};

				$( '#swipebox-overlay' ).css( sliderCss );

			},

			/**
			 * Reset dimensions on window resize envent
			 */
			resize : function () {
				var $this = this;

				$( window ).resize( function() {
					$this.setDim();
				} ).resize();
			},

			/**
			 * Check if device supports CSS transitions
			 */
			supportTransition : function () {

				var prefixes = 'transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition'.split( ' ' ),
					i;

				for ( i = 0; i < prefixes.length; i++ ) {
					if ( document.createElement( 'div' ).style[ prefixes[i] ] !== undefined ) {
						return prefixes[i];
					}
				}
				return false;
			},

			/**
			 * Check if CSS transitions are allowed (options + devicesupport)
			 */
			doCssTrans : function () {
				if ( plugin.settings.useCSS && this.supportTransition() ) {
					return true;
				}
			},

			/**
			 * Touch navigation
			 */
			gesture : function () {

				var $this = this,
					index,
					hDistance,
					vDistance,
					hDistanceLast,
					vDistanceLast,
					hDistancePercent,
					vSwipe = false,
					hSwipe = false,
					hSwipMinDistance = 10,
					vSwipMinDistance = 50,
					startCoords = {},
					endCoords = {},
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' ),
					slider = $( '#swipebox-slider' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( 'body' ).bind( 'touchstart', function( event ) {

					$( this ).addClass( 'touching' );
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
					endCoords = event.originalEvent.targetTouches[0];
					startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
					startCoords.pageY = event.originalEvent.targetTouches[0].pageY;

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX +'%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '.touching' ).bind( 'touchmove',function( event ) {
						event.preventDefault();
						event.stopPropagation();
						endCoords = event.originalEvent.targetTouches[0];

						if ( ! hSwipe ) {
							vDistanceLast = vDistance;
							vDistance = endCoords.pageY - startCoords.pageY;
							if ( Math.abs( vDistance ) >= vSwipMinDistance || vSwipe ) {
								var opacity = 0.75 - Math.abs(vDistance) / slider.height();

								slider.css( { 'top': vDistance + 'px' } );
								slider.css( { 'opacity': opacity } );

								vSwipe = true;
							}
						}

						hDistanceLast = hDistance;
						hDistance = endCoords.pageX - startCoords.pageX;
						hDistancePercent = hDistance * 100 / winWidth;

						if ( ! hSwipe && ! vSwipe && Math.abs( hDistance ) >= hSwipMinDistance ) {
							$( '#swipebox-slider' ).css( {
								'-webkit-transition' : '',
								'transition' : ''
							} );
							hSwipe = true;
						}

						if ( hSwipe ) {

							// swipe left
							if ( 0 < hDistance ) {

								// first slide
								if ( 0 === index ) {
									// console.log( 'first' );
									$( '#swipebox-overlay' ).addClass( 'leftSpringTouch' );
								} else {
									// Follow gesture
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							// swipe rught
							} else if ( 0 > hDistance ) {

								// last Slide
								if ( elements.length === index +1 ) {
									// console.log( 'last' );
									$( '#swipebox-overlay' ).addClass( 'rightSpringTouch' );
								} else {
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							}
						}
					} );

					return false;

				} ).bind( 'touchend',function( event ) {
					event.preventDefault();
					event.stopPropagation();

					$( '#swipebox-slider' ).css( {
						'-webkit-transition' : '-webkit-transform 0.4s ease',
						'transition' : 'transform 0.4s ease'
					} );

					vDistance = endCoords.pageY - startCoords.pageY;
					hDistance = endCoords.pageX - startCoords.pageX;
					hDistancePercent = hDistance*100/winWidth;

					// Swipe to bottom to close
					if ( vSwipe ) {
						vSwipe = false;
						if ( Math.abs( vDistance ) >= 2 * vSwipMinDistance && Math.abs( vDistance ) > Math.abs( vDistanceLast ) ) {
							var vOffset = vDistance > 0 ? slider.height() : - slider.height();
							slider.animate( { top: vOffset + 'px', 'opacity': 0 },
								300,
								function () {
									$this.closeSlide();
								} );
						} else {
							slider.animate( { top: 0, 'opacity': 1 }, 300 );
						}

					} else if ( hSwipe ) {

						hSwipe = false;

						// swipeLeft
						if( hDistance >= hSwipMinDistance && hDistance >= hDistanceLast) {

							$this.getPrev();

						// swipeRight
						} else if ( hDistance <= -hSwipMinDistance && hDistance <= hDistanceLast) {

							$this.getNext();
						}

					} else { // Top and bottom bars have been removed on touchable devices
						// tap
						if ( ! bars.hasClass( 'visible-bars' ) ) {
							$this.showBars();
							$this.setTimeout();
						} else {
							$this.clearTimeout();
							$this.hideBars();
						}
					}

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX + '%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
					$( '.touching' ).off( 'touchmove' ).removeClass( 'touching' );

				} );
			},

			/**
			 * Set timer to hide the action bars
			 */
			setTimeout: function () {
				if ( plugin.settings.hideBarsDelay > 0 ) {
					var $this = this;
					$this.clearTimeout();
					$this.timeout = window.setTimeout( function() {
							$this.hideBars();
						},

						plugin.settings.hideBarsDelay
					);
				}
			},

			/**
			 * Clear timer
			 */
			clearTimeout: function () {
				window.clearTimeout( this.timeout );
				this.timeout = null;
			},

			/**
			 * Show navigation and title bars
			 */
			showBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				bars.addClass( 'visible-bars' );
			},

			/**
			 * Hide navigation and title bars
			 */
			hideBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				bars.removeClass( 'visible-bars' );
			},

			/**
			 * Animate navigation and top bars
			 */
			animBars : function () {
				var $this = this,
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( '#swipebox-slider' ).click( function() {
					if ( ! bars.hasClass( 'visible-bars' ) ) {
						$this.showBars();
						$this.setTimeout();
					}
				} );

				$( '#swipebox-bottom-bar' ).hover( function() {
					$this.showBars();
					bars.addClass( 'visible-bars' );
					$this.clearTimeout();

				}, function() {
					if ( plugin.settings.hideBarsDelay > 0 ) {
						bars.removeClass( 'visible-bars' );
						$this.setTimeout();
					}

				} );
			},

			/**
			 * Keyboard navigation
			 */
			keyboard : function () {
				var $this = this;
				$( window ).bind( 'keyup', function( event ) {
					event.preventDefault();
					event.stopPropagation();

					if ( event.keyCode === 37 ) {

						$this.getPrev();

					} else if ( event.keyCode === 39 ) {

						$this.getNext();

					} else if ( event.keyCode === 27 ) {

						$this.closeSlide();
					}
				} );
			},

			/**
			 * Navigation events : go to next slide, go to prevous slide and close
			 */
			actions : function () {
				var $this = this,
					action = 'touchend click'; // Just detect for both event types to allow for multi-input

				if ( elements.length < 2 ) {

					$( '#swipebox-bottom-bar' ).hide();

					if ( undefined === elements[ 1 ] ) {
						$( '#swipebox-top-bar' ).hide();
					}

				} else {
					$( '#swipebox-prev' ).bind( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getPrev();
						$this.setTimeout();
					} );

					$( '#swipebox-next' ).bind( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getNext();
						$this.setTimeout();
					} );
				}

				$( '#swipebox-close' ).bind( action, function(event) {
					event.preventDefault();
					event.stopPropagation();
					$this.closeSlide();
				} );
			},

			/**
			 * Set current slide
			 */
			setSlide : function ( index, isFirst ) {

				isFirst = isFirst || false;

				var slider = $( '#swipebox-slider' );

				currentX = -index*100;

				if ( this.doCssTrans() ) {
					slider.css( {
						'-webkit-transform' : 'translate3d(' + (-index*100)+'%, 0, 0)',
						'transform' : 'translate3d(' + (-index*100)+'%, 0, 0)'
					} );
				} else {
					slider.animate( { left : ( -index*100 )+'%' } );
				}

				$( '#swipebox-slider .slide' ).removeClass( 'current' );
				$( '#swipebox-slider .slide' ).eq( index ).addClass( 'current' );
				this.setTitle( index );

				if ( isFirst ) {
					slider.fadeIn();
				}

				$( '#swipebox-prev, #swipebox-next' ).removeClass( 'disabled' );

				if ( index === 0 ) {
					$( '#swipebox-prev' ).addClass( 'disabled' );
				} else if ( index === elements.length - 1 && plugin.settings.loopAtEnd !== true ) {
					$( '#swipebox-next' ).addClass( 'disabled' );
				}

				// reshow bars on each navigation
				this.showBars();
				this.setTimeout();
			},

			/**
			 * Open slide
			 */
			openSlide : function ( index ) {
				$( 'html' ).addClass( 'swipebox-html' );
				if ( isTouch ) {
					$( 'html' ).addClass( 'swipebox-touch' );

					if ( plugin.settings.hideCloseButtonOnMobile ) {
						$( 'html' ).addClass( 'swipebox-no-close-button' );
					}
				} else {
					$( 'html' ).addClass( 'swipebox-no-touch' );
				}
				$( window ).trigger( 'resize' ); // fix scroll bar visibility on desktop
				this.setSlide( index, true );
			},

			/**
			 * Set a time out if the media is a video
			 */
			preloadMedia : function ( index ) {
				var $this = this,
					src = null;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( ! $this.isVideo( src ) ) {
					setTimeout( function() {
						$this.openMedia( index );
					}, 1000);
				} else {
					$this.openMedia( index );
				}
			},

			/**
			 * Open
			 */
			openMedia : function ( index ) {
				var $this = this,
					src,
					slide;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( index < 0 || index >= elements.length ) {
					return false;
				}

				slide = $( '#swipebox-slider .slide' ).eq( index );

				if ( ! $this.isVideo( src ) ) {
					slide.addClass( 'slide-loading' );
					$this.loadMedia( src, function() {
						slide.removeClass( 'slide-loading' );
						slide.html( this );

						if ( plugin.settings.afterMedia ) {
							plugin.settings.afterMedia( index );
						}
					} );
				} else {
					slide.html( $this.getVideo( src ) );

					if ( plugin.settings.afterMedia ) {
						plugin.settings.afterMedia( index );
					}
				}

			},

			/**
			 * Set link title attribute as caption
			 */
			setTitle : function ( index ) {
				var title = null;
				var caption = null;

				$( '#swipebox-title' ).empty();

				if ( elements[ index ] !== undefined ) {
					title = elements[ index ].title;
					caption = elements[ index ].caption;
				}

				if ( title || caption ) {
					$( '#swipebox-top-bar' ).show();

					if(title) {
						var tdiv = $('<div></div>').addClass('title').text(title);
						$('#swipebox-title').append(tdiv);
					}

					if(caption) {
						var cdiv = $('<div></div>').addClass('caption').text(caption);
						$('#swipebox-title').append(cdiv);
					}
				} else {
					$( '#swipebox-top-bar' ).hide();
				}
			},

			/**
			 * Check if the URL is a video
			 */
			isVideo : function ( src ) {

				if ( src ) {
					if ( src.match( /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || src.match( /vimeo\.com\/([0-9]*)/ ) || src.match( /youtu\.be\/([a-zA-Z0-9\-_]+)/ ) ) {
						return true;
					}

					if ( src.toLowerCase().indexOf( 'swipeboxvideo=1' ) >= 0 ) {

						return true;
					}
				}

			},

			/**
			 * Parse URI querystring and:
			 * - overrides value provided via dictionary
			 * - rebuild it again returning a string
			 */
			parseUri : function (uri, customData) {
				var a = document.createElement('a'),
					qs = {};

				// Decode the URI
				a.href = decodeURIComponent( uri );

				// QueryString to Object
				if ( a.search ) {
					qs = JSON.parse( '{"' + a.search.toLowerCase().replace('?','').replace(/&/g,'","').replace(/=/g,'":"') + '"}' );
				}
				
				// Extend with custom data
				if ( $.isPlainObject( customData ) ) {
					qs = $.extend( qs, customData, plugin.settings.queryStringData ); // The dev has always the final word
				}

				// Return querystring as a string
				return $
					.map( qs, function (val, key) {
						if ( val && val > '' ) {
							return encodeURIComponent( key ) + '=' + encodeURIComponent( val );
						}
					})
					.join('&');
			},

			/**
			 * Get video iframe code from URL
			 */
			getVideo : function( url ) {
				var iframe = '',
					youtubeUrl = url.match( /((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/ ),
					youtubeShortUrl = url.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
					vimeoUrl = url.match( /(?:www\.)?vimeo\.com\/([0-9]*)/ ),
					qs = '';
				if ( youtubeUrl || youtubeShortUrl) {
					if ( youtubeShortUrl ) {
						youtubeUrl = youtubeShortUrl;
					}
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'v' : ''
					});
					iframe = '<iframe width="560" height="315" src="//' + youtubeUrl[1] + '/embed/' + youtubeUrl[2] + '?' + qs + '" frameborder="0" allowfullscreen></iframe>';

				} else if ( vimeoUrl ) {
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'byline' : '0',
						'portrait' : '0',
						'color': plugin.settings.vimeoColor
					});
					iframe = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + vimeoUrl[1] + '?' + qs + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

				} else {
					iframe = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
				}

				return '<div class="swipebox-video-container" style="max-width:' + plugin.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + iframe + '</div></div>';
			},

			/**
			 * Load image
			 */
			loadMedia : function ( src, callback ) {
                // Inline content
                if ( src.trim().indexOf('#') === 0 ) {
                    callback.call(
                    	$('<div>', {
                    		'class' : 'swipebox-inline-container'
                    	})
                    	.append(
                    		$(src)
	                    	.clone()
	                    	.toggleClass( plugin.settings.toggleClassOnLoad )
	                    )
                    );
                }
                // Everything else
                else {
    				if ( ! this.isVideo( src ) ) {
    					var img = $( '<img>' ).on( 'load', function() {
    						callback.call( img );
    					} );

    					img.attr( 'src', src );
    				}
                }
			},

			/**
			 * Get next slide
			 */
			getNext : function () {
				var $this = this,
					src,
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
				if ( index + 1 < elements.length ) {

					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index++;
					$this.setSlide( index );
					$this.preloadMedia( index+1 );
					if ( plugin.settings.nextSlide ) {
						plugin.settings.nextSlide(index);
					}
				} else {

					if ( plugin.settings.loopAtEnd === true ) {
						src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
						$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
						index = 0;
						$this.preloadMedia( index );
						$this.setSlide( index );
						$this.preloadMedia( index + 1 );
						if ( plugin.settings.nextSlide ) {
							plugin.settings.nextSlide(index);
						}
					} else {
						$( '#swipebox-overlay' ).addClass( 'rightSpring' );
						setTimeout( function() {
							$( '#swipebox-overlay' ).removeClass( 'rightSpring' );
						}, 500 );
					}
				}
			},

			/**
			 * Get previous slide
			 */
			getPrev : function () {
				var index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) ),
					src;
				if ( index > 0 ) {
					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe').attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index--;
					this.setSlide( index );
					this.preloadMedia( index-1 );
					if ( plugin.settings.prevSlide ) {
						plugin.settings.prevSlide(index);
					}
				} else {
					$( '#swipebox-overlay' ).addClass( 'leftSpring' );
					setTimeout( function() {
						$( '#swipebox-overlay' ).removeClass( 'leftSpring' );
					}, 500 );
				}
			},
			/* jshint unused:false */
			nextSlide : function ( index ) {
				// Callback for next slide
			},

			prevSlide : function ( index ) {
				// Callback for prev slide
			},

			/**
			 * Close
			 */
			closeSlide : function () {
				$( 'html' ).removeClass( 'swipebox-html' );
				$( 'html' ).removeClass( 'swipebox-touch' );
				$( window ).trigger( 'resize' );
				this.destroy();
			},

			/**
			 * Destroy the whole thing
			 */
			destroy : function () {
				$( window ).unbind( 'keyup' );
				$( 'body' ).unbind( 'touchstart' );
				$( 'body' ).unbind( 'touchmove' );
				$( 'body' ).unbind( 'touchend' );
				$( '#swipebox-slider' ).unbind();
				$( '#swipebox-overlay' ).remove();

				if ( ! $.isArray( elem ) ) {
					elem.removeData( '_swipebox' );
				}

				if ( this.target ) {
					this.target.trigger( 'swipebox-destroy' );
				}

				$.swipebox.isOpen = false;

				if ( plugin.settings.afterClose ) {
					plugin.settings.afterClose();
				}
			}
		};

		plugin.init();
	};

	$.fn.swipebox = function( options ) {

		if ( ! $.data( this, '_swipebox' ) ) {
			var swipebox = new $.swipebox( this, options );
			this.data( '_swipebox', swipebox );
		}
		return this.data( '_swipebox' );

	};

}( window, document, jQuery ) );



jQuery(function () {


    /**
     * Add a quicklink to the media popup
     */
    function gallery_plugin() {
        var $opts = jQuery('#media__opts');
        if (!$opts.length) return;
        if (!window.opener) return;

        var glbl = document.createElement('label');
        var glnk = document.createElement('a');
        var gbrk = document.createElement('br');
        glnk.name = 'gallery_plugin';
        glnk.innerHTML = LANG.plugins.gallery.addgal; //FIXME localize
        glnk.style.cursor = 'pointer';

        glnk.onclick = function () {
            var $h1 = jQuery('#media__ns');
            if (!$h1.length) return;
            var ns = $h1[0].innerHTML;
            opener.insertAtCarret('wiki__text', '{{gallery>' + ns + '}}');
            if (!dw_mediamanager.keepopen) window.close();
        };

        $opts[0].appendChild(glbl);
        glbl.appendChild(glnk);
        $opts[0].appendChild(gbrk);
    }

    /**
     * Display a selected page and hide all others
     */
    function gallery_pageselect(e) {
        var galid = e.target.hash.substr(10, 4);
        var $pages = jQuery('div.gallery__' + galid);
        $pages.hide();
        jQuery('#' + e.target.hash.substr(1)).show();
        return false;
    }

    // === main ===

    // initialize the lightbox mechanism
    jQuery("a.lightbox, a[rel^='lightbox']").swipebox({
        loopAtEnd: true
    });

    gallery_plugin();

    // hide all pages except the first one
    var $pages = jQuery('div.gallery_page');
    $pages.hide();
    $pages.eq(0).show();

    // attach page selector
    jQuery('a.gallery_pgsel').click(gallery_pageselect);
});



} catch (e) {
   logError(e, 'lib/plugins/gallery/script.js');
}


/* XXXXXXXXXX end of lib/plugins/gallery/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/vshare/script.js XXXXXXXXXX */


try {

/**
 * Append a toolbar button
 */
if(window.toolbar != undefined){
    toolbar[toolbar.length] = {"type":  "pluginvshare",
                               "title": LANG['plugins']['vshare']['button'],
                               "icon":  "../../plugins/vshare/button.png",
                               "key":   ""};
}

/**
 * Try to determine the video service, extract the ID and insert
 * the correct syntax
 */
function tb_pluginvshare(btn, props, edid) {
    PluginVShare.edid = edid;

    PluginVShare.buildSyntax();
}

var PluginVShare = {
    edid: null,

    buildSyntax: function () {

        var text = prompt(LANG['plugins']['vshare']['prompt']);
        if (!text) return;

        // This includes the site patterns:
        /**
 * video URL recognition patterns
 *
 * The first match group is used as video ID
 *
 * You need to touch conf/local.php to refresh the cache after changing
 * this file
 */

var sites = {
    'youtube':     'youtube\\.com/.*[&?]v=([a-z0-9_\\-]+)',
    'vimeo':       'vimeo\\.com\\/(\\d+)',
    'ustream':     'ustream\\.tv\\/recorded\\/(\\d+)\\/',
    '5min':        '5min\\.com\\/Video/.*-([0-9]+)([&?]|$)',
    'clipfish':    'clipfishi\\.de\\/.*\\/video\\/([0-9])+\\/',
    'dailymotion': 'dailymotion\\.com\\/video\\/([a-z0-9]+)_',
    'gtrailers':   'gametrailers\\.com\\/.*\\/(\\d+)',
    'metacafe':    'metacafe\\.com\\/watch\\/(\\d+)\\/',
    'myspacetv':   'vids\\.myspace\\.com\\/.*videoid=(\\d+)',
    'rcmovie':     'rcmovie\\.de\\/video\\/([a-f0-9]+)\\/',
    'scivee':      'scivee\\.tv\\/node\\/(\\d+)',
    'twitchtv':    'twitch\\.tv\\/([a-z0-9_\\-]+)(?:\\/c\\/(\\d+))?',
    'veoh':        'veoh\\.com\\/.*watch[^v]*(v[a-z0-9]+)',
    'bambuser':    'bambuser\\.com\\/v\\/(\\d+)',
    'bliptv':      '(?:blip\\.tv\\/play\\/([a-zA-Z0-9]+\\.(?:html|x))\\?p=1|(http?\\:\\/\\/blip\\.tv\\/(?!play)(?:[a-zA-Z0-9_\\-]+)\\/(?:[a-zA-Z0-9_\\-]+)))',
    'break':       'break\\.com\\/video\\/(?:(?:[a-z]+)\\/)?(?:[a-z\\-]+)-([0-9]+)',
    'viddler':     'viddler\\.com\\/(?:embed|v)\\/([a-z0-9]{8})',
    'msoffice':    '(?:office\\.com.*[&?]videoid=([a-z0-9\\-]+))',
    'slideshare':  '(?:(?:slideshare\\.net\\/slideshow\\/embed_code\\/|id=)([0-9]+)|(https?\\:\\/\\/www\\.slideshare\\.net\\/(?:[a-zA-Z0-9_\\-]+)\\/(?:[a-zA-Z0-9_\\-]+)))',
    'archiveorg':  'archive\\.org\\/embed\\/([a-zA-Z0-9_\\-]+)',
    'niconico':    'nicovideo\\.jp/watch/(sm[0-9]+)',
    'youku':       'v\\.youku\\.com/v_show/id_([[0-9A-Za-z]]+)\\.html',
    'tudou':       'tudou\\.com/programs/view/([0-9A-Za-z]+)',
    'bilibili':    'bilibili\\.com/video/av([0-9])+/'
};



        for (var key in sites) {

            if(sites.hasOwnProperty(key)) {
                var RE = new RegExp(sites[key], 'i');
                var match = text.match(RE);
                if (match) {
                    var urlparam = '';
                    var videoid = match[1];

                    switch (key) {
                        case 'slideshare':
                            //provided video url?
                            if(match[2]) {

                                jQuery.ajax({
                                    url: '//www.slideshare.net/api/oembed/2',
                                    dataType: 'jsonp',
                                    data: {
                                        url: match[2],
                                        format: 'jsonp'
                                    }
                                }).done(function (response, status, error) {
                                    var videoid = response.slideshow_id;
                                    PluginVShare.insert(key, videoid, urlparam);
                                }).fail(function (data, status, error) {
                                    /* http://www.slideshare.net/developers/oembed
                                     * If not found, an status 200 with response {error:true} is returned,
                                     * but "Content-Type:application/javascript; charset=utf-8" is then
                                     * wrongly changed to "Content-Type:application/json; charset=utf-8"
                                     * so it throws a parseerror
                                     */
                                    alert(LANG['plugins']['vshare']['notfound']);
                                });
                                return;
                            }
                            break;
                        case 'bliptv':
                            //provided video url?
                            if(match[2]) {

                                jQuery.ajax({
                                    url: '//blip.tv/oembed/',
                                    dataType: 'jsonp',
                                    data: {
                                        url: match[2],
                                        format: 'json'
                                    },
                                    timeout: 2000
                                }).done(function (response, status, error) {
                                    var videoidmatch = response.html.match(RE);
                                    PluginVShare.insert(key, videoidmatch[1], urlparam);
                                }).fail(function (data, status, error) {
                                    /*
                                     * If url is not found(=wrong numerical number on end), blip.tv returns a 404
                                     * because jsonp is not a xmlhttprequest, there is no 404 catched
                                     * errors are detected by waiting at the timeout
                                     */
                                    alert(LANG['plugins']['vshare']['notfound']);
                                });
                                return;
                            }
                            break;
                        case 'twitchtv':
                            if (match[2]) {
                                urlparam = '&chapter_id=' + match[2];
                            }
                            break;
                    }

                    PluginVShare.insert(key, videoid, urlparam);
                    return;
                }
            }
        }

        alert(LANG['plugins']['vshare']['notfound']);
    },

    insert: function(key, videoid, urlparam, edid) {
        var code = '{{' + key + '>' + videoid + '?medium' + urlparam + '}}';
        insertAtCarret(PluginVShare.edid, code);
    }
};



} catch (e) {
   logError(e, 'lib/plugins/vshare/script.js');
}


/* XXXXXXXXXX end of lib/plugins/vshare/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/usermanager/script.js XXXXXXXXXX */


try {
/**
 * Add JavaScript confirmation to the User Delete button
 */
jQuery(function(){
    jQuery('#usrmgr__del').click(function(){
        return confirm(LANG.del_confirm);
    });
});


} catch (e) {
   logError(e, 'lib/plugins/usermanager/script.js');
}


/* XXXXXXXXXX end of lib/plugins/usermanager/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/styling/script.js XXXXXXXXXX */


try {
/*! Iris Color Picker - v1.0.7 - 2014-11-28
* https://github.com/Automattic/Iris
* Copyright (c) 2014 Matt Wiebe; Licensed GPLv2 */
(function( $, undef ){
	var _html, nonGradientIE, gradientType, vendorPrefixes, _css, Iris, UA, isIE, IEVersion;

	_html = '<div class="iris-picker"><div class="iris-picker-inner"><div class="iris-square"><a class="iris-square-value" href="#"><span class="iris-square-handle ui-slider-handle"></span></a><div class="iris-square-inner iris-square-horiz"></div><div class="iris-square-inner iris-square-vert"></div></div><div class="iris-slider iris-strip"><div class="iris-slider-offset"></div></div></div></div>';
	_css = '.iris-picker{display:block;position:relative}.iris-picker,.iris-picker *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input+.iris-picker{margin-top:4px}.iris-error{background-color:#ffafaf}.iris-border{border-radius:3px;border:1px solid #aaa;width:200px;background-color:#fff}.iris-picker-inner{position:absolute;top:0;right:0;left:0;bottom:0}.iris-border .iris-picker-inner{top:10px;right:10px;left:10px;bottom:10px}.iris-picker .iris-square-inner{position:absolute;left:0;right:0;top:0;bottom:0}.iris-picker .iris-square,.iris-picker .iris-slider,.iris-picker .iris-square-inner,.iris-picker .iris-palette{border-radius:3px;box-shadow:inset 0 0 5px rgba(0,0,0,.4);height:100%;width:12.5%;float:left;margin-right:5%}.iris-picker .iris-square{width:76%;margin-right:10%;position:relative}.iris-picker .iris-square-inner{width:auto;margin:0}.iris-ie-9 .iris-square,.iris-ie-9 .iris-slider,.iris-ie-9 .iris-square-inner,.iris-ie-9 .iris-palette{box-shadow:none;border-radius:0}.iris-ie-9 .iris-square,.iris-ie-9 .iris-slider,.iris-ie-9 .iris-palette{outline:1px solid rgba(0,0,0,.1)}.iris-ie-lt9 .iris-square,.iris-ie-lt9 .iris-slider,.iris-ie-lt9 .iris-square-inner,.iris-ie-lt9 .iris-palette{outline:1px solid #aaa}.iris-ie-lt9 .iris-square .ui-slider-handle{outline:1px solid #aaa;background-color:#fff;-ms-filter:"alpha(Opacity=30)"}.iris-ie-lt9 .iris-square .iris-square-handle{background:0;border:3px solid #fff;-ms-filter:"alpha(Opacity=50)"}.iris-picker .iris-strip{margin-right:0;position:relative}.iris-picker .iris-strip .ui-slider-handle{position:absolute;background:0;margin:0;right:-3px;left:-3px;border:4px solid #aaa;border-width:4px 3px;width:auto;height:6px;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.2);opacity:.9;z-index:5;cursor:ns-resize}.iris-strip .ui-slider-handle:before{content:" ";position:absolute;left:-2px;right:-2px;top:-3px;bottom:-3px;border:2px solid #fff;border-radius:3px}.iris-picker .iris-slider-offset{position:absolute;top:11px;left:0;right:0;bottom:-3px;width:auto;height:auto;background:transparent;border:0;border-radius:0}.iris-picker .iris-square-handle{background:transparent;border:5px solid #aaa;border-radius:50%;border-color:rgba(128,128,128,.5);box-shadow:none;width:12px;height:12px;position:absolute;left:-10px;top:-10px;cursor:move;opacity:1;z-index:10}.iris-picker .ui-state-focus .iris-square-handle{opacity:.8}.iris-picker .iris-square-handle:hover{border-color:#999}.iris-picker .iris-square-value:focus .iris-square-handle{box-shadow:0 0 2px rgba(0,0,0,.75);opacity:.8}.iris-picker .iris-square-handle:hover::after{border-color:#fff}.iris-picker .iris-square-handle::after{position:absolute;bottom:-4px;right:-4px;left:-4px;top:-4px;border:3px solid #f9f9f9;border-color:rgba(255,255,255,.8);border-radius:50%;content:" "}.iris-picker .iris-square-value{width:8px;height:8px;position:absolute}.iris-ie-lt9 .iris-square-value,.iris-mozilla .iris-square-value{width:1px;height:1px}.iris-palette-container{position:absolute;bottom:0;left:0;margin:0;padding:0}.iris-border .iris-palette-container{left:10px;bottom:10px}.iris-picker .iris-palette{margin:0;cursor:pointer}.iris-square-handle,.ui-slider-handle{border:0;outline:0}';

	// Even IE9 dosen't support gradients. Elaborate sigh.
	UA = navigator.userAgent.toLowerCase();
	isIE = navigator.appName === 'Microsoft Internet Explorer';
	IEVersion = isIE ? parseFloat( UA.match( /msie ([0-9]{1,}[\.0-9]{0,})/ )[1] ) : 0;
	nonGradientIE = ( isIE && IEVersion < 10 );
	gradientType = false;

	// we don't bother with an unprefixed version, as it has a different syntax
	vendorPrefixes = [ '-moz-', '-webkit-', '-o-', '-ms-' ];

	// Bail for IE <= 7
	if ( nonGradientIE && IEVersion <= 7 ) {
		$.fn.iris = $.noop;
		$.support.iris = false;
		return;
	}

	$.support.iris = true;

	function testGradientType() {
		var el, base,
			bgImageString = 'backgroundImage';

		if ( nonGradientIE ) {
			gradientType = 'filter';
		}
		else {
			el = $( '<div id="iris-gradtest" />' );
			base = 'linear-gradient(top,#fff,#000)';
			$.each( vendorPrefixes, function( i, val ){
				el.css( bgImageString, val + base );
				if ( el.css( bgImageString ).match( 'gradient' ) ) {
					gradientType = i;
					return false;
				}
			});
			// check for legacy webkit gradient syntax
			if ( gradientType === false ) {
				el.css( 'background', '-webkit-gradient(linear,0% 0%,0% 100%,from(#fff),to(#000))' );
				if ( el.css( bgImageString ).match( 'gradient' ) ) {
					gradientType = 'webkit';
				}
			}
			el.remove();
		}

	}

	/**
	* Only for CSS3 gradients. oldIE will use a separate function.
	*
	* Accepts as many color stops as necessary from 2nd arg on, or 2nd
	* arg can be an array of color stops
	*
	* @param  {string} origin Gradient origin - top or left, defaults to left.
	* @return {string}        Appropriate CSS3 gradient string for use in
	*/
	function createGradient( origin, stops ) {
		origin = ( origin === 'top' ) ? 'top' : 'left';
		stops = $.isArray( stops ) ? stops : Array.prototype.slice.call( arguments, 1 );
		if ( gradientType === 'webkit' ) {
			return legacyWebkitGradient( origin, stops );
		} else {
			return vendorPrefixes[ gradientType ] + 'linear-gradient(' + origin + ', ' + stops.join(', ') + ')';
		}
	}

	/**
	* Stupid gradients for a stupid browser.
	*/
	function stupidIEGradient( origin, stops ) {
		var type, self, lastIndex, filter, startPosProp, endPosProp, dimensionProp, template, html;

		origin = ( origin === 'top' ) ? 'top' : 'left';
		stops = $.isArray( stops ) ? stops : Array.prototype.slice.call( arguments, 1 );
		// 8 hex: AARRGGBB
		// GradientType: 0 vertical, 1 horizontal
		type = ( origin === 'top' ) ? 0 : 1;
		self = $( this );
		lastIndex = stops.length - 1;
		filter = 'filter';
		startPosProp = ( type === 1 ) ? 'left' : 'top';
		endPosProp = ( type === 1 ) ? 'right' : 'bottom';
		dimensionProp = ( type === 1 ) ? 'height' : 'width';
		template = '<div class="iris-ie-gradient-shim" style="position:absolute;' + dimensionProp + ':100%;' + startPosProp + ':%start%;' + endPosProp + ':%end%;' + filter + ':%filter%;" data-color:"%color%"></div>';
		html = '';
		// need a positioning context
		if ( self.css('position') === 'static' ) {
			self.css( {position: 'relative' } );
		}

		stops = fillColorStops( stops );
		$.each(stops, function( i, startColor ) {
			var endColor, endStop, filterVal;

			// we want two at a time. if we're on the last pair, bail.
			if ( i === lastIndex ) {
				return false;
			}

			endColor = stops[ i + 1 ];
			//if our pairs are at the same color stop, moving along.
			if ( startColor.stop === endColor.stop ) {
				return;
			}

			endStop = 100 - parseFloat( endColor.stop ) + '%';
			startColor.octoHex = new Color( startColor.color ).toIEOctoHex();
			endColor.octoHex = new Color( endColor.color ).toIEOctoHex();

			filterVal = 'progid:DXImageTransform.Microsoft.Gradient(GradientType=' + type + ', StartColorStr=\'' + startColor.octoHex + '\', EndColorStr=\'' + endColor.octoHex + '\')';
			html += template.replace( '%start%', startColor.stop ).replace( '%end%', endStop ).replace( '%filter%', filterVal );
		});
		self.find( '.iris-ie-gradient-shim' ).remove();
		$( html ).prependTo( self );
	}

	function legacyWebkitGradient( origin, colorList ) {
		var stops = [];
		origin = ( origin === 'top' ) ? '0% 0%,0% 100%,' : '0% 100%,100% 100%,';
		colorList = fillColorStops( colorList );
		$.each( colorList, function( i, val ){
			stops.push( 'color-stop(' + ( parseFloat( val.stop ) / 100 ) + ', ' + val.color + ')' );
		});
		return '-webkit-gradient(linear,' + origin + stops.join(',') + ')';
	}

	function fillColorStops( colorList ) {
		var colors = [],
			percs = [],
			newColorList = [],
			lastIndex = colorList.length - 1;

		$.each( colorList, function( index, val ) {
			var color = val,
				perc = false,
				match = val.match( /1?[0-9]{1,2}%$/ );

			if ( match ) {
				color = val.replace( /\s?1?[0-9]{1,2}%$/, '' );
				perc = match.shift();
			}
			colors.push( color );
			percs.push( perc );
		});

		// back fill first and last
		if ( percs[0] === false ) {
			percs[0] = '0%';
		}

		if ( percs[lastIndex] === false ) {
			percs[lastIndex] = '100%';
		}

		percs = backFillColorStops( percs );

		$.each( percs, function( i ){
			newColorList[i] = { color: colors[i], stop: percs[i] };
		});
		return newColorList;
	}

	function backFillColorStops( stops ) {
		var first = 0,
			last = stops.length - 1,
			i = 0,
			foundFirst = false,
			incr,
			steps,
			step,
			firstVal;

		if ( stops.length <= 2 || $.inArray( false, stops ) < 0 ) {
			return stops;
		}
		while ( i < stops.length - 1 ) {
			if ( ! foundFirst && stops[i] === false ) {
				first = i - 1;
				foundFirst = true;
			} else if ( foundFirst && stops[i] !== false ) {
				last = i;
				i = stops.length;
			}
			i++;
		}
		steps = last - first;
		firstVal = parseInt( stops[first].replace('%'), 10 );
		incr = ( parseFloat( stops[last].replace('%') ) - firstVal ) / steps;
		i = first + 1;
		step = 1;
		while ( i < last ) {
			stops[i] = ( firstVal + ( step * incr ) ) + '%';
			step++;
			i++;
		}
		return backFillColorStops( stops );
	}

	$.fn.gradient = function() {
		var args = arguments;
		return this.each( function() {
			// this'll be oldishIE
			if ( nonGradientIE ) {
				stupidIEGradient.apply( this, args );
			} else {
				// new hotness
				$( this ).css( 'backgroundImage', createGradient.apply( this, args ) );
			}
		});
	};

	$.fn.raninbowGradient = function( origin, args ) {
		var opts, template, i, steps;

		origin = origin || 'top';
		opts = $.extend( {}, { s: 100, l: 50 }, args );
		template = 'hsl(%h%,' + opts.s + '%,' + opts.l + '%)';
		i = 0;
		steps = [];
		while ( i <= 360 ) {
			steps.push( template.replace('%h%', i) );
			i += 30;
		}
		return this.each(function() {
			$(this).gradient( origin, steps );
		});
	};

	// the colorpicker widget def.
	Iris = {
		options: {
			color: false,
			mode: 'hsl',
			controls: {
				horiz: 's', // horizontal defaults to saturation
				vert: 'l', // vertical defaults to lightness
				strip: 'h' // right strip defaults to hue
			},
			hide: true, // hide the color picker by default
			border: true, // draw a border around the collection of UI elements
			target: false, // a DOM element / jQuery selector that the element will be appended within. Only used when called on an input.
			width: 200, // the width of the collection of UI elements
			palettes: false // show a palette of basic colors beneath the square.
		},
		_color: '',
		_palettes: [ '#000', '#fff', '#d33', '#d93', '#ee2', '#81d742', '#1e73be', '#8224e3' ],
		_inited: false,
		_defaultHSLControls: {
			horiz: 's',
			vert: 'l',
			strip: 'h'
		},
		_defaultHSVControls: {
			horiz: 'h',
			vert: 'v',
			strip: 's'
		},
		_scale: {
			h: 360,
			s: 100,
			l: 100,
			v: 100
		},
		_create: function() {
			var self = this,
				el = self.element,
				color = self.options.color || el.val();

			if ( gradientType === false ) {
				testGradientType();
			}

			if ( el.is( 'input' ) ) {
				if ( self.options.target ) {
					self.picker = $( _html ).appendTo( self.options.target );
				} else {
					self.picker = $( _html ).insertAfter( el );
				}

				self._addInputListeners( el );
			} else {
				el.append( _html );
				self.picker = el.find( '.iris-picker' );
			}

			// Browsers / Versions
			// Feature detection doesn't work for these, and $.browser is deprecated
			if ( isIE ) {
				if ( IEVersion === 9 ) {
					self.picker.addClass( 'iris-ie-9' );
				} else if ( IEVersion <= 8 ) {
					self.picker.addClass( 'iris-ie-lt9' );
				}
			} else if ( UA.indexOf('compatible') < 0 && UA.indexOf('khtml') < 0 && UA.match( /mozilla/ ) ) {
				self.picker.addClass( 'iris-mozilla' );
			}

			if ( self.options.palettes ) {
				self._addPalettes();
			}

			self._color = new Color( color ).setHSpace( self.options.mode );
			self.options.color = self._color.toString();

			// prep 'em for re-use
			self.controls = {
				square:      self.picker.find( '.iris-square' ),
				squareDrag:  self.picker.find( '.iris-square-value' ),
				horiz:       self.picker.find( '.iris-square-horiz' ),
				vert:        self.picker.find( '.iris-square-vert' ),
				strip:       self.picker.find( '.iris-strip' ),
				stripSlider: self.picker.find( '.iris-strip .iris-slider-offset' )
			};

			// small sanity check - if we chose hsv, change default controls away from hsl
			if ( self.options.mode === 'hsv' && self._has('l', self.options.controls) ) {
				self.options.controls = self._defaultHSVControls;
			} else if ( self.options.mode === 'hsl' && self._has('v', self.options.controls) ) {
				self.options.controls = self._defaultHSLControls;
			}

			// store it. HSL gets squirrely
			self.hue = self._color.h();

			if ( self.options.hide ) {
				self.picker.hide();
			}

			if ( self.options.border ) {
				self.picker.addClass( 'iris-border' );
			}

			self._initControls();
			self.active = 'external';
			self._dimensions();
			self._change();
		},
		_has: function(needle, haystack) {
			var ret = false;
			$.each(haystack, function(i,v){
				if ( needle === v ) {
					ret = true;
					// exit the loop
					return false;
				}
			});
			return ret;
		},
		_addPalettes: function () {
			var container = $( '<div class="iris-palette-container" />' ),
				palette = $( '<a class="iris-palette" tabindex="0" />' ),
				colors = $.isArray( this.options.palettes ) ? this.options.palettes : this._palettes;

			// do we have an existing container? Empty and reuse it.
			if ( this.picker.find( '.iris-palette-container' ).length ) {
				container = this.picker.find( '.iris-palette-container' ).detach().html( '' );
			}

			$.each(colors, function(index, val) {
				palette.clone().data( 'color', val )
					.css( 'backgroundColor', val ).appendTo( container )
					.height( 10 ).width( 10 );
			});

			this.picker.append(container);
		},
		_paint: function() {
			var self = this;
			self._paintDimension( 'top', 'strip' );
			self._paintDimension( 'top', 'vert' );
			self._paintDimension( 'left', 'horiz' );
		},
		_paintDimension: function( origin, control ) {
			var self = this,
				c = self._color,
				mode = self.options.mode,
				color = self._getHSpaceColor(),
				target = self.controls[ control ],
				controlOpts = self.options.controls,
				stops;

			// don't paint the active control
			if ( control === self.active || ( self.active === 'square' && control !== 'strip' ) ) {
				return;
			}

			switch ( controlOpts[ control ] ) {
				case 'h':
					if ( mode === 'hsv' ) {
						color = c.clone();
						switch ( control ) {
							case 'horiz':
								color[controlOpts.vert](100);
								break;
							case 'vert':
								color[controlOpts.horiz](100);
								break;
							case 'strip':
								color.setHSpace('hsl');
								break;
						}
						stops = color.toHsl();
					} else {
						if ( control === 'strip' ) {
							stops = { s: color.s, l: color.l };
						} else {
							stops = { s: 100, l: color.l };
						}
					}

					target.raninbowGradient( origin, stops );
					break;
				case 's':
					if ( mode === 'hsv' ) {
						if ( control === 'vert' ) {
							stops = [ c.clone().a(0).s(0).toCSS('rgba'), c.clone().a(1).s(0).toCSS('rgba') ];
						} else if ( control === 'strip' ) {
							stops = [ c.clone().s(100).toCSS('hsl'), c.clone().s(0).toCSS('hsl') ];
						} else if ( control === 'horiz' ) {
							stops = [ '#fff', 'hsl(' + color.h + ',100%,50%)' ];
						}
					} else { // implicit mode === 'hsl'
						if ( control === 'vert' && self.options.controls.horiz === 'h' ) {
							stops = ['hsla(0, 0%, ' + color.l + '%, 0)', 'hsla(0, 0%, ' + color.l + '%, 1)'];
						} else {
							stops = ['hsl('+ color.h +',0%,50%)', 'hsl(' + color.h + ',100%,50%)'];
						}
					}


					target.gradient( origin, stops );
					break;
				case 'l':
					if ( control === 'strip' ) {
						stops = ['hsl(' + color.h + ',100%,100%)', 'hsl(' + color.h + ', ' + color.s + '%,50%)', 'hsl('+ color.h +',100%,0%)'];
					} else {
						stops = ['#fff', 'rgba(255,255,255,0) 50%', 'rgba(0,0,0,0) 50%', 'rgba(0,0,0,1)'];
					}
					target.gradient( origin, stops );
					break;
				case 'v':
						if ( control === 'strip' ) {
							stops = [ c.clone().v(100).toCSS(), c.clone().v(0).toCSS() ];
						} else {
							stops = ['rgba(0,0,0,0)', '#000'];
						}
						target.gradient( origin, stops );
					break;
				default:
					break;
			}
		},

		_getHSpaceColor: function() {
			return ( this.options.mode === 'hsv' ) ? this._color.toHsv() : this._color.toHsl();
		},

		_dimensions: function( reset ) {
			// whatever size
			var self = this,
				opts = self.options,
				controls = self.controls,
				square = controls.square,
				strip = self.picker.find( '.iris-strip' ),
				squareWidth = '77.5%',
				stripWidth = '12%',
				totalPadding = 20,
				innerWidth = opts.border ? opts.width - totalPadding : opts.width,
				controlsHeight,
				paletteCount = $.isArray( opts.palettes ) ? opts.palettes.length : self._palettes.length,
				paletteMargin, paletteWidth, paletteContainerWidth;

			if ( reset ) {
				square.css( 'width', '' );
				strip.css( 'width', '' );
				self.picker.css( {width: '', height: ''} );
			}

			squareWidth = innerWidth * ( parseFloat( squareWidth ) / 100 );
			stripWidth = innerWidth * ( parseFloat( stripWidth ) / 100 );
			controlsHeight = opts.border ? squareWidth + totalPadding : squareWidth;

			square.width( squareWidth ).height( squareWidth );
			strip.height( squareWidth ).width( stripWidth );
			self.picker.css( { width: opts.width, height: controlsHeight } );

			if ( ! opts.palettes ) {
				return self.picker.css( 'paddingBottom', '' );
			}

			// single margin at 2%
			paletteMargin = squareWidth * 2 / 100;
			paletteContainerWidth = squareWidth - ( ( paletteCount - 1 ) * paletteMargin );
			paletteWidth = paletteContainerWidth / paletteCount;
			self.picker.find('.iris-palette').each( function( i ) {
				var margin = i === 0 ? 0 : paletteMargin;
				$( this ).css({
					width: paletteWidth,
					height: paletteWidth,
					marginLeft: margin
				});
			});
			self.picker.css( 'paddingBottom', paletteWidth + paletteMargin );
			strip.height( paletteWidth + paletteMargin + squareWidth );
		},

		_addInputListeners: function( input ) {
			var self = this,
				debounceTimeout = 100,
				callback = function( event ){
					var color = new Color( input.val() ),
						val = input.val().replace( /^#/, '' );

					input.removeClass( 'iris-error' );
					// we gave a bad color
					if ( color.error ) {
						// don't error on an empty input - we want those allowed
						if ( val !== '' ) {
							input.addClass( 'iris-error' );
						}
					} else {
						if ( color.toString() !== self._color.toString() ) {
							// let's not do this on keyup for hex shortcodes
							if ( ! ( event.type === 'keyup' && val.match( /^[0-9a-fA-F]{3}$/ ) ) ) {
								self._setOption( 'color', color.toString() );
							}
						}
					}
				};

			input.on( 'change', callback ).on( 'keyup', self._debounce( callback, debounceTimeout ) );

			// If we initialized hidden, show on first focus. The rest is up to you.
			if ( self.options.hide ) {
				input.one( 'focus', function() {
					self.show();
				});
			}
		},

		_initControls: function() {
			var self = this,
				controls = self.controls,
				square = controls.square,
				controlOpts = self.options.controls,
				stripScale = self._scale[controlOpts.strip];

			controls.stripSlider.slider({
				orientation: 'vertical',
				max: stripScale,
				slide: function( event, ui ) {
					self.active = 'strip';
					// "reverse" for hue.
					if ( controlOpts.strip === 'h' ) {
						ui.value = stripScale - ui.value;
					}

					self._color[controlOpts.strip]( ui.value );
					self._change.apply( self, arguments );
				}
			});

			controls.squareDrag.draggable({
				containment: controls.square.find( '.iris-square-inner' ),
				zIndex: 1000,
				cursor: 'move',
				drag: function( event, ui ) {
					self._squareDrag( event, ui );
				},
				start: function() {
					square.addClass( 'iris-dragging' );
					$(this).addClass( 'ui-state-focus' );
				},
				stop: function() {
					square.removeClass( 'iris-dragging' );
					$(this).removeClass( 'ui-state-focus' );
				}
			}).on( 'mousedown mouseup', function( event ) {
				var focusClass = 'ui-state-focus';
				event.preventDefault();
				if (event.type === 'mousedown' ) {
					self.picker.find( '.' + focusClass ).removeClass( focusClass ).blur();
					$(this).addClass( focusClass ).focus();
				} else {
					$(this).removeClass( focusClass );
				}
			}).on( 'keydown', function( event ) {
				var container = controls.square,
					draggable = controls.squareDrag,
					position = draggable.position(),
					distance = self.options.width / 100; // Distance in pixels the draggable should be moved: 1 "stop"

				// make alt key go "10"
				if ( event.altKey ) {
					distance *= 10;
				}

				// Reposition if one of the directional keys is pressed
				switch ( event.keyCode ) {
					case 37: position.left -= distance; break; // Left
					case 38: position.top  -= distance; break; // Up
					case 39: position.left += distance; break; // Right
					case 40: position.top  += distance; break; // Down
					default: return true; // Exit and bubble
				}

				// Keep draggable within container
				position.left = Math.max( 0, Math.min( position.left, container.width() ) );
				position.top =  Math.max( 0, Math.min( position.top, container.height() ) );

				draggable.css(position);
				self._squareDrag( event, { position: position });
				event.preventDefault();
			});

			// allow clicking on the square to move there and keep dragging
			square.mousedown( function( event ) {
				var squareOffset, pos;
				// only left click
				if ( event.which !== 1 ) {
					return;
				}

				// prevent bubbling from the handle: no infinite loops
				if ( ! $( event.target ).is( 'div' ) ) {
					return;
				}

				squareOffset = self.controls.square.offset();
				pos = {
						top: event.pageY - squareOffset.top,
						left: event.pageX - squareOffset.left
				};
				event.preventDefault();
				self._squareDrag( event, { position: pos } );
				event.target = self.controls.squareDrag.get(0);
				self.controls.squareDrag.css( pos ).trigger( event );
			});

			// palettes
			if ( self.options.palettes ) {
				self._paletteListeners();
			}
		},

		_paletteListeners: function() {
			var self = this;
			self.picker.find('.iris-palette-container').on('click.palette', '.iris-palette', function() {
				self._color.fromCSS( $(this).data('color') );
				self.active = 'external';
				self._change();
			}).on( 'keydown.palette', '.iris-palette', function( event ) {
				if ( ! ( event.keyCode === 13 || event.keyCode === 32 ) ) {
					return true;
				}
				event.stopPropagation();
				$( this ).click();
			});
		},

		_squareDrag: function( event, ui ) {
			var self = this,
				controlOpts = self.options.controls,
				dimensions = self._squareDimensions(),
				vertVal = Math.round( ( dimensions.h - ui.position.top ) / dimensions.h * self._scale[controlOpts.vert] ),
				horizVal = self._scale[controlOpts.horiz] - Math.round( ( dimensions.w - ui.position.left ) / dimensions.w * self._scale[controlOpts.horiz] );

			self._color[controlOpts.horiz]( horizVal )[controlOpts.vert]( vertVal );

			self.active = 'square';
			self._change.apply( self, arguments );
		},

		_setOption: function( key, value ) {
			var self = this,
				oldValue = self.options[key],
				doDimensions = false,
				hexLessColor,
				newColor,
				method;

			// ensure the new value is set. We can reset to oldValue if some check wasn't met.
			self.options[key] = value;

			switch(key) {
				case 'color':
					// cast to string in case we have a number
					value = '' + value;
					hexLessColor = value.replace( /^#/, '' );
					newColor = new Color( value ).setHSpace( self.options.mode );
					if ( newColor.error ) {
						self.options[key] = oldValue;
					} else {
						self._color = newColor;
						self.options.color = self.options[key] = self._color.toString();
						self.active = 'external';
						self._change();
					}
					break;
				case 'palettes':
					doDimensions = true;

					if ( value ) {
						self._addPalettes();
					} else {
						self.picker.find('.iris-palette-container').remove();
					}

					// do we need to add events?
					if ( ! oldValue ) {
						self._paletteListeners();
					}
					break;
				case 'width':
					doDimensions = true;
					break;
				case 'border':
					doDimensions = true;
					method = value ? 'addClass' : 'removeClass';
					self.picker[method]('iris-border');
					break;
				case 'mode':
				case 'controls':
					// if nothing's changed, let's bail, since this causes re-rendering the whole widget
					if ( oldValue === value ) {
						return;
					}

					// we're using these poorly named variables because they're already scoped.
					// method is the element that Iris was called on. oldValue will be the options
					method = self.element;
					oldValue = self.options;
					oldValue.hide = ! self.picker.is( ':visible' );
					self.destroy();
					self.picker.remove();
					return $(self.element).iris(oldValue);
			}

			// Do we need to recalc dimensions?
			if ( doDimensions ) {
				self._dimensions(true);
			}
		},

		_squareDimensions: function( forceRefresh ) {
			var square = this.controls.square,
				dimensions,
				control;

			if ( forceRefresh !== undef && square.data('dimensions') ) {
				return square.data('dimensions');
			}

			control = this.controls.squareDrag;
			dimensions = {
				w: square.width(),
				h: square.height()
			};
			square.data( 'dimensions', dimensions );
			return dimensions;
		},

		_isNonHueControl: function( active, type ) {
			if ( active === 'square' && this.options.controls.strip === 'h' ) {
				return true;
			} else if ( type === 'external' || ( type === 'h' && active === 'strip' ) ) {
				return false;
			}

			return true;
		},

		_change: function() {
			var self = this,
				controls = self.controls,
				color = self._getHSpaceColor(),
				actions = [ 'square', 'strip' ],
				controlOpts = self.options.controls,
				type = controlOpts[self.active] || 'external',
				oldHue = self.hue;

			if ( self.active === 'strip' ) {
				// take no action on any of the square sliders if we adjusted the strip
				actions = [];
			} else if ( self.active !== 'external' ) {
				// for non-strip, non-external, strip should never change
				actions.pop(); // conveniently the last item
			}

			$.each( actions, function(index, item) {
				var value, dimensions, cssObj;
				if ( item !== self.active ) {
					switch ( item ) {
						case 'strip':
							// reverse for hue
							value = ( controlOpts.strip === 'h' ) ? self._scale[controlOpts.strip] - color[controlOpts.strip] : color[controlOpts.strip];
							controls.stripSlider.slider( 'value', value );
							break;
						case 'square':
							dimensions = self._squareDimensions();
							cssObj = {
								left: color[controlOpts.horiz] / self._scale[controlOpts.horiz] * dimensions.w,
								top: dimensions.h - ( color[controlOpts.vert] / self._scale[controlOpts.vert] * dimensions.h )
							};

							self.controls.squareDrag.css( cssObj );
							break;
					}
				}
			});

			// Ensure that we don't change hue if we triggered a hue reset
			if ( color.h !== oldHue && self._isNonHueControl( self.active, type ) ) {
				self._color.h(oldHue);
			}

			// store hue for repeating above check next time
			self.hue = self._color.h();

			self.options.color = self._color.toString();

			// only run after the first time
			if ( self._inited ) {
				self._trigger( 'change', { type: self.active }, { color: self._color } );
			}

			if ( self.element.is( ':input' ) && ! self._color.error ) {
				self.element.removeClass( 'iris-error' );
				if ( self.element.val() !== self._color.toString() ) {
					self.element.val( self._color.toString() );
				}
			}

			self._paint();
			self._inited = true;
			self.active = false;
		},
		// taken from underscore.js _.debounce method
		_debounce: function( func, wait, immediate ) {
			var timeout, result;
			return function() {
				var context = this,
					args = arguments,
					later,
					callNow;

				later = function() {
					timeout = null;
					if ( ! immediate) {
						result = func.apply( context, args );
					}
				};

				callNow = immediate && !timeout;
				clearTimeout( timeout );
				timeout = setTimeout( later, wait );
				if ( callNow ) {
					result = func.apply( context, args );
				}
				return result;
			};
		},
		show: function() {
			this.picker.show();
		},
		hide: function() {
			this.picker.hide();
		},
		toggle: function() {
			this.picker.toggle();
		},
		color: function(newColor) {
			if ( newColor === true ) {
				return this._color.clone();
			} else if ( newColor === undef ) {
				return this._color.toString();
			}
			this.option('color', newColor);
		}
	};
	// initialize the widget
	$.widget( 'a8c.iris', Iris );
	// add CSS
	$( '<style id="iris-css">' + _css + '</style>' ).appendTo( 'head' );

}( jQuery ));
/*! Color.js - v0.9.11 - 2013-08-09
* https://github.com/Automattic/Color.js
* Copyright (c) 2013 Matt Wiebe; Licensed GPLv2 */
(function(global, undef) {

	var Color = function( color, type ) {
		if ( ! ( this instanceof Color ) )
			return new Color( color, type );

		return this._init( color, type );
	};

	Color.fn = Color.prototype = {
		_color: 0,
		_alpha: 1,
		error: false,
		// for preserving hue/sat in fromHsl().toHsl() flows
		_hsl: { h: 0, s: 0, l: 0 },
		// for preserving hue/sat in fromHsv().toHsv() flows
		_hsv: { h: 0, s: 0, v: 0 },
		// for setting hsl or hsv space - needed for .h() & .s() functions to function properly
		_hSpace: 'hsl',
		_init: function( color ) {
			var func = 'noop';
			switch ( typeof color ) {
					case 'object':
						// alpha?
						if ( color.a !== undef )
							this.a( color.a );
						func = ( color.r !== undef ) ? 'fromRgb' :
							( color.l !== undef ) ? 'fromHsl' :
							( color.v !== undef ) ? 'fromHsv' : func;
						return this[func]( color );
					case 'string':
						return this.fromCSS( color );
					case 'number':
						return this.fromInt( parseInt( color, 10 ) );
			}
			return this;
		},

		_error: function() {
			this.error = true;
			return this;
		},

		clone: function() {
			var newColor = new Color( this.toInt() ),
				copy = ['_alpha', '_hSpace', '_hsl', '_hsv', 'error'];
			for ( var i = copy.length - 1; i >= 0; i-- ) {
				newColor[ copy[i] ] = this[ copy[i] ];
			}
			return newColor;
		},

		setHSpace: function( space ) {
			this._hSpace = ( space === 'hsv' ) ? space : 'hsl';
			return this;
		},

		noop: function() {
			return this;
		},

		fromCSS: function( color ) {
			var list,
				leadingRE = /^(rgb|hs(l|v))a?\(/;
			this.error = false;

			// whitespace and semicolon trim
			color = color.replace(/^\s+/, '').replace(/\s+$/, '').replace(/;$/, '');

			if ( color.match(leadingRE) && color.match(/\)$/) ) {
				list = color.replace(/(\s|%)/g, '').replace(leadingRE, '').replace(/,?\);?$/, '').split(',');

				if ( list.length < 3 )
					return this._error();

				if ( list.length === 4 ) {
					this.a( parseFloat( list.pop() ) );
					// error state has been set to true in .a() if we passed NaN
					if ( this.error )
						return this;
				}

				for (var i = list.length - 1; i >= 0; i--) {
					list[i] = parseInt(list[i], 10);
					if ( isNaN( list[i] ) )
						return this._error();
				}

				if ( color.match(/^rgb/) ) {
					return this.fromRgb( {
						r: list[0],
						g: list[1],
						b: list[2]
					} );
				} else if ( color.match(/^hsv/) ) {
					return this.fromHsv( {
						h: list[0],
						s: list[1],
						v: list[2]
					} );
				} else {
					return this.fromHsl( {
						h: list[0],
						s: list[1],
						l: list[2]
					} );
				}
			} else {
				// must be hex amirite?
				return this.fromHex( color );
			}
		},

		fromRgb: function( rgb, preserve ) {
			if ( typeof rgb !== 'object' || rgb.r === undef || rgb.g === undef || rgb.b === undef )
				return this._error();

			this.error = false;
			return this.fromInt( parseInt( ( rgb.r << 16 ) + ( rgb.g << 8 ) + rgb.b, 10 ), preserve );
		},

		fromHex: function( color ) {
			color = color.replace(/^#/, '').replace(/^0x/, '');
			if ( color.length === 3 ) {
				color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
			}

			// rough error checking - this is where things go squirrely the most
			this.error = ! /^[0-9A-F]{6}$/i.test( color );
			return this.fromInt( parseInt( color, 16 ) );
		},

		fromHsl: function( hsl ) {
			var r, g, b, q, p, h, s, l;

			if ( typeof hsl !== 'object' || hsl.h === undef || hsl.s === undef || hsl.l === undef )
				return this._error();

			this._hsl = hsl; // store it
			this._hSpace = 'hsl'; // implicit
			h = hsl.h / 360; s = hsl.s / 100; l = hsl.l / 100;
			if ( s === 0 ) {
				r = g = b = l; // achromatic
			}
			else {
				q = l < 0.5 ? l * ( 1 + s ) : l + s - l * s;
				p = 2 * l - q;
				r = this.hue2rgb( p, q, h + 1/3 );
				g = this.hue2rgb( p, q, h );
				b = this.hue2rgb( p, q, h - 1/3 );
			}
			return this.fromRgb( {
				r: r * 255,
				g: g * 255,
				b: b * 255
			}, true ); // true preserves hue/sat
		},

		fromHsv: function( hsv ) {
			var h, s, v, r, g, b, i, f, p, q, t;
			if ( typeof hsv !== 'object' || hsv.h === undef || hsv.s === undef || hsv.v === undef )
				return this._error();

			this._hsv = hsv; // store it
			this._hSpace = 'hsv'; // implicit

			h = hsv.h / 360; s = hsv.s / 100; v = hsv.v / 100;
			i = Math.floor( h * 6 );
			f = h * 6 - i;
			p = v * ( 1 - s );
			q = v * ( 1 - f * s );
			t = v * ( 1 - ( 1 - f ) * s );

			switch( i % 6 ) {
				case 0:
					r = v; g = t; b = p;
					break;
				case 1:
					r = q; g = v; b = p;
					break;
				case 2:
					r = p; g = v; b = t;
					break;
				case 3:
					r = p; g = q; b = v;
					break;
				case 4:
					r = t; g = p; b = v;
					break;
				case 5:
					r = v; g = p; b = q;
					break;
			}

			return this.fromRgb( {
				r: r * 255,
				g: g * 255,
				b: b * 255
			}, true ); // true preserves hue/sat

		},
		// everything comes down to fromInt
		fromInt: function( color, preserve ) {
			this._color = parseInt( color, 10 );

			if ( isNaN( this._color ) )
				this._color = 0;

			// let's coerce things
			if ( this._color > 16777215 )
				this._color = 16777215;
			else if ( this._color < 0 )
				this._color = 0;

			// let's not do weird things
			if ( preserve === undef ) {
				this._hsv.h = this._hsv.s = this._hsl.h = this._hsl.s = 0;
			}
			// EVENT GOES HERE
			return this;
		},

		hue2rgb: function( p, q, t ) {
			if ( t < 0 ) {
				t += 1;
			}
			if ( t > 1 ) {
				t -= 1;
			}
			if ( t < 1/6 ) {
				return p + ( q - p ) * 6 * t;
			}
			if ( t < 1/2 ) {
				return q;
			}
			if ( t < 2/3 ) {
				return p + ( q - p ) * ( 2/3 - t ) * 6;
			}
			return p;
		},

		toString: function() {
			var hex = parseInt( this._color, 10 ).toString( 16 );
			if ( this.error )
				return '';
			// maybe left pad it
			if ( hex.length < 6 ) {
				for (var i = 6 - hex.length - 1; i >= 0; i--) {
					hex = '0' + hex;
				}
			}
			return '#' + hex;
		},

		toCSS: function( type, alpha ) {
			type = type || 'hex';
			alpha = parseFloat( alpha || this._alpha );
			switch ( type ) {
				case 'rgb':
				case 'rgba':
					var rgb = this.toRgb();
					if ( alpha < 1 ) {
						return "rgba( " + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + alpha + " )";
					}
					else {
						return "rgb( " + rgb.r + ", " + rgb.g + ", " + rgb.b + " )";
					}
					break;
				case 'hsl':
				case 'hsla':
					var hsl = this.toHsl();
					if ( alpha < 1 ) {
						return "hsla( " + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%, " + alpha + " )";
					}
					else {
						return "hsl( " + hsl.h + ", " + hsl.s + "%, " + hsl.l + "% )";
					}
					break;
				default:
					return this.toString();
			}
		},

		toRgb: function() {
			return {
				r: 255 & ( this._color >> 16 ),
				g: 255 & ( this._color >> 8 ),
				b: 255 & ( this._color )
			};
		},

		toHsl: function() {
			var rgb = this.toRgb();
			var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
			var max = Math.max( r, g, b ), min = Math.min( r, g, b );
			var h, s, l = ( max + min ) / 2;

			if ( max === min ) {
				h = s = 0; // achromatic
			} else {
				var d = max - min;
				s = l > 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
				switch ( max ) {
					case r: h = ( g - b ) / d + ( g < b ? 6 : 0 );
						break;
					case g: h = ( b - r ) / d + 2;
						break;
					case b: h = ( r - g ) / d + 4;
						break;
				}
				h /= 6;
			}

			// maintain hue & sat if we've been manipulating things in the HSL space.
			h = Math.round( h * 360 );
			if ( h === 0 && this._hsl.h !== h ) {
				h = this._hsl.h;
			}
			s = Math.round( s * 100 );
			if ( s === 0 && this._hsl.s ) {
				s = this._hsl.s;
			}

			return {
				h: h,
				s: s,
				l: Math.round( l * 100 )
			};

		},

		toHsv: function() {
			var rgb = this.toRgb();
			var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
			var max = Math.max( r, g, b ), min = Math.min( r, g, b );
			var h, s, v = max;
			var d = max - min;
			s = max === 0 ? 0 : d / max;

			if ( max === min ) {
				h = s = 0; // achromatic
			} else {
				switch( max ){
					case r:
						h = ( g - b ) / d + ( g < b ? 6 : 0 );
						break;
					case g:
						h = ( b - r ) / d + 2;
						break;
					case b:
						h = ( r - g ) / d + 4;
						break;
				}
				h /= 6;
			}

			// maintain hue & sat if we've been manipulating things in the HSV space.
			h = Math.round( h * 360 );
			if ( h === 0 && this._hsv.h !== h ) {
				h = this._hsv.h;
			}
			s = Math.round( s * 100 );
			if ( s === 0 && this._hsv.s ) {
				s = this._hsv.s;
			}

			return {
				h: h,
				s: s,
				v: Math.round( v * 100 )
			};
		},

		toInt: function() {
			return this._color;
		},

		toIEOctoHex: function() {
			// AARRBBGG
			var hex = this.toString();
			var AA = parseInt( 255 * this._alpha, 10 ).toString(16);
			if ( AA.length === 1 ) {
				AA = '0' + AA;
			}
			return '#' + AA + hex.replace(/^#/, '' );
		},

		toLuminosity: function() {
			var rgb = this.toRgb();
			return 0.2126 * Math.pow( rgb.r / 255, 2.2 ) + 0.7152 * Math.pow( rgb.g / 255, 2.2 ) + 0.0722 * Math.pow( rgb.b / 255, 2.2);
		},

		getDistanceLuminosityFrom: function( color ) {
			if ( ! ( color instanceof Color ) ) {
				throw 'getDistanceLuminosityFrom requires a Color object';
			}
			var lum1 = this.toLuminosity();
			var lum2 = color.toLuminosity();
			if ( lum1 > lum2 ) {
				return ( lum1 + 0.05 ) / ( lum2 + 0.05 );
			}
			else {
				return ( lum2 + 0.05 ) / ( lum1 + 0.05 );
			}
		},

		getMaxContrastColor: function() {
			var lum = this.toLuminosity();
			var hex = ( lum >= 0.5 ) ? '000000' : 'ffffff';
			return new Color( hex );
		},

		getReadableContrastingColor: function( bgColor, minContrast ) {
			if ( ! bgColor instanceof Color ) {
				return this;
			}

			// you shouldn't use less than 5, but you might want to.
			var targetContrast = ( minContrast === undef ) ? 5 : minContrast;
			// working things
			var contrast = bgColor.getDistanceLuminosityFrom( this );
			var maxContrastColor = bgColor.getMaxContrastColor();
			var maxContrast = maxContrastColor.getDistanceLuminosityFrom( bgColor );

			// if current max contrast is less than the target contrast, we had wishful thinking.
			// still, go max
			if ( maxContrast <= targetContrast ) {
				return maxContrastColor;
			}
			// or, we might already have sufficient contrast
			else if ( contrast >= targetContrast ) {
				return this;
			}

			var incr = ( 0 === maxContrastColor.toInt() ) ? -1 : 1;
			while ( contrast < targetContrast ) {
				this.l( incr, true ); // 2nd arg turns this into an incrementer
				contrast = this.getDistanceLuminosityFrom( bgColor );
				// infininite loop prevention: you never know.
				if ( this._color === 0 || this._color === 16777215 ) {
					break;
				}
			}

			return this;

		},

		a: function( val ) {
			if ( val === undef )
				return this._alpha;

			var a = parseFloat( val );

			if ( isNaN( a ) )
				return this._error();

			this._alpha = a;
			return this;
		},

		// TRANSFORMS

		darken: function( amount ) {
			amount = amount || 5;
			return this.l( - amount, true );
		},

		lighten: function( amount ) {
			amount = amount || 5;
			return this.l( amount, true );
		},

		saturate: function( amount ) {
			amount = amount || 15;
			return this.s( amount, true );
		},

		desaturate: function( amount ) {
			amount = amount || 15;
			return this.s( - amount, true );
		},

		toGrayscale: function() {
			return this.setHSpace('hsl').s( 0 );
		},

		getComplement: function() {
			return this.h( 180, true );
		},

		getSplitComplement: function( step ) {
			step = step || 1;
			var incr = 180 + ( step * 30 );
			return this.h( incr, true );
		},

		getAnalog: function( step ) {
			step = step || 1;
			var incr = step * 30;
			return this.h( incr, true );
		},

		getTetrad: function( step ) {
			step = step || 1;
			var incr = step * 60;
			return this.h( incr, true );
		},

		getTriad: function( step ) {
			step = step || 1;
			var incr = step * 120;
			return this.h( incr, true );
		},

		_partial: function( key ) {
			var prop = shortProps[key];
			return function( val, incr ) {
				var color = this._spaceFunc('to', prop.space);

				// GETTER
				if ( val === undef )
					return color[key];

				// INCREMENT
				if ( incr === true )
					val = color[key] + val;

				// MOD & RANGE
				if ( prop.mod )
					val = val % prop.mod;
				if ( prop.range )
					val = ( val < prop.range[0] ) ? prop.range[0] : ( val > prop.range[1] ) ? prop.range[1] : val;

				// NEW VALUE
				color[key] = val;

				return this._spaceFunc('from', prop.space, color);
			};
		},

		_spaceFunc: function( dir, s, val ) {
			var space = s || this._hSpace,
				funcName = dir + space.charAt(0).toUpperCase() + space.substr(1);
			return this[funcName](val);
		}
	};

	var shortProps = {
		h: {
			mod: 360
		},
		s: {
			range: [0,100]
		},
		l: {
			space: 'hsl',
			range: [0,100]
		},
		v: {
			space: 'hsv',
			range: [0,100]
		},
		r: {
			space: 'rgb',
			range: [0,255]
		},
		g: {
			space: 'rgb',
			range: [0,255]
		},
		b: {
			space: 'rgb',
			range: [0,255]
		}
	};

	for ( var key in shortProps ) {
		if ( shortProps.hasOwnProperty( key ) )
			Color.fn[key] = Color.fn._partial(key);
	}

	// play nicely with Node + browser
	if ( typeof exports === 'object' )
		module.exports = Color;
	else
		global.Color = Color;

}(this));


jQuery(function () {

    /**
     * Function to reload the preview styles in the main window
     *
     * @param {Window} target the main window
     */
    function applyPreview(target) {
        // remove style
        var $style = target.jQuery('link[rel=stylesheet][href*="lib/exe/css.php"]');
        $style.attr('href', '');

        // append the loader screen
        var $loader = target.jQuery('#plugin__styling_loader');
        if (!$loader.length) {
            $loader = target.jQuery('<div id="plugin__styling_loader">' + LANG.plugins.styling.loader + '</div>');
            $loader.css({
                'position':         'absolute',
                'width':            '100%',
                'height':           '100%',
                'top':              0,
                'left':             0,
                'z-index':          5000,
                'background-color': '#fff',
                'opacity':          '0.7',
                'color':            '#000',
                'font-size':        '2.5em',
                'text-align':       'center',
                'line-height':      1.5,
                'padding-top':      '2em'
            });
            target.jQuery('body').append($loader);
        }

        // load preview in main window (timeout works around chrome updating CSS weirdness)
        setTimeout(function () {
            var now = new Date().getTime();
            $style.attr('href', DOKU_BASE + 'lib/exe/css.php?preview=1&tseed=' + now);
        }, 500);
    }

    var doreload = 1;
    var $styling_plugin = jQuery('#plugin__styling');

    // if we are not on the plugin page (either main or popup)
    if (!$styling_plugin.length) {
        // handle the preview cookie
        if(DokuCookie.getValue('styling_plugin') == 1) {
            applyPreview(window);
        }
        return; // nothing more to do here
    }

    /* ---- from here on we're in the popup or admin page ---- */

    // add the color picker
    $styling_plugin.find('.color').iris({});

    // add button on main page
    if (!$styling_plugin.hasClass('ispopup')) {
        var $form = $styling_plugin.find('form.styling').first();
        var $btn = jQuery('<button>' + LANG.plugins.styling.popup + '</button>');
        $form.prepend($btn);

        $btn.click(function (e) {
            var windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=false,width=500,height=500";
            window.open(DOKU_BASE + 'lib/plugins/styling/popup.php', 'styling_popup', windowFeatures);
            e.preventDefault();
            e.stopPropagation();
        }).wrap('<p></p>');
        return; // we exit here if this is not the popup
    }

    /* ---- from here on we're in the popup only ---- */

    // reload the main page on close
    window.onunload = function(e) {
        if(doreload) {
            window.opener.DokuCookie.setValue('styling_plugin', 0);
            window.opener.document.location.reload();
        }
        return null;
    };

    // don't reload on our own buttons
    jQuery(':button').click(function(e){
        doreload = false;
    });

    // on first load apply preview
    applyPreview(window.opener);

    // enable the preview cookie
    window.opener.DokuCookie.setValue('styling_plugin', 1);
});


} catch (e) {
   logError(e, 'lib/plugins/styling/script.js');
}


/* XXXXXXXXXX end of lib/plugins/styling/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/tag/script.js XXXXXXXXXX */


try {
/**
 * For the searchtags syntax: make the checkboxes behave like radio buttons
 * so the user can't both include and exclude a tag
 */
jQuery(function() {
    jQuery('form.plugin__tag_search table input').change(function() {
        if (jQuery(this).attr('checked')) { // was this input checked?
            if (jQuery(this).parent().hasClass('minus')) {
                // find the other input in the same tr and uncheck it
                jQuery(this).closest('tr').find('.plus input').attr('checked', false);
            } else {
                jQuery(this).closest('tr').find('.minus input').attr('checked', false);
            }
        }
    })
});


} catch (e) {
   logError(e, 'lib/plugins/tag/script.js');
}


/* XXXXXXXXXX end of lib/plugins/tag/script.js XXXXXXXXXX */

jQuery(function(){ dw_locktimer.init(540,1); });

