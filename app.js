const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const caso = require('./src/models/Caso');
const sequelize = require('./src/database/data-base');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}))




app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get('/map', (req, res) => {
  res.sendFile(__dirname + "/map.html")
});

app.post('/save',(request,response)=>{

  const coordenadas = request.body.coordenada.split(",")

  const latitude = Number(coordenadas[0])
  const logintude = Number(coordenadas[1])
  
  const point = { type: 'Point', coordinates: [latitude, logintude]};
  
    caso.create({
       coordenadas:point,
       nomeRua:request.body.nomeDaRua
    }).then(resp=>{
       response.redirect('/map')
    }).catch(erro=>{
      console.log('erro ao salvar',erro)
    })
})

app.listen(3000,()=>{
    console.log('Servidor rodando na porta:3000')
})



