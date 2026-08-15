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
      src={`https://www.google.com/s2/favicons?domain=${hostname}&sz=256`}
      alt={`${name} logo`}
      className="h-16 w-16 flex-shrink-0 rounded-lg bg-white p-2 ring-1 ring-gray-200"
      loading="lazy"
      onError={(e) => {
        // 兜底：DuckDuckGo favicon 服务
        e.currentTarget.src = `https://icons.duckduckgo.com/ip3/${hostname}.ico`;
      }}
    />
  );
}
