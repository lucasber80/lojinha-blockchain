const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.use(express.static(__dirname));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home',{
        itens: [
  {
    price:1,
    image:"/images/headset.jpg",
    title:"headset gamer logitech"
  },
  {
    price:2,
    image:"/images/processador.jpg",
    title:"Processador intel core"
  },
  {
    price:1,
    image:"/images/cadeira.jpg",
    title:"Cadeira Gamer"
  },
  {
    price:3,
    image:"/images/xbox.jpg",
    title:"Xbox Series S"
  },
  {
    price:2,
    image:"/images/tv.jpg",
    title:"Televisão 45 polegadas"
  },
  {
    price:6,
    image:"/images/ps5.jpg",
    title:"Video game playstation 5"
  }
]
    });
});

app.listen(3000);