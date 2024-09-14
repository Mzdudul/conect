import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Marquee from "@/components/magicui/marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {BadgeCheck} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonBuy from "./_components/button-buy";
import ButtonWant from "./_components/button-want";
import Header from "./_components/header";
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/1.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/2.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/3.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/4.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/5.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/6.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/7.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/8.png",
  },

  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/9.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/10.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/11.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/12.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "flex items-center justify-center w-64  cursor-pointer overflow-hidden "
      )}
    >
      <div className="flex flex-row items-center  mt-6 h-80">
        <Image
          className="rounded-3xl p-2 flex gap-3  "
          width={240}
          height={240}
          alt="filmes"
          src={img}
        />
      </div>
    </figure>
  );
};

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="w-full h-[800px] border-b-4 border-yellow-400 bg-zinc-900 bg-home bg-cover bg-center">
        <Header />
        <div className="flex flex-col md:lg:gap-10 items-center lg:mt-14 justify-center md:lg:flex-row-reverse ">
          <Image
            src="/dispositivos.png"
            alt="dispositivos"
            width={500}
            height={500}
          />
          <div className="text-center xl:-ml-28 md:pl-5 ">
            <h1 className="text-2xl text-center md:lg:text-start  md:lg:text-4xl md:-mt-16 text-yellow-400 font-light">
              NÃO PAGUE MAIS CARO{" "}
              <p className="text-white font-medium"> POR POUCO CONTEÚDO.</p>
            </h1>

            <p className="text-center md:lg:text-lg  mt-8 text-yellow-400 md:lg:text-start ">
              Mais de 2 mil canais abertos e fechados, <br /> direto no seu
              aparelho TVBOX em um único sistema!
            </p>
            <div className="md:lg:justify-start flex items-center justify-center">
              <Link href="/#quero">
                <ButtonBuy />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center flex-col">
        <h1 className=" text-yellow-400 text-center text-xl md:lg:text-3xl">
          POR QUE A CONECT É TÃO EFICIENTE?
        </h1>
        <h2 className="text-center mt-5 text-3xl">
          Veja o vídeo abaixo <br /> e entenda como funciona!
        </h2>
        <div className="flex items-center justify-center md:lg:w-1/3 mt-12 mb-12">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="/conect.mp4"
            thumbnailSrc="/tamb.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        <h2 className="text-center md:lg:text-3xl mt-5 text-2xl">
          Se você fosse pagar todas as plataformas
        </h2>
        <h2 className="text-2xl md:lg:text-3xl text-center text-yellow-400 font-medium">
          você pagaria mais de R$500 por mês.
        </h2>

        <h2 className="text-center md:lg:text-3xl mt-5 text-2xl">
          Com a CONECT você <br />{" "}
          <p className="text-2xl md:lg:text-3xl text-yellow-400 font-bold">
            pagará apenas R$19,90 o mês!!
          </p>
        </h2>

        <div className="md:lg:text-start mt-8  flex items-center justify-center">
          <Link href="/#quero">
            <ButtonBuy />
          </Link>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-10 items-center justify-center md:lg:flex-row-reverse">
            <Image
              src="/component.svg"
              alt="televisão"
              width={400}
              height={400}
            />
            <div>
              <h1 className="text-3xl text-center md:lg:text-start md:lg:gap-10">
                {" "}
                Assista no seu TVBOX
              </h1>

              <p className="text-center mt-6 md:lg:text-xl text-yellow-400 md:lg:text-start">
                A Conect oferece um aplicativo exclusivo, totalmente{" "}
                <br className="hidden md:lg:flex" />
                compatível com seu aparelho de TV Box. Com mais de 100.000{" "}
                <br className="hidden md:lg:flex" />
                conteúdos disponíveis, você pode assistir a todos os filmes,{" "}
                <br className="hidden md:lg:flex" />
                incluindo os lançamentos que estão atualmente nos cinemas.{" "}
                <br className="hidden md:lg:flex" />
              </p>
            </div>
          </div>
          <div className="mt-24">
            <h1 className="text-3xl text-center">
              FILMES E SÉRIES EM DESTAQUE
            </h1>
            <p className="text-center mt-6 md:lg:text-2xl">
              De lançamentos a antigos, aqui você encontra as mais aclamadas
              séries <br /> e filmes do momento, tudo que você procura em um
              único lugar!
            </p>
          </div>
          <div className="relative mt-14 flex h-[700px] w-screen flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none w-full absolute inset-y-0 left-0  "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0  "></div>
          </div>
          <div className="flex items-center justify-center mt-16">
            <Link href="/#quero">
              <ButtonBuy />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:lg:flex-row  gap-5 mt-24">
          <div className="flex flex-col bg-white p-7 rounded-2xl border-yellow-400 border-2">
            <h1 className="text-2xl text-black">Canais adultos 👿</h1>
            <p className="text-start mt-4 text-black">
              Toda a lista de canais adultos{" "}
              <br className="hidden md:lg:flex" /> protegido com senha para{" "}
              <br className="hidden md:lg:flex" /> bloqueio e segurança das{" "}
              <br className="hidden md:lg:flex" /> crianças.
            </p>
          </div>
          <div className="flex flex-col bg-white p-7 rounded-2xl border-yellow-400 border-2">
            <h1 className="text-2xl text-black">Canais infantis 🎈</h1>
            <p className="text-start mt-4 text-black">
              Toda a lista para a criançada se{" "}
              <br className="hidden md:lg:flex" /> divertir além de disney plus
              e <br className="hidden md:lg:flex" /> muito mais!
            </p>
          </div>
          <div className="flex flex-col bg-white p-7 rounded-2xl border-white border-2">
            <h1 className="text-2xl text-black ">Esportes ⚽</h1>
            <p className="text-start mt-4 text-black">
              Prepare-se para ter <br className="hidden md:lg:flex" />{" "}
              literalmente todos os acessos <br className="hidden md:lg:flex" />{" "}
              dos canais de esporte, futebol,{" "}
              <br className="hidden md:lg:flex" /> artes marciais e muito mais!
            </p>
          </div>
          <div className="flex flex-col bg-white p-7 rounded-2xl border-yellow-400 border-2">
            <h1 className="text-2xl text-black">Animes 🎮</h1>
            <p className="text-start mt-4 text-black">
              Possuímos uma lista enorme <br /> com todos os animes do <br />{" "}
              momento
            </p>
          </div>
        </div>
        <div
          id="quero"
          className="flex flex-col items-center justify-center xl:flex-row mt-28 gap-5"
        >
          <div className="bg-yellow-400/70 border-2  border-white rounded-3xl">
            <div className=" flex items-center flex-col">
              <div className="border-b-2 px-12 md:lg:px-16 border-white">
                <div className="flex items-center justify-center flex-col mt-5">
                  <h2 className="text-3xl font-semibold">PLANO</h2>
                  <h1 className="text-4xl font-bold">MENSAL</h1>
                </div>
                <p className="py-6 text-lg">
                  Sua programação do mês <br /> totalmente garantida, com <br />{" "}
                  qualidade e estabilidade!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex items-start gap-3 pt-3  justify-center">
                  <BadgeCheck color="green" />
                  <p>Mais de 60.000 conteúdos</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Qualidade SD/HD/FHD/4k</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Guia de Programação [EPG]</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Assista no TV Box</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Programação Adultos [Opcional]</p>
                </div>

                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Pacote Filmes e Série</p>
                </div>
                <h1 className="mt-10 text-4xl font-bold">R$ 19,90</h1>
              </div>
              <div className="flex items-center justify-center my-1 mb-10">
                <Link
                  href="https://app.monetizze.com.br/checkout/KDG391737"
                  target="_blank"
                >
                  <ButtonWant />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400/70 border-2  border-white rounded-3xl">
            <div className=" flex items-center flex-col">
              <div className="border-b-2 px-12 md:lg:px-16 border-white">
                <div className="flex items-center justify-center flex-col mt-5">
                  <h2 className="text-3xl font-semibold">PLANO</h2>
                  <h1 className="text-4xl font-bold">TRIMESTRAL</h1>
                </div>
                <p className="py-6 text-lg">
                  Sua programação do mês <br /> totalmente garantida, com <br />{" "}
                  qualidade e estabilidade!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex items-start gap-3 pt-3  justify-center">
                  <BadgeCheck color="green" />
                  <p>Mais de 60.000 conteúdos</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Qualidade SD/HD/FHD/4k</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Guia de Programação [EPG]</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Assista no TV Box</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Programação Adultos [Opcional]</p>
                </div>

                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Pacote Filmes e Série</p>
                </div>
                <h1 className="mt-10 text-4xl font-bold">R$ 39,90</h1>
              </div>
              <div className="flex items-center justify-center my-1 mb-10">
                <Link
                  href="https://app.monetizze.com.br/checkout/KDP391739"
                  target="_blank"
                >
                  <ButtonWant />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400/70 border-2  border-white rounded-3xl">
            <div className=" flex items-center flex-col">
              <div className="border-b-2 px-12 md:lg:px-16 border-white">
                <div className="flex items-center justify-center flex-col mt-5">
                  <h2 className="text-3xl font-semibold">PLANO</h2>
                  <h1 className="text-4xl font-bold">SEMESTRAL</h1>
                </div>
                <p className="py-6 text-lg">
                  Sua programação do mês <br /> totalmente garantida, com <br />{" "}
                  qualidade e estabilidade!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex items-start gap-3 pt-3  justify-center">
                  <BadgeCheck color="green" />
                  <p>Mais de 60.000 conteúdos</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Qualidade SD/HD/FHD/4k</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Guia de Programação [EPG]</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Assista no TV Box</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Programação Adultos [Opcional]</p>
                </div>

                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Pacote Filmes e Série</p>
                </div>
                <h1 className="mt-10 text-4xl font-bold">R$ 69,90</h1>
              </div>
              <div className="flex items-center justify-center my-1 mb-10">
                <Link
                  href="https://app.monetizze.com.br/checkout/KRJ391741"
                  target="_blank"
                >
                  <ButtonWant />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400/70 border-2  border-white rounded-3xl">
            <div className=" flex items-center flex-col">
              <div className="border-b-2 px-12 md:lg:px-16 border-white">
                <div className="flex items-center justify-center flex-col mt-5">
                  <h2 className="text-3xl font-semibold">PLANO</h2>
                  <h1 className="text-4xl font-bold">ANUAL</h1>
                </div>
                <p className="py-6 text-lg">
                  Sua programação do mês <br /> totalmente garantida, com <br />{" "}
                  qualidade e estabilidade!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex items-start gap-3 pt-3  justify-center">
                  <BadgeCheck color="green" />
                  <p>Mais de 60.000 conteúdos</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Qualidade SD/HD/FHD/4k</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Guia de Programação [EPG]</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Assista no TV Box</p>
                </div>
                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Programação Adultos [Opcional]</p>
                </div>

                <div className="flex items-center gap-3 pt-3 justify-center">
                  <BadgeCheck color="green" />
                  <p>Pacote Filmes e Série</p>
                </div>
                <h1 className="mt-10 text-4xl font-bold">R$ 129,90</h1>
              </div>
              <div className="flex items-center justify-center my-1 mb-10">
                <Link
                  href="https://app.monetizze.com.br/checkout/KXS391742"
                  target="_blank"
                >
                  <ButtonWant />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center mt-36">
        <h1 className="text-3xl text-center">
          Perguntas <br /> Frequentes
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-80 md:lg:w-4/6 mt-20 "
        >
          <AccordionItem value="item-1 " className="mt-3">
            <AccordionTrigger className="text-start bg-yellow-400/70 border-white border-2 rounded-xl p-3 ">
              PRECISA DE INTERNET PARA FUNCIONAR?
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              Sim, o App ConectTv precisa de internet para o seu funcionamento,{" "}
              <br />
              mas devido o sinal potencializado de nosso satélite próprio, uma{" "}
              <br />
              internet básica é mais que o suficiente para rodar videos 4k;
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2 " className="mt-3">
            <AccordionTrigger className="text-start bg-yellow-400/70 border-white border-2 rounded-xl p-3">
              PRECISA DE ESPECIALISTA PARA CONFIGURAR?
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              NÃO, nosso sistema é muito simples de instalar, ensinamos passo a{" "}
              <br />
              passo detalhado pra você conseguir acompanhar e colocar tudo para{" "}
              <br />
              funcionar. <br />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3 " className="mt-3">
            <AccordionTrigger className="text-start bg-yellow-400/70 border-white border-2 rounded-xl p-3">
              O PAGAMENTO É MENSAL?
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              Sim, nós trabalhamos com 3 planos 19,90 mensal 39,90 trimestral e{" "}
              <br />
              69,90 semestral, que é o mais econômico
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4 " className="mt-3">
            <AccordionTrigger className="text-start bg-yellow-400/70 border-white border-2 rounded-xl p-3">
              MORO EM ZONA RURAL, FUNCIONA PRA MIM?
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              Varia de cada região, pelo testes de alguns clientes libera em{" "}
              <br />
              média de 2.000 a 5.000 canais + de 25.000 filmes e séries e todos{" "}
              <br />
              os dias são adicionados filmes e séries novas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5 " className="mt-3">
            <AccordionTrigger className="text-start bg-yellow-400/70 border-white border-2 rounded-xl p-3">
              COMO VOU RECEBER?
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              Imediatamente! Após o pagamento ser confirmado, nossa plataforma{" "}
              <br />
              enviará no seu e-mail o acesso para a plataforma, e todos os{" "}
              <br />
              tutoriais de como usar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6 " className="mt-3">
            <AccordionTrigger className="text-start bg-yellow-400/70 border-white border-2 rounded-xl p-3">
              ESTOU COM DÚVIDAS, TEM SUPORTE?
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              Sim! Nós contamos com uma equipe grande de especialistas pronto{" "}
              <br />
              para te atender a qualquer momento, quando sua compra for efetuada{" "}
              <br />
              receberá o WhatsAPP para falar direto com nosso suporte!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-28">
        <h1 className="text-3xl text-center">
          Estou com dúvidas, <br /> quero o suporte!
        </h1>
        <div className="flex items-center justify-center mt-5">
          <Link
            href="https://api.whatsapp.com/send?phone=5541995433789&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%21"
            target="_blank"
          >
            <Button
              variant="outline"
              className="bg-yellow-400 border-none  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-xl md:lg:text-2xl flex items-center font-medium w-72  md:lg:w-80 hover:bg-yellow-400 h-14 mt-5 rounded-xl"
            >
              FALAR COM O SUPORTE!
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-28">
          <h1 className="text-3xl text-center">Formas de pagamento!</h1>
          <Image
            src="/formapay.webp"
            alt="pagamento"
            width={400}
            height={400}
            className="mt-14"
          />
        </div>
        <footer className="border mt-14 flex items-center justify-center text-center border-yellow-400 bg-yellow-400/10 p-7">
          <h1>
            ConectTV © 2024. Todos os direitos reservados.{" "}
            <br className="hidden md:lg:flex" /> Termos de Uso | Políticas de
            Privacidade
          </h1>
        </footer>
      </div>
    </div>
  );
}
