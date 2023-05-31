import { ButtonLink } from "@/components/buttonLink";
import "../../global.css";

export default function LogoutPage() {
  return (
    <main className="grid min-h-full bg-white py-24">
      <div className="text-center w-full max-w-3xl px-6 lg:px-8 py-8 m-auto">
        <h1 className="font-title mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Tu sesión se ha cerrado
        </h1>
        <p className="font-sans mt-6 text-base leading-7 text-gray-600">
          Puedes acceder de nuevo desde la página principal. Serás
          redireccionado en 5 segundos.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonLink href="/" label="Volver al inicio" />
        </div>
      </div>
    </main>
  );
}
