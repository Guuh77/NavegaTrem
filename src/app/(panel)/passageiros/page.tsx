// src/app/(panel)/passageiros/page.tsx
import Link from 'next/link';

export default function Passageiros() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Gerenciamento de Passageiros
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Acompanhe informações e histórico dos passageiros.
        </p>
      </header>

      <main>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Nesta área, você poderá gerenciar os dados cadastrais dos passageiros,
            consultar histórico de viagens, tipos de bilhetes utilizados, programas de fidelidade
            (se aplicável) e outras informações relevantes para o atendimento e
            análise do perfil dos usuários.
          </p>
          <div className="mt-6 border border-dashed border-gray-300 rounded-md p-8 text-center">
            <p className="text-gray-500">Lista de passageiros e detalhes aparecerão aqui...</p>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <Link href="/" className="text-purple-600 hover:text-purple-800 hover:underline">
          ← Voltar para o Início
        </Link>
      </footer>
    </div>
  );
}