import React from "react";
import LegalLayout from "../../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidade">
      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">1. Recolha de Dados Pessoais</h2>
        <p>A Renew Garage está empenhada em proteger a privacidade dos seus clientes. Recolhemos apenas os dados necessários para a prestação dos nossos serviços de detalhe automóvel, tais como nome, contacto telefónico, e-mail e dados do veículo.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">2. Finalidade do Tratamento</h2>
        <p>Os dados recolhidos destinam-se exclusivamente a:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Agendamento e prestação de serviços de detalhe;</li>
          <li>Contacto para levantamento ou entrega do veículo;</li>
          <li>Faturação e cumprimento de obrigações legais;</li>
          <li>Respostas a pedidos de orçamento.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">3. Direitos dos Titulares (RGPD)</h2>
        <p>De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD), o cliente tem o direito de aceder, retificar, apagar ou limitar o tratamento dos seus dados pessoais. Pode exercer estes direitos através de contacto direto com a nossa equipa.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">4. Conservação de Dados</h2>
        <p>Os dados serão conservados pelo período estritamente necessário para as finalidades descritas, ou pelo período legalmente exigido pela legislação fiscal portuguesa.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">5. Cookies</h2>
        <p>Este website utiliza cookies para melhorar a experiência do utilizador. Consulte a nossa Política de Cookies para mais detalhes.</p>
      </section>
    </LegalLayout>
  );
}
