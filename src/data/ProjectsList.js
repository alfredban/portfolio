import { Description } from "@mui/icons-material";
import Odoo from "../assets/Odoo.jpg"
import Airbnb from "../assets/Airbnb.jpg"
import CodeIgniter from "../assets/CodeIgniter.png"
import C from "../assets/C.jpg"
import Mongo from "../assets/Mongo.png"
import Spring from "../assets/Spring.webp"

export const proyectos = [

{
    id:1,
    nombre:"Odoo Sales Channel Module",
    descripcion: "Módulo de odoo centrado en la gestion de canales de ventas",
    framework: "Odoo",
    tecnologias:["Doodba","Linux","Docker","Python"],
    link:"https://github.com/alfredban/OdooModuleSaleChannel",
    imagen: Odoo
},

{
    id:2,
    nombre:"Airbnb MVP – Backend",
    descripcion: "Backend de un MVP estilo Airbnb desarrollado en Java para la materia Proyecto de Software. Implementa la lógica de negocio, manejo de usuarios y gestión de propiedades.",
    tecnologias:["Java", "Spring boot","Maven","Mysql"],
    link:"https://github.com/alfredban/ProyectoDeSW-Airbnb-E6-Back",
    imagen: Airbnb

},

{
    id:3,
    nombre:"Airbnb MVP – Frontend",
    descripcion: "Frontend del MPV de Airbnb",
    tecnologias:["JavaScript","HTML","React","CSS"],
    link:"https://github.com/alfredban/ProyectoDeSW-Airbnb-E6-Front",
    imagen: Airbnb

},

{
    id:4,
    nombre:"Ticket Fast",
    descripcion: "Pagina web ventas de tickets para shows, implementa la lógica de negocio y manejo de usuarios, esta pagina fue realizada en su totalidad por mi",
    tecnologias:["PHP", "CodeIgniter","CSS","HTML","Mysql","Wampp"],
    link:"https://github.com/alfredban/Ticket-Fast",
    imagen: CodeIgniter

},

{
    id:5,
    nombre:"Algoritmo de simulacion - Siu Guarani",
    descripcion: "Este algoritmo fue diseñado como parte de un trabajo final para la materia: Algoritmos y estructuras de datos",
    tecnologias:["C"],
    link:"https://github.com/alfredban/Trabajo-practico-final-AYED",
    imagen: C

},
{
    id:6,
    nombre:"Base de datos Mongo DB",
    descripcion: "Utilizacion de la base de datos Mongo DB para el guardado de datos a traves de un json de JAVA",
    tecnologias:["Mongo DB", "Java"],
    link:"https://github.com/alfredban/TP_BD",
    imagen: Mongo
},
{
    id:6,
    nombre:"Pagina Web Vibras",
    descripcion: "tienda digital de compra de accesorios, implementa la lógica de negocio y manejo de usuarios",
    tecnologias:["Spring Boot", "Java","HTML","Maven"],
    link:"https://github.com/RonnyOl/grupo-9-OO2-2024",
    imagen: Spring
},
]
