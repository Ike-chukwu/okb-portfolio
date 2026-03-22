"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectScope: string;
};

type WorkItem = {
  title: string;
  category: string;
  summary: string;
  videoSrc: string;
  previewSrc: string;
};

const expertise = [
  "Brand campaigns",
  "Event coverage",
  "Social content",
] as const;

const serviceLines = [
  {
    title: "Creative direction",
    description:
      "Concept support, visual direction, and a stronger point of view before production starts.",
  },
  {
    title: "Video production",
    description:
      "Clean, cinematic footage for brands, events, and promotional work.",
  },
  {
    title: "Editing",
    description:
      "Polished final cuts built for presentation, marketing, and social distribution.",
  },
] as const;

const workItems: WorkItem[] = [
  {
    title: "Sneaker Ball",
    category: "Event recap",
    summary:
      "A social event piece focused on atmosphere, crowd energy, and premium finishing.",
    videoSrc: "/videos/Sneaker Ball by David Ukeje .mp4",
    previewSrc: "/gifs/sneaker-ball.gif",
  },
  {
    title: "DSU Basketball",
    category: "Sports feature",
    summary:
      "A fast, structured edit designed to match movement, rhythm, and competitive energy.",
    videoSrc: "/videos/Copy of DSU BASKETBALL.mp4",
    previewSrc: "/gifs/dsu-basketball.gif",
  },
  {
    title: "Barber",
    category: "Brand storytelling",
    summary:
      "A tighter commercial tone built to elevate a personal brand with stronger mood and polish.",
    videoSrc: "/videos/BARBER.mp4",
    previewSrc: "/gifs/barber.gif",
  },
  {
    title: "Scraped the Plate x DSU Aviation",
    category: "Promo film",
    summary:
      "A vertical piece designed for attention on mobile with clear pacing and strong framing.",
    videoSrc: "/videos/Scraped the Plate x DSU Aviation .mp4",
    previewSrc: "/gifs/dsu-aviation.gif",
  },
  {
    title: "Veronica's Pizza Promo",
    category: "Restaurant campaign",
    summary:
      "A food-led promotional cut with a clean commercial look and stronger brand presentation.",
    videoSrc: "/videos/Veronica's Pizza Promo.mp4",
    previewSrc: "/gifs/veronicas-pizza.gif",
  },
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);
  const autoplay = useRef(
    Autoplay({
      delay: 3200,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current],
  );

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    autoplay.current.play();

    return () => {
      autoplay.current.stop();
    };
  }, [emblaApi]);

  const { register, handleSubmit, reset } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectScope: "",
    },
  });

  useEffect(() => {
    if (activeVideo === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const onSubmit = handleSubmit((values) => {
    console.log(values);
    reset();
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  };

  return (
    <>
      <section
        id="home"
        className="relative isolate overflow-hidden text-white"
      >
        <video
          src="/videos/bg-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.82),rgba(8,8,8,0.56)_52%,rgba(8,8,8,0.78))]" />

        <div className="mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-6xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/55 sm:text-sm">
              Videographer · Editor · Creative
            </p>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.94] text-white sm:text-6xl lg:text-7xl">
              Professional visuals that help brands, events, and campaigns look established.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              I create clean, cinematic video work with a strong editorial finish. The focus is clarity, polish, and visuals that present the subject with confidence.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="#work"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/88"
              >
                View work
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/18 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Start a project
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/78 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface overflow-hidden rounded-[2rem] p-3 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
              <Image
                src="/okb.jpeg"
                alt="Portrait of OKB"
                width={900}
                height={1100}
                priority
                className="h-[420px] w-full object-cover sm:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Based in Delaware
                </p>
                <p className="font-display mt-3 max-w-sm text-3xl leading-tight text-white sm:text-4xl">
                  Focused on visuals that feel sharp, credible, and finished.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule py-16 sm:py-20" id="work">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-black/45 sm:text-sm">
                Selected Work
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-black sm:text-5xl">
                A professional selection of finished work.
              </h2>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-black/68 sm:text-lg">
                The carousel loops continuously and each piece opens into a video modal so the work stays front and center.
              </p>
              <div className="flex items-center gap-3 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={scrollPrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-black transition hover:bg-black hover:text-white"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-black transition hover:bg-black hover:text-white"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {workItems.map((item) => (
                <div
                  key={item.videoSrc}
                  className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_72%] lg:flex-[0_0_52%]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="group relative block w-full overflow-hidden rounded-[1.8rem] border border-black/10 bg-black text-left shadow-[0_22px_60px_rgba(18,18,18,0.14)] transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    <div className="relative h-[300px] w-full sm:h-[360px]">
                      <Image
                        src={item.previewSrc}
                        alt={item.title + " animated preview"}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 72vw, 52vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-sm">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                        <Play size={12} />
                        Play
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="font-display text-3xl text-white sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-7 text-white/72 sm:text-base">
                        {item.summary}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule py-16 sm:py-20" id="about">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-black/45 sm:text-sm">
              About
            </p>
            <h2 className="font-display mt-4 max-w-xl text-4xl leading-tight text-black sm:text-5xl">
              Professional work is usually the result of restraint.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="max-w-2xl text-base leading-8 text-black/68 sm:text-lg">
              I work with brands, organizations, and events that need visuals with polish and structure. The process is simple: understand the brief, capture the strongest material, and deliver an edit that feels confident and finished.
            </p>

            <div className="grid gap-5 sm:grid-cols-3">
              {serviceLines.map((service) => (
                <article
                  key={service.title}
                  className="surface rounded-[1.6rem] p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                    Service
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/68 sm:text-base">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule py-16 sm:py-20" id="contact">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] bg-black px-7 py-8 text-white sm:px-8 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45 sm:text-sm">
              Contact
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Available for selected projects.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/72 sm:text-lg">
              If you need brand visuals, event coverage, or a cleaner final edit, send over the details and I will get back to you.
            </p>
          </div>

          <form
            className="surface grid gap-5 rounded-[2rem] p-6 sm:p-8"
            onSubmit={onSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-black/72">
                First name
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-black"
                  placeholder="Enter your first name"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-black/72">
                Last name
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-black"
                  placeholder="Enter your last name"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-black/72">
                Email
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-black"
                  placeholder="Enter your email"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-black/72">
                Phone
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-black"
                  placeholder="Enter your phone number"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-black/72">
              Brief project scope
              <textarea
                {...register("projectScope", { required: true })}
                placeholder="Share the project type, deliverables, timeline, and any references"
                rows={6}
                className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-black"
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/85"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-6xl rounded-[2rem] bg-[#0d0d0d] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex flex-col gap-4 px-2 py-1 sm:flex-row sm:items-start sm:justify-between sm:px-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                  {activeVideo.category}
                </p>
                <h3
                  id="video-modal-title"
                  className="font-display mt-3 text-3xl text-white sm:text-4xl"
                >
                  {activeVideo.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                  {activeVideo.summary}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <video
              key={activeVideo.videoSrc}
              src={activeVideo.videoSrc}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full rounded-[1.5rem] bg-black"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
