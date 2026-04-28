import { useEffect, useState } from "react";
import { ChevronRight, Download, Code2, Zap, BookOpen, Cpu, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { modulesEnhanced, ModuleEnhanced } from "@/data/modulesEnhanced";

const FAB_SCROLL_THRESHOLD_PX = 140;

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<ModuleEnhanced | null>(null);
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [showFab, setShowFab] = useState(false);
  const [modulePickerOpen, setModulePickerOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const updateFab = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShowFab(y > FAB_SCROLL_THRESHOLD_PX);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateFab();
          ticking = false;
        });
      }
    };
    updateFab();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pickModuleFromFab = (module: ModuleEnhanced) => {
    setSelectedModule(module);
    setExpandedConcept(null);
    setModulePickerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="shrink-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-2">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-bold leading-tight text-white sm:text-2xl">
                Urban Informatics & Planning
              </h1>
              <p className="text-xs text-blue-300 sm:text-sm">3rd Semester Learning Guide</p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-2 sm:w-auto sm:justify-end sm:gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-blue-200">Complete Learning Guide</p>
              <p className="text-xs text-slate-400">All modules & concepts in PDF format</p>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}Urban_Informatics_3rd_Semester_Guide.pdf`}
              download
              title="Download full learning guide"
              aria-label="Download full learning guide"
              className="shrink-0"
            >
              <Button className="h-10 min-h-10 shrink-0 gap-2 whitespace-nowrap border-0 bg-gradient-to-r from-blue-600 to-cyan-600 px-2.5 py-2 text-sm text-white hover:from-blue-700 hover:to-cyan-700 sm:px-4 sm:text-base">
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                <span className="sm:hidden">Guide</span>
                <span className="hidden sm:inline">Download Full Guide</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {!selectedModule ? (
          <>
            {/* Hero Section */}
            <div className="mb-16">
              <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 backdrop-blur-sm sm:p-8">
                <h2 className="mb-4 text-2xl font-bold text-white sm:text-4xl">3rd Semester Modules</h2>
                <p className="mb-6 text-base text-blue-100 sm:text-lg">
                  A comprehensive learning guide covering all the key concepts, methodologies, and tools you'll master in your third semester. Click on any module to explore its detailed content.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-blue-300">
                    <Cpu className="w-4 h-4" />
                    <span>8 Core Modules</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Zap className="w-4 h-4" />
                    <span>Hands-on Learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-300">
                    <Code2 className="w-4 h-4" />
                    <span>Tools & Software</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modulesEnhanced.map((module) => (
                <div
                  key={module.code}
                  onClick={() => setSelectedModule(module)}
                  className="group cursor-pointer bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 hover:border-blue-400/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm font-mono text-blue-400 mb-1">{module.code}</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-2">{module.moduleDescription}</p>

                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-center text-xs font-semibold text-blue-300">
                      {module.credits} Credits
                    </span>
                    <span className="text-xs text-slate-400">{module.concepts.length} Concepts</span>
                  </div>

                  {module.tools && module.tools.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-blue-500/10">
                      <p className="text-xs text-slate-400 mb-2">Tools: {module.tools.slice(0, 2).map(t => t.name).join(", ")}{module.tools.length > 2 ? "..." : ""}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Module Detail View */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <Button
                type="button"
                title="Back to module list"
                onClick={() => {
                  setSelectedModule(null);
                  setExpandedConcept(null);
                }}
                variant="outline"
                className="w-fit min-h-10 gap-2 self-start border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
              >
                <ChevronRight className="h-4 w-4 shrink-0 rotate-180" aria-hidden />
                <span>Back</span>
                <span className="hidden sm:inline"> to Modules</span>
              </Button>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-blue-200">Complete Learning Guide</p>
                <p className="text-xs text-slate-400">All modules & concepts in PDF format</p>
              </div>
            </div>

            {/* Module Header */}
            <div className="mb-8 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 backdrop-blur-sm sm:p-8">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="mb-2 font-mono text-sm text-blue-400">{selectedModule.code}</p>
                  <h2 className="mb-2 text-2xl font-bold text-white sm:text-4xl">{selectedModule.title}</h2>
                  <p className="text-base text-blue-100 sm:text-lg">{selectedModule.moduleDescription}</p>
                </div>
                <div className="self-start sm:self-auto">
                  <div className="inline-block rounded-lg bg-blue-500/20 px-4 py-2 text-center font-semibold text-blue-300">
                    {selectedModule.credits} Credits
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Learning Objectives
                </h3>
                <ul className="space-y-3">
                  {selectedModule.learningObjectives.map((obj, idx) => (
                    <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                      <span className="text-cyan-400 font-bold flex-shrink-0">{idx + 1}.</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  Intended Outcomes
                </h3>
                <ul className="space-y-3">
                  {selectedModule.intendedOutcomes.map((outcome, idx) => (
                    <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                      <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Course Content</h3>
              <p className="text-slate-300 leading-relaxed">{selectedModule.courseContent}</p>
            </div>

            {/* Teaching Methods & Assessment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Teaching Methods</h3>
                <ul className="space-y-2">
                  {selectedModule.teachingMethods.map((method, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Assessment Strategy</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Continuous Assessment</span>
                    <span className="text-cyan-400 font-bold">{selectedModule.assessmentStrategy.continuous}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${selectedModule.assessmentStrategy.continuous}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-blue-500/10">
                    <span className="text-slate-300">Final Assessment</span>
                    <span className="text-blue-400 font-bold">{selectedModule.assessmentStrategy.final}%</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2">{selectedModule.assessmentStrategy.details}</p>
                </div>
              </div>
            </div>

            {/* Concepts */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Concepts & Topics</h3>
              <div className="space-y-4">
                {selectedModule.concepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 border border-blue-500/20 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedConcept(expandedConcept === concept.title ? null : concept.title)}
                      className="w-full p-6 flex items-start justify-between hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-left flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{concept.title}</h4>
                        <p className="text-slate-400 text-sm line-clamp-2">{concept.fullDescription}</p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-blue-400 flex-shrink-0 ml-4 transition-transform ${
                          expandedConcept === concept.title ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {expandedConcept === concept.title && (
                      <div className="px-6 pb-6 border-t border-blue-500/10">
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Full Description</h5>
                          <p className="text-slate-300 leading-relaxed">{concept.fullDescription}</p>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Key Points</h5>
                          <ul className="space-y-2">
                            {concept.keyPoints.map((point, pidx) => (
                              <li key={pidx} className="text-slate-300 text-sm flex gap-3">
                                <span className="text-cyan-400 font-bold flex-shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {concept.tools && concept.tools.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Tools & Software</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {concept.tools.map((tool, tidx) => (
                                <div key={tidx} className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                                  <p className="text-blue-300 font-semibold text-sm">{tool.name}</p>
                                  <p className="text-xs text-slate-400 mt-1">{tool.category}</p>
                                  <p className="text-xs text-slate-300 mt-2">{tool.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Software */}
            {selectedModule.tools && selectedModule.tools.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  Tools & Software
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedModule.tools.map((tool, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-5 hover:border-cyan-400/50 transition-colors">
                      <div className="flex items-start gap-3 mb-2">
                        <Code2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-white">{tool.name}</h4>
                          <p className="text-xs text-cyan-300">{tool.category}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended Reading */}
            {selectedModule.recommendedReading && selectedModule.recommendedReading.length > 0 && (
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Recommended Reading</h3>
                <ul className="space-y-3">
                  {selectedModule.recommendedReading.map((ref, idx) => (
                    <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                      <span className="text-blue-400 font-bold flex-shrink-0">{idx + 1}.</span>
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-950/50 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>Urban Informatics & Planning | 3rd Semester Learning Guide</p>
          <p className="mt-2 text-xs text-slate-500">Based on Official Student Handbook (2024-2028) | Department of Town & Country Planning, University of Moratuwa</p>
        </div>
      </footer>

      <Sheet open={modulePickerOpen} onOpenChange={setModulePickerOpen}>
        <SheetContent
          side="bottom"
          className="max-h-[85vh] border-blue-500/20 bg-slate-900 text-white [&_[data-slot=sheet-close]]:text-slate-300 [&_[data-slot=sheet-close]]:hover:text-white"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="text-white">Jump to module</SheetTitle>
            <SheetDescription className="text-slate-400">
              Open any module from the semester guide.
            </SheetDescription>
          </SheetHeader>
          <div className="flex max-h-[60vh] flex-col gap-2 overflow-y-auto px-1 pb-4">
            {modulesEnhanced.map((module) => {
              const isCurrent = selectedModule?.code === module.code;
              return (
                <button
                  key={module.code}
                  type="button"
                  onClick={() => pickModuleFromFab(module)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left transition-colors",
                    isCurrent
                      ? "border-cyan-400/60 bg-cyan-500/15"
                      : "border-blue-500/20 bg-slate-800/50 hover:border-blue-400/40 hover:bg-slate-800/80",
                  )}
                >
                  <p className="font-mono text-xs text-blue-400">{module.code}</p>
                  <p className="font-semibold text-white">{module.title}</p>
                </button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>

      {showFab && (
        <button
          type="button"
          onClick={() => setModulePickerOpen(true)}
          aria-label="Open module list"
          aria-expanded={modulePickerOpen}
          aria-haspopup="dialog"
          className="fixed right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-900/40 transition hover:from-blue-700 hover:to-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none"
          style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))" }}
        >
          <LayoutGrid className="h-6 w-6" aria-hidden />
        </button>
      )}
    </div>
  );
}
