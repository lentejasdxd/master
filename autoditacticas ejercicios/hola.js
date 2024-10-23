var chico1,chico2,helado_chocolate=1.50, helado_vainilla=2.50,vuelto1,vuelto2,pedido,pedido1;

chico1=prompt("Ingrese su dinero:");
chico2=prompt("Ingrese su dinero");
alert("helado de chocolate vale 1.50");
alert("Helado de vainilla vale 2.50");
pedido=prompt("Ingrese cual pedira ingrese el precio");
pedido1=prompt("Ingrese el segundo pedido: ");
if(chico1>pedido,chico2>pedido1){
vuelto1=chico1-pedido;
vuelto2=chico2-pedido1;
document.write("su helado se compro con exito su vuelto es "+vuelto1);
document.write(" el vuelto del chico2 es de: "+vuelto2)
}
else if(chico1<pedido,chico2<pedido1){
document.write("su dinero no es suficiente")
}
else if(chico1=pedido,chico2=pedido1)
{
document.write("su helado se compro con exito");
document.write("su helado se compro con exito gracias")
}
