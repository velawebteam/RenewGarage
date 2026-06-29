import React from "react";
import LegalLayout from "../../components/LegalLayout";

export default function CookiesPolicy() {
  return (
    <LegalLayout title="Política de Cookies">
      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">O que são Cookies?</h2>
        <p>Cookies são pequenos ficheiros de texto carregados pelo seu navegador quando visita o nosso website. Servem para garantir que o site funciona corretamente e para nos dar estatísticas anónimas de utilização.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">Que Cookies utilizamos?</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>Cookies Essenciais:</strong> Necessários para a navegação e funcionalidades básicas do site.</li>
          <li><strong>Cookies de Performance:</strong> Utilizados para analisar como os visitantes usam o site (ex: Google Analytics), ajudando-nos a melhorar a navegação.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">Gestão de Cookies</h2>
        <p>Pode optar por bloquear ou apagar cookies através das configurações do seu navegador. Note que a desativação de cookies pode afetar o correto funcionamento de algumas partes do website.</p>
      </section>
    </LegalLayout>
  );
}
