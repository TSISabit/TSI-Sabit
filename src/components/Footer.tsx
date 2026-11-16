import { Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xl font-extrabold text-slate-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-sm text-white">
              S
            </span>
            <span>
              Sabit<span className="text-indigo-600">.</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Building scalable web applications & solving algorithmic challenges.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <FaFacebook className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.socials.codeforces}
            target="_blank"
            rel="noreferrer"
            aria-label="Codeforces"
            className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Terminal className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 px-4 pt-6 text-center text-xs font-medium text-slate-400 sm:px-6 lg:px-8">
        © 2026 {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}