
//CSS & JavaScript
//----------------------------------------------------------------------------------------------------------//
// Project travailler En Groupe//----------------------------------------------------------------------------------------------------------//

//Choix de la difficulté, création de la grille--------------//

function ChangeDifficulte(){
	  var dif = document.getElementById("difficulte").value;
		switch(dif){
			case "1":
				GenererTab(10, 20);
				break;
			case "2":
				GenererTab(20, 30);
				break;
			case "3":
				GenererTab(30, 40);
				break;
			default: alert("erreur");
		}
	}
function GenererTab(x, y){
	if (document.getElementById("conteneur2")){ //on teste l'existene de conteneur2
		document.body.removeChild(document.getElementById("conteneur2")); // on supprime le noeud qui contient le tableau
	}
		N_div = document.createElement("div");
		N_div.setAttribute("id", "conteneur2");

		N_div.setAttribute("style", "display:block");
		document.body.appendChild(N_div);
		tab = document.createElement("table");
		tblBody = document.createElement("tbody");
		// creation de ligne
        for (var i = 0; i < (x+1); i++) {
            // creation de colonne
            var ligne = document.createElement("tr");

            for (var j = 0; j < (y+1); j++) {
             var colonne = document.createElement("td");
                   colonne.id =i+":"+j;
									 colonne.setAttribute("class", "hidden");
				   colonne.onclick = verififer;
                   ligne.appendChild(colonne);
            }
			tblBody.appendChild(ligne);
		}

		tab.appendChild(tblBody);
		tab.setAttribute("border", "3");
		N_div.appendChild(tab);
		PoseBombes(x, y);
}
		function verififer(){
			alert("yay");
		}

function PoseBombes(x, y){ // Pose les bombes dans les tableau, 1 chance sur 4.
	var nbBombe = 0;
	for (var i = 0; i < (x+1); i++)
			for (var j = 0; j < (y+1); j++) {
				var Isbombe = Math.random();
				if (Isbombe <= 0.05){
					var idBombe = i+":"+j;
					nbBombe ++;
					document.getElementById("bombes").innerHTML = nbBombe;
					document.getElementById(idBombe).setAttribute("class", "hidden mine");
					console.log(idBombe);
				}
			}
}

function PlaceFlag(){ //Permet de placer le petit drapeau
	var dif = document.getElementById("difficulte").value;
	switch(dif){
		case "1":
		for (var i = 0; i < 11; i++){
				for (var j = 0; j < 21; j++) {
					var idFlag = i+":"+j;
					document.getElementById(idFlag).setAttribute("onclick", "ToFlag(this.id)");
					}
				}
			break;
		case "2":
		for (var i = 0; i < 21; i++){
				for (var j = 0; j < 31; j++) {
					var idFlag = i+":"+j;
					document.getElementById(idFlag).setAttribute("onclick", "ToFlag(this.id)");
					}
				}
			break;
		case "3":
		for (var i = 0; i < 31; i++){
				for (var j = 0; j < 41; j++) {
					var idFlag = i+":"+j;
					document.getElementById(idFlag).setAttribute("onclick", "ToFlag(this.id)");
					}
				}
			break;
		default: alert("erreur");
	}

}
function ToFlag(x){
document.getElementById(x).classList += " flag";
var dif = document.getElementById("difficulte").value;
switch(dif){
	case "1":
	for (var i = 0; i < 11; i++){
			for (var j = 0; j < 21; j++) {
				var idFlag = i+":"+j;
				document.getElementById(idFlag).setAttribute("onclick", "verififer()");
				}
			}
		break;
	case "2":
	for (var i = 0; i < 21; i++){
			for (var j = 0; j < 31; j++) {
				var idFlag = i+":"+j;
				document.getElementById(idFlag).setAttribute("onclick", "verififer()");
				}
			}
		break;
	case "3":
	for (var i = 0; i < 31; i++){
			for (var j = 0; j < 41; j++) {
				var idFlag = i+":"+j;
				document.getElementById(idFlag).setAttribute("onclick", "verififer()");
				}
			}

}
}
