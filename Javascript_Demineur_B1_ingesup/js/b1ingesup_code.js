
//CSS & JavaScript
//----------------------------------------------------------------------------------------------------------//
// Project travailler En Groupe//----------------------------------------------------------------------------------------------------------//
		
		
		N_div = document.createElement("div");
		N_div.setAttribute("id", "conteneur2");
		N_div.onclick = chronoStart;
		N_div.setAttribute("style", "display:block");
		document.body.appendChild(N_div);
		tab = document.createElement("table");
		tblBody = document.createElement("tbody");
		// creation de ligne
        for (var i = 0; i < 21; i++) {
            // creation de colonne
            var ligne = document.createElement("tr");

            for (var j = 0; j < 31; j++) {
             var colonne = document.createElement("td");    
                   colonne.id =i+":"+j;
				   colonne.onclick = verififer;
                   ligne.appendChild(colonne);
					colonne.classList.add("mine");
            }
			tblBody.appendChild(ligne);
		}
		
		tab.appendChild(tblBody);
		tab.setAttribute("border", "3");
		N_div.appendChild(tab);
		
		
		function verififer(){
			alert("yay");
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
	}
	document.getElementById("time").innerHTML = min + ":" + sec;
	timerID = setTimeout("chrono()", 10);
}
function chronoStart(){
	start = new Date();
	chrono();
}