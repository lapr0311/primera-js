// entrada al concesionario

alert("hola bienvenido al concesionario jeep");

customerName = prompt("me podrias indicar tu nombre?");

alert("hola  " + customerName + " bienvenido tengo estos 4 modelos para mostrar : Renegade,Rubicon,Compass,Gladietor");
const Iva = 0.19;

function CalcularIva(precios) {
    let resultado = Iva * precios;
    return resultado;


}


function modelosJeep() {
    let modelo = prompt("ingresa el modelo que deseas adquirir!");
    let precios;
    let color;
    let cicloColor;
    let venta;
    let valorIva;
    let total;
    while (modelo != "esc") {
        switch (modelo) {
            case "Renegade":
                alert("perfecto tu auto seleccionado es un Renegade");
                precios = 14000000;
                alert("el valor de tu auto sin IVA es " + precios);
                while (cicloColor != "esc") {
                    alert("tengo estos colores disponibles: verde,gris,rojo");
                    cicloColor = prompt("que Color deseas?");

                    if (cicloColor == "verde") {
                        confirm("prefecto tu color elegido a sido el verde");
                        color = cicloColor;
                        cicloColor = "esc";
                    }
                    else if (cicloColor == "gris") {
                        confirm("prefecto tu color elegido a sido el gris");
                        color = cicloColor;
                        cicloColor = "esc";


                    }
                    else if (cicloColor == "rojo") {
                        confirm("prefecto tu color elegido a sido el rojo");
                        color = cicloColor;
                        cicloColor = "esc";

                    }
                    else {
                        confirm("lo sentimos no tenemos ese color");


                    }
                }



                valorIva = CalcularIva(precios);
                total = valorIva + precios;
                alert("el costo de su auto es: " + precios + " y el IVA es " + valorIva + " dando un tota de " + total);
                venta = confirm("estas seguro que desea comprar el auto " + modelo + "el total de la compra es " + total + " en el color " + color + "?");
                if (venta == true) {
                    alert("excelente su compra a sido exitosa");
                    modelo = "esc";

                } else {
                    alert("upps su venta no fue realizada");
                    modelo = prompt("ingresa el modelo que deseas adquirir!");
                }

                break;
            case "Rubicon":
                alert("perfecto tu auto seleccionado es un Rubicon");
                precios = 18000000;
                alert("el valor de tu auto sin IVA es " + precios);
                while (cicloColor != "esc") {
                    alert("tengo estos colores disponibles: negro,blanco,azul");
                    cicloColor = prompt("que Color deseas?");

                    if (cicloColor == "negro") {
                        confirm("prefecto tu color elegido a sido el negro");
                        color = cicloColor;
                        cicloColor = "esc";
                    }
                    else if (cicloColor == "blanco") {
                        confirm("prefecto tu color elegido a sido el blanco");
                        color = cicloColor;
                        cicloColor = "esc";


                    }
                    else if (cicloColor == "azul") {
                        confirm("prefecto tu color elegido a sido el azul");
                        color = cicloColor;
                        cicloColor = "esc";

                    }
                    else {
                        confirm("lo sentimos no tenemos ese color");


                    }
                }

                valorIva = CalcularIva(precios);
                total = valorIva + precios;
                alert("el costo de su auto es: " + precios + " y el IVA es " + valorIva + " dando un tota de " + total);
                venta = confirm("estas seguro que desea comprar el auto " + modelo + "el total de la compra es " + total + " en el color " + color + "?");
                if (venta == true) {
                    alert("excelente su compra a sido exitosa");
                    modelo = "esc";

                } else {
                    alert("upps su venta no fue realizada");
                    modelo = prompt("ingresa el modelo que deseas adquirir!");
                }
                break;
            case "Compass":
                alert("perfecto tu auto seleccionado es un Compass");
                precios = 23000000;
                alert("el valor de tu auto sin IVA es " + precios);
                while (cicloColor != "esc") {
                    alert("tengo estos colores disponibles: verde,amarillo,rojo");
                    cicloColor = prompt("que Color deseas?");

                    if (cicloColor == "verde") {
                        confirm("prefecto tu color elegido a sido el verde");
                        color = cicloColor;
                        cicloColor = "esc";
                    }
                    else if (cicloColor == "amarillo") {
                        confirm("prefecto tu color elegido a sido el amarillo");
                        color = cicloColor;
                        cicloColor = "esc";


                    }
                    else if (cicloColor == "rojo") {
                        confirm("prefecto tu color elegido a sido el rojo");
                        color = cicloColor;
                        cicloColor = "esc";

                    }
                    else {
                        confirm("lo sentimos no tenemos ese color");


                    }
                }
                valorIva = CalcularIva(precios);
                total = valorIva + precios;
                alert("el costo de su auto es: " + precios + " y el IVA es " + valorIva + " dando un tota de " + total);
                venta = confirm("estas seguro que desea comprar el auto " + modelo + "el total de la compra es " + total + " en el color " + color + "?");;
                if (venta == true) {
                    alert("excelente su compra a sido exitosa");
                    modelo = "esc";

                } else {
                    alert("upps su venta no fue realizada");
                    modelo = prompt("ingresa el modelo que deseas adquirir!");
                }
                break;
            case "Gladietor":
                alert("perfecto tu auto seleccionado es un Gladietor");
                precios = 52000000;
                alert("el valor de tu auto sin IVA es " + precios);
                while (cicloColor != "esc") {
                    alert("tengo estos colores disponibles: cafe,negro,rojo");
                    cicloColor = prompt("que Color deseas?");

                    if (cicloColor == "cafe") {
                        confirm("prefecto tu color elegido a sido el cafe");
                        color = cicloColor;
                        cicloColor = "esc";
                    }
                    else if (cicloColor == "negro") {
                        confirm("prefecto tu color elegido a sido el negro");
                        color = cicloColor;
                        cicloColor = "esc";


                    }
                    else if (cicloColor == "rojo") {
                        confirm("prefecto tu color elegido a sido el rojo");
                        color = cicloColor;
                        cicloColor = "esc";

                    }
                    else {
                        confirm("lo sentimos no tenemos ese color");


                    }
                }
                valorIva = CalcularIva(precios);
                total = valorIva + precios;
                alert("el costo de su auto es: " + precios + " y el IVA es " + valorIva + " dando un tota de " + total);
                venta = confirm("estas seguro que desea comprar el auto " + modelo + "el total de la compra es " + total + " en el color " + color + "?");
                if (venta == true) {
                    alert("excelente su compra a sido exitosa");
                    modelo = "esc";

                } else {
                    alert("upps su venta no fue realizada");
                    modelo = prompt("ingresa el modelo que deseas adquirir!");
                }
                break;

            default:
                alert("modelo no encontrado");
                alert("estos son los modelos  " + customerName + "  : Renegade,Rubicon,Compass,Gladietor");
                modelo = prompt("ingresa el modelo que deseas adquirir!");
                break;
        }
    }
}

modelosJeep();