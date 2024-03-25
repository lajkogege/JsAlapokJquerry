$(document).ready(function(){
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazas1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3();
    esemenyKezeles4();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM = $("section h2").eq(0).text();
    console.log(ELEM);
}

function elemekElerese2() {
    /**Ide jön az 2. feladat */
    /*Írj JavaScript kódot, amely az "#ide" 
    azonosítóval ellátott elembe beletesz egy p taget, és a p tag 
    tartalma "Jó reggelt!"*/
    const ELEM2 = $("#ide");
    ELEM2.html("<p>Jó reggelt!</p>");
    console.log(ELEM2);
}

function elemekElerese3() {
    /**Ide jön az 3. feladat */
    /*Írj JavaScript kódot, amely az ".ide" azonosítóval ellátott 
    elembe beletesz egy p taget, és a p tag tartalma "Jó reggelt!"*/
    const ELEM3 = $(".ide").eq(0);
    ELEM3.html("<p>Jó reggelt!</p>");
    console.log(ELEM3);
}

function elemekElerese4(){
    /*Írj JavaScript kódot, amely a "lista" azonosítóval ellátott
     elembe beletesz felsorolást a felsorolás tartalma 10 és 30 közötti 
     véletlen számok legyenek, összesen 5 db!*/
     const ELEM4 = $(".lista");
     
     const max = 5;
     let txt = "<ul>";
     for (let index = 0; index < max; index++) {
        const randomSzam = Math.floor(Math.random() * 20 + 10);
        txt += `
        <li>${randomSzam}</li>
        `
     }
     txt += "</ul>";
     ELEM4.html(txt);
}

function elemekFormazas1(){
    /*Írj JavaScript kódot, amely az előző sectionban lévő "lista"
     azonosítóval ellátott elemre ráteszi a css-ben már elkészített 
     "formazott" nevű stílust!*/
     const ELEM5 = $(".lista");
     if (ELEM5.length > 0) {
         ELEM5.addClass("formazott");
     } else {
         console.log("Az '.lista' elem nem található!");
     }
}

function esemenyKezeles1(){
    /*Írj JavaScript kódot, amely az előző sectionban lévő "lista" 
    azonosítóval ellátott elemhez hozzáad egy eseménykezelőt!
     Az elemre való kattintáskor az ebben a sectionban lévő 
     "kattintasutan" div-be kerüljön bele a lista div tartalma.*/
     $(".lista").eq(0).on("click", function() {
        const listaTartalom = $(this).html();
        $(".kattintasutan").html(listaTartalom);
    });
}

function esemenyKezeles2(){
    /*Írj JavaScript kódot, amely az ebben a sectionban lévő "feladat"
     azonosítóval ellátott elembe elhelyez egy gombot. 
     A gombra kattintva pedig ugyanabba a divbe a gomb mellé még 
     hozzáad egy újab divet, amiben egy kép van.*/
    const ELEM7 = $(".feladat").eq(0);
    const txt = "<button>GOMB</button>";
    ELEM7.html(txt);
}


function esemenyKezeles3(){
    /*Írj JavaScript kódot, amely az előző a sectionban lévő "feladat" azonosítóval ellátott elemben lévő képre rátesz egy 
    eseménykezelőt. Ha a kép fölé visszük az egeret, akkor a kép mérete változzon meg! Ha levisszük a képről az egeret, 
    akkor álljon vissza az eredeti méret.*/
    $(".feladat img").eq(0).on("mouseover", function() {
        $(this).css("width", "50%");
    });

    $(".feladat img").eq(0).on("mouseout", function() {
        $(this).css("width", ""); //üres stringe vissza áll alapértemeztre
    });
}

function esemenyKezeles4(){
    /*Írj JavaScript kódot, amely az ebben a sectionban lévő "tarolo"
     azonosítóval ellátott elemben lévő divekre rátesz egy-egy
    eseménykezelőt. kattintásra az elem tartalmát írja bele az
    "eredmeny" divbe!*/
    const ELEM8 = $(".tarolo div");
    
    ELEM8.each(function(index) {
        $(this).html(`<button>Gomb ${index + 1}</button>`);
    });

    ELEM8.children("button").on("click", function() {
        const gombTartalom = $(this).text();
        $(".eredmeny").append(`<div>${gombTartalom}</div>`);
    });
}