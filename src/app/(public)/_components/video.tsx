"use client"

import { Button } from "@/components/ui/button"

export default function Videos() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto*/}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Viva uma experiência única no transporte urbano
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Descubra uma nova forma de se locomover com mais praticidade, agilidade e inteligência. Tudo na palma da sua mão.
          </p>
            <Button
                size="lg"
                className="text-lg px-6 py-4 text-purple-700 bg-white hover:-translate-y-1 transition-transform duration-300">
                Comece agora
            </Button>
        </div>

        {/* Vídeo */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
            poster="/video-cover.jpg"
          >
            <source src="/video-trem.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </section>
  )
}
