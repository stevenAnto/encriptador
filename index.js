let miDiccionario = {
  'e':'enter',
  'i':'imes',
  'a':'ai',
  'o':'ober',
  'u':'ufat'
}
let botonCopiar = document.getElementById('botonCalcular');
botonCopiar.addEventListener('click',function(){
  let textoAreaRespuesta = document.getElementById('textoRespuesta').textContent;
  navigator.clipboard.writeText(textoAreaRespuesta)
    .then(() => {
      // Notificar al usuario que el texto ha sido copiado
      alert('¡Texto copiado al portapapeles!');
    })
    .catch(err => {
      console.error('Error al copiar texto al portapapeles:', err);
    });
  limpiarTextareaRespuesta();
});
function encriptarButton(){
  let texto = document.querySelector('textarea');
  console.log(texto.value);
  let respuesta = encriptarText(texto.value);
  let areaRespuesta = document.getElementById('textoRespuesta');
  areaRespuesta.innerHTML = respuesta;
  limpiarTextarea();
}
function encriptarText(text){
  let respuesta = "";
  for(let char of text){
    if(miDiccionario[char]== undefined){
      respuesta += char;
    }
    else{
      respuesta += miDiccionario[char];
    }
  }
  return respuesta;
}
function desencriptarButton(){
  //falta implementar
  let texto = document.querySelector('textoRespuesta');
  console.log(texto.value);
  let respuesta = desencriptarTexto(texto.value);
  limpiarTextarea();
}
function desencriptarTexto(text){//falta implementar
  let diccionarioInvertido = {};
  for (let clave in miDiccionario) {
    let valor = miDiccionario[clave];
    diccionarioInvertido[valor] = clave;
  }
  let respuesta = "";
}
function limpiarTextarea(){
  document.querySelector('textarea').value="";
}
function limpiarTextareaRespuesta(){
  document.getElementById('textoRespuesta').textContent="";
}
