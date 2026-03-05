/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronDown, Play, Star, MessageCircle, Instagram } from 'lucide-react';

const WistiaPlayer = 'wistia-player' as any;

interface FAQItemProps {
  question: string;
  answer: string;
  key?: React.Key;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left font-semibold text-sm md:text-base hover:text-brand-green transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const buyButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToBuy = () => {
    buyButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const saladCards = [
    { title: "SALADA REFRESCANTE + MOLHO CÍTRICO", conservation: "7 dias", calories: "100 kcal", img: "https://i.imgur.com/Z8KGZw5.png" },
    { title: "SALADA CAPRESE", conservation: "7 dias", calories: "120 kcal", img: "https://i.imgur.com/VAFv4up.png" },
    { title: "SALADA CAESAR + MOLHO ORIGINAL", conservation: "7 dias", calories: "115 kcal", img: "https://i.imgur.com/Xxx5n3N.png" },
    { title: "SALADA BIG MAC + MOLHO ESPECIAL", conservation: "7 dias", calories: "150 kcal", img: "https://i.imgur.com/kVJcvGz.png" },
    { title: "SALADA MEDITERRÂNEA + MOLHO AGRIDOCE", conservation: "7 dias", calories: "120 kcal", img: "https://i.imgur.com/98YBVYy.png" },
    { title: "SALADA TOSCANA + MOLHO SICILIANO", conservation: "7 dias", calories: "130 kcal", img: "https://i.imgur.com/q4wqHtE.png" },
    { title: "SALADA RÚSTICA + MOSTARDA E MEL", conservation: "7 dias", calories: "160 kcal", img: "https://i.imgur.com/o3W6VvF.png" },
  ];

  const testimonials = [
    { name: "Bruna", img: "https://i.imgur.com/zp1i5wS.png" },
    { name: "Carol", img: "https://i.imgur.com/vXcq6KN.png" },
    { name: "Mariza", img: "https://i.imgur.com/i8U7pcT.png" },
    { name: "Rafaela", img: "https://i.imgur.com/WsklV3u.png" },
    { name: "Silvia", img: "https://i.imgur.com/kFwNXPo.png" },
  ];

  const faqs = [
    {
      question: "Como recebo minhas receitas?",
      answer: "Assim que o pagamento for confirmado, você recebe acesso imediato pelo WhatsApp e por e-mail com todas as 120 receitas de saladas, os molhos irresistíveis e todos os bônus. Tudo disponível para você baixar e começar a usar no mesmo instante. Sem espera, sem burocracia."
    },
    {
      question: "O curso tem garantia?",
      answer: "Sim! Você tem 7 dias de garantia incondicional para testar as receitas. Se não gostar por qualquer motivo, é só pedir o reembolso e devolvemos 100% do valor investido. Simples assim."
    },
    {
      question: "Preciso de potes especiais?",
      answer: "Não precisa! Qualquer pote que você já tem em casa funciona perfeitamente. Pode ser de plástico, de vidro, grande ou pequeno. O importante é que feche bem para manter a salada fresca. Nada de gastar dinheiro extra com equipamento."
    },
    {
      question: "As receitas incluem os molhos?",
      answer: "Com certeza! Todas as 120 receitas já vêm com molhos específicos e deliciosos. São molhos caseiros, fáceis de fazer e que transformam completamente o sabor da salada. Você nunca mais vai precisar comprar aqueles molhos industrializados caros e cheios de conservantes."
    },
    {
      question: "Quanto tempo dura a salada no pote na geladeira?",
      answer: "Quando montada corretamente seguindo o método das camadas que eu ensino, a salada dura de 5 a 7 dias fresquinha na geladeira. Isso significa que você prepara tudo no domingo e tem almoço ou jantar saudável pronto a semana toda. Zero desperdício, zero trabalho diário."
    },
    {
      question: "Posso montar a salada toda de uma vez no fim de semana para a semana inteira?",
      answer: "Sim, esse é exatamente o método que eu ensino! A maioria das mulheres prepara no sábado ou domingo as saladas da semana inteira em cerca de 30 minutos. É muito mais prático do que ter que picar, lavar e montar salada todo dia. Você ganha tempo, economiza energia e nunca fica sem opção saudável na correria."
    },
    {
      question: "Posso vender saladas no pote? quanto posso cobrar?",
      answer: "Pode sim! Muitas alunas usam as receitas para vender e gerar renda extra. Dependendo da sua região e dos ingredientes, saladas no pote são vendidas entre R$ 15 e R$ 18 por pote (às vezes até mais, dependendo do tamanho e incrementos). É uma forma inteligente de transformar conhecimento em lucro."
    },
    {
      question: "As receitas são fáceis de fazer?",
      answer: "Super fáceis! Todas as receitas têm instruções claras e passo a passo simples. Não precisa ser expert na cozinha. Se você sabe picar, misturar e temperar, você consegue fazer. As receitas foram pensadas justamente para quem tem rotina corrida e não quer complicação."
    },
    {
      question: "Os ingredientes são fáceis de encontrar?",
      answer: "Sim! Todas as receitas usam ingredientes simples e acessíveis que você encontra em qualquer supermercado, feira ou sacolão. Nada de ingredientes exóticos ou caros que você nunca ouviu falar. Comida de verdade, com ingredientes de verdade."
    },
    {
      question: "Preciso ter balança ou utensílios específicos?",
      answer: "Não precisa de nada disso. Você só precisa de: Potes (os que você já tem em casa), Colheres, Uma faca, Uma tábua de corte. É isso. Nada de balança de precisão, processador, Air Fryer ou qualquer outro equipamento caro. Simplicidade total."
    }
  ];

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-4 pt-12 pb-8 text-center bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full mb-6 bg-white/80 shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-600 uppercase">
              VAGAS ABERTAS PARA 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-green leading-tight mb-4">
            COMECE 2026 <br />
            COMENDO BEM E <br />
            <span className="text-brand-orange">EMAGRECENDO</span> DE <br />
            VERDADE
          </h1>
          <p className="text-slate-700 text-sm md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Saladas de pote gostosas, econômicas e prontas em 30 minutos para facilitar sua rotina e cuidar do seu corpo.
          </p>

          {/* Mini VSL (Wistia Player) */}
          <div className="max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white bg-white">
            <WistiaPlayer media-id="cr897dvdbz" aspect="0.5616224648985959"></WistiaPlayer>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBuy}
            className="w-full max-w-sm bg-brand-orange text-white font-black py-5 rounded-xl shadow-xl flex items-center justify-center gap-2 text-lg mb-4"
          >
            QUERO AS RECEITAS <span className="text-2xl">→</span>
          </motion.button>
          
          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
            <span className="text-brand-orange">🔥</span> Mais de <span className="font-bold">120 pessoas</span> começaram hoje
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10 text-slate-800">
            O QUE VOCÊ <br /> VAI ENCONTRAR:
          </h2>
          
          <div className="space-y-4 mb-12">
            {[
              "Funciona com qualquer pote",
              "120 saladas deliciosas",
              "Molhos irresistíveis",
              "O segredo das camadas",
              "Conservação de 7 dias",
              "Prontas em 30 minutos",
              "Passo a passo de preparo",
              "1.000 aulas de marmitas fit + Gastronomia Fit"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-white w-4 h-4" />
                </div>
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10">
            <img 
              src="https://i.imgur.com/XTfjsDM.png" 
              alt="Salad Jars" 
              className="w-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBuy}
            className="w-full max-w-sm mx-auto bg-brand-green text-white font-black py-5 rounded-xl shadow-xl flex items-center justify-center gap-2 text-lg"
          >
            QUERO AS RECEITAS!
          </motion.button>
        </div>
      </section>

      {/* Salad Grid Section */}
      <section className="px-4 py-16 bg-[#C1CBA3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12 text-brand-green uppercase">
            ALGUMAS SALADAS <br /> QUE IRÁ PRENDER:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saladCards.map((salad, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/5">
                <img 
                  src={salad.img} 
                  alt={salad.title} 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 text-center">
                  <h3 className="font-black text-brand-green text-lg mb-4 leading-tight">
                    {salad.title}
                  </h3>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>Conservação: {salad.conservation}</p>
                    <p>Calorias: {salad.calories}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBuy}
              className="w-full max-w-sm bg-brand-green text-white font-black py-4 rounded-xl shadow-xl uppercase text-sm"
            >
              QUERO AS RECEITAS!
            </motion.button>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="px-4 py-16 bg-brand-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-12 text-slate-800 uppercase">
            FRESCOR NO PRATO + <br /> MOLHOS IRRESISTÍVEIS
          </h2>
          
          <div className="space-y-8 mb-12">
            <img src="https://i.imgur.com/3pYi7Wu.png" alt="Salad 1" className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://i.imgur.com/NlLZM9S.png" alt="Salad 2" className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://i.imgur.com/IWfSRzt.png" alt="Salad 3" className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBuy}
            className="w-full max-w-sm mx-auto bg-brand-green text-white font-black py-4 rounded-xl shadow-xl uppercase text-sm"
          >
            QUERO AS RECEITAS!
          </motion.button>
        </div>
      </section>

      {/* Preview Section */}
      <section className="px-4 py-16 bg-[#C1CBA3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-12 text-slate-800 uppercase">
            ASSISTA A PRÉVIA <br /> DA AULA 1 :
          </h2>
          
          <div className="max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white bg-white">
            <WistiaPlayer media-id="kxeqzov5qy" aspect="0.5625"></WistiaPlayer>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="px-4 py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-12 text-slate-800 uppercase">
            RECEBA AINDA <br /> + 3 BÔNUS <br /> EXCLUSIVOS:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "BÔNUS 1:", sub: "SMOOTHIES DETOX 20 RECEITAS", img: "https://i.imgur.com/guJyKEI.png" },
              { title: "BÔNUS 2:", sub: "SHOTS MATINAIS 5 RECEITAS", img: "https://i.imgur.com/lpHYhlO.png" },
              { title: "BÔNUS 3:", sub: "ÁGUAS SABORIZADAS 15 RECEITAS", img: "https://i.imgur.com/2aJ1gSE.png" },
            ].map((bonus, i) => (
              <div key={i} className="bg-[#C1CBA3] p-4 rounded-2xl shadow-md">
                <img src={bonus.img} alt={bonus.title} className="w-full aspect-square object-cover rounded-xl mb-4" referrerPolicy="no-referrer" />
                <h3 className="font-black text-brand-green text-sm mb-1">{bonus.title}</h3>
                <p className="font-bold text-slate-700 text-xs mb-4">{bonus.sub}</p>
                <p className="text-[10px] line-through text-slate-500">R$29,90 HOJE É</p>
                <p className="font-black text-brand-green text-lg">GRÁTIS!</p>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBuy}
            className="w-full max-w-sm mx-auto bg-brand-green text-white font-black py-4 rounded-xl shadow-xl uppercase text-sm"
          >
            QUERO AS RECEITAS!
          </motion.button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="px-4 py-16 bg-brand-bg border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-xl font-black mb-6 text-slate-800 uppercase">
              ISSO ACONTECE <br /> COM VOCÊ?
            </h2>
            <div className="space-y-3 text-left max-w-xs mx-auto">
              {[
                "Preguiça de lavar e cortar salada todo dia.",
                "Joga salada fora antes de conseguir usar.",
                "Deixa de comer salada alguns dias da semana.",
                "Cansou de alface e tomate.",
                "Já come saudável, mas falha na salada."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <X className="text-red-500 w-4 h-4 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-black mb-12 text-slate-800 uppercase">
            ENTÃO VOCÊ PRECISA DISSO:
          </h2>

          <div className="bg-[#C1CBA3] p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="max-w-xs mx-auto">
              <div className="bg-white p-4 rounded-2xl shadow-lg mb-6">
                <img src="https://i.imgur.com/LzxS0Hn.png" alt="Product" className="w-full rounded-lg" referrerPolicy="no-referrer" />
              </div>
              
              <div className="space-y-2 text-xs font-bold text-brand-green mb-6 text-left">
                <p>+ 120 RECEITAS DE SALADAS</p>
                <p>+ RECEITAS DE MOLHOS</p>
                <p>+ 20 RECEITAS DE SMOOTHIES</p>
                <p>+ 5 RECEITAS DE SHOTS MATINAIS</p>
                <p>+ 15 RECEITAS DE ÁGUAS SABORIZADAS</p>
                <p>+ 1.000 AULAS SOBRE MARMITAS FIT + GASTRONOMIA FIT COM MATERIAIS COMPLETOS</p>
              </div>

              <div className="mb-6">
                <p className="text-xs line-through text-red-500 font-bold">De R$ 197,00 por</p>
                <p className="text-4xl font-black text-brand-green">por 6x de</p>
                <p className="text-6xl font-black text-brand-green">R$ 5,66</p>
                <p className="text-sm font-bold text-slate-700 mt-2">OU R$ 29,90 À VISTA</p>
              </div>

              <motion.a
                href="https://pay.kiwify.com.br/VjhBZdV"
                target="_blank"
                rel="noopener noreferrer"
                ref={buyButtonRef as any}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-brand-green text-white font-black py-4 rounded-xl shadow-xl uppercase text-lg mb-2 flex items-center justify-center"
              >
                COMPRAR AGORA!
              </motion.a>
              <p className="text-[10px] font-bold text-red-600 uppercase">** OFERTA EXPIRA HOJE **</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-brand-bg overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-sm font-bold text-center mb-12 text-slate-500 uppercase tracking-widest">
            Veja as mensagens que recebo quase todos os dias:
          </h2>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-4 px-4"
            animate={{
              x: [0, -1500],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden">
                <div className="p-3 border-b border-black/5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-brand-green">
                    {t.name[0]}
                  </div>
                  <div className="text-[10px] font-bold text-slate-700">{t.name}</div>
                </div>
                <img 
                  src={t.img} 
                  alt={`Depoimento ${t.name}`} 
                  className="w-full aspect-auto" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-brand-bg border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-12 text-slate-800 uppercase tracking-widest">
            DÚVIDAS FREQUENTES
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-bg text-center border-t border-black/5">
        <p className="text-[10px] text-slate-400 max-w-xs mx-auto leading-relaxed">
          © 2026 Emagrecendo de Verdade. Todos os direitos reservados. <br />
          Este site não é afiliado ao Facebook ou Google.
        </p>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5591980714500?text=oi%2C%20sua%20oferta%20me%20interessou"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute left-full ml-3 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Dúvidas? Fale comigo!
        </span>
      </motion.a>
    </div>
  );
}
