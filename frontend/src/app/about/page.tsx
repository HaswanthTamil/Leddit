// /app/about/page.tsx

const divClass =
  "flex flex-col shadow-md rounded-lg bg-gray-100 items-center px-8 py-20 my-5"
const h1Class = "text-2xl font-bold mb-4"
const pClass = "text-lg text-justify font-sans -tracking-tighter max-w-2xl"

const About = () => {
  return (
    <>
      <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden">
        <div className={divClass}>
          <h1 className={h1Class}>🧾 About</h1>
          <p className={pClass}>
            {`Leddit is a minimalist reimagination of Reddit — stripped down to
            the bare essentials, built for speed, simplicity, and vibes. Think
            of it as Reddit-lite, without the noise. This project isn't trying
            to compete, replace, or go viral. It's a passion-fueled playground —
            a personal challenge to blend design, auth, and backend magic into a
            single smooth experience. No investors. No ads. No nonsense. Just
            clean code and late-night commits. Consider it an open love letter
            to the dev grind — not a commercial product, but a canvas for
            learning and experimentation.`}
          </p>
        </div>
        <div className={divClass}>
          <h1 className={h1Class}>🛠️ Tech Stack</h1>
          <p className={pClass}>
            {`Next.js — for that blazing fast frontend + app router power | TailwindCSS — clean, responsive styles without the headache | Django — handling backend logic like a classy old wizard | Framer Motion — to make every click feel ✨ alive ✨ | Lucide React — beautiful open-source icons with a minimalist soul`}
          </p>
        </div>
        <div className={divClass}>
          <h1 className={h1Class}>🙋‍♂️ Who made this?</h1>
          <p className={pClass}>
            {`Just a passionate fullstack developer with a soft spot for frontend
            magic. Forever chasing clean UIs, buttery UX, and that sweet "aha"
            moment when everything just works.`}
          </p>
          <a
            href="mailto:haswanthtamil@gmail.com"
            className="p-3 rounded-lg shadow-md border-2 border-transparent hover:border-red-600 transition-all duration-600 ease-in-out"
          >
            Contact me!
          </a>
        </div>
      </div>
    </>
  )
}

export default About
