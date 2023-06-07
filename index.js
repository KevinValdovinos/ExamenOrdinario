var television = {
  estado: false,
  volumen: 3,
  canal: 7,
  mutear: false,
};
function PrenderApagar() {
  estado = television.estado;
  if (television.estado == false) {
    console.log("Television Encendida!");
    console.log("Volumen: " + television.volumen);
    console.log("Canal: " + television.canal);
    television.estado = true;
  } else {
    console.log("Television Apagada!");
    television.estado = false;
    television.volumen = 3;
    television.canal = 7;
  }
}
function SubirVolumen() {
  volumen = television.volumen;
  if (television.estado == true) {
    if (volumen < 10) {
      volumen++;
      television.volumen = volumen;
      console.log("Television Encendida!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    } else {
      console.log("Es todo el volumen!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    }
  } else {
    console.log("Primero enciende la tele!");
  }
}
function BajarVolumen() {
  volumen = television.volumen;
  if (television.estado == true) {
    if (volumen > 1) {
      volumen--;
      television.volumen = volumen;
      console.log("Television Encendida!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    } else {
      console.log("Es el minimo de volumen!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    }
  } else {
    console.log("Primero enciende la tele!");
  }
}
function SubirCanal() {
  canal = television.canal;
  if (television.estado == true) {
    if (canal < 100) {
      canal++;
      television.canal = canal;
      console.log("Television Encendida!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    } else {
      console.log("Ya no hay canales!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    }
  } else {
    console.log("Primero enciende la tele!");
  }
}
function BajarCanal() {
  canal = television.canal;
  if (television.estado == true) {
    if (canal > 1) {
      canal--;
      television.canal = canal;
      console.log("Television Encendida!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    } else {
      console.log("Ya no hay canales!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    }
  } else {
    console.log("Primero enciende la tele!");
  }
}
function Mutear() {
  mutear = television.mutear;
  block = 0;
  if (television.estado == true) {
    if (mutear == false) {
      television.mutear = true;
      console.log("Television Encendida!");
      console.log("Volumen: 0");
      console.log("Canal: " + television.canal);
    } else {
      television.mutear = false;
      console.log("Television Encendida!");
      console.log("Volumen: " + television.volumen);
      console.log("Canal: " + television.canal);
    }
  } else {
    console.log("Primero enciende la tele!");
  }
}
