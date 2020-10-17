/*
Sur base d'un array vide, demander à l'utilisateur la temperature de son processeur, 
ainsi que le niveau du ventilateur (le niveau de flu d'air de 1 à 3).

Si le processeur à moins de 40°C et plus de 75°C indiquez qu'il y a un probleme.

si le niveau du ventilateur est au niveau 1 et qu'il a plus de 65°C indiquez qu'il peut passer au niveaux 2 
pour avoir des temperature moins élevée.

si le niveau du ventilateur est au niveau 2 et qu'il a plus de 65°C indiquez qu'il peut passer au niveaux 2 
pour avoir des temperature moins élevée et s'il à moins de 45°C proposer de passer a un niveau inférieur.

si le niveau du ventilateur est au niveau 3 et qu'il a plus de 72°C indiquez qu'il doit nettoyer 
son ventilateur avoir des temperature moins élevée et s'il à moins de 45°C proposer de passer a 
un niveau inférieur.
*/


function tempProc() {
	let i = 0;
	for (i <= 100) {
		let tempProc = +prompt("Température de votre processeur, de 0 à 100");
			
		if (isNaN(tempProc) || tempProc < 0 || tempProc > 100) {
			alert("erreur, ne mettez que des chiffres entre 1 et 100");
			continue;
		}
		else {
			console.log("votre proc est a " + tempProc + "C°");
		}
		let vent = +prompt("niveau de votre ventilateur de 1 à 3");
		if (isNaN(vent) || vent < 1 || vent > 3) {
			alert("erreur, ne mettez que des chiffres entre 1 et 3");
			continue;
		}
		else{
			console.log("votre niveau de ventilateur est de " + vent);
		}
		if (tempProc < 40 || tempProc > 75) {
			alert("Il y a un problème avec votre ventilateur, remplacer le ou nettoyez le.");
			break;
		}
		else if (vent === 1 && tempProc > 65) {
			alert("vous feriez mieux de mettre le niveau 2 pour avoir des températures plus basses");
			break;
		}
		else if (vent === 2 && tempProc > 65) {
			alert("vous feriez mieux de mettre le niveau 3 pour avoir des températures plus basses");
			break;
		}
		else if (vent === 2 && tempProc < 45) {
			alert("vous pouvez mettre le niveau 1 pour avoir des températures moins basses");
			break;
		}
		else if (vent === 3 && tempProc > 72) {
			alert("vous devriez nettoyer votre ventilateur ou changer de ventilateur pour avoir des températures moins élevées");
			break;
		}
		else if (vent === 3 && tempProc < 45) {
			alert("vous pouvez mettre le niveau 2 pour avoir des températures moins basses");
			break;
		}
		else {
			alert("Tout va bien.")
			break;
		}
	}
}
