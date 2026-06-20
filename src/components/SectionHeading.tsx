export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-walnut">{title}</h2>
      {description && (
        <p className="mt-3 text-walnut-soft text-sm md:text-base">{description}</p>
      )}
    </div>
  );
}
