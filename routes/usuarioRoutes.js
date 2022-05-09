import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";

const router = express.Router();

// Autenticación, Registro y Confirmacion de Usuarios

router.post("/", registrar); //Crea un nuevo usuario
router.post("/login", autenticar); //Autentica un usuario
router.get("/confirmar/:token", confirmar); //Confirmar usuario
router.post("/olvide-password", olvidePassword); //Enviar token a correo
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
