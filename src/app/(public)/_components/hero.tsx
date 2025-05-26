import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-white py-12 px-4 md:py-20 md:px-12 overflow-hidden">
      
      {/* Fundo com mapa-múndi */}
      <img 
        src="/imagem-4-metro.jpg"
        alt="Mapa-múndi"
        className="absolute inset-3 w-full h-full opacity-25 z-0"
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Texto da Esquerda */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Uma aplicação que <span className="text-purple-700">facilita</span> <br />
            seu dia com <span className="text-gray-900">navegação inteligente</span>
          </h1>
          <p className="text-black-600 mb-6 max-w-md mx-auto lg:mx-0 text-lg">
            Otimize sua rotina com uma plataforma prática, rápida e intuitiva. 
            Projetada para oferecer uma experiência moderna e fluida em qualquer dispositivo.
          </p>
          <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Começar agora
          </Button>
        </div>

        {/* Grid de Imagens */}
        <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4 max-w-xl">
          {/* Imagem grande à esquerda */}
          <div className="col-span-2 row-span-2 h-[360px] rounded-lg overflow-hidden">
            <img 
              src="/imagem-1-metro.jpg" 
              alt="Imagem grande" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagem pequena 1 */}
          <div className="col-span-1 h-[170px] rounded-lg overflow-hidden">
            <img 
              src="/imagem-2-metro.jpg" 
              alt="Imagem pequena 1" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagem pequena 2 */}
          <div className="col-span-1 h-[170px] rounded-lg overflow-hidden">
            <img 
              src="/imagem-3-metro.jpg" 
              alt="Imagem pequena 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
