import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignment}`}>
        <h2 className="text-balance max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
