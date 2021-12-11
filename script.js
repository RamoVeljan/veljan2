
var ime = `Ramo`;
var prezime = `Veljan`;
var iip = ime.concat(prezime);

for (var i = 0; i < iip.length; i++) {
    if(i%2===0){
        document.write("<span style='color:red;'>" +iip[i]+ "</span>");
    }
    else{
        document.write("<span style='color:black';>" +iip[i]+ "</span>")
    }
}