import { cn } from "@/lib/cn";

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
};

export function ProcessStep({ step, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="relative flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-brand-soft text-sm font-semibold text-brand">
          {step}
        </div>
        {!isLast ? (
          <div
            className="mt-3 hidden h-full min-h-[4rem] w-px flex-1 bg-gradient-to-b from-line-strong to-transparent sm:block"
            aria-hidden
          />
        ) : null}
      </div>
      <div className={cn("pb-10 sm:pb-12", isLast && "pb-0")}>
        <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
