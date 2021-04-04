const express = require('express');
const cors = require('cors');
//Precisa colocar o ./ para que saiba que é um arquivo e não um pacote. Por isso, é necessário referenciar o caminho relativo
// O ./ referencia um arquivo da mesma pasta deste. 
//Precisa do ./ para identificar que é um arquivo, não um pacote
//Se fosse na pasta anterior, seria ../

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);