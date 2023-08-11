import WithScrollFade from "./WithScrollFade";
import Link from "next/link";

function TextInfo() {
  return (
    <div className="card bg-light-cream p-6 rounded-lg shadow-lg mt-4 w-full sm:w-2/3 text-center mx-auto">
      <p className="mt-2 text-dark-green text-lg">
        Hi, I'm Braxton, a skilled software developer with a
        background in computer science, real estate, and civil engineering with a drive to solve real-world
        problems. Trained at UC Berkeley's Software Developer Bootcamp and San Diego State University,
        I specialize in web technologies like HTML/CSS, JavaScript,
        React.js, Next.js, and <Link href='/about' className="font-bold">much more.</Link>
      </p>
    </div>
  );
}

export default WithScrollFade(TextInfo);

