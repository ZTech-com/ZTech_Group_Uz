import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--text-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-balance max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
