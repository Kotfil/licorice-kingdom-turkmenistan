/** Props for a centered content section. */
export interface CenteredSectionProps {
  /** Section id for anchor links and accessibility. */
  id: string;
  /** Section heading (h2). */
  title: string;
  /** Section content. */
  children: React.ReactNode;
  /** Optional additional class names for the section. */
  className?: string;
}
