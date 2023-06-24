import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { RequestHandler } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';
import Navbar from '~/components/starter/navbar/navbar';
import About from '~/components/starter/about/about';

import styles from './layout.module.css';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Hero />
      <Navbar />

      <div class={styles.flex}>
        <About />

        <main class={styles.main}>
          <Slot />
        </main>
      </div>
    </>
  );
});
