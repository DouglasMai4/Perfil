import { component$ } from '@builder.io/qwik';
import styles from './about.module.css';

export default component$(() => {
  return (
    <div class={styles.stick}>
      <aside class={styles.aside}>
        <img src="https://github.com/DouglasMai4.png" alt="Douglas Maia" />
        <h1>Douglas Maia</h1>
        <h2>Desenvolvedor WEB - Full Stack</h2>

        <hr />

        <h3>Competencias</h3>

        <h4>Hard Skills</h4>
        <ul>
          <li>HTML, CSS, JavaScript - Avançado</li>
          <li>ReactJS, VueJS, NuxtJS, SvelteKit - Intermediário</li>
          <li>NodeJS, Deno - Intermediário</li>
          <li>Express - Intermediário</li>
          <li>Python - Intermediário</li>
          <li>Rust, C/C++ - Básico</li>
          <li>Metodologias Ágeis - Kanban, Scrum</li>
        </ul>

        <h4>Soft Skills</h4>
        <ul>
          <li>Comunicação</li>
          <li>Colaboração</li>
          <li>Criatividade</li>
          <li>Proatividade</li>
          <li>Foco</li>
        </ul>
      </aside>
    </div>
  )
})

