type TimelineItemProps = {
  item: {
    year: string;
    title: string;
    description: string;
  };
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-cyan-400/10 bg-slate-950/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30">
      <span className="absolute right-5 top-5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">{item.year}</span>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm leading-7 text-slate-400">{item.description}</p>
      </div>
    </div>
  );
}
