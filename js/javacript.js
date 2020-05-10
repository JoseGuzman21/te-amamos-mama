let parrafo = document.getElementById('parrafo-modal');

function view_img (imagen, numero) {
  document.getElementById('img_modal').src = imagen.src;
  console.log(parrafo);
  if (numero == 1) {
    parrafo.innerHTML = "En New York,  con Fercito y Merle, que comience la travesía!!";
  } else if (numero == 2) {
    parrafo.innerHTML = "New York, chinita chinita bequita!";
  } else if (numero == 3) {
    parrafo.innerHTML = "Comprando el pedido de anc.. !!! jajaja";
  } else if (numero == 4) {
    parrafo.innerHTML = "Comiendo unos pollitos broaster de popeyes con elmo jeje.";
  } else if (numero == 5) {
    parrafo.innerHTML = "Fotazo!! con las grandes torres de New York.";
  } else if (numero == 6) {
    parrafo.innerHTML = "Saliendo de la tienda de Nike, luego de hacer unas pequeñas compras.";
  } else if (numero == 7) {
    parrafo.innerHTML = "Empezo de la predica de Pastor Fercito! Predicador en New York.";
  } else if (numero == 8) {
    parrafo.innerHTML = "Listos para estar otro día más en la predica de Fercito.";
  } else if (numero == 9) {
    parrafo.innerHTML = "Gran cena con los hermanos de la iglesia de New York."; 
  } else if (numero == 10) {
    parrafo.innerHTML = "En las avenidas de New York, de shopping!";
  } else if (numero == 11) {
    parrafo.innerHTML = "Bequita eres ejemplo a seguir, tus hijos de amamos y estamos orgullosos de ti y de mi papá.";
  } else if (numero == 12) {
    parrafo.innerHTML = "Luego de comprar unas yanquis en Nike jaja.";
  } else if (numero == 13) {
    parrafo.innerHTML = "Una buena comida con el Pastor Cañas!";
  } else if (numero == 14) {
    parrafo.innerHTML = "Bequita con George Washington.";
  } else if (numero == 15) {
    parrafo.innerHTML = "Con fercito, se olvidaron de las deudas jeje.";
  } else if (numero == 16) {
    parrafo.innerHTML = "Estatua de la libertad, ahí vamos!";
  } else if (numero == 17) {
    parrafo.innerHTML = "Tu compañero de viajes! de Cusco y USA.";
  } else if (numero == 18) {
    parrafo.innerHTML = "Sonrisa de oreja a oreja en la visita a la estatua de la libertad.";
  } else if (numero == 19) {
    parrafo.innerHTML = "Desdepidiéndonos del Pastor Cañas.";
  } else if (numero == 20) {
    parrafo.innerHTML = "No es mas que un hasta luego hermano, nos volveremos a ver!";
  }
  
}

