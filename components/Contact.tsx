import React, { useState } from 'react';
import { MessageCircle, Send, Phone, MapPin, Mail } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Obrigado, ${formData.name}! Recebemos sua mensagem. Entraremos em contato em breve.`);
    setFormData({ name: '', businessName: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Vamos colocar sua empresa no mapa?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Entre em contato para uma análise gratuita do seu perfil atual. Atendemos empresas de todos os portes em Brasília e Região.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-100 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Localização</h4>
                  <p className="text-gray-600">Brasília, DF (Atendimento em todo o DF)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-100 p-3 rounded-lg text-brand-600">
                   <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@negocionomapabsb.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0 bg-brand-100 p-3 rounded-lg text-brand-600">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-gray-900">Telefone</h4>
                   <p className="text-gray-600">(11) 96812-2868</p>
                 </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-green-50 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <MessageCircle size={20} /> Atendimento Rápido
              </h4>
              <p className="text-green-700 mb-4 text-sm">
                Prefere falar agora? Chame no WhatsApp e responda em minutos.
              </p>
              <a 
                href="https://wa.me/5511968122868"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Nome do seu negócio"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="(11) 96812-2868"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                  placeholder="Conte um pouco sobre sua empresa..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send size={18} /> Enviar Solicitação
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;