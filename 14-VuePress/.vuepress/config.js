module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Guia', link: '/guia/' },
        { text: 'External', link: 'https://google.com' }
      ],
      sidebar: {// Para un Sidebar, primero se pone la ruta de la pagina donde va a aparecer,
                // y luego en el array donde se colocaran 
        '/guia/': [
          '',
          // este es una subguia que hemos creado en otro archivo de la carpeta gia y llamamos desdeel archivo config.js
          'vuepress-guia'
        ]
      }

    }
    
  }