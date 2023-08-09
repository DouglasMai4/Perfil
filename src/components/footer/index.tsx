import { component$ } from '@builder.io/qwik';
import styles from './footer.module.scss';

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <p>
        Este site foi criado utilizando{' '}
        <a href='https://qwik.builder.io/' target='_blank'>
          Qwik
        </a>
        ,{' '}
        <a href='https://sass-lang.com/' target='_blank'>
          Sass
        </a>{' '}
        e{' '}
        <a href='https://vitejs.dev/' target='_blank'>
          Vite
        </a>
      </p>

      <p>Todos os direitos reservados &#169; 2023</p>
    </footer>
  );
});
