import Titulo from "@/componentes/titulo";
import Botao from "@/componentes/botao";

export default function Home()
{
  return (
<div>
  <Titulo titulo="Titulo gerado pelo componente">   
  </Titulo>
  <Botao nomeBotao="Nome botão" linkBotao="/sobre">
  </Botao>
</div>
  );
}