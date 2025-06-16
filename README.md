# LMS Platform

Este proyecto es una plataforma educativa digital (LMS/SIS) diseñada para gestionar de forma unificada la información académica, administrativa y pedagógica de centros educativos. Está dividida en dos partes principales: un **backend** basado en Node.js y PostgreSQL (compatible con Supabase) y un **frontend** basado en React con Vite.

## Requisitos generales
- Node.js 18+
- npm
- (Opcional) Servidor PostgreSQL o instancia Supabase

## Estructura del repositorio

```
backend/      Código del servidor Express y migraciones SQL
frontend/     Aplicación React con Vite
.github/      Flujos de trabajo de CI/CD
```

## Perfiles de usuario

- **Administrador:** gestiona todo el centro, crea usuarios, cursos y categorías.
- **Docente:** publica contenidos y evaluaciones, comunica su progreso.
- **Alumno:** accede a materiales y tareas, consulta calificaciones.
- **Tutor/Familia:** revisa el progreso y se comunica con los docentes.

## Configuración rápida

1. Instalar dependencias en ambos directorios:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. Copiar `backend/.env.example` a `.env` y definir las variables de entorno para la base de datos.
3. Ejecutar migraciones (ver `backend/db/schema.sql`).
4. Arrancar el servidor backend:
   ```bash
   npm start
   ```
5. Iniciar el frontend desde su directorio:
   ```bash
   npm run dev
   ```

## Funcionalidades principales

- Gestión de usuarios (administrador, docente, alumno, tutor) con autenticación básica.
- Gestión de cursos y matrículas.
- Endpoints REST documentados en `docs/openapi.yaml`.
- Frontend con componentes reactivos (panel de control, listado de cursos, login).

## Pruebas

Se incluyen pruebas unitarias sencillas para el backend usando Jest y Supertest. Las pruebas se pueden ejecutar con:

```bash
cd backend
npm test
```

## Despliegue y CI/CD

El flujo de trabajo de GitHub Actions (`.github/workflows/ci.yml`) instala dependencias y ejecuta las pruebas de backend y frontend. Puede ampliarse para despliegues automáticos.

