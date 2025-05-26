"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const perguntas = [
  {
    pergunta: "Quais funcionalidades o plano Free oferece?",
    resposta:
      "O plano Free oferece acesso a funcionalidades básicas em dispositivos móveis e desktop, sem custo. Ideal para testar antes de migrar para um plano Premium.",
  },
  {
    pergunta: "Como assino um plano?",
    resposta:
      "Clique em 'Assinar Agora' no plano desejado, preencha seus dados de pagamento e pronto! A assinatura é ativada imediatamente.",
  },
  {
    pergunta: "Posso cancelar minha assinatura a qualquer momento?",
    resposta:
      "Sim. No plano mensal, cancele antes da próxima cobrança sem penalidades. No plano anual, a assinatura permanece ativa até o término do período contratado e não há reembolso proporcional.",
  },
  {
    pergunta: "O que inclui a promoção anual?",
    resposta:
      "A promoção anual inclui todas as funcionalidades do plano mensal, além de benefícios exclusivos: acesso antecipado a novas ferramentas e descontos especiais em renovações.",
  },
  {
    pergunta: "Como contato o suporte?",
    resposta:
      "Nosso suporte está disponível por e-mail e chat 24/7. Clientes Premium têm atendimento prioritário e resposta mais rápida.",
  },
];

export default function FAQCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">❓ Perguntas Frequentes</h1>
      <Slider {...settings}>
        {perguntas.map((item, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold">{item.pergunta}</h2>
            <p className="text-gray-700 mt-2">{item.resposta}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
