import { component$ } from '@builder.io/qwik';
import styles from './navbar.module.scss';

export default component$(() => {
  return (
    <nav class={styles.nav}>
      <ul>
        <li>
          <a href='https://github.com/DouglasMai4' target='_blank'>
            GitHub
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/DouglasMai4' target='_blank'>
            LinkedIn
          </a>
        </li>
        <li>
          <a href='https://instagram.com/douglasmai4_sun' target='_blank'>
            Instagram
          </a>
        </li>
        <li>
          <a href='https://t.me/DouglasMai4' target='_blank'>
            Telegram
          </a>
        </li>
        <li>
          <a href='mailto:douglasmai4@protonmail.com' target='_blank'>
            Email
          </a>
        </li>
      </ul>
    </nav>
  );
});
