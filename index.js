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
  let texto = document.querySelector('textarea');
  console.log(texto.value);
  let respuesta = desencriptarTexto(texto.value);
  let areaRespuesta = document.getElementById('textoRespuesta');
  areaRespuesta.innerHTML = respuesta;
  limpiarTextarea();
}
function desencriptarTexto(text){//falta implementar
  let diccionarioInvertido = {};
  for (let clave in miDiccionario) {
    let valor = miDiccionario[clave];
    diccionarioInvertido[valor] = clave;
  }
  console.log(diccionarioInvertido);
  let respuesta = "";
  for(let i = 0;i<text.length; i++){
    console.log(text[i]);
    if(miDiccionario[text[i]]==undefined){
      console.log('entro if');
      respuesta += text[i];
      console.log(respuesta);
    }
    else{
      /*console.log('entro else');
      console.log('text[i]',text[i]);
      console.log('text[i+1]',text[i+1]);*/
      if(text[i]=='a'&& text[i+1]=='i'){//tamanio 2
        respuesta += diccionarioInvertido['ai'];
        i++;
      }else if(text[i]=='e'){//tamanio 5
        let subcadena = text.slice(i,i+5);
        console.log('subcadena e',subcadena);
        if(diccionarioInvertido[subcadena]!=undefined){
          respuesta += diccionarioInvertido[subcadena];
          i +=4;
        }

      }
      else{
        let subcadena = text.slice(i,i+4);
        console.log('subcadena i o u',subcadena);
        if(diccionarioInvertido[subcadena]!=undefined){
          respuesta += diccionarioInvertido[subcadena];
          i +=3;
        }
      }
      console.log(respuesta);
    }
  }
  console.log(respuesta);
  return respuesta;
}
function limpiarTextarea(){
  document.querySelector('textarea').value="";
}
function limpiarTextareaRespuesta(){
  document.getElementById('textoRespuesta').textContent="";
}
