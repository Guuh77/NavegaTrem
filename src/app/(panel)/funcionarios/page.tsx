// src/app/(panel)/funcionarios/page.tsx
import Link from 'next/link';

export default function Funcionarios() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Gerenciamento de Funcionários
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Administre os dados e acessos dos funcionários.
        </p>
      </header>

      <main>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Esta seção permite o cadastro de novos funcionários, a edição de
            informações pessoais e profissionais, a definição de cargos e permissões de acesso
            ao sistema, e o acompanhamento de escalas ou atividades.
          </p>
          <div className="mt-6 border border-dashed border-gray-300 rounded-md p-8 text-center">
            <p className="text-gray-500">Lista de funcionários e ferramentas de gestão aparecerão aqui...</p>
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