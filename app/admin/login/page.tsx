import { Metadata } from "next";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="font-title mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Acceso al Panel Administrador
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" name="login">
          <Input
            label="Correo"
            name="email"
            formName="login"
            placeholder="correo@mail.com"
            required={true}
            type="email"
          />
          <Button label="Iniciar sesión" type="submit" />
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No tienes tu cuenta eCard?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            Contáctanos
          </a>
        </p>
      </div>
    </div>
  );
}
