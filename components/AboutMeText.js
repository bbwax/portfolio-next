import WithScrollFade from "./WithScrollFade";
import Link from "next/link";

function TextInfo() {
    return (
        <div className="p-6">
            <div className="card bg-light-cream p-2 rounded-lg shadow-lg mt-4 w-full sm:w-2/3 text-start mx-auto">
                <div className="mt-2 text-dark-green text-lg">
                    <p className="mb-4 px-4">Some good questions to ask: who is Braxton and what does he do?</p>
                    <p className="mb-4 px-4">I live to build and create—from websites, to residential construction, to public infrastructure. This started at childhood, with my quest to use my building blocks to build a tower to the ceiling then later turned into a Degree in Civil Engineering from San Diego State University in 2020.</p>
                    <p className="mb-4 px-4">In 2020, I obtained a real estate license and started property management. This evolved into real estate development with the construction of an Accessory Dwelling Unit and the creation of Short-Term Rental Smart Homes.</p>
                    <p className="mb-4 px-4">In early 2022, I started a career at Caltrans as a Transportation Engineer creating construction plans and engineering reports.</p>
                    <p className="mb-4 px-4">In March 2023, I completed a 6-month Full Stack Coding Bootcamp from UC Berkeley to complete my passion of creating and building—both physically and digitally. </p>
                    <p className="mb-4 px-4">I believe that I am never done learning and will continue to learn, develop, and sharpen my knowledge. I have strong skills in project scoping, delivery, and completion. Continue reading below to get a deeper dive into my skills.</p>
                </div>
            </div>
        </div>
    );
}

export default WithScrollFade(TextInfo);