import React from "react";

const planos = [
  {
    titulo: "Plano Free",
    preco: "Grátis",
    beneficios: [
      "Acesso limitado às funcionalidades essenciais",
      "Compatível com dispositivos móveis e desktop",
      "Suporte básico via e-mail",
    ],
  },
  {
    titulo: "Promoção Mensal",
    preco: "R$ XX,XX/mês",
    beneficios: [
      "Todas as funcionalidades do NavegaTrem",
      "Suporte prioritário",
      "Acesso a futuras melhorias e atualizações",
    ],
  },
  {
    titulo: "Super Promoção Anual",
    preco: "R$ XX,XX/ano",
    beneficios: [
      "Tudo do plano mensal",
      "Benefícios exclusivos para assinantes anuais",
      "Acesso antecipado a novas funcionalidades",
    ],
  },
];

export default function Planos() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">🚀 Escolha o plano ideal para você!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planos.map((plano, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{plano.titulo}</h2>
            <p className="text-lg font-bold mt-2">{plano.preco}</p>
            <ul className="mt-4 text-left">
              {plano.beneficios.map((beneficio, i) => (
                <li key={i} className="text-sm">✅ {beneficio}</li>
              ))}
            </ul>
            <button className="mt-6 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900">
              Assinar Agora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
