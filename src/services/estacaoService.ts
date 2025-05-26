// src/services/estacaoService.ts
import { Estacao } from '@/types/api';

// src/services/estacaoService.ts
console.log('API BASE URL FROM ENV:', process.env.NEXT_PUBLIC_API_BASE_URL); // Adicione esta linha


const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/estacoes`;
console.log('API URL:', API_URL); // Adicione esta linha

console.log('API URL:', API_URL); // Adicione esta linha

export async function fetchTodasEstacoes(): Promise<Estacao[]> {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
        if (response.status === 204) {
            return [];
        }
        throw new Error(`Erro na API: ${response.statusText} (Status: ${response.status})`);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
        return await response.json();
        } else {
        return [];
        }
    } catch (error) {
        console.error("Falha ao buscar todas as estações:", error);
        throw error;                        
    }
}

export async function fetchEstacaoPorNome(nome: string): Promise<Estacao | null> {

  if (!nome.trim()) {
    return null;
  }
  try {
    const response = await fetch(`${API_URL}/${encodeURIComponent(nome)}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Erro na API: ${response.statusText} (Status: ${response.status})`);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Falha ao buscar estação por nome "${nome}":`, error);
    throw error;
  }
}