import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ResumeViewerPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-xs transition hover:border-indigo-300 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download="Tarik-Saidul-Islam-Sabit-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition hover:opacity-95"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="border-b border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-between">
          <h1 className="text-base font-extrabold text-slate-900">
            Resume — {personalInfo.name}
          </h1>
          <span className="text-xs font-semibold text-slate-500">
            PDF Preview
          </span>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="h-[82vh] w-full bg-slate-100">
          <iframe
            src={`${personalInfo.resumePath}#toolbar=0`}
            className="h-full w-full border-0"
            title="Tarik Saidul Islam Sabit Resume"
          />
        </div>
      </div>
    </div>
  );
}