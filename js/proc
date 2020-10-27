let tempProc = [];
let vent = [];
let tab = [tempProc, vent];
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0;

function temp() {


    let proc = +prompt("Température de votre processeur, de 0 à 100");

    while (isNaN(proc) || proc < 0 || proc > 100) {
        proc = +prompt("erreur mettez un nombre entre 1 et 100")
    }
    console.log("votre proc est a " + proc + "C°");

    tempProc.push(proc);

    let vv = +prompt("niveau de votre ventilateur de 0 à 3");

    while (isNaN(vv) || vv < 0 || vv > 3) {
        vv = +prompt("erreur, ne mettez que des chiffres entre 0 et 3");
    }
    vent.push(vv);
    console.log("votre niveau de ventilateur est de " + vv);

        if (vent[vent.length-1] === 0 && tempProc[tempProc.length-1] >= 40) {
            alert("Vous devriez augmenter votre niveau de ventilateur au niveau 1.");
            c1++;
        } else if (vent[vent.length-1] === 1 && tempProc[tempProc.length-1] >= 50) {
            alert("Vous devriez augmenter votre niveau de ventilateur au niveau 2.");
            c2++;
        } else if (vent[vent.length-1] === 1 && tempProc[tempProc.length-1] < 40) {
            alert("Vous devriez diminuer votre niveau de ventilateur au niveau 0.");
            c3++;
        } else if (vent[vent.length-1] === 2 && tempProc[tempProc.length-1] >= 60) {
            alert("Vous devriez augmenter votre niveau de ventilateur au niveau 3.");
            c4++;
        } else if (vent[vent.length-1] === 2 && tempProc[tempProc.length-1] < 50) {
            alert("Vous devriez diminuer votre niveau de ventilateur au niveau 1.");
            c5++;
        } else if (vent[vent.length-1] === 3 && tempProc[tempProc.length-1] > 70) {
            alert("Vous devriez changer de ventilateur ou le nettoyer.");
            c6++;
        } else if (vent[vent.length-1] === 3 && tempProc[tempProc.length-1] < 60) {
            alert("Vous devriez diminuer votre niveau de ventilateur au niveau 2.");
            c7++;
        } else {
            alert("Tout va bien.")
            c8++;
        }

}
function compteur() {
    console.log("Vous avez mesure " + c1 + " fois des mesures égale au dessus de 40 C° avec la vitesse du ventilateur a 0");
    console.log("Vous avez mesure " + c2 + " fois des mesures égale ou en dessous de 50 C° avec la vitesse du ventilateur a 1");
    console.log("Vous avez mesure " + c3 + " fois des mesures au dessus de 40 C° avec la vitesse du ventilateur a 1");
    console.log("Vous avez mesure " + c4 + " fois des mesures égale ou en dessous de 60 C° avec la vitesse du ventilateur a 2");
    console.log("Vous avez mesure " + c5 + " fois des mesures au dessus de 50 C° avec la vitesse du ventilateur a 2");
    console.log("Vous avez mesure " + c6 + " fois des mesures en dessous de 70 C° avec la vitesse du ventilateur a 3");
    console.log("Vous avez mesure " + c7 + " fois des mesures au dessus de 60 C° avec la vitesse du ventilateur a 3");
    console.log("Vous avez mesure " + c8 + " fois où toutes les mesures étaient bonnes");
}

function verificationVitesseVent() {
	let vv = Math.random();
	if (vv >= 0 && vv < (1/10)) {
		alert("Votre ventilateur est en vitesse : 0");
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
