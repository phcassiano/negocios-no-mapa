import React from 'react';
import { MapPin, Search, Star, Camera, BarChart3, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Otimização Completa de Perfil",
      description: "Configuramos todas as informações vitais da sua empresa para garantir máxima relevância nas buscas locais.",
      icon: MapPin,
    },
    {
      title: "Gestão de Avaliações",
      description: "Estratégias para conseguir mais avaliações positivas e respostas profissionais para construir autoridade.",
      icon: Star,
    },
    {
      title: "SEO Local Estratégico",
      description: "Escolha das palavras-chave certas para que seu negócio apareça quando o cliente de Brasília pesquisar.",
      icon: Search,
    },
    {
      title: "Fotos e Atualizações",
      description: "Orientação e gestão de mídia visual para tornar seu perfil atrativo e profissional aos olhos do cliente.",
      icon: Camera,
    },
    {
      title: "Relatórios de Desempenho",
      description: "Análise mensal de quantas pessoas viram, clicaram e ligaram para sua empresa através do Google.",
      icon: BarChart3,
    },
    {
      title: "Recuperação de Perfil",
      description: "Auxílio especializado para recuperar acesso a perfis suspensos ou reivindicar locais já existentes.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tudo que sua empresa precisa para dominar o mapa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Não é só criar uma conta. É transformar seu perfil no Google em uma máquina de vendas automática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-500 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 mb-6">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
