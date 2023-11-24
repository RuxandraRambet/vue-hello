'use strict';

const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Cheer up, dude. It’s (almost) Christmas!',
      grinchImg: 'img/grinch.jpeg',
      grinchAlt: 'The Grinch and Max',
      classObj: 'container mt-5',
      classTitle: 'py-4 display-4'
    }
  }
}).mount('#app')

