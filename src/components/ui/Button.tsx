import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

const variants: Record<string, string> = {
  primary:
    "button-gold text-[#080808] active:scale-[0.98]",
  secondary:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] hover:border-[var(--accent-bright)] hover:bg-[var(--accent-soft)] active:scale-[0.98]",
  ghost: "text-[var(--accent-bright)] hover:text-[var(--text-primary)] px-2",
};

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
    >
      →
    </span>
  );
}

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", icon = false } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          {icon ? <Arrow /> : null}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon ? <Arrow /> : null}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {children}
      {icon ? <Arrow /> : null}
    </button>
  );
}
