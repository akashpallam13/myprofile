type SectionHeadingProps = {
  number: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-cyan-300/80">
        <span className="text-cyan-300">{number}</span>
        <span className="h-px flex-1 bg-slate-800/80" />
      </div>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{subtitle}</p>
    </div>
  );
}
