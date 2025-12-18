import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quanto tempo demora para ver os resultados?",
      answer: "Geralmente, começamos a notar um aumento nas visualizações e interações (chamadas e rotas) logo no primeiro mês após a otimização inicial. Resultados mais consistentes e um posicionamento consolidado costumam aparecer entre 3 a 6 meses de trabalho contínuo."
    },
    {
      question: "Preciso pagar anúncios (Google Ads) para aparecer?",
      answer: "Não necessariamente. Nosso foco principal é o SEO Local, que visa posicionar sua empresa de forma orgânica (gratuita) no Google Maps. No entanto, anúncios podem acelerar os resultados no curto prazo, e podemos gerenciar isso caso seja seu interesse."
    },
    {
      question: "Minha empresa não tem endereço físico para receber clientes. Posso ter um perfil?",
      answer: "Sim! O Google permite perfis para 'Prestadores de Serviço de Área Coberta' (como encanadores, eletricistas, consultores). Configuramos seu perfil para mostrar apenas a área que você atende em Brasília, sem divulgar seu endereço residencial."
    },
    {
      question: "Vocês garantem a primeira posição no Google?",
      answer: "Cuidado com quem promete isso. Nenhuma agência pode garantir a 1ª posição, pois o algoritmo do Google é secreto e muda constantemente. O que garantimos é a aplicação das melhores práticas comprovadas para maximizar suas chances de estar no topo e superar a concorrência local."
    },
    {
      question: "O que acontece se eu parar de pagar a mensalidade?",
      answer: "O perfil é seu. Se você contratar a otimização pontual, o perfil fica com você otimizado. Se contratar a gestão recorrente e cancelar, você mantém o acesso, mas deixa de contar com nossas atualizações estratégicas, respostas a avaliações e posts semanais que mantêm o perfil relevante."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full text-brand-600 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Respostas para as principais perguntas sobre a gestão do seu perfil.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index 
                  ? 'border-brand-200 bg-brand-50/30 shadow-sm' 
                  : 'border-gray-200 bg-white hover:border-brand-200'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`text-lg font-medium ${openIndex === index ? 'text-brand-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-600' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;