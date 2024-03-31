import { Router } from "express";

const router = Router();

//Ruta users/register para mostrar el forms de loguear usuarios (GET)
router.get("/login", (request, response) => {
    response.render('login', {
        style: "viewsSessions.css"
    })
});

//Ruta users/register que muestra el forms para registrar nuevos usuarios (GET)
router.get("/register", (request, response) => {
    response.render('register', {
        style: "viewsSessions.css"
    })
});

//Ruta para destruir la sesión 
router.get("/logout", (request, response) => {
    request.session.destroy(error => {
        if (error){
            response.json({error: "error logout", mensaje: "Error al cerrar la sesion"});
        }
        response.redirect('/users/login');
    });
});

export default router;