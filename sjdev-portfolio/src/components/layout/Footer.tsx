import { PROFILE } from "../../data";
import { Pending } from "../common";

const Footer = () => (
  <footer className="border-t border-line bg-sunken/60">
    <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted">
        © 2026 {PROFILE.name} · {PROFILE.education.school}{" "}
        {PROFILE.education.major}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {PROFILE.links.github ? (
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
        ) : (
          <Pending label="GitHub 주소" />
        )}
        {PROFILE.links.blog ? (
          <a
            href={PROFILE.links.blog}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            Blog
          </a>
        ) : (
          <Pending label="블로그 주소" />
        )}
        {PROFILE.contact.email ? (
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            {PROFILE.contact.email}
          </a>
        ) : (
          <Pending label="이메일" />
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
