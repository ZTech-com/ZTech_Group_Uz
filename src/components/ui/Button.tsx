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
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

const variants: Record<string, string> = {
  primary:
    "bg-[var(--text-primary)] text-[#07080a] hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_-5px_rgba(124,155,255,0.5)] active:scale-[0.97]",
  secondary:
    "bg-white/[0.04] text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.97]",
  ghost:
    "text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-4",
};

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
    >
      →
    </span>
  );
}

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", icon = true } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          {icon && <Arrow />}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon && <Arrow />}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
      {icon && <Arrow />}
    </button>
  );
}
