import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Carlos Eduardo",
      company: "Oficina Prime Auto Center",
      quote: "Nossas ligações triplicaram em apenas 2 meses de gestão. O pessoal do Negócio no Mapa realmente entende como o Google funciona em Brasília. Recomendo demais!",
      rating: 5
    },
    {
      id: 2,
      name: "Mariana Santos",
      company: "Clínica Sorriso Aberto",
      quote: "Eu estava com meu perfil suspenso há semanas e perdendo pacientes. A equipe recuperou meu acesso em 3 dias e otimizou tudo. O atendimento foi impecável.",
      rating: 5
    },
    {
      id: 3,
      name: "Ricardo Oliveira",
      company: "Pizzaria Napoli BSB",
      quote: "O melhor investimento de marketing local que já fiz. Hoje aparecemos na primeira posição para 'pizzaria em Águas Claras'. O retorno sobre o investimento é absurdo.",
      rating: 5
    },
    {
      id: 4,
      name: "Fernanda Costa",
      company: "Studio de Pilates Equilíbrio",
      quote: "A ferramenta de IA para descrição ajudou muito, mas a consultoria completa mudou o jogo. Profissionais sérios e transparentes com os resultados.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000); // Auto-play every 6 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Histórias de Sucesso em Brasília
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Container */}
          <div className="relative overflow-hidden min-h-[300px] bg-slate-50 rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            
            {/* Background Decorative Quote */}
            <div className="absolute top-6 left-6 text-brand-100 opacity-50">
              <Quote size={80} fill="currentColor" />
            </div>

            {/* Carousel Items */}
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4 relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-8 font-serif italic">
                    "{item.quote}"
                  </blockquote>

                  <div className="mt-auto">
                    <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                    <div className="text-brand-600 font-medium text-sm">{item.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-brand-600 hover:shadow-lg transition-all focus:outline-none z-20"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-brand-600 hover:shadow-lg transition-all focus:outline-none z-20"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-brand-600' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;