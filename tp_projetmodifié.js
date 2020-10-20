/*
Sur base d'un array vide, demander à l'utilisateur la temperature de son processeur, 
ainsi que le niveau du ventilateur (le niveau de flu d'air de 1 à 3).

Si le processeur à moins de 40°C et plus de 75°C indiquez qu'il y a un probleme.

si le niveau du ventilateur est au niveau 1 et qu'il a plus de 65°C indiquez qu'il peut passer au niveaux 2 
pour avoir des temperature moins élevée.

si le niveau du ventilateur est au niveau 2 et qu'il a plus de 65°C indiquez qu'il peut passer au niveaux 2 
pour avoir des temperature moins élevée et s'il à moins de 45°C proposer de passer a un niveau inférieur.

si le niveau du ventilateur est au niveau 3 et qu'il a plus de 85°C indiquez qu'il doit nettoyer 
son ventilateur pour avoir des temperatures moins élevée et s'il à moins de 45°C proposer de passer a 
un niveau inférieur.
*/

function tempProc() {
	for(let i=0; i<1;i++) {
		let tempProc = +prompt("Température de votre processeur, de 0 à 100");
			
		while (isNaN(tempProc) || tempProc < 0 || tempProc >= 100) {
			tempProc = +prompt("erreur mettez un nombre entre 1 et 100")}
		console.log("votre proc est a " + tempProc + "C°");

		let vent = +prompt("niveau de votre ventilateur de 1 à 3");
		while (isNaN(vent) || vent < 1 || vent > 3) {
			 vent = +prompt("erreur, ne mettez que des chiffres entre 1 et 3");
		}
			console.log("votre niveau de ventilateur est de " + vent);

		if (tempProc < 40 || tempProc > 85) {
			alert("Il y a un problème avec votre ventilateur, remplacer le ou nettoyez le.");	
		}
		else if ((vent === 1||vent ===2) && tempProc > 80) {
			alert("vous feriez mieux de mettre le niveau 3 pour avoir des températures plus basses");
			
		}
		else if ((vent === 2||vent === 3) && tempProc < 50) {
			alert("vous pouvez mettre le niveau 1 pour avoir des températures moins basses");
			
		}
		else if (vent === 3 && tempProc > 72) {
			alert("vous devriez nettoyer votre ventilateur ou changer de ventilateur pour avoir des températures moins élevées");
		}
		else {
			alert("Tout va bien.")
		}
	}
}


function verificationVitesseVent() {
	let vv = Math.random();
	if (vv >= 0 && vv < (1/10)) {
		alert("Votre ventilateur est en vitesse : 0 (Rembrancher le si il est débranché sinon remplacez le)");
	}
	else if (vv >= (1/10) && vv < (4/10)) {
		alert("Votre ventilateur est en vitesse : 1");
	}
	else if (vv >= (4/10) && vv < (7/10)) {
		alert("Votre ventilateur est en vitesse : 2");
	}
	else if (vv >= (7/10) && vv < 1) {
		alert("Votre ventilateur est en vitesse : 3");
	}
}


function mettreventniv3(){
	alert("votre ventilateur à été mis en vitesse 3")
}
function mettreventniv2(){
	alert("votre ventillateur à été mis en vitesse 2")
}
function mettreventniv1(){
	alert("votre ventillateur à été mis en vitesse 1")
}
