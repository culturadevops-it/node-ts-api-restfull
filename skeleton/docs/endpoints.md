---

# Endpoints de la API

A continuación se detallan los endpoints disponibles en la API:

## Listar Preguntas Frecuentes

- **URL:** `/api/v1/___name___/faqs`
- **Método:** `GET`
- **Descripción:** Este endpoint permite obtener una lista de todas las preguntas frecuentes.
- **Acción API:** `FaqListAction`

## Crear Pregunta Frecuente

- **URL:** `/api/v1/___name___/faqs`
- **Método:** `POST`
- **Descripción:** Este endpoint permite crear una nueva pregunta frecuente.
- **Cuerpo de la solicitud:**
  ```json
  {
    "title": "Título de la pregunta",
    "description": "Descripción de la pregunta"
  }
  ```
- **Acción API:** `FaqCreateAction`

## Eliminar Pregunta Frecuente

- **URL:** `/api/v1/___name___/faqs/:id`
- **Método:** `DELETE`
- **Descripción:** Este endpoint permite eliminar una pregunta frecuente existente.
- **Parámetros de la ruta:** `id` (ID de la pregunta frecuente a eliminar)
- **Acción API:** `FaqDeleteAction`

---

