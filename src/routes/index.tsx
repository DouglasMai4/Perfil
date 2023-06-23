import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Douglas Maia</h1>
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
