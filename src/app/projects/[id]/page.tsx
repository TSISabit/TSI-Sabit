import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  AlertTriangle,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsList } from "@/data/portfolioData";

export function generateStaticParams() {
  return projectsList.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsList.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-14 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-xs transition hover:border-indigo-300 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Projects
        </Link>

        {/* Project Header Card */}
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
          <span className="inline-block rounded-full bg-indigo-50 border border-indigo-200 px-3.5 py-1 text-xs font-bold text-indigo-600 mb-3">
            Project Case Study
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg font-semibold text-indigo-600">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition hover:opacity-95"
            >
              <ExternalLink className="h-4 w-4" />
              Live Project Demo
            </a>
            <a
              href={project.githubClientLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50/50"
            >
              <FaGithub className="h-4 w-4" />
              GitHub Repository (Client)
            </a>
          </div>
        </div>

        {/* Hero Screenshot */}
        <div className="relative mb-10 h-64 sm:h-[440px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Main Content Grid */}
        <div className="space-y-8">
          {/* Tech Stack */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 mb-4">
              <Layers className="h-5 w-5 text-indigo-600" />
              Main Technology Stack Used
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Brief Description & Core Features */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">
              Project Overview
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>

            <h3 className="text-lg font-extrabold text-slate-900 mt-7 mb-4">
              Key Highlights
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-600 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Future Plans (Solid Light Cards) */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {/* Challenges Faced */}
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 shadow-sm">
              <div className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                Challenges Faced While Developing
              </div>
              <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Improvements & Future Plans */}
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-7 shadow-sm">
              <div className="flex items-center gap-2.5 text-lg font-extrabold text-slate-900 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Rocket className="h-5 w-5" />
                </span>
                Potential Improvements & Future Plans
              </div>
              <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {project.futurePlans.map((plan, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}