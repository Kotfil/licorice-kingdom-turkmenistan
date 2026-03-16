import type { CenteredSectionProps } from "./centered-section.types";

/**
 * Centered section block. Semantic <section> with one h2 for SEO and a11y.
 */
export function CenteredSection({
  id,
  title,
  children,
  className = "",
}: CenteredSectionProps) {
  return (
    <section
      id={id}
      className={`w-full px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12 xl:py-24 2xl:max-w-[2560px] 2xl:mx-auto ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id={`${id}-heading`}
          className="mb-6 text-xl font-semibold text-foreground sm:text-2xl md:mb-8 md:text-3xl"
        >
          {title}
        </h2>
        <div className="text-zinc-600 dark:text-zinc-400 [&_p]:mb-4 [&_p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </section>
  );
}
