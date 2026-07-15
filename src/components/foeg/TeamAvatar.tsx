const VARIANTS: Record<string, string> = {
  volt: "from-volt/40 via-volt/10 to-transparent",
  paper: "from-paper/25 via-paper/5 to-transparent",
};

export function TeamAvatar({
  initial,
  variant = "volt",
}: {
  initial: string;
  variant?: keyof typeof VARIANTS;
}) {
  return (
    <div className="relative aspect-square w-full max-w-[220px] bg-ink border border-divider rounded-md overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${VARIANTS[variant]}`} />
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border-r border-b border-paper/5" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-extrabold text-[5.5rem] text-paper/90 leading-none">
          {initial}
        </span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[9px] tracking-widest text-mute">
        <span>FOEG</span>
        <span className="text-volt">●</span>
      </div>
    </div>
  );
}
