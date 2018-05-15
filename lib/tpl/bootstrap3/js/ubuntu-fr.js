//espace de nom pour le code d'ubuntu-fr
var ubuntuFr = {};
document.ub = ubuntuFr;

//fonction pour faire une fenêtre modale 
ubuntuFr.makeModale = (titre = "",identifiant = "")=>{
	
	var modal = {};
	modal.section = document.createElement('section'),
	modal.article = document.createElement('article'),
	modal.header = document.createElement('header'),
	modal.title = document.createElement('h1'),
	modal.body = document.createElement('article'),
	modal.footer = document.createElement('footer');
	
	//structure
	modal.section.appendChild(modal.article);
	modal.article.appendChild(modal.header);
	modal.article.appendChild(modal.body);
	modal.article.appendChild(modal.footer);
	modal.header.appendChild(modal.title);
	
	modal.section.id = identifiant;
	modal.section.classList.add('modal');
	
	if(titre) modal.title.innerHTML = titre;
	
	modal.section.isOpen = false;
	modal.section.open = function(){
		this.style.display = "flex";
		this.isOpen = true;
	}
	modal.section.close = function(){ 
		this.style.display = "none";
		this.isOpen = false
	}
	modal.section.toggle = function(){
		this.isOpen?this.close():this.open();
	}
	modal.section.onclick = function(e){
		if(e.target == this)this.close();
	}
	
	return modal;
}

//pour la configurtion à la volée..
//le fenêtre modal
ubuntuFr.configure = ubuntuFr.makeModale('Configuration du Thème',"modal_configuration");
document.body.appendChild(ubuntuFr.configure.section);

ubuntuFr.configure.sessionStorageAccord = false;


//CTRL+ALT+F pour ouvrir la fenêtre
onkeypress = function (e){
	if(e.altKey && e.ctrlKey && e.code == "KeyF") {
		ubuntuFr.configure.section.toggle();
	}
}

//hook les lien pour la configuration et le vote
ubuntuFr.linkHook = document.getElementsByTagName('a');
for ( link of ubuntuFr.linkHook ){
	switch(link.title) {
		case "configuration":
			link.onclick = function () {
				ubuntuFr.configure.section.open();
				return false;
			}
			
		break;
		case "voter" :
			link.onclick = function () {
				//ubuntuFr.vote();
				return false;
			}
		break;
	}
}
//mise en place de la feuille de style
ubuntuFr.configure.styleElement = document.createElement('style');
document.head.appendChild(ubuntuFr.configure.styleElement);


ubuntuFr.configure.styleSheet = ubuntuFr.configure.styleElement.sheet;
ubuntuFr.configure.styleElement = undefined;
ubuntuFr.configure.styleSheet.getSession = function(){
	var regleStore = JSON.parse(sessionStorage.getItem('configure.styleSheet'));
	if(regleStore) for(let regle of regleStore) this.insertRule(regle);
}


ubuntuFr.configure.styleSheet.getSession();

ubuntuFr.configure.styleSheet.sendRule = function(selecteur,content){
	var regleStore = [];
	function format(text){
	  var tab = text.split(',');
		tab.forEach(function (e,i,t){t[i]= e.trim()});
		return tab.join();
	}
	for(var i = 0 ; i < this.cssRules.length; i++){
		var rule = this.cssRules.item(i);
		if(format(rule.selectorText) == format(selecteur)){
			this.deleteRule(i);
			i--;
		}else{
			regleStore.push(rule.cssText);
		}
	}
	if(ubuntuFr.configure.sessionStorageAccord) sessionStorage.setItem('configure.styleSheet',JSON.stringify(regleStore));;
	this.insertRule (selecteur+content);
}

//formulaire de selection
ubuntuFr.configure.formulaire = document.createElement('form');
ubuntuFr.configure.body.appendChild(ubuntuFr.configure.formulaire);

ubuntuFr.configure.formulaire.newLine = function (label = "" , type = "checkbox"){
	var line = document.createElement('p');
	line.label = document.createElement('label');
	line.input = document.createElement('input');
	line.appendChild(line.label);
	line.appendChild(line.input);
	ubuntuFr.configure.formulaire.appendChild(line);
	
	line.label.innerHTML = label;
	line.input.type = type;
	line.input.sendRule = function(selector,content){ ubuntuFr.configure.styleSheet.sendRule(selector,content) };
	
	return line;
}

//paramètrage des champs de configuration
ubuntuFr.configure.link = ubuntuFr.configure.formulaire.newLine("<a>Liens internes</a>","color");
ubuntuFr.configure.link.input.onchange = function (){
	this.sendRule("a","{ color: "+ this.value +"}");	
}
ubuntuFr.configure.linkActive = ubuntuFr.configure.formulaire.newLine("<a>Liens internes actifs</a>","color");
ubuntuFr.configure.linkActive.input.onchange =  function (){
	this.sendRule("a:hover","{ color: "+ this.value +"; text-decoration: underline;}");
}

ubuntuFr.configure.linkOut = ubuntuFr.configure.formulaire.newLine('<a class="urlextern">Liens externes</a>',"color");
ubuntuFr.configure.linkOut.input.onchange = function (){
	this.sendRule("a.urlextern","{ color: "+ this.value +";}");	
}
ubuntuFr.configure.linkOutActive = ubuntuFr.configure.formulaire.newLine('<a class="urlextern">Liens externes actifs</a>',"color");
ubuntuFr.configure.linkOutActive.input.onchange =  function (){
	this.sendRule("a.urlextern:hover,a.urlextern:focus","{ color: "+ this.value +"; text-decoration: underline;}");
}

ubuntuFr.configure.sessionStorage = ubuntuFr.configure.formulaire.newLine('Garder les donnèes ');
ubuntuFr.configure.sessionStorage.input.onchange = function(){
  ubuntuFr.configure.sessionStorageAccord = this.value?true:false;
}

