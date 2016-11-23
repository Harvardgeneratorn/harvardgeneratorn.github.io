
/*global $ */

$(document).ready(function () {
    "use strict";
    
    //lägg till författare 2
    $("#person1").click(function () {
        $("#person1").hide();

        $("#forfattare2").show();
    });
    
    $("#kryss_ny_person2").click(function () {
        $("#forfattare2").hide();
        $("#person1").show();
        document.getElementsByClassName("inmatningsfonster")[2].value = "";
        document.getElementsByClassName("inmatningsfonster")[3].value = "";

    });
    
    //lägg till författare 3
    $("#person2").click(function () {
        $("#kryss_ny_person2").hide();
        $("#person2").hide();
        $("#forfattare3").show();
    });
    
    $("#kryss_ny_person3").click(function () {
        $("#forfattare3").hide();
        $("#kryss_ny_person2").show();
        $("#person2").show();
        document.getElementsByClassName("inmatningsfonster")[4].value = "";
        document.getElementsByClassName("inmatningsfonster")[5].value = "";
    });
    
    //lägg till författare 4
    $("#person3").click(function () {
        $("#kryss_ny_person3").hide();
        $("#person3").hide();
        $("#forfattare4").show();
    });
    
    $("#kryss_ny_person4").click(function () {
        $("#forfattare4").hide();
        $("#kryss_ny_person3").show();
        $("#person3").show();
        document.getElementsByClassName("inmatningsfonster")[6].value = "";
        document.getElementsByClassName("inmatningsfonster")[7].value = "";
    });
    
    //lägg till författare 5
    $("#person4").click(function () {
        $("#kryss_ny_person4").hide();
        $("#person4").hide();
        $("#forfattare5").show();
    });
    
    $("#kryss_ny_person5").click(function () {
        $("#forfattare5").hide();
        $("#kryss_ny_person4").show();
        $("#person4").show();
        document.getElementsByClassName("inmatningsfonster")[8].value = "";
        document.getElementsByClassName("inmatningsfonster")[9].value = "";
    });
    
    //lägg till författare 6
    $("#person5").click(function () {
        $("#kryss_ny_person5").hide();
        $("#person5").hide();
        $("#forfattare6").show();
    });
    
    $("#kryss_ny_person6").click(function () {
        $("#forfattare6").hide();
        $("#kryss_ny_person5").show();
        $("#person5").show();
        document.getElementsByClassName("inmatningsfonster")[10].value = "";
        document.getElementsByClassName("inmatningsfonster")[11].value = "";
    });
    
    //lägg till författare 7
    $("#person6").click(function () {
        $("#kryss_ny_person6").hide();
        $("#person6").hide();
        $("#forfattare7").show();
    });
    
    $("#kryss_ny_person7").click(function () {
        $("#forfattare7").hide();
        $("#kryss_ny_person6").show();
        $("#person6").show();
        document.getElementsByClassName("inmatningsfonster")[12].value = "";
        document.getElementsByClassName("inmatningsfonster")[13].value = "";
    });
    
    //lägg till författare 8
    $("#person7").click(function () {
        $("#kryss_ny_person7").hide();
        $("#person7").hide();
        $("#forfattare8").show();
    });
    
    $("#kryss_ny_person8").click(function () {
        $("#forfattare8").hide();
        $("#kryss_ny_person7").show();
        $("#person7").show();
        document.getElementsByClassName("inmatningsfonster")[14].value = "";
        document.getElementsByClassName("inmatningsfonster")[15].value = "";
    });
    
    //Rensa inmatningsfönster
    $(".rensa_inmatningsfonster").click(function () {
        
        document.getElementsByClassName("inmatningsfonster")[0].value = "";
        document.getElementsByClassName("inmatningsfonster")[1].value = "";
        document.getElementsByClassName("inmatningsfonster")[2].value = "";
        document.getElementsByClassName("inmatningsfonster")[3].value = "";
        document.getElementsByClassName("inmatningsfonster")[4].value = "";
        document.getElementsByClassName("inmatningsfonster")[5].value = "";
        document.getElementsByClassName("inmatningsfonster")[6].value = "";
        document.getElementsByClassName("inmatningsfonster")[7].value = "";
        document.getElementsByClassName("inmatningsfonster")[8].value = "";
        document.getElementsByClassName("inmatningsfonster")[9].value = "";
        document.getElementsByClassName("inmatningsfonster")[10].value = "";
        document.getElementsByClassName("inmatningsfonster")[11].value = "";
        document.getElementsByClassName("inmatningsfonster")[12].value = "";
        document.getElementsByClassName("inmatningsfonster")[13].value = "";
        document.getElementsByClassName("inmatningsfonster")[14].value = "";
        document.getElementsByClassName("inmatningsfonster")[15].value = "";
        document.getElementsByClassName("inmatningsfonster")[16].value = "";
        document.getElementsByClassName("inmatningsfonster")[17].value = "";
        document.getElementsByClassName("inmatningsfonster")[18].value = "";
        document.getElementsByClassName("inmatningsfonster")[19].value = "";
        document.getElementsByClassName("inmatningsfonster")[20].value = "";
  
    });
    
    
    //Artikel i tidsskrift
    $("#generera_artikel_i_tidsskrift").click(function () {
        
        var forFor1 = document.getElementsByClassName("inmatningsfonster")[0].value.charAt(0).toUpperCase(),
            forEft1 = document.getElementsByClassName("inmatningsfonster")[1].value,
            forFor2 = document.getElementsByClassName("inmatningsfonster")[2].value.charAt(0).toUpperCase(),
            forEft2 = document.getElementsByClassName("inmatningsfonster")[3].value,
            forFor3 = document.getElementsByClassName("inmatningsfonster")[4].value.charAt(0).toUpperCase(),
            forEft3 = document.getElementsByClassName("inmatningsfonster")[5].value,
            forFor4 = document.getElementsByClassName("inmatningsfonster")[6].value.charAt(0).toUpperCase(),
            forEft4 = document.getElementsByClassName("inmatningsfonster")[7].value,
            forFor5 = document.getElementsByClassName("inmatningsfonster")[8].value.charAt(0).toUpperCase(),
            forEft5 = document.getElementsByClassName("inmatningsfonster")[9].value,
            forFor6 = document.getElementsByClassName("inmatningsfonster")[10].value.charAt(0).toUpperCase(),
            forEft6 = document.getElementsByClassName("inmatningsfonster")[11].value,
            forFor7 = document.getElementsByClassName("inmatningsfonster")[12].value.charAt(0).toUpperCase(),
            forEft7 = document.getElementsByClassName("inmatningsfonster")[13].value,
            forFor8 = document.getElementsByClassName("inmatningsfonster")[14].value.charAt(0).toUpperCase(),
            forEft8 = document.getElementsByClassName("inmatningsfonster")[15].value,
            utgivningsar = document.getElementsByClassName("inmatningsfonster")[16].value,
            titel = document.getElementsByClassName("inmatningsfonster")[17].value,
            volym = document.getElementsByClassName("inmatningsfonster")[18].value,
            nummer = document.getElementsByClassName("inmatningsfonster")[19].value,
            sidor = document.getElementsByClassName("inmatningsfonster")[20].value;
            
        
        // 1 författare
        if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "" && forFor2 === "" && forEft2 === "") { // 1 författare
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
            
            
            
        // 2 författare    
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". & " + forEft2 + ", " + forFor2 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
            
        // 3 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + ". & " + forEft3 + ", " + forFor3 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
        
        // 4 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + ". & " + forEft4 + ", " + forFor4 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
            
        // 5 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + ". & " + forEft5 + ", " + forFor5 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
    
        // 6 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + ". & " + forEft6 + ", " + forFor6 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
            
        // 7 författare
        } else if (forFor8 === "" && forEft8 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + ". & " + forEft7 + ", " + forFor7 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
        
        //8 författare
        } else {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + "., " + forEft7 + ", " + forFor7 + ". & " + forEft8 + ", " + forFor8 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = titel + ", ";
            document.getElementById("efter").innerHTML = volym + "(" + nummer + "), ss." + sidor;
            
            
        }
    });
        
    //Artikel i dagstiding
    $("#generera_artikel_i_dagstidning").click(function () {
       
        var forFor1 = document.getElementsByClassName("inmatningsfonster")[0].value.charAt(0).toUpperCase(),
            forEft1 = document.getElementsByClassName("inmatningsfonster")[1].value,
            forFor2 = document.getElementsByClassName("inmatningsfonster")[2].value.charAt(0).toUpperCase(),
            forEft2 = document.getElementsByClassName("inmatningsfonster")[3].value,
            forFor3 = document.getElementsByClassName("inmatningsfonster")[4].value.charAt(0).toUpperCase(),
            forEft3 = document.getElementsByClassName("inmatningsfonster")[5].value,
            forFor4 = document.getElementsByClassName("inmatningsfonster")[6].value.charAt(0).toUpperCase(),
            forEft4 = document.getElementsByClassName("inmatningsfonster")[7].value,
            forFor5 = document.getElementsByClassName("inmatningsfonster")[8].value.charAt(0).toUpperCase(),
            forEft5 = document.getElementsByClassName("inmatningsfonster")[9].value,
            forFor6 = document.getElementsByClassName("inmatningsfonster")[10].value.charAt(0).toUpperCase(),
            forEft6 = document.getElementsByClassName("inmatningsfonster")[11].value,
            forFor7 = document.getElementsByClassName("inmatningsfonster")[12].value.charAt(0).toUpperCase(),
            forEft7 = document.getElementsByClassName("inmatningsfonster")[13].value,
            forFor8 = document.getElementsByClassName("inmatningsfonster")[14].value.charAt(0).toUpperCase(),
            forEft8 = document.getElementsByClassName("inmatningsfonster")[15].value,
            utgivningsar = document.getElementsByClassName("inmatningsfonster")[16].value,
            artikelns_titel = document.getElementsByClassName("inmatningsfonster")[17].value,
            tidningens_titel = document.getElementsByClassName("inmatningsfonster")[18].value,
            utgivningsdatum = document.getElementsByClassName("inmatningsfonster")[19].value,
            lank_till_artikeln = document.getElementsByClassName("inmatningsfonster")[20].value,
            sista_punkten;
        
        //punkten
        if (lank_till_artikeln === "") {
            sista_punkten = "";
        } else {
            sista_punkten = ". ";
        }
        
        
        // 1 författare
        if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "" && forFor2 === "" && forEft2 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
            
            
        // 2 författare    
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". & " + forEft2 + ", " + forFor2 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
            
        // 3 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + ". & " + forEft3 + ", " + forFor3 + ". (" + utgivningsar + "). ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
        
        // 4 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + ". & " + forEft4 + ", " + forFor4 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
            
            
        // 5 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + ". & " + forEft5 + ", " + forFor5 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
    
        // 6 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + ". & " + forEft6 + ", " + forFor6 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
            
            
        // 7 författare
        } else if (forFor8 === "" && forEft8 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + ". & " + forEft7 + ", " + forFor7 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
            
        
        //8 författare
        } else {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + "., " + forEft7 + ", " + forFor7 + ". & " + forEft8 + ", " + forFor8 + ". (" + utgivningsar + "). " + artikelns_titel + ". ";
            document.getElementById("italic").innerHTML = tidningens_titel;
            document.getElementById("efter").innerHTML = ", " + utgivningsdatum + sista_punkten + lank_till_artikeln;
            
            
            
        }
        


    });
   
    //Bok
    $("#generera_bok").click(function () {
       
        var forFor1 = document.getElementsByClassName("inmatningsfonster")[0].value.charAt(0).toUpperCase(),
            forEft1 = document.getElementsByClassName("inmatningsfonster")[1].value,
            forFor2 = document.getElementsByClassName("inmatningsfonster")[2].value.charAt(0).toUpperCase(),
            forEft2 = document.getElementsByClassName("inmatningsfonster")[3].value,
            forFor3 = document.getElementsByClassName("inmatningsfonster")[4].value.charAt(0).toUpperCase(),
            forEft3 = document.getElementsByClassName("inmatningsfonster")[5].value,
            forFor4 = document.getElementsByClassName("inmatningsfonster")[6].value.charAt(0).toUpperCase(),
            forEft4 = document.getElementsByClassName("inmatningsfonster")[7].value,
            forFor5 = document.getElementsByClassName("inmatningsfonster")[8].value.charAt(0).toUpperCase(),
            forEft5 = document.getElementsByClassName("inmatningsfonster")[9].value,
            forFor6 = document.getElementsByClassName("inmatningsfonster")[10].value.charAt(0).toUpperCase(),
            forEft6 = document.getElementsByClassName("inmatningsfonster")[11].value,
            forFor7 = document.getElementsByClassName("inmatningsfonster")[12].value.charAt(0).toUpperCase(),
            forEft7 = document.getElementsByClassName("inmatningsfonster")[13].value,
            forFor8 = document.getElementsByClassName("inmatningsfonster")[14].value.charAt(0).toUpperCase(),
            forEft8 = document.getElementsByClassName("inmatningsfonster")[15].value,
            tryckar = document.getElementsByClassName("inmatningsfonster")[16].value,
            titel = document.getElementsByClassName("inmatningsfonster")[17].value,
            forlagsort = document.getElementsByClassName("inmatningsfonster")[18].value,
            forlag = document.getElementsByClassName("inmatningsfonster")[19].value;
         
        
        // 1 författare
        if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "" && forFor2 === "" && forEft2 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
            
        // 2 författare    
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". & " + forEft2 + ", " + forFor2 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
        // 3 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + ". & " + forEft3 + ", " + forFor3 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
        // 4 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + ". & " + forEft4 + ", " + forFor4 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
            
        // 5 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + ". & " + forEft5 + ", " + forFor5 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
        // 6 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + ". & " + forEft6 + ", " + forFor6 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
        // 7 författare
        } else if (forFor8 === "" && forEft8 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + ". & " + forEft7 + ", " + forFor7 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
        
        //8 författare
        } else {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + "., " + forEft7 + ", " + forFor7 + ". & " + forEft8 + ", " + forFor8 + ". (" + tryckar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + forlagsort + ": " + forlag;
            
            
            
        }
        


    });
    
    //Avhandling
    $("#generera_avhandling").click(function () {
       
        var forFor1 = document.getElementsByClassName("inmatningsfonster")[0].value.charAt(0).toUpperCase(),
            forEft1 = document.getElementsByClassName("inmatningsfonster")[1].value,
            forFor2 = document.getElementsByClassName("inmatningsfonster")[2].value.charAt(0).toUpperCase(),
            forEft2 = document.getElementsByClassName("inmatningsfonster")[3].value,
            forFor3 = document.getElementsByClassName("inmatningsfonster")[4].value.charAt(0).toUpperCase(),
            forEft3 = document.getElementsByClassName("inmatningsfonster")[5].value,
            forFor4 = document.getElementsByClassName("inmatningsfonster")[6].value.charAt(0).toUpperCase(),
            forEft4 = document.getElementsByClassName("inmatningsfonster")[7].value,
            forFor5 = document.getElementsByClassName("inmatningsfonster")[8].value.charAt(0).toUpperCase(),
            forEft5 = document.getElementsByClassName("inmatningsfonster")[9].value,
            forFor6 = document.getElementsByClassName("inmatningsfonster")[10].value.charAt(0).toUpperCase(),
            forEft6 = document.getElementsByClassName("inmatningsfonster")[11].value,
            forFor7 = document.getElementsByClassName("inmatningsfonster")[12].value.charAt(0).toUpperCase(),
            forEft7 = document.getElementsByClassName("inmatningsfonster")[13].value,
            forFor8 = document.getElementsByClassName("inmatningsfonster")[14].value.charAt(0).toUpperCase(),
            forEft8 = document.getElementsByClassName("inmatningsfonster")[15].value,
            ar = document.getElementsByClassName("inmatningsfonster")[16].value,
            titel = document.getElementsByClassName("inmatningsfonster")[17].value,
            larosatets_ort = document.getElementsByClassName("inmatningsfonster")[18].value,
            universitet = document.getElementsByClassName("inmatningsfonster")[19].value,
            lank = document.getElementsByClassName("inmatningsfonster")[20].value,
            sista_punkten;
         
         //punkten
        if (lank === "") {
            sista_punkten = "";
        } else {
            sista_punkten = ". ";
        }
         
        
        // 1 författare
        if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "" && forFor2 === "" && forEft2 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
            
        // 2 författare    
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". & " + forEft2 + ", " + forFor2 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML =  ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
            
        // 3 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + ". & " + forEft3 + ", " + forFor3 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
        // 4 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + ". & " + forEft4 + ", " + forFor4 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
            
        // 5 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + ". & " + forEft5 + ", " + forFor5 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
        // 6 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + ". & " + forEft6 + ", " + forFor6 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
        // 7 författare
        } else if (forFor8 === "" && forEft8 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + ". & " + forEft7 + ", " + forFor7 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
        
        //8 författare
        } else {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + "., " + forEft7 + ", " + forFor7 + ". & " + forEft8 + ", " + forFor8 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". Diss. " + larosatets_ort + ": " + universitet + sista_punkten + lank;
            
            
            
        }
        


    });
    
    //Websida
    $("#generera_webbsida").click(function () {
       
        var forFor1 = document.getElementsByClassName("inmatningsfonster")[0].value.charAt(0).toUpperCase(),
            forEft1 = document.getElementsByClassName("inmatningsfonster")[1].value,
            forFor2 = document.getElementsByClassName("inmatningsfonster")[2].value.charAt(0).toUpperCase(),
            forEft2 = document.getElementsByClassName("inmatningsfonster")[3].value,
            forFor3 = document.getElementsByClassName("inmatningsfonster")[4].value.charAt(0).toUpperCase(),
            forEft3 = document.getElementsByClassName("inmatningsfonster")[5].value,
            forFor4 = document.getElementsByClassName("inmatningsfonster")[6].value.charAt(0).toUpperCase(),
            forEft4 = document.getElementsByClassName("inmatningsfonster")[7].value,
            forFor5 = document.getElementsByClassName("inmatningsfonster")[8].value.charAt(0).toUpperCase(),
            forEft5 = document.getElementsByClassName("inmatningsfonster")[9].value,
            forFor6 = document.getElementsByClassName("inmatningsfonster")[10].value.charAt(0).toUpperCase(),
            forEft6 = document.getElementsByClassName("inmatningsfonster")[11].value,
            forFor7 = document.getElementsByClassName("inmatningsfonster")[12].value.charAt(0).toUpperCase(),
            forEft7 = document.getElementsByClassName("inmatningsfonster")[13].value,
            forFor8 = document.getElementsByClassName("inmatningsfonster")[14].value.charAt(0).toUpperCase(),
            forEft8 = document.getElementsByClassName("inmatningsfonster")[15].value,
            upphovsman = document.getElementsByClassName("inmatningsfonster")[16].value,
            ar = document.getElementsByClassName("inmatningsfonster")[17].value,
            titel = document.getElementsByClassName("inmatningsfonster")[18].value,
            url = document.getElementsByClassName("inmatningsfonster")[19].value,
            datum = document.getElementsByClassName("inmatningsfonster")[20].value;
            
            
        //Upphovsman
        if (upphovsman !== "") {
            
            document.getElementById("fore").innerHTML = upphovsman + " (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
            
            
        // 1 författare    
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "" && forFor2 === "" && forEft2 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
            
            
        // 2 författare    
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "" && forFor3 === "" && forEft3 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + ". & " + forEft2 + ", " + forFor2 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML =  ". " + url + " [" + datum + "]";
            
            
        // 3 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "" && forFor4 === "" && forEft4 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + ". & " + forEft3 + ", " + forFor3 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
        // 4 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "" && forFor5 === "" && forEft5 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + ". & " + forEft4 + ", " + forFor4 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
            
        // 5 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "" && forFor6 === "" && forEft6 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + ". & " + forEft5 + ", " + forFor5 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
        // 6 författare
        } else if (forFor8 === "" && forEft8 === "" && forFor7 === "" && forEft7 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + ". & " + forEft6 + ", " + forFor6 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
            
        // 7 författare
        } else if (forFor8 === "" && forEft8 === "") {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + ". & " + forEft7 + ", " + forFor7 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
            
        //8 författare
        } else {
            
            document.getElementById("fore").innerHTML = forEft1 + ", " + forFor1 + "., " + forEft2 + ", " + forFor2 + "., " + forEft3 + ", " + forFor3 + "., " + forEft4 + ", " + forFor4 + "., " + forEft5 + ", " + forFor5 + "., " + forEft6 + ", " + forFor6 + "., " + forEft7 + ", " + forFor7 + ". & " + forEft8 + ", " + forFor8 + ". (" + ar + "). ";
            document.getElementById("italic").innerHTML = titel;
            document.getElementById("efter").innerHTML = ". " + url + " [" + datum + "]";
            
            
            
        }
        


    });
 


});



// if två personer eller mer, räkna klaser, 