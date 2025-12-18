import React, { useState, useEffect } from 'react';
import { Sparkles, Copy, Check, Loader2, Lock, ArrowRight } from 'lucide-react';
import { generateOptimizedDescription } from '../services/geminiService';
import { LoadingState } from '../types';

const GeminiOptimizer: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [segment, setSegment] = useState('');
  const [location, setLocation] = useState('Brasília, DF'); // Default to BSB
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [copied, setCopied] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  
  const MAX_USAGE = 2;

  useEffect(() => {
    // Check if the user has already used the tool
    const count = localStorage.getItem('gemini_usage_count');
    const legacyUsed = localStorage.getItem('gemini_used');

    if (count) {
      setUsageCount(parseInt(count, 10));
    } else if (legacyUsed === 'true') {
      // Migrate legacy user
      setUsageCount(1);
      localStorage.setItem('gemini_usage_count', '1');
      localStorage.removeItem('gemini_used');
    }
  }, []);

  const hasReachedLimit = usageCount >= MAX_USAGE;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasReachedLimit) return; // Prevent submission if limit reached
    if (!businessName || !segment) return;

    setStatus(LoadingState.LOADING);
    setResult('');
    
    try {
      const description = await generateOptimizedDescription(businessName, segment, location);
      setResult(description);
      setStatus(LoadingState.SUCCESS);
      
      const newCount = usageCount + 1;
      setUsageCount(newCount);
      localStorage.setItem('gemini_usage_count', newCount.toString());
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tool" className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm mb-4">
            <Sparkles size={14} />
            Powered by Google Gemini
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gerador de Bio Otimizada com IA</h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Experimente nossa tecnologia gratuitamente. Digite os dados da sua empresa e receba uma descrição otimizada para SEO local em segundos.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl transition-all duration-300">
          
          {hasReachedLimit && !result ? (
            <div className="text-center py-12 px-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6 border border-indigo-500/50 shadow-lg shadow-indigo-500/20">
                <Lock size={32} className="text-indigo-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Limite de Uso Atingido
              </h3>
              <p className="text-indigo-200 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                Você utilizou suas <span className="text-white font-bold">{MAX_USAGE} gerações gratuitas</span>. 
                Para continuar otimizando seus perfis e acessar estratégias avançadas, fale com nosso time.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-brand-500/25 text-lg"
              >
                Solicitar Consultoria Completa <ArrowRight size={20} />
              </a>
              <p className="mt-8 text-sm text-slate-400">
                Já é cliente Negócio no Mapa? <a href="#contact" className="text-indigo-400 hover:text-indigo-300 underline">Entre em contato</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-indigo-200">Nome da Empresa</label>
                <input
                  id="name"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Ex: Pizzaria do João"
                  disabled={hasReachedLimit}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder-slate-400 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="segment" className="text-sm font-medium text-indigo-200">Segmento/Nicho</label>
                <input
                  id="segment"
                  type="text"
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  placeholder="Ex: Restaurante Italiano"
                  disabled={hasReachedLimit}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder-slate-400 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium text-indigo-200">Localização</label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  disabled={hasReachedLimit}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder-slate-400 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="md:col-span-3">
                <button
                  type="submit"
                  disabled={status === LoadingState.LOADING || hasReachedLimit}
                  className={`w-full py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                    hasReachedLimit 
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed border border-slate-600' 
                      : 'bg-brand-600 hover:bg-brand-500 text-white hover:shadow-brand-500/25'
                  }`}
                >
                  {status === LoadingState.LOADING ? (
                    <>
                      <Loader2 className="animate-spin" /> Gerando descrição...
                    </>
                  ) : hasReachedLimit ? (
                    <>
                      <Lock size={20} /> Limite Atingido ({MAX_USAGE}/{MAX_USAGE})
                    </>
                  ) : (
                    <>
                      <Sparkles /> Gerar Descrição Otimizada ({usageCount}/{MAX_USAGE})
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {status === LoadingState.ERROR && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-lg text-center mb-6">
              Ocorreu um erro ao gerar a descrição. Verifique se a chave de API está configurada ou tente novamente.
            </div>
          )}

          {result && (
            <div className="animate-fade-in-up mt-8 pt-8 border-t border-indigo-500/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-medium text-indigo-300 flex items-center gap-2">
                  <Check className="text-brand-500" size={18} /> Resultado Sugerido:
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-sm bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copiado!' : 'Copiar Texto'}
                </button>
              </div>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-indigo-500/20 text-slate-300 leading-relaxed whitespace-pre-line shadow-inner max-h-[400px] overflow-y-auto custom-scrollbar">
                {result}
              </div>
              <p className="mt-4 text-xs text-center text-slate-400">
                Esta é uma sugestão gerada por IA. Recomendamos revisar antes de publicar no seu Perfil de Negócio.
              </p>
              
              {hasReachedLimit && (
                 <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-center">
                    <p className="text-yellow-200 text-sm">
                       Você atingiu o limite de usos gratuitos. <a href="#contact" className="underline font-bold hover:text-yellow-100">Fale conosco</a> para otimizações ilimitadas.
                    </p>
                 </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiOptimizer;