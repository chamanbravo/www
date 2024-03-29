import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="A developer with love for code, craft and overall visual wellness."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col gap-[2rem] max-w-[500px] my-[4rem]">
        <h1 className="text-4xl text-[#fff] font-thin text-opacity-90">
          My name is Chaman Bravo, I’m a frontend developer working and living
          in Nepal.
        </h1>
        <p className="text-[#fff] text-lg text-opacity-80">
          I was born in Neapl and studied graphic design at the Gerrit Rietveld
          Academie in Amsterdam. I have worked in branding and web design
          studios as a digital artist and art director. I believe that the
          success of a project is based on good collaboration.
        </p>

        <div className="flex gap-[2rem]">
          <a
            href="https://twitter.com/bravo_chaman"
            className="text-[#fff] text-[1rem] hover:text-opacity-60"
          >
            twitter
          </a>
          <a
            href="https://github.com/chamanbravo"
            className="text-[#fff] text-[1rem] hover:text-opacity-60"
          >
            github
          </a>
          <a
            href="mailto:chamanpro9@gmail.com"
            className="text-[#fff] text-[1rem] hover:text-opacity-60"
          >
            chamanpro9@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
