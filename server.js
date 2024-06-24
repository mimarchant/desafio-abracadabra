const express = require("express");
const app = express();

const usuarios = {
  usuarios: [
    "Miguel",
    "Alejandro",
    "Jorge",
    "Ricardo",
    "Luis",
    "Carlos",
    "Daniel",
    "Juan",
    "Laura",
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
