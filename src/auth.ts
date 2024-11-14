import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

// Función de ejemplo para verificar usuario
async function signInEmailPassword(email, password) {
  console.log(`Buscando usuario con email: ${email}`);
  
  // Encuentra el usuario en la base de datos
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    console.log("Usuario encontrado:", user);
  } else {
    console.log("Usuario no encontrado en la base de datos");
  }

  // Verifica que el usuario existe y que la contraseña es correcta
  if (user && user.password === password) { // Considera hashear la contraseña para mayor seguridad
    console.log("Contraseña correcta, autenticación exitosa");
    return user;
  }

  console.log("Contraseña incorrecta o usuario no encontrado");
  return null;
}

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Ingrese su email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Ingrese su contraseña",
        },
      },
      authorize: async (credentials) => {
        console.log("Iniciando autorización con credenciales:", credentials);

        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          console.log("Credenciales inválidas");
          return null;
        }

        // Llama a la función de autenticación personalizada
        const user = await signInEmailPassword(
          credentials.email,
          credentials.password,
        );

        if (!user) {
          console.log("Autorización fallida: usuario no encontrado o contraseña incorrecta");
          throw new Error("User not found.");
        }

        console.log("Autorización exitosa, usuario autenticado:", user);
        // Retorna el objeto de usuario para la sesión
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Habilita logs detallados
});
