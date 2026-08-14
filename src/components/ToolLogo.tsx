"use client";

export default function ToolLogo({
  hostname,
  name,
}: {
  hostname: string;
  name: string;
}) {
  return (
    <img
      src={`https://logo.clearbit.com/${hostname}?size=120`}
      alt={`${name} logo`}
      className="h-16 w-16 flex-shrink-0 rounded-lg bg-white p-2 ring-1 ring-gray-200"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
      }}
    />
  );
}