function szamol() {
    let m = document.getElementById("magassag").value / 100;
    let kg = +document.getElementById("tomeg").value;
    
    if (m < 1.2 || m > 2.2 || kg < 30 || kg > 200) {
        document.getElementById("ttiki").innerHTML = "Hibás adatok!";
        document.getElementById("alkatki").innerHTML = "x";
        return;
    }

    let tti = kg / (m*m);
    let alkat = "";
    if (tti < 20)       { alkat = "alultáplált"; }
    else if ( tti < 25) { alkat = "normális"; }
    else if ( tti < 30) { alkat = "tulsúlyos"; }
    else if ( tti < 35) { alkat = "elhízott"; }
    else                { alkat = "erősen elhízott"; }
    
    document.getElementById("ttiki").innerHTML = tti.toFixed(2);
    document.getElementById("alkatki").innerHTML = alkat;
}
szamol();
document.getElementById("gomb").onclick = szamol;
