import { component$, useSignal } from '@builder.io/qwik';
import { InFastArrowDown } from '@qwikest/icons/iconoir';

import styles from './hero.module.scss';

export default component$(() => {
  const words = useSignal(['Desenvolvedor WEB!']);
  const actualIndex = useSignal(0);

  return (
    <div class={['container', styles.hero]}>
      <h1>
        Olá! Me chamo <span>Douglas Maia</span>
      </h1>
      <h2>
        Sou um: <span>{words.value[actualIndex.value]}</span>
      </h2>

      <a href='#about' class={styles.icon}>
        <InFastArrowDown />
      </a>
    </div>
  );
});
