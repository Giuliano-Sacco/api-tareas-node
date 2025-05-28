# ✅ API RESTful para Sistema de Tareas

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **MySQL**, que permite gestionar tareas personales con autenticación de usuarios. Incluye funcionalidades completas de CRUD, login, registro y protección con JWT.

---

## 🚀 Funcionalidades

- 📋 **CRUD de Tareas** (crear, leer, actualizar, eliminar)
- 👤 **Registro y login de usuarios**
- 🔐 **Autenticación con JWT**
- 🗃️ **Base de datos MySQL**
- 🐳 **Dockerizado** para facilitar despliegue
- 📄 Código limpio, modular y mantenible

---

## 📦 Tecnologías Usadas

- Node.js
- Express
- MySQL
- Sequelize ORM (opcional)
- JWT
- Docker (extra)
- Postman (para testear endpoints)

---

## 🔧 Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST   | /api/register | Registrar nuevo usuario |
| POST   | /api/login    | Login y obtener token JWT |
| GET    | /api/tareas   | Obtener todas las tareas del usuario |
| POST   | /api/tareas   | Crear una nueva tarea |
| PUT    | /api/tareas/:id | Modificar tarea existente |
| DELETE | /api/tareas/:id | Eliminar tarea |

🔐 Todas las rutas de `/api/tareas` están protegidas con JWT.

---

## 📂 Estructura del Proyecto

```

📁 src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── app.js
📄 .env
📄 Dockerfile
📄 docker-compose.yml
📄 README.md

````

---

## 🛠️ Cómo correr el proyecto

### 🔸 Opción 1: Local

1. Cloná el repositorio  
2. Instalá las dependencias:

```bash
npm install
````

3. Configurá el archivo `.env` con tus credenciales de MySQL
4. Iniciá el servidor:

```bash
npm run dev
```

---

### 🔸 Opción 2: Docker

```bash
docker-compose up --build
```

---

## 🧪 Test de Endpoints

Podés testear todos los endpoints con **Postman**. Se incluye una colección lista para importar en la carpeta `/postman`.

---

## 📌 Roadmap futuro

* [ ] Reset de contraseña vía email
* [ ] Paginación y filtros de tareas
* [ ] Swagger para documentación automática
* [ ] Frontend React para consumir la API

---

## 👨‍💻 Autor

Desarrollado por [Giuliano Sacco](https://github.com/Giuliano-Sacco)
Ingeniería en Computación y Economía | Backend Dev desde Uruguay

---

## 📄 Licencia

MIT License – Libre para usar, modificar y compartir

```
`
