import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div
				className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
			>
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="bg-pattern bg-about"
				></div>
				<div className="md:w-3/5">
					<h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
						About
						<hr
							className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
						/>
					</h2>
					<p>
						I'm <span className="font-bold">Chethan D</span>, an enthusiastic and aspiring{" "}
						<span className="font-bold">Python Full Stack Developer</span> with a background in 
						Computer Science & Engineering. I graduated in 2025 from{" "}
						<span className="font-bold">East Point Institute of Technology, Bengaluru</span>, and have 
						since been building my skills and gaining real-world experience in software development.
					</p>
					<br />
					<p>
						Currently, I'm pursuing a comprehensive{" "}
						<span className="font-bold">Python Full Stack Development course</span> at{" "}
						<span className="font-bold">ITvedant Institute, Bangalore</span>, where I'm learning to 
						build complete web applications using both frontend and backend technologies. I successfully 
						completed a <span className="font-bold">Cloud Application Developer internship</span> at{" "}
						<span className="font-bold">Rooman Technologies, Bangalore</span>.
					</p>
					<br />
					<p>
						During my internship, I developed and deployed cloud-based applications using{" "}
						<span className="font-bold">AWS services</span> like EC2, S3, Lambda, and DynamoDB. 
						My technical skill set includes <span className="font-bold">HTML, CSS, JavaScript, Bootstrap</span>{" "}
						on the frontend, and <span className="font-bold">Python, Django, and MySQL/PostgreSQL</span>{" "}
						on the backend. I'm also comfortable working with REST APIs, Git, and version control systems.
					</p>
					<br />
					<p>
						I'm passionate about building <span className="font-bold">scalable and user-friendly applications</span>{" "}
						and continuously improving my development skills. I'm currently seeking entry-level opportunities 
						in Python Full Stack Development, backend engineering, or web application development where I can 
						grow, learn, and contribute meaningfully. Feel free to{" "}
						<a
							href="https://github.com/chethan012"
							target="_blank"
							rel="noopener noreferrer"
							className="font-bold text-teal-500 hover:underline"
						>
							view my work on GitHub
						</a>{" "}
						or{" "}
						<ScrollLink
							smooth={true}
							offset={-100}
							spy={true}
							to="contact"
							className="font-bold text-teal-500 cursor-pointer hover:underline"
						>
							get in touch!
						</ScrollLink>
					</p>
				</div>
				<div className="md:w-1/3">
					<img src={aboutImage} alt="Profile image" width={420} />
				</div>
			</div>
		</section>
	);
}

export default About;
