function Pasajero (nombre, apellido, dni, asiento){
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.asiento = asiento;
}

function Bus (){
  this.pasajeros = [];
  this._asientos = [];
  this.celda = undefined;
  this.reservar = function(pasajero){
      this.pasajeros.push(pasajero);
    }
  this.seleccionar = function (celda) {
      this.celda = celda;
      document.getElementById("mostrar").innerHTML= (celda.textContent);
      var buscarAsiento = document.getElementById("mostrar").textContent;
        for(var i = 0; i < this.pasajeros.length; i++){
          if(this.pasajeros[i].asiento == buscarAsiento){
            document.getElementById("userNombre").value = this.pasajeros[i].nombre;
            document.getElementById("userApellido").value = this.pasajeros[i].apellido;
            document.getElementById("userDNI").value = this.pasajeros[i].dni;
          }
        }
    }
  this.buscarPorDni = function(){

  }
}

var bus = new Bus();

var btnBuscarDni = document.getElementById("btnBuscarDni");
btnBuscarDni.onclick = function(){

}

var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].onclick = function (event) {
      bus.seleccionar (event.target);
    } ;
    bus._asientos.push(celdas[i].textContent);
}

var btnReservar = document.getElementById("btnReservar");
btnReservar.onclick = function(){
  bus.reservar(new Pasajero (document.getElementById("userNombre").value, document.getElementById("userApellido").value, document.getElementById("userDNI").value, document.getElementById("mostrar").textContent));
  bus.celda.style.backgroundColor = "red";
}
var asiento = document.getElementById("mostrar").textContent;

var btnCancelar = document.getElementById("btnCancelar");
btnCancelar.onclick = function(){

}

var btnListar = document.getElementById("btnListar");
btnListar.onclick = function(){

}

var btnLimpiarLista = document.getElementById("btnLimpiarLista");
btnLimpiarLista.onclick = function(){

}

var btnLimpiarReservar = document.getElementById("btnLimpiarReservar");
btnLimpiarReservar.onclick = function(){

}
