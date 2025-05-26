// src/app/(panel)/estacoes/page.tsx
"use client";

import { useState, useEffect, FormEvent } from 'react';
import { Estacao } from '@/types/api';
import { fetchTodasEstacoes, fetchEstacaoPorNome } from '@/services/estacaoService';
import { Button } from '@/components/ui/button';
export default function EstacoesPage() {
  // ... (todo o código do componente que forneci anteriormente) ...
  const [estacoes, setEstacoes] = useState<Estacao[]>([]);
  const [estacaoEncontrada, setEstacaoEncontrada] = useState<Estacao | null>(null);
  const [nomeBusca, setNomeBusca] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [buscaError, setBuscaError] = useState<string | null>(null);

  useEffect(() => {
    async function carregarEstacoes() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTodasEstacoes();
        setEstacoes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido ao carregar estações.');
      } finally {
        setIsLoading(false);
      }
    }
    carregarEstacoes();
  }, []);

  const handleBuscarEstacao = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!nomeBusca.trim()) {
      setBuscaError("Por favor, insira um nome para buscar.");
      setEstacaoEncontrada(null);
      return;
    }
    setIsLoading(true);
    setBuscaError(null);
    setEstacaoEncontrada(null);
    try {
      const data = await fetchEstacaoPorNome(nomeBusca);
      if (data) {
        setEstacaoEncontrada(data);
      } else {
        setBuscaError(`Estação "${nomeBusca}" não encontrada.`);
      }
    } catch (err) {
      setBuscaError(err instanceof Error ? err.message : 'Erro ao buscar estação.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && estacoes.length === 0 && !error && !buscaError) {
    return <div className="container mx-auto p-4">Carregando estações...</div>;
  }

  // ... (resto do JSX do componente que forneci) ...
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Gerenciamento de Estações (Consumindo API)
        </h1>
        {error && <p className="mt-2 text-red-500">Erro ao carregar lista: {error}</p>}
      </header>

      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Buscar Estação por Nome</h2>
        <form onSubmit={handleBuscarEstacao} className="flex gap-4 items-end">
          <div className="flex-grow">
            <label htmlFor="nomeBusca" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Estação
            </label>
            <input
              type="text"
              id="nomeBusca"
              value={nomeBusca}
              onChange={(e) => setNomeBusca(e.target.value)}
              placeholder="Digite o nome da estação"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <Button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={isLoading && nomeBusca.length > 0}
          >
            {isLoading && nomeBusca.length > 0 ? 'Buscando...' : 'Buscar'}
          </Button>
        </form>
        {buscaError && <p className="mt-2 text-sm text-red-600">{buscaError}</p>}
        {estacaoEncontrada && (
          <div className="mt-6 p-4 border border-green-300 bg-green-50 rounded-md">
            <h3 className="text-lg font-semibold text-green-800">{estacaoEncontrada.nome}</h3>
            <p className="text-sm text-gray-700">ID: {estacaoEncontrada.id}</p>
            <p className="text-sm text-gray-700">Localização: {estacaoEncontrada.localizacao}</p>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Todas as Estações</h2>
        {isLoading && estacoes.length === 0 && <p>Carregando lista...</p>}
        {!isLoading && estacoes.length === 0 && !error && <p className="text-gray-500">Nenhuma estação encontrada.</p>}
        {estacoes.length > 0 && (
          <ul className="space-y-4">
            {estacoes.map((estacao) => (
              <li key={estacao.id} className="p-4 border border-gray-200 rounded-md hover:shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{estacao.nome}</h3>
                <p className="text-sm text-gray-600">Localização: {estacao.localizacao}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}