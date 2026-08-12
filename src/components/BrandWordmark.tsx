const LABS_LETTERS = ["L", "A", "B", "S"];

export default function BrandWordmark({
  size = "base",
  tone = "dark",
}: {
  size?: "base" | "sm";
  tone?: "dark" | "light";
}) {
  const nameClass = size === "sm" ? "text-base" : "text-lg";
  const labsClass = size === "sm" ? "text-[0.5rem]" : "text-[0.55rem]";
  const nameColor = tone === "light" ? "text-white" : "text-navy-900";
  const accentColor = tone === "light" ? "text-red-500" : "text-red-600";
  const labsColor = tone === "light" ? "text-white/55" : "text-navy-900/45";

  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display ${nameClass} font-bold tracking-tight ${nameColor}`}
      >
        State<span className={accentColor}>Next</span>
      </span>
      <span
        className={`mt-1 flex w-full justify-between ${labsClass} font-semibold ${labsColor}`}
      >
        {LABS_LETTERS.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </span>
    </span>
  );
}
