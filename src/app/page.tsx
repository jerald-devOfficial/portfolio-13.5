import TransitionEffect from './components/TransitionEffect';

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      ></article>
    </>
  );
}
