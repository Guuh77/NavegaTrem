// src/app/(panel)/horarios/page.tsx
import Link from 'next/link';

export default function Horarios() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Consulta e Gestão de Horários
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Confira e administre os horários das linhas e transportes.
        </p>
      </header>

      <main>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Aqui você poderá visualizar os horários de partida e chegada
            para cada linha, filtrar por estação, dia da semana ou tipo de serviço.
            Também será possível adicionar novos horários, modificar existentes
            ou marcar horários especiais para feriados e eventos.
          </p>
          <div className="mt-6 border border-dashed border-gray-300 rounded-md p-8 text-center">
            <p className="text-gray-500">Tabela de horários e filtros aparecerão aqui...</p>
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