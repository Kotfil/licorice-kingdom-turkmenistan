import type { HeaderProps } from "./header.types";

/**
 * Site header with nav. Semantic <header> for accessibility and SEO.
 */
export function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={`w-full border-b border-zinc-200 bg-background px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[2560px] 2xl:mx-auto dark:border-zinc-800 ${className}`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="text-lg font-semibold text-foreground sm:text-xl">
          Licorice Kingdom
        </a>
        <nav aria-label="Main navigation" className="flex gap-4 sm:gap-6">
          <a
            href="#section-1"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
          >
            Section 1
          </a>
          <a
            href="#section-2"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
          >
            Section 2
          </a>
        </nav>
      </div>
    </header>
  );
}
