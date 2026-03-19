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
      className={`w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14 2xl:max-w-[2560px] 2xl:mx-auto ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-4xl rounded-xl bg-background/35 backdrop-blur-[1px] px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6">
        <h2
          id={`${id}-heading`}
          className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-200 sm:text-2xl md:mb-8 md:text-3xl"
        >
          {title}
        </h2>
        <div className="text-zinc-900 dark:text-zinc-300 text-[33px] sm:text-[39px] md:text-[45px] [&_p]:mb-4 [&_p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </section>
  );
}
