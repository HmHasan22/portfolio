import React from "react";
import SkillCard from "@components/skillCard";
import Image from "next/image";

const About = () => {
  let skillSet = [
    {
      category: "Programming Languages",
      list: ["JavaScript", "Python", "HTML", "CSS"],
    },
    {
      category: "Javascript Frameworks",
      list: ["React", "Next.js"],
    },
    {
      category: "Content Management Systems",
      list: ["Sanity.io", "Firebase"],
    },
    {
      category: "Kurs og sertifiseringer",
      list: ["Scientific Computing with Python 50%"],
    },
  ];
  type title = {
    title: string;
  };
  const Title = ({ title }: title) => {
    return (
      <h2 className="uppercase font-kanit font-semibold text-2xl">{title}</h2>
    );
  };
  const AboutContent = () => {
    return (
      <div className={``}>
        <Title title="About" />
        <h3 className="text-[#FFB800] mb-7 font-kanit font-semibold text-3xl ">
          James Dasher
        </h3>
        <div className={`grid grid-cols-5 items-center`}>
          <Image
            src="/images/react.svg"
            alt="react"
            style={{ objectFit: "contain" }}
            height={54}
            width={54}
          />
          <Image
            src="/images/python.svg"
            alt="react"
            style={{ objectFit: "contain" }}
            height={54}
            width={54}
          />
          <Image
            src="/images/html.svg"
            alt="react"
            style={{ objectFit: "contain" }}
            height={54}
            width={54}
          />
          <Image
            src="/images/css.svg"
            alt="react"
            style={{ objectFit: "contain" }}
            height={54}
            width={54}
          />
          <Image
            src="/images/javascript.svg"
            style={{ objectFit: "contain" }}
            alt="react"
            height={54}
            width={54}
          />
        </div>
        <p className={`text-base mt-8 font-segio`}>
          Jeg er en frontend-utvikler med erfaring i Python og har tidligere
          jobbet som intern hos Kodeverket Bergen. Der var jeg med på å designe
          og utvikle nettsider ved hjelp av verktøy som Figma for design og
          React og Next JS for utrulling av nettsidene.
        </p>
        <p className={`text-base mt-5 font-segio`}>
          På fritiden liker jeg å jogge, gå på fjellturer med venner og å lese.
          Jeg har en lidenskap for å lære nye ting og eksperimentere med
          teknologi. For tiden lærer jeg Obsidian.md, slik at jeg kan lage mine
          egne plugins.
        </p>
        <p className={`text-base mt-5 font-segio`}>
          Jeg går nå gjennom ulike sertifiseringer gjennom FreeCodeCamp, blant
          annet i Responsive Web Design og Python, for å videreutvikle mine
          ferdigheter.
        </p>
      </div>
    );
  };
  return (
    <div className={`bg-[#011627]`}>
      <div className="container">
        <div className={`px-[180px] py-[96px] text-white`}>
          <div className={`grid gap-[50px] grid-cols-2`}>
            <AboutContent />
            <div>
              <div className="mb-7">
                <Title title="Skills" />
              </div>
              <div className={`flex flex-col gap-5`}>
                {skillSet.map((skill, index) => {
                  return (
                    <SkillCard
                      key={index}
                      category={skill.category}
                      list={skill.list}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;