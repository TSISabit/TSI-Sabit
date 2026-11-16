import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Terminal,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Trophy,
  Users,
  Eye,
  ExternalLink,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import {
  personalInfo,
  projectsList,
  cpAchievements,
  skillCategories,
  educationList,
  workExperienceList,
  leadershipList,
} from "@/data/portfolioData";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-indigo-50/70 via-white to-violet-50/60 py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-bold text-indigo-600 shadow-sm mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Available for Software Engineering & Full-Stack Roles
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              <p className="mt-4 text-xl font-bold text-slate-700 sm:text-2xl">
                {personalInfo.designation}
              </p>

              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-base leading-relaxed text-slate-600">
                Computer Science & Engineering undergraduate at{" "}
                <span className="font-semibold text-slate-900">BUBT</span>{" "}
                specializing in{" "}
                <span className="font-semibold text-indigo-600">
                  Next.js, React, TypeScript, Node.js, and MongoDB
                </span>
                . Passionate about crafting clean web applications and solving
                algorithmic challenges (960+ problems solved).
              </p>

              {/* Resume Download & View CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href={personalInfo.resumePath}
                  download="Tarik-Saidul-Islam-Sabit-Resume.pdf"
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:opacity-95 hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>

                {/* Opens Dedicated Resume Viewer Page (Avoids IDM Auto-Intercept) */}
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50/40"
                >
                  <Eye className="h-4 w-4 text-indigo-600" />
                  View Resume
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
                  Find me on:
                </span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.socials.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  title="Codeforces (TSI Sabit)"
                  className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <Terminal className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Profile Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 opacity-20 blur-2xl"></div>
                <div className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[440px] lg:w-[440px] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-slate-300/60">
                  <Image
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section
        id="about"
        className="py-24 bg-white border-b border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Get To Know Me
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              About <span className="text-indigo-600">Me</span>
            </h2>
            <p className="mt-3 text-slate-500">
              My journey from competitive programming to full-stack product
              engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8 space-y-5 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-7 sm:p-10 text-slate-600 leading-relaxed shadow-sm">
              <p className="text-lg font-bold text-slate-900">
                {personalInfo.about.intro}
              </p>
              <p>{personalInfo.about.journey}</p>
              <p>{personalInfo.about.workStyle}</p>
              <p>{personalInfo.about.hobbies}</p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-white p-7 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20 mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  960+ Solved
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  600+ problems on Codeforces (Max 1150) & 360+ on CodeChef (2★,
                  Max 1580).
                </p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-white p-7 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-md shadow-violet-600/20 mb-4">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Full-Stack Focus
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  End-to-end modern web development with Next.js, TypeScript,
                  Express, and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION (RIGHT AFTER ABOUT ME) */}
      <section
        id="projects"
        className="py-24 bg-slate-50 border-b border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Featured Work
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              My Recent <span className="text-indigo-600">Projects</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Full-stack web applications built with Next.js, TypeScript,
              Tailwind CSS, and modern authentication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsList.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 pt-5 border-t border-slate-100">
                    <Link
                      href={`/projects/${project.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition hover:opacity-95"
                    >
                      View More / Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPETITIVE PROGRAMMING EXPERIENCES */}
      <section id="cp" className="py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Algorithmic Problem Solving
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Competitive Programming{" "}
              <span className="text-indigo-600">Experiences</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Onsite contest standings, university honors, and online judge
              milestones.
            </p>
          </div>

          {/* Contest Standings Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
            {cpAchievements.contests.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  item.featured
                    ? "border-indigo-300 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/60 shadow-lg shadow-indigo-100"
                    : "border-slate-200/80 bg-slate-50/60 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-sm font-extrabold ${
                      item.featured
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-200/80 text-slate-800"
                    }`}
                  >
                    <Trophy className="h-4 w-4" />
                    {item.rank}
                  </span>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    {item.division}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  {item.contest}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {item.handle}
                </p>
                <p className="mt-3 text-xs font-bold text-indigo-600">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Online Judge Profile Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {cpAchievements.profiles.map((prof) => (
              <a
                key={prof.platform}
                href={prof.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 transition hover:border-indigo-300 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600">
                      {prof.platform}
                    </h4>
                    <span className="rounded-lg bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-700 border border-indigo-200">
                      @{prof.handle}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-slate-700">
                    {prof.rating} •{" "}
                    <span className="text-indigo-600">{prof.solved}</span>
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SKILLS SECTION */}
      <section
        id="skills"
        className="py-24 bg-slate-50 border-b border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Tech Stack & Expertise
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Technical <span className="text-indigo-600">Skills</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Categorized overview of my programming languages, frontend
              frameworks, and backend tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((group, idx) => (
              <div
                key={group.category}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:border-indigo-200"
              >
                <div className="mb-6 flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    {idx === 0 && <Cpu className="h-6 w-6" />}
                    {idx === 1 && <Code2 className="h-6 w-6" />}
                    {idx === 2 && <Database className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                    >
                      <div className="flex items-center justify-between text-sm mb-2.5">
                        <span className="font-bold text-slate-800">
                          {skill.name}
                        </span>
                        <span className="rounded-lg bg-indigo-100/80 px-2.5 py-0.5 text-xs font-bold text-indigo-700">
                          {skill.tag}
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EDUCATIONAL QUALIFICATION */}
      <section
        id="education"
        className="py-24 bg-white border-b border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Academic Journey
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Educational <span className="text-indigo-600">Qualification</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Academic background, university merit waivers, and academic
              milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {educationList.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50/50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-2xl bg-indigo-600 p-3 text-white shadow-md shadow-indigo-600/20">
                      <GraduationCap className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-indigo-600">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {edu.location}
                  </p>

                  <div className="mt-4 inline-block rounded-xl bg-white px-3.5 py-1.5 text-sm font-extrabold text-slate-800 border border-slate-200 shadow-xs">
                    {edu.grade}
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-600">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WORK EXPERIENCE */}
      <section
        id="experience"
        className="py-24 bg-slate-50 border-b border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Professional Internships
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Work <span className="text-indigo-600">Experience</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Industry internship roles in student advising, counseling, and
              sales operations.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {workExperienceList.map((exp) => (
              <div
                key={`${exp.role}-${exp.period}`}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm transition hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-indigo-600">
                        {exp.company}{" "}
                        <span className="font-medium text-slate-500">
                          • {exp.location}
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="self-start sm:self-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEADERSHIP & VOLUNTEERING EXPERIENCE */}
      <section
        id="leadership"
        className="py-24 bg-white border-b border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Community & Campus Roles
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Leadership <span className="text-indigo-600">Experience</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Student governance, campus ambassador roles, and international
              programming contest volunteering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadershipList.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50/60 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <Users className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-indigo-600">
                    {item.organization}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600 leading-relaxed">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GET IN TOUCH (CONTACT SECTION) */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Contact Me
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Get In <span className="text-indigo-600">Touch</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Have a project idea, internship opportunity, or question? Reach
              out directly!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Email Address
                  </p>
                  <p className="text-base font-bold text-slate-900 break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Phone Number
                  </p>
                  <p className="text-base font-bold text-slate-900">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    WhatsApp
                  </p>
                  <p className="text-base font-bold text-slate-900">
                    +880 1623-672660 (Chat Now)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Location
                  </p>
                  <p className="text-base font-bold text-slate-900">
                    {personalInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-lg shadow-slate-200/40">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                Send a Quick Message
              </h3>
              <form
                action={`mailto:${personalInfo.email}`}
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition hover:opacity-95"
                >
                  Send Email
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
