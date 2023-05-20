import Hero from '@components/hero';
import About from '@components/about';
import Projects from '@components/projects';

const Home = () => {
  return (
    <main>
      {/*  hero section start*/}
      <section>
        <Hero />
      </section>
      {/*    hero section end*/}
      {/*    about section start*/}
      <section id='about'>
        <About />
      </section>
      {/*    about section end*/}
      {/*    project start*/}
      <section id='projects'>
        <Projects />
      </section>
      {/*    project end*/}
    </main>
  );
};
export default Home;
