/*
CONSEGNA: 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        titleText: 'Hello Vue!',
        imageSrc: 'https://picsum.photos/200/300',
      }
    }
  }).mount('#app')