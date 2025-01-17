"use client";
import { Metadata } from "next";

import { useState } from "react";
import { AccessSuccess } from "./success";
import { AccessForm } from "./form";

const metadata: Metadata = {
  title: "Admin Login",
};

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="font-title mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia sesión en tu cuenta de eCard
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {submitted ? (
          <AccessSuccess />
        ) : (
          <AccessForm setSubmitted={setSubmitted} />
        )}
        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Problemas accediendo a tu cuenta eCard?{" "}
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
