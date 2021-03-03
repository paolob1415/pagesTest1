function checkNames(name1, name2) {/*
	var name1 = document.getElementById("name1").value;
	var name2 = document.getElementById("name2").value;
	if(name1 != null && name2 != null && name1.trim() != "" && name2.trim() != "") {
        var name1Lower = name1.toLowerCase();
        var name2Lower = name2.toLowerCase();
        if (this.checkCarmenEDani(name1Lower, name2Lower)) {
            alert("Certo che no, mannaggialsuino!\n O almeno, non finché non ci annunciate pubblicamente che volete convivere :-P");
        }
        else if (this.checkAlreadyMarried(name1Lower, name2Lower)){
            alert("Sì.\nMa non rompete le scatole che siete già sposati!");
        }
        else {
            alert("Assolutamente sì!!\nCi mancherebbe, è un sacco che non vi vedete!");
        }
    }
  	else {
    	alert("Riempi entrambi i campi!");
    }*/
}

function checkCarmenEDani(name1, name2) {
	var isCarmen = false;
  	var isDani = false;
  	if(name1.includes("carme") || name2.includes("carme") || name1.includes("mel") || name2.includes("mel") || name1.includes("bucc") || name2.includes("bucc")) {
	    isCarmen = true;
  	}
  	if(name1.includes("dani") || name1.includes("miglio") || name2.includes("dani") || name2.includes("miglio")) {
	    isDani = true;
  	}
  	return isCarmen && isDani;
}

function checkAlreadyMarried(name1, name2) {
	var couple1 = checkElisaETeo(name1, name2);
  	var couple2 = checkRinEMarco(name1, name2);
  	return couple1 || couple2;
}

function checkElisaETeo(name1, name2) {
	var isElisa = false;
  	var isTeo = false;
  	if(name1.includes("eli") || name1.includes("lell") || name1.includes("sapo") || name2.includes("eli") || name2.includes("lell") || name2.includes("sapo")) {
    	isElisa = true;
    }
  	if(name1.includes("matt") || name1.includes("teo") || name1.includes("righi") || name2.includes("matt") || name2.includes("teo") || name2.includes("righi")) {
    	isTeo = true;
    }
  	return isElisa && isTeo;
}

function checkRinEMarco(name1, name2) {
	var isRin = false;
  	var isMarco = false;
  	if(name1.includes("mari") || name1.includes("rin") || name1.includes("nell") || name2.includes("mari") || name2.includes("rin") || name2.includes("nell")) {
    	isRin = true;
    }
  	if(name1.includes("marc") || name1.includes("com") || name2.includes("marc") || name2.includes("com")) {
    	isMarco = true;
    }
  	return isRin && isMarco;
}
