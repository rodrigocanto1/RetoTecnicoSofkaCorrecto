const preguntas = [
  {
    titulo: "Campeón de la Champions League 2022",
    seccion: "Futbol",
    opciones: [
      { textoRespuesta: "Real Madrid", isCorrect: true },
      { textoRespuesta: "Barcelona", isCorrect: false },
      { textoRespuesta: "Juventus", isCorrect: false },
      { textoRespuesta: "París Saint-Germain", isCorrect: false },
    ],
  },
  {
    titulo: "Equipo de League of Legends con mas mundiales ganados",
    seccion: "Esports",
    opciones: [
      { textoRespuesta: "GEN.G", isCorrect: false },
      { textoRespuesta: "T1", isCorrect: true },
      { textoRespuesta: "Lyon gaming", isCorrect: false },
      { textoRespuesta: "G2", isCorrect: false },
    ],
  },
  {
    titulo: "¿Cual de las siguientes opciones no es un editor de codigo?",
    seccion: "Programacion",
    opciones: [
      { textoRespuesta: "Vim", isCorrect: false },
      { textoRespuesta: "Vscode", isCorrect: false },
      { textoRespuesta: "Emacs", isCorrect: false },
      { textoRespuesta: "Word", isCorrect: true },
    ],
  },
  {
    titulo: "Equipo de CSGO con mas Majors",
    seccion: "Esports",
    opciones: [
      { textoRespuesta: "Astralis", isCorrect: true },
      { textoRespuesta: "Fnatic", isCorrect: false },
      { textoRespuesta: "Ninjas in pyjamas", isCorrect: false },
      { textoRespuesta: "Virtus Pro", isCorrect: false },
    ],
  },
  {
    titulo: "Campeón del Mundo 2018",
    seccion: "Futbol",
    opciones: [
      { textoRespuesta: "Uruguay", isCorrect: false },
      { textoRespuesta: "Croacia", isCorrect: false },
      { textoRespuesta: "Argentina", isCorrect: false },
      { textoRespuesta: "Francia", isCorrect: true },
    ],
  },
  {
    titulo: "¿Cuando se conmemora el día del trabajador?",
    seccion: "Historia",
    opciones: [
      { textoRespuesta: "1 de enero", isCorrect: false },
      { textoRespuesta: "1 de mayo", isCorrect: true },
      { textoRespuesta: "3 de octubre", isCorrect: false },
      { textoRespuesta: "25 de agosto", isCorrect: false },
    ],
  },
  {
    titulo: "Capital de Colombia",
    seccion: "Geografia",
    opciones: [
      { textoRespuesta: "Montevideo", isCorrect: false },
      { textoRespuesta: "Medellín", isCorrect: false },
      { textoRespuesta: "Buenos Aires", isCorrect: false },
      { textoRespuesta: "Bogotá", isCorrect: true },
    ],
  },
  {
    titulo: "¿Cuantos continentes hay?",
    seccion: "Geografia",
    opciones: [
      { textoRespuesta: "2", isCorrect: false },
      { textoRespuesta: "3", isCorrect: false },
      { textoRespuesta: "4", isCorrect: false },
      { textoRespuesta: "5", isCorrect: true },
    ],
  },
  {
    titulo: "¿Que es Java?",
    seccion: "Programacion",
    opciones: [
      { textoRespuesta: "Programa", isCorrect: false },
      { textoRespuesta: "Algoritmo", isCorrect: false },
      { textoRespuesta: "Pseudocódigo", isCorrect: false },
      { textoRespuesta: "Lenguaje de programación", isCorrect: true },
    ],
  },
  {
    titulo: "¿Cuando es el día de la raza?",
    seccion: "Historia",
    opciones: [
      { textoRespuesta: "4 de julio", isCorrect: false },
      { textoRespuesta: "24 de diciembre", isCorrect: false },
      { textoRespuesta: "12 de octubre", isCorrect: true },
      { textoRespuesta: "22 de abril", isCorrect: false },
    ],
  },
  {
    titulo: "País mas grande del mundo",
    seccion: "Geografia",
    opciones: [
      { textoRespuesta: "Argentina", isCorrect: false },
      { textoRespuesta: "Estados Unidos", isCorrect: false },
      { textoRespuesta: "China", isCorrect: false },
      { textoRespuesta: "Rusia", isCorrect: true },
    ],
  },
  {
    titulo: "Mejor gol mundial 2014",
    seccion: "Futbol",
    opciones: [
      { textoRespuesta: "Lionel Messi", isCorrect: false },
      { textoRespuesta: "Luis Suarez", isCorrect: false },
      { textoRespuesta: "Neymar", isCorrect: false },
      { textoRespuesta: "James Rodríguez", isCorrect: true },
    ],
  },
  {
    titulo: "Río mas largo del mundo",
    seccion: "Geografia",
    opciones: [
      { textoRespuesta: "Nilo", isCorrect: true },
      { textoRespuesta: "Amazonas", isCorrect: false },
      { textoRespuesta: "Misisipi", isCorrect: false },
      { textoRespuesta: "Mekong", isCorrect: false },
    ],
  },
  {
    titulo: "Máximo goleador de la historia",
    seccion: "Futbol",
    opciones: [
      { textoRespuesta: "Pele", isCorrect: false },
      { textoRespuesta: "Robert Lewandowski", isCorrect: false },
      { textoRespuesta: "Lionel Messi", isCorrect: false },
      { textoRespuesta: "Cristiano Ronaldo", isCorrect: true },
    ],
  },
  {
    titulo: "Mejor jugador de CSGO en la actualidad",
    seccion: "Esports",
    opciones: [
      { textoRespuesta: "ZywOo", isCorrect: false },
      { textoRespuesta: "Dev1ce", isCorrect: false },
      { textoRespuesta: "Fallen", isCorrect: false },
      { textoRespuesta: "s1mple", isCorrect: true },
    ],
  },
  {
    titulo: "Forma de movernos a la anterior carpeta en la terminal",
    seccion: "Programacion",
    opciones: [
      {
        textoRespuesta: "back",
        isCorrect: false,
      },
      { textoRespuesta: "cd..", isCorrect: true },
      { textoRespuesta: "No se puede volver", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
    ],
  },
  {
    titulo:
      "Videojuego de construcción de tipo mundo abierto (fecha de estreno: 2011)",
    seccion: "VideoJuegos",
    opciones: [
      { textoRespuesta: "Rust", isCorrect: false },
      { textoRespuesta: "The Sims", isCorrect: false },
      { textoRespuesta: "Minecraft", isCorrect: true },
      { textoRespuesta: "Dayz", isCorrect: false },
    ],
  },
  {
    titulo: "¿Que juego tiene la mayor recompensa en sus torneos?",
    seccion: "Esport",
    opciones: [
      { textoRespuesta: "LoL", isCorrect: false },
      { textoRespuesta: "CSGO", isCorrect: false },
      { textoRespuesta: "FortNite", isCorrect: false },
      { textoRespuesta: "Dota2", isCorrect: true },
    ],
  },
  {
    titulo: "En qué año descubrió Cristóbal Colón, América",
    seccion: "Historia",
    opciones: [
      { textoRespuesta: "1482", isCorrect: false },
      { textoRespuesta: "1592", isCorrect: false },
      { textoRespuesta: "1498", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores", isCorrect: true },
    ],
  },
  {
    titulo: "¿Cuantas formas hay de declarar una variable en JS?",
    seccion: "Programacion",
    opciones: [
      { textoRespuesta: "2", isCorrect: false },
      { textoRespuesta: "5", isCorrect: false },
      { textoRespuesta: "1", isCorrect: false },
      { textoRespuesta: "3", isCorrect: true },
    ],
  },
  {
    titulo: "¿Quién dijo que la tierra giraba alrededor del sol?",
    seccion: "Historia",
    opciones: [
      { textoRespuesta: "Aristarco de Samos", isCorrect: true },
      { textoRespuesta: "Galileo Galilei", isCorrect: false },
      { textoRespuesta: "Nicolás Copérnico", isCorrect: false },
      { textoRespuesta: "Ninguno de los anteriores", isCorrect: false },
    ],
  },
  {
    titulo: "Para que sirve el atributo target_blank",
    seccion: "Programacion",
    opciones: [
      {
        textoRespuesta: "Abrir el enlace en la misma pestaña",
        isCorrect: false,
      },
      { textoRespuesta: "Abrir el enlace en otra pestaña", isCorrect: true },
      { textoRespuesta: "No existe", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
    ],
  },
  {
    titulo: "Inicio de la primera guerra mundial",
    seccion: "Historia",
    opciones: [
      { textoRespuesta: "1 de mayo de 1914", isCorrect: false },
      { textoRespuesta: "28 de julio de 1914", isCorrect: true },
      { textoRespuesta: "30 de diciembre de 1914", isCorrect: false },
      { textoRespuesta: "18 de junio de 1914", isCorrect: false },
    ],
  },
  {
    titulo: "¿En que continente queda australia?",
    seccion: "Geografia",
    opciones: [
      { textoRespuesta: "America", isCorrect: false },
      { textoRespuesta: "Eurasia", isCorrect: false },
      { textoRespuesta: "Africa", isCorrect: false },
      { textoRespuesta: "Oceanía", isCorrect: true },
    ],
  },
  {
    titulo: "¿Que tipo de animal es el sapo?",
    seccion: "Biologia",
    opciones: [
      { textoRespuesta: "Invertebrado", isCorrect: false },
      { textoRespuesta: "Roedor", isCorrect: false },
      { textoRespuesta: "Reptil", isCorrect: false },
      { textoRespuesta: "Anfibio", isCorrect: true },
    ],
  },
];

export default preguntas;
