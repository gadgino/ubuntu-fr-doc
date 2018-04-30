//espace de nom pour le code d'ubuntu-fr
var ubuntuFr = {};

ubuntuFr.configure = function (){
	alert("La page de configuration du style est en cour de maturation")
}
ubuntuFr.vote = function () {
	ubuntuFr.configure()
}

//CTRL+ALT+CLICK pour ouvrir la fenêtre
onkeypress = function (e){
	if(e.altKey && e.ctrlKey && e.code == "KeyF") {
		ubuntuFr.configure();
	}
}

//hook les lien pour la configuration et le vote
ubuntuFr.linkHook = document.getElementsByTagName('a');
for ( link of ubuntuFr.linkHook ){
	switch(link.title) {
		case "configuration":
			link.onclick = function () {
				ubuntuFr.configure();
				return false;
			}
			
		break;
		case "voter" :
			link.onclick = function () {
				ubuntuFr.vote();
				return false;
			}
		break;
	}
}
