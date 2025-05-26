"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const comentarios = [
  {
    nome: "Ana Souza",
    cargo: "Analista de Marketing",
    texto: "O app transformou minha rotina. Chegar no horário nunca foi tão fácil!",
    foto: "/ana.jpg",
  },
  {
    nome: "Carlos Lima",
    cargo: "Desenvolvedor Frontend",
    texto: "Rápido, funcional e confiável. As rotas em tempo real me impressionaram.",
    foto: "/carlos.jpg",
  },
  {
    nome: "Juliana Ferreira",
    cargo: "Professora Universitária",
    texto: "Finalmente um app de transporte que pensa no usuário. Recomendo demais!",
    foto: "/juliana.jpg",
  },
  {
    nome: "Mateus Rocha",
    cargo: "Estudante de Engenharia",
    texto: "Simples, bonito e muito útil no dia a dia.",
    foto: "/matheus.jpg",
  },
]

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          O que dizem <span className="text-purple-700">sobre</span> nós
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {comentarios.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full px-4 md:px-8 flex justify-center"
                >
                  <div className="bg-white rounded-2xl shadow p-8 max-w-xl w-full text-center">
                    <div className="flex flex-col items-center gap-4">
                      <Image
                        src={item.foto}
                        alt={item.nome}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.nome}
                        </h3>
                        <p className="text-sm text-gray-500">{item.cargo}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base mt-6 italic leading-relaxed">
                      “{item.texto}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <Button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2"
            size="icon"
            variant="ghost"
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2"
            size="icon"
            variant="ghost"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
