import React from 'react';
import { CheckCircle2, HelpCircle } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    "Atendimento presencial ou remoto em Brasília",
    "Foco total em resultados (ligações e visitas)",
    "Relatórios transparentes e fáceis de entender",
    "Estratégias atualizadas com as regras do Google",
    "Preço justo para pequenos e médios negócios",
    "Suporte rápido via WhatsApp"
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Por que escolher o <span className="text-brand-600">Negócio no Mapa BSB</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Diferente de grandes agências que tratam você apenas como um número, nós conhecemos o mercado de Brasília. Entendemos a realidade do empresário local e aplicamos estratégias que trazem retorno real.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-google-green flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-brand-700 bg-brand-100 hover:bg-brand-200 transition-colors"
              >
                Agendar consultoria gratuita
              </a>
              <a 
                href="#faq" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-600 bg-white hover:bg-gray-50 hover:text-brand-600 transition-colors gap-2"
              >
                <HelpCircle size={18} />
                Saiba mais sobre nossos serviços
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-google-blue via-google-red to-google-yellow rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">
               {/* Concept visualization */}
               <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                       <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">LOGO</div>
                       <div className="space-y-2">
                          <div className="h-3 w-32 bg-gray-100 rounded"></div>
                          <div className="h-2 w-20 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                    <div className="h-8 w-20 bg-google-yellow/20 rounded text-google-yellow text-xs font-bold flex items-center justify-center border border-google-yellow/30">TOP 1</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-google-blue/10 rounded">
                        <div className="h-2 w-3/4 bg-google-blue rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-google-red/10 rounded">
                        <div className="h-2 w-1/2 bg-google-red rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-google-green/10 rounded">
                         <div className="h-2 w-5/6 bg-google-green rounded"></div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center text-sm text-gray-500">
                     <span>Visualizações: <span className="font-bold text-google-blue">+450%</span></span>
                     <span>Ações: <span className="font-bold text-google-green">+120%</span></span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;