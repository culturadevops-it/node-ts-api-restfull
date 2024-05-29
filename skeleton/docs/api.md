---

# API de Preguntas Frecuentes (FAQ)

Este proyecto constituye una API para gestionar preguntas frecuentes (FAQ). Proporciona funcionalidades básicas como crear, listar y eliminar preguntas frecuentes.

## Configuración

### Requisitos previos

Asegúrate de tener instalado Node.js en tu sistema. Además, se requiere un servidor de base de datos compatible, como MariaDB, para ejecutar la aplicación.

### Instalación de dependencias

Antes de ejecutar la aplicación, asegúrate de instalar todas las dependencias necesarias ejecutando el siguiente comando en la terminal:

```bash
npm install
```

## Ejecución

Una vez instaladas las dependencias, puedes iniciar el servidor local ejecutando:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000) por defecto.

## Endpoints

### Crear Pregunta Frecuente

- **URL:** `/api/faq/create`
- **Método:** `POST`
- **Cuerpo de la solicitud:**
  ```json
  {
    "title": "Título de la pregunta",
    "description": "Descripción de la pregunta"
  }
  ```
- **Respuesta exitosa:** `HTTP 201 Created`
- **Respuesta fallida:** `HTTP 400 Bad Request`

### Eliminar Pregunta Frecuente

- **URL:** `/api/faq/delete/:id`
- **Método:** `DELETE`
- **Parámetros de la ruta:** `id` (ID de la pregunta frecuente a eliminar)
- **Respuesta exitosa:** `HTTP 200 OK`
- **Respuesta fallida:** `HTTP 400 Bad Request`

### Listar Preguntas Frecuentes

- **URL:** `/api/faq/list`
- **Método:** `GET`
- **Parámetros de consulta:** `pattern` (patrón de búsqueda opcional)
- **Respuesta exitosa:** `HTTP 200 OK`
- **Respuesta fallida:** `HTTP 400 Bad Request`

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega una nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---
