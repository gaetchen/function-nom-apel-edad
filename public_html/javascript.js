/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var  matricula, nombre, parcial1, parcial2 ,final, promedio, notaenletras , calificacion;      
matricula=  prompt("digite matricula");
nombre=  prompt("digite nombre");
parcial1=  prompt("digite parcial1");
parcial2=  prompt("digite parcial2");
final = prompt("digite final");
//calculo 

if (promedio<59) {  
    notaenletras="F";
    clasificacion="repite";
    
    }else if (promedio > 60 && promedio <=69){
        nptaenletras="D";
     calificacion="suficiente"; 
 }else if (promedio > 70 && promedio <=79){
     notaenletras="C";
     calificacion="regular";
 }else if (promedio > 60 && promedio <=59 ){
     notaenletras-"B";
     calificacion="bueno";
 }else{
     notaenletras="A";
     calificacion="escelente";
    }
    
    // salida 
 document.write ("su matricula es : "," " ,matricula,"<br>");
 document.write (" su nombre es:"," ", nombre,"<br>");
 document.write ("su 1er parcial es:"," ", parcial1,"<br>");
 document.write ("su 2daparcial :"," ", parcial2 ,  "<br>");
 document.write ("sus notas final es: "," ", final, "<br>");
 document.write ("su promedio es: "," ", promedio, "<br>");
 document.write ("notaenletras: "," ", notaenletras, "<br>");
 document.write ("su calificasion es: "," ", calificacion, "<br>");
