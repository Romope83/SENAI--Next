'use client';
import Link from "next/link";

export default function Botao({nomeBotao,linkBotao,funcaoBotao}:{nomeBotao:string,linkBotao:string,funcaoBotao?:()=>void}){
      console.log("Link renderizado no cliente");
    return (
        <Link href={linkBotao} onClick={funcaoBotao}>{nomeBotao}</Link>
    );
}