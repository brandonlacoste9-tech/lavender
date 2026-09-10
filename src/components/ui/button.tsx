import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-colors duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg hover:bg-accent hover:text-accent-fg",
        accent:
          "bg-accent text-accent-fg hover:bg-fg",
        outline:
          "border border-border-strong bg-transparent text-fg hover:border-accent hover:text-accent",
        ghost: "bg-transparent text-fg hover:text-accent",
        inverse: "bg-bg text-fg hover:bg-elevated",
      },
      size: {
        sm: "h-10 rounded-sm px-4 text-xs uppercase tracking-[0.14em]",
        md: "h-11 rounded-sm px-5 text-xs uppercase tracking-[0.16em]",
        lg: "h-12 rounded-md px-7 text-xs uppercase tracking-[0.18em]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
