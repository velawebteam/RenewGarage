import React from "react";
import LegalLayout from "../../components/LegalLayout";

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Termos e Condições">
      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">1. Objeto</h2>
        <p>Estes termos regulam a utilização do website da Renew Garage e a prestação de serviços de detalhe automóvel pela nossa oficina.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">2. Agendamentos e Cancelamentos</h2>
        <p>Todos os agendamentos são confirmados após contacto da nossa equipa. Cancelamentos devem ser realizados com pelo menos 24 horas de antecedência. A Renew Garage reserva-se o direito de reagendar serviços em caso de condições adversas.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">3. Responsabilidade</h2>
        <p>A Renew Garage compromete-se a utilizar os melhores produtos e técnicas para a preservação do veículo. No entanto, não nos responsabilizamos por danos pré-existentes não detetados ou itens deixados no interior do veículo pelo cliente.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">4. Preços e Pagamentos</h2>
        <p>Os preços indicados no website são valores base e podem sofrer alterações após inspeção física do veículo. O pagamento deve ser efetuado no ato de entrega do veículo concluído.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">5. Resolução Alternativa de Litígios (RAL)</h2>
        <p>Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo. Exemplos incluem o Centro de Arbitragem de Conflitos de Consumo de Lisboa (CACCL) ou o CNIACC. Mais informações em www.consumidor.pt.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8">6. Livro de Reclamações</h2>
        <p>Dispomos de Livro de Reclamações físico em loja e versão digital acessível em www.livroreclamacoes.pt.</p>
      </section>
    </LegalLayout>
  );
}
