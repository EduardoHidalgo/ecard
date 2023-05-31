"use client";
import { Metadata } from "next";

import { useState } from "react";
import { SubscribeSuccess } from "./success";
import { SubscribeForm } from "./form";

const metadata: Metadata = {
  title: "Admin Login",
};

export default function SubscribePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="font-title mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Verifica un correo electrónico válido, este será tu correo de acceso
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {submitted ? (
          <SubscribeSuccess />
        ) : (
          <SubscribeForm setSubmitted={setSubmitted} />
        )}
        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Problemas validando tu correo?{" "}
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
