/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var  codigoempleado, nombre, horastrabajados, pagohoras, sueldobruto,ars, afp, ahorras, totaldeducida,sueldoneto , Naominapago;
// entrada       
codigoempleado=  prompt("digite codigoempleado ");
nombre= prompt("Digite nombre");
horastrabajados  = prompt("Digite horastrabajados");
pagohoras    = prompt (" digite pagohoras");
 
 //calculo
 sueldobrutto= parseFloat(horastrabajados) * parseFloat(pagohoras);
 ars= sueldobruto * 0.7;
 afp = sueldobruto*0.5 ;
 ahorras = sueldobruto * 0.4;
 totaldeducida= ars + afp + ahorras;
 sueldoneto = sueldobruto - totaldeducida;
 
 // salida 
 document.write ("codigoempleado: "," " ,codigoempleado,"<br>");
 document.write ("nombre:"," ", nombre,"<br>");
 document.write ("horastrabajados:"," ", horastrabajados,"<br>");
 document.write ("pagohoras :"," ", pagohoras ,  "<br>");
 document.write ("sueldobrutto: "," ", sueldobrutto, "<br>");
 document.write ("ars: "," ", ars, "<br>");
 document.write ("afp: "," ", afp, "<br>");
 document.write ("ahorras: "," ", ahorras, "<br>");
 document.write ("totaldeducida: "," " , totaldeducida, "<br>");
 document.write ("sueldoneto: "," ", sueldoneto, "<br>");
