import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects({ projects }) {
    rerturn (
        <section className = "section projects" id = "projects">
        <div classname="container">
        <h2 classname="section-title">projects</h2>
        <p className="section-subtitle">
        </p>

        <div className="projects-grid">
            {projects.map((project) =>(
                <ProjectCard key={project._id} project={project} />
            ))}
        </div>
        </div>
        </section>
    );
}