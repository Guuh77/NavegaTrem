"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MapPin, Route } from "lucide-react";

const rotasData = [
  {
    id: 1,
    Icon: Route,
    iconClass: "text-blue-600",
    title: "Rota mais rápida",
    description:
      "Encontre a rota com menor tempo de deslocamento considerando o fluxo de passageiros e eventuais atrasos.",
  },
  {
    id: 2,
    Icon: MapPin,
    iconClass: "text-green-600",
    title: "Paradas estratégicas",
    description:
      "Visualize estações com melhor conexão entre linhas, menos lotação ou integração com outros modais.",
  },
  {
    id: 3,
    Icon: Route,
    iconClass: "text-purple-600",
    title: "Alertas em tempo real",
    description:
      "Receba notificações sobre alterações na linha, atrasos ou interrupções programadas para evitar imprevistos.",
  },
  {
    id: 4,
    Icon: MapPin,
    iconClass: "text-orange-500",
    title: "Recomendações personalizadas",
    description:
      "Baseado no seu histórico de uso, oferecemos rotas mais adequadas ao seu perfil e horário preferido.",
  },
];

export default function Rotas() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Rotas Inteligentes
      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Descubra os melhores caminhos com base no tráfego em tempo real, otimizando seu trajeto no transporte ferroviário com praticidade e rapidez.
      </p>

      <Carousel className="w-full">
        <CarouselContent className="gap-4">
          {rotasData.map(({ id, Icon, iconClass, title, description }) => (
            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 p-2">
              <Card className="shadow-xl rounded-2xl p-4 h-full">
                <CardContent className="flex items-start gap-4">
                  <Icon className={`w-10 h-10 ${iconClass}`} />
                  <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* BOTÃO PARA PAGINA DE ROTAS */}
      <div className="text-center mt-10">
        <Link
          href="/panel/page.tsx"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Ver todas as rotas
        </Link>
      </div>
    </div>
  );
}
