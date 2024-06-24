const express = require("express");
const app = express();

const usuarios = {
  usuarios: [
    "Juan",
    "Jocelyn",
    "Astrid",
    "Maria",
    "Ignacia",
    "Javier",
    "Brian",
  ],
};

//middleware para archivos estaticos
app.use(express.static("assets"));

//middleware
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  const usuarioRequest = req.params.usuario;

  if (usuarios.usuarios.find((usuario) => usuario === usuarioRequest)) {
    next();
  } else {
    res.sendFile(__dirname + "/assets/who.jpeg");
  }
});

// ruta juego
app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// ruta usuarios
app.get("/abracadabra/usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/abracadabra/conejo/:numero", (req, res) => {
  const numeroUsuario = req.params.numero;
  const numeroAleatorio = Math.floor(Math.random() * 4) + 1;

  if (numeroUsuario == numeroAleatorio) {
    res.sendFile(__dirname + "/assets/conejito.jpg");
  } else {
    res.sendFile(__dirname + "/assets/voldemort.jpg");
  }
});

//ruta no existe
app.get("*", (req, res) => {
  res.send("Esta página no existe :(");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
