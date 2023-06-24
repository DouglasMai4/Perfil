import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';
import Navbar from '~/components/starter/navbar/navbar';
import About from '~/components/starter/about/about';

import styles from './index.module.css';

export default component$(() => {
  return (
    <>
      <Hero />
      <Navbar />
      <About />

      <div class={styles.sectionContainer}>
        <section id="about" class={styles.section}>
          <h1>Sobre Mim</h1>

          <p>
            Me chamo Douglas Maia, tenho 18 anos.
            Atualmente estou estudando desenvolvimento WEB na Trybe, planejo fazer a faculdade de Ciência da Computação quando finalizar o curso.
            No momento não estou trabalhando mas pretendo começar logo.
            Minha paixão pela areá começou desde cedo, quando o meu pai comprou o meu primeiro computador, quando eu tinha por volta dos 14 anos. Eu acredito que eu tenha pego a curiosidade de criança, onde eu queria desmontar os meus brinquedos para ver como funcionavam, isso me fez ter muita curiosidade de como um computador funcionava, do porque quando eu clicava duas vezes no ícone de um app, ele abria.
            Isto me fez pesquisar sobre, assim eu descobri a programação.
            Na época eu não sabia muito bem o que eu queria, por isso não consegui realizar nenhum projeto, mas foi muito bom para mim está época porque foi nela em que eu aprendi a lógica de programação, naquela época eu havia estudado Python por conta de sua simplicidade na syntax, o tornando um ótima linguagem para se iniciar no mundo do desenvolvimento.
          </p>
        </section>

        <section id="formations" class={styles.section}>
          <h1>Formações</h1>

          <div class={styles.container}>
            <h2>IFSC - Canoinhas SC</h2>

            <h3>Manutenção e Suporte em Informática - Fev 2021 a Ago 2022</h3>
            <p>
              Este curso foi muito importante para mim, nele aprendi muito sobre informática em geral e desenvolvi melhor a minha parte social.
              Aprendi desde a desmontar e realizar a manutenção e computadores e celulares, até a configurar uma rede inteira de computadores, configurando os softwares e fazendo os cabos, foi um período muito divertido para mim.
              Foi neste curso em que eu acabei gostando de desenvolvimento web.
            </p>

            <h3>Inglês Básico - 40 horas</h3>
            <p>
              Este foi um projeto entre o IFSC e a minha escola.
              A ideia do projeto não era ensinar a lingua inglesa mas sim auxiliar as pessoas a aprenderem sozinhas.
              Graças ao projeto eu acabei perdendo o medo do inglês, eu comecei a consumir muito mais contêudo em outras linguas.
              Hoje eu consigo ler muito bem e a entender falas em inglês, mas preciso desenvolver melhor a minha fala.
            </p>
          </div>

          <div class={styles.container}>
            <h2>Curso em Vídeo - Remoto</h2>
            <h3>Python Mundo 1 && 2 - ~2018</h3>
            <p>
              Foi aqui onde comecei meus estudos na areá de desenvolvimento, isso ainda com 14 anos, aqui consegui aprender o básico da linguagem e tambem lógica de programação.
              Este foi um ótimo ponto de partida para mim.
            </p>
          </div>

          <div class={styles.container}>
            <h2>Trybe - Remoto</h2>
            <h3>JavaScript Básico - 40 hrs</h3>
            <p>
              Aqui foi onde minha jornada na Trybe se inicia, como eu já tinha experiência com outras linguagens acabei não aprendendo muita coisa nova, mas com certeza acabei dominando muito melhor a linguagem após este pequeno curso.
            </p>

            <h3>Desenvolvimento WEB Full Stack - Fev 2022 - Atualmente</h3>
            <p>
              O curso tem duração de 1 ano e estou no final do módulo de front-end (aproximadamente no meio do curso).
              Aqui estou aprendendo desde os fundamentos da web até back-end.
              Estou aprendendo e desenvolvendo minhas soft skills como comunicação, criatividade, colaboração, etc.
              Para mim é uma conquista muito grande conseguir entrar neste curso, é um dos meu maiores passos na área, pois aqui estou sendo preparado para o mercado de trabalho a cada dia de estudo.
              É uma formação muito densa e cansativa, porém o aprendizado que recebo é muito grande.
            </p>
          </div>
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Douglas Maia',
  meta: [
    {
      name: 'description',
      content: 'Meu site pessoal - Douglas Maia',
    },
  ],
};

