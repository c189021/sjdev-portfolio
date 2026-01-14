// ============================================
// 📁 ProjectsSection Component
// 프로젝트 섹션
// ============================================

import { SectionWrapper, SectionTitle, Card, Badge, Button } from "../common";
import { PROJECTS } from "../../constants/data";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" fullHeight={false}>
      <SectionTitle
        title="Projects"
        subtitle="직접 기획하고 개발한 프로젝트들입니다"
      />

      <div className="space-y-8">
        {/* Featured Projects */}
        {PROJECTS.filter((p) => p.featured).map((project, index) => (
          <Card key={project.id} className="overflow-hidden group" glow>
            <div
              className={`grid lg:grid-cols-2 gap-6 lg:gap-8 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Thumbnail */}
              <div
                className={`relative aspect-video lg:aspect-auto lg:h-full min-h-[240px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/5 to-blue-500/5">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🚀</span>
                    <span className="text-slate-500 text-sm">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="emerald">{project.role}</Badge>
                    <span className="text-sm text-slate-500">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-4">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-emerald-400 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      onClick={() =>
                        window.open(project.links.github, "_blank")
                      }
                    >
                      GitHub
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="primary"
                      size="sm"
                      leftIcon={
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      }
                      onClick={() => window.open(project.links.demo, "_blank")}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Other Projects Grid */}
        {PROJECTS.filter((p) => !p.featured).length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-white mt-12 mb-6">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.filter((p) => !p.featured).map((project) => (
                <Card key={project.id} className="flex flex-col h-full" glow>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">📁</span>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs text-slate-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
