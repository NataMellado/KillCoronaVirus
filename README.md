# KillCoronaVirus

**KillCoronaVirus** es una aplicación web desarrollada con **Next.js** para la gestión de un pequeño centro médico. Facilita la administración de médicos, pacientes y consultas médicas.


## Requisitos Previos

- **Node.js** (versión 14 o superior)
- **PostgreSQL** para la base de datos
- **NextAuth** para autenticación de usuarios
- **Prisma** como ORM

## Configuración del Proyecto

1. **Clona el Repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/KillCoronaVirus.git
    ```

2. **Instala Dependencias:**  
   Navega al directorio del proyecto y ejecuta uno de los siguientes comandos para instalar las dependencias:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

3. **Configura las Variables de Entorno:**  
   Renombra el archivo `.env.example` a `.env.local` y actualiza las variables según tu configuración:

    ```plaintext
    DATABASE_URL=postgresql://usuario:password@localhost:5432/killcoronavirus
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=YVozxYxhMSzLvEB8qa8nTg5RQMSfxnKWJM2UPdl584k= # Añadido por `npx auth`
    ```

   Si necesitas generar un nuevo `NEXTAUTH_SECRET`, puedes hacerlo con el comando:

   ```bash
   npx auth secret


4. **Configura Prisma y Base de Datos:**  
   Ejecuta el siguiente comando para configurar la base de datos:

    ```bash
    npx prisma migrate dev --name init
    ```

    Esto creará las tablas necesarias en tu base de datos.

5. **Ejecuta el Servidor de Desarrollo:**  
   Inicia el servidor de desarrollo con uno de los siguientes comandos:

    ```bash
    npm run dev
    ```

    o

    ```bash
    yarn dev
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## Características Destacadas

- **Gestión de Médicos:** Añadir, editar y eliminar información de médicos.
- **Gestión de Pacientes:** Registro y almacenamiento de información médica de pacientes.
- **Consultas Médicas:** Registro y seguimiento de consultas médicas de los pacientes.
- **Soporte para Modo Oscuro y Claro:** Alterna entre visualización clara y oscura.
- **Integración con NextAuth:** Manejo de autenticación de usuarios.
- **Base de Datos con Prisma y PostgreSQL:** Almacenamiento y gestión eficiente de datos.

## Tipos de Usuarios y Funcionalidades

### Administradores

Los administradores pueden:
- Gestionar médicos, medicamentos, exámenes y especialidades.
- Administrar cuentas de usuarios (doctores y otros administradores).

### Médicos

Los médicos pueden:
- Gestionar pacientes y consultas médicas.
- Acceder y actualizar la ficha médica del paciente junto con su historial de consultas.
