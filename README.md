# API de Tareas 🧠📋

Una API RESTful hecha con Node.js, Express y MySQL que permite registrar usuarios, iniciar sesión y gestionar tareas protegidas con JWT.

## 🚀 Tecnologías usadas

- Node.js + Express
- MySQL + Sequelize
- JWT para autenticación
- bcryptjs para hashing de contraseñas
- Postman para testing

## 📦 Endpoints principales

### Auth

- `POST /api/register` – Registro de usuario
- `POST /api/login` – Login de usuario (devuelve token)
# 📝 API de Tareas - Node.js + Express + MySQL

Este proyecto es una API RESTful simple para manejar tareas y usuarios. Desarrollado con **Node.js**, **Express** y **Sequelize** como ORM para conectarse a una base de datos **MySQL**.

---

## 🚀 Características

- Registro de usuarios con contraseña encriptada.
- CRUD de tareas (crear, leer, actualizar y eliminar).
- Base de datos sincronizada automáticamente.
- Estructura modular y escalable.
- Preparado para autenticación (en futuras versiones).

---

## 📦 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **Sequelize**
- **MySQL**
- **bcryptjs** (encriptación de contraseñas)
- **dotenv** (manejo de variables de entorno)
- **Nodemon** (dev tool)

---

## 📁 Estructura de carpetas

api-tareas-node/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── app.js
├── .env
├── package.json
└── README.md


---

## ⚙️ Configuración

1. Cloná el repositorio:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio

    Instalá las dependencias:

npm install

    Creá el archivo .env con tu configuración:

DB_NAME=tareasdb
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
PORT=4000

    Iniciá el servidor:

npm run dev

📬 Endpoints principales
Método	Endpoint	Descripción
POST	/api/register	Registrar nuevo usuario
GET	/api/tareas	Obtener todas las tareas
POST	/api/tareas	Crear nueva tarea
PUT	/api/tareas/:id	Actualizar una tarea
DELETE	/api/tareas/:id	Eliminar una tarea
💡 Próximas mejoras

    Autenticación con JWT

    Middleware de validación

    Filtros y paginación

    Tests unitarios

🧑‍💻 Autor

Giuliano Sacco – Estudiante de Ingeniería en Computación y Economía – Uruguay 🇺🇾
GitHub: @gsacco009
📃 Licencia

MIT


