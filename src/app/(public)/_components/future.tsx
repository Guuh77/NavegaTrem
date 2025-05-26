"use client";

// React não é estritamente necessário importar aqui se não usar hooks como useState, useEffect, useRef
// import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const funcionalidades = [
  {
    titulo: "Estações",
    desc: "Consulte informações detalhadas sobre cada estação da nossa rede.",
    link: "/Estacoes",
    iconSrc: "/icons/station.png",
  },
  {
    titulo: "Horários",
    desc: "Acesse os horários atualizados de partida e chegada para todas as linhas.",
    link: "/horarios",
    iconSrc: "/icons/schedule.png",
  },
  {
    titulo: "Rotas",
    desc: "Planeje sua viagem visualizando todas as rotas e conexões disponíveis.",
    link: "/rotas",
    iconSrc: "/icons/route.png",
  },
  {
    titulo: "Funcionários",
    desc: "Gerencie informações e escalas da equipe de forma eficiente.",
    link: "/funcionarios",
    iconSrc: "/icons/employee.png",
  },
  {
    titulo: "Passageiros",
    desc: "Acompanhe dados e histórico de viagens dos passageiros.",
    link: "/passageiros",
    iconSrc: "/icons/passenger.png",
  },
];

export default function Feature() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Funcionalidades que <span className="text-purple-700">facilitam</span> sua gestão
        </h2>

        <Carousel
          // A prop 'plugins' foi removida
          opts={{
            align: "start",
            loop: true, // Mantido: o carrossel ainda pode dar a volta manualmente
          }}
          className="relative w-full"
        >
          <CarouselContent className="flex -ml-4">
            {funcionalidades.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-1 h-full">
                  <Link href={item.link} legacyBehavior={false} className="h-full block">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer flex flex-col">
                      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                        <div className="relative w-20 h-20 mb-4">
                          <Image
                            src={item.iconSrc}
                            alt={`Ícone de ${item.titulo}`}
                            layout="fill"
                            objectFit="contain"
                            priority={index < 3}
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-25px] sm:left-[-40px] top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-[-25px] sm:right-[-40px] top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}