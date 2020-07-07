// المهمة الثالثة //
function mis3() {
    let quiz = document.getElementById("gr1").value;
    let med = document.getElementById("gr2").value;
    let final = document.getElementById("gr3").value;
    let oral = document.getElementById("gr4").value;
    let calculation =
      parseInt(quiz) + parseInt(med) + parseInt(final) + parseInt(oral);
    document.getElementById("calbutton").innerHTML = calculation;
  
    let letter;
  
    if (calculation > 90) {
      letter = "A";
    } else if ((calculation < 90, calculation >= 80)) {
      letter = "B";
    } else if ((calculation < 80, calculation >= 70)) {
      letter = "C";
    } else if ((calculation < 70, calculation >= 60)) {
      letter = "D";
    } else {
      letter = "F";
    }
    document.getElementById("letter").innerHTML = letter;
  }
  