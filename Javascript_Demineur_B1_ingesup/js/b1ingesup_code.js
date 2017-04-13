
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
                   //colonne.textContent = 0;
                   ligne.appendChild(colonne);
            }
			tblBody.appendChild(ligne);
		}

		tab.appendChild(tblBody);
		tab.setAttribute("border", "3");
		N_div.appendChild(tab);
		PoseBombes(x, y);


}

function PoseBombes(x, y){ // Pose les bombes dans les tableau, 1 chance sur 4.
	var nbBombe = 0;

	for (var i = 0; i < (x+1); i++) {
        for (var j = 0; j < (y + 1); j++) {
            var Isbombe = Math.random();
            if (Isbombe <= 0.05) {
                var idBombe = i + ":" + j;
                nbBombe++;
                document.getElementById("bombes").innerHTML = nbBombe;
                document.getElementById(idBombe).setAttribute("class", "mine");
                document.getElementById(idBombe).textContent = "bombe";
                var id = idBombe.split(":");
                var abscisse = parseInt(id[0]);
                var ordonnee = parseInt(id[1]);

                if (document.getElementById(abscisse + ":" + (ordonnee + 1)) && document.getElementById(abscisse + ":" + (ordonnee + 1)).getAttribute("class") !=  "mine") {
                    var a = Number(document.getElementById(abscisse + ":" + (ordonnee + 1)).textContent);
                    a = parseInt(a + 1);
                    document.getElementById(abscisse + ":" + (ordonnee + 1)).textContent = a;
                }
                if (document.getElementById(abscisse + ":" + (ordonnee - 1)) && document.getElementById(abscisse + ":" + (ordonnee - 1)).getAttribute("class") != "mine") {
                    var b = Number(document.getElementById(abscisse + ":" + (ordonnee - 1)).textContent);
                    b = parseInt(b+1);
                    document.getElementById(abscisse + ":" + (ordonnee - 1)).textContent = b;
                }
                if (document.getElementById((abscisse + 1) + ":" + ordonnee) && document.getElementById((abscisse + 1) + ":" + ordonnee).getAttribute("class") != "mine") {
                    var c = Number(document.getElementById((abscisse+1) + ":" + ordonnee).textContent);
                    c = parseInt(c+1);
                    document.getElementById((abscisse + 1) + ":" + ordonnee).textContent = c;
                }
                if (document.getElementById((abscisse -1) + ":" + ordonnee) && document.getElementById((abscisse -1) + ":" + ordonnee).getAttribute("class") != "mine") {
                    var d = Number(document.getElementById((abscisse -1) + ":" + ordonnee).textContent);
                    d = parseInt(d+1);
                    document.getElementById((abscisse -1) + ":" + ordonnee).textContent = d;
                }
                if (document.getElementById((abscisse + 1) + ":" + (ordonnee - 1)) && document.getElementById((abscisse + 1) + ":" + (ordonnee - 1)).getAttribute("class") != "mine") {
                    var e = Number(document.getElementById((abscisse + 1) + ":" + (ordonnee - 1)).textContent);
                    e = parseInt(e+1);
                    document.getElementById((abscisse + 1) + ":" + (ordonnee - 1)).textContent = e;
                }
                if (document.getElementById((abscisse + 1) + ":" + (ordonnee + 1)) && document.getElementById((abscisse + 1) + ":" + (ordonnee + 1)).getAttribute("class") != "mine") {
                    var f = Number(document.getElementById((abscisse + 1) + ":" + (ordonnee + 1)).textContent);
                    f = parseInt(f+1);
                    document.getElementById((abscisse + 1) + ":" + (ordonnee + 1)).textContent = f;
                }
                if (document.getElementById((abscisse - 1) + ":" + (ordonnee + 1)) && document.getElementById((abscisse - 1) + ":" + (ordonnee + 1)).getAttribute("class") != "mine") {
                    var g = Number(document.getElementById((abscisse - 1) + ":" + (ordonnee + 1)).textContent);
                    g = parseInt(g+1);
                    document.getElementById((abscisse - 1) + ":" + (ordonnee + 1)).textContent = g;
                }
                if (document.getElementById((abscisse - 1) + ":" + (ordonnee - 1)) && document.getElementById((abscisse - 1) + ":" + (ordonnee - 1)).getAttribute("class") != "mine") {
                    var h = Number(document.getElementById((abscisse - 1) + ":" + (ordonnee - 1)).textContent);
                    h = parseInt(h +1);
                    document.getElementById((abscisse - 1) + ":" + (ordonnee - 1)).textContent = h;
                }
            }
        }
    }
    getAdjacentRows(x, y);
}

function getAdjacentRows(x,y) {
    for (var i = 0; i < (x+1); i++) {
        for (var j = 0; j < (y + 1); j++) {
            var test = document.getElementById(i + ":" + j).textContent;
            switch  (test) {
                case "1":
                    document.getElementById(i + ":" + j).classList.add("class", "hidden");
                    document.getElementById(i + ":" + j).classList.add("class", "un");
                    break;
                case "2":
                    document.getElementById(i + ":" + j).classList.add("class", "hidden");
                    document.getElementById(i + ":" + j).classList.add("class", "deux");
            }
        }
    }
}








