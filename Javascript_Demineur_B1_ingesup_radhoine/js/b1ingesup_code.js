
//CSS & JavaScript
//----------------------------------------------------------------------------------------------------------//
// Project travailler En Groupe//----------------------------------------------------------------------------------------------------------//
		
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
		N_div.onclick = chronoStart;
		N_div.setAttribute("style", "display:block");
		document.body.appendChild(N_div);
		tab = document.createElement("table");
		tblBody = document.createElement("tbody");
		// creation de ligne
        for (var i = 1; i < (x+1); i++) {
            // creation de colonne
            var ligne = document.createElement("tr");

            for (var j = 1; j < (y+1); j++) {
             var colonne = document.createElement("td");
                   colonne.id =i+":"+j;
				 colonne.setAttribute("class","case");
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

function PoseBombes(x, y){ // Pose les bombes dans les tableau, 1 chance sur 4.
	var nbBombe = 0;
	for (var i = 1; i < (x+1); i++){
			for (var j = 1; j < (y+1); j++) {
				var Isbombe = Math.random();
				if (Isbombe <= 0.05){
					var idBombe = i+":"+j;
					alert(idBombe);
					nbBombe ++;
					document.getElementById("bombes").innerHTML = nbBombe;
					bomb = document.getElementById(idBombe);
					bomb.classList.add("mine");
					bomb.classList.remove("case");
				}
			}
	}
}
		
		
		function verififer(){
			
			if(this.classList=="case"){
					
					this.classList.add("vide");
					this.classList.remove("case");
					var ind = this.id.indexOf(":");
					var Col = parseInt(this.id.substr(ind+1),10);
					var Lig = parseInt(this.id.substr(0,ind));		
					
					 for(var i=-1;i<2;i++){
						for(var j=-1;j<2;j++){							
							var allentour = document.getElementById((i+Lig)+":"+(Col+j));
								if(allentour.classList=="case"){
									allentour.classList.add("vide");
									allentour.classList.remove("case");
								}else if (allentour.classList=="number"){
									this.classList.add("nbrmine");
								}
							}
										
						 }
			}else if (this.classList=="mine"){
				lesMines = document.querySelectorAll(".mine");
				for(var i=0;i<lesMines.length;i++){
				lesMines[i].classList.add("devoiler");
				}
				this.classList.add("exploser");
				msg=document.getElementById("msg").innerHTML= "Désolé,Vous Avez Perdu...";
				
			}else if (this.classList=="number"){
				this.classList.add("nbrmine");			
			}
		
		}
		
		
		
		
		
		
		
		
		
		
//time
var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;
function chrono(){
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	if (min < 10){
		min = "0" + min;
	}
	if (sec < 10){
		sec = "0" + sec;
	}
	
	document.getElementById("time").innerHTML = min + ":" + sec;
	timerID = setTimeout("chrono()", 10);
	}

function chronoStart(){
	start = new Date();
	chrono();
}