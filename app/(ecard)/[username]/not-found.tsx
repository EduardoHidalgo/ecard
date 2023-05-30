"use client";
import { ButtonLink } from "@/components/buttonLink";
import { useEffect } from "react";

export default function NotFound() {
  // TODO: this weird hack should be fixed in a further Next.js version
  useEffect(() => {
    if (document !== undefined) document.title = "eCard no encontrado";
  }, []);

  return (
    <main className="grid min-h-full bg-white py-24">
      <p className="font-extrabold text-7xl bg-primary-500 w-full text-center text-white py-8">
        404
      </p>
      <div className="text-center w-full max-w-3xl px-6 lg:px-8 py-8 m-auto">
        <h1 className="font-title mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          ¡Ups! No se encontró el eCard que buscas
        </h1>
        <p className="font-sans mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, la página de eCard que has intentado ver no existe o ya
          no está disponible. Si el problema persiste, contacta con nuestro
          equipo de soporte.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonLink href="/" label="Volver al inicio" />
          <a href="#" className="text-sm font-semibold text-gray-900">
            Contactar con soporte <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
