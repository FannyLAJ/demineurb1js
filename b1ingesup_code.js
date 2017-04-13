
//CSS & JavaScript
//----------------------------------------------------------------------------------------------------------//
// Project travailler En Groupe//----------------------------------------------------------------------------------------------------------//

//Choix de la difficulté, création de la grille--------------//
		document.getElementById("difficulte").onchange = ChangeDifficulte;
function ChangeDifficulte(){
	  var dif = document.getElementById("difficulte").value;
		alert(dif);
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
	for (var i = 0; i < (x+1); i++)
			for (var j = 0; j < (y+1); j++) {
				var Isbombe = Math.random();
				if (Isbombe <= 0.25){
					var idBombe = i+":"+j;
					document.getElementById(idBombe).setAttribute("class", "mine");
					console.log(idBombe);
				}


			}
}
