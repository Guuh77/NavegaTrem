
import Coments from "./_components/coments";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import FAQ from "./_components/perguntas";
import Planos from "./_components/planos";
import Videos from "./_components/video";
import Footer from "./_components/footer";
import Feature from "./_components/future";
import Rotas from "../(panel)/rotas/page";
import Horarios from "../(panel)/horarios/page";
import Estacoes from "../(panel)/estacoes/page";
import Funcionarios from "../(panel)/funcionarios/page";


export default function Page() {
  return(
    <div className="pt-[88px]">
      <Header/>
      <Hero/>
      <Feature/>
      <Videos/>
      <Rotas/>
      <Horarios/>
      <Estacoes/>
      <Funcionarios/>
      <Coments/>
      <Planos/>
      <FAQ/>
      <Footer/>
    </div>
  )
}