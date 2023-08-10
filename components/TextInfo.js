import WithScrollFade from "./WithScrollFade";

function TextInfo() {
  return (
    <div className="card bg-light-cream p-6 rounded-lg shadow-lg mt-4 w-full sm:w-2/3 text-center mx-auto">
      <p className="mt-2 text-dark-green text-lg">
        Hi, I'm Braxton, a skilled software developer with a
        background in computer science, real estate, and civil engineering with a drive to solve real-world
        problems. Trained at UC Berkeley's Software Developer Bootcamp,
        I specialize in web technologies like HTML/CSS, JavaScript,
        React.js, and the MERN stack. My expertise extends to API design,
        data storage, user authentication, and deployment, while ensuring quality
        code and client satisfaction. As a collaborative and creative problem solver,
        I'm eager to bring my passion and skills to your next project.
      </p>
    </div>
  );
}

export default WithScrollFade(TextInfo);

