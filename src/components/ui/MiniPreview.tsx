import type { BuildPreview } from "@/lib/constants";

type PreviewVisual = Pick<BuildPreview, "kind" | "from" | "to">;

function Bar({ w, opacity = 0.08 }: { w: string; opacity?: number }) {
  return (
    <span
      className="block h-1.5 rounded-full bg-white"
      style={{ width: w, opacity }}
    />
  );
}

function MenuPreview({ from, to }: PreviewVisual) {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <Bar w="40%" opacity={0.14} />
        <span
          className="h-5 w-5 rounded-full"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        />
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg bg-white/[0.04] p-2"
        >
          <span
            className="h-7 w-7 shrink-0 rounded-md"
            style={{ background: `linear-gradient(135deg, ${from}22, ${to}33)` }}
          />
          <div className="flex-1 space-y-1">
            <Bar w="70%" opacity={0.12} />
            <Bar w="40%" opacity={0.07} />
          </div>
        </div>
      ))}
    </div>
  );
}

function GridPreview({ from, to }: PreviewVisual) {
  return (
    <div className="grid h-full grid-cols-3 gap-1.5 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-1.5 rounded-lg bg-white/[0.04] p-1.5"
        >
          <span
            className="aspect-square w-full rounded-md"
            style={{
              background: `linear-gradient(135deg, ${from}${i % 2 ? "26" : "1a"}, ${to}26)`,
            }}
          />
          <Bar w="80%" opacity={0.1} />
        </div>
      ))}
    </div>
  );
}

function ChartPreview({ from, to }: PreviewVisual) {
  const heights = [30, 55, 40, 70, 50, 85, 60];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <Bar w="35%" opacity={0.14} />
        <Bar w="18%" opacity={0.08} />
      </div>
      <div className="flex flex-1 items-end gap-1.5">
        {heights.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(180deg, ${from}, ${to})`,
              opacity: 0.75,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatPreview({ from, to }: PreviewVisual) {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="ml-auto max-w-[70%] rounded-xl rounded-tr-sm bg-white/[0.06] p-2">
        <Bar w="90px" opacity={0.14} />
      </div>
      <div
        className="max-w-[75%] rounded-xl rounded-tl-sm p-2"
        style={{ background: `linear-gradient(135deg, ${from}33, ${to}26)` }}
      >
        <Bar w="110px" opacity={0.22} />
        <div className="mt-1">
          <Bar w="60px" opacity={0.14} />
        </div>
      </div>
      <div className="ml-auto max-w-[55%] rounded-xl rounded-tr-sm bg-white/[0.06] p-2">
        <Bar w="60px" opacity={0.14} />
      </div>
    </div>
  );
}

function CardsPreview({ from, to }: PreviewVisual) {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <span
        className="h-16 w-full rounded-lg"
        style={{ background: `linear-gradient(120deg, ${from}26, ${to}1a)` }}
      />
      <div className="space-y-1.5">
        <Bar w="60%" opacity={0.14} />
        <Bar w="90%" opacity={0.08} />
        <Bar w="75%" opacity={0.08} />
      </div>
    </div>
  );
}

function ListPreview({ from, to }: PreviewVisual) {
  return (
    <div className="flex h-full flex-col gap-1.5 p-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2 py-2"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: i === 0 ? to : from }}
          />
          <Bar w={`${60 - i * 8}%`} opacity={0.1} />
          <Bar w="14%" opacity={0.06} />
        </div>
      ))}
    </div>
  );
}

function CalendarPreview({ from, to }: PreviewVisual) {
  return (
    <div className="grid h-full grid-cols-7 gap-1 p-4">
      {Array.from({ length: 21 }).map((_, i) => (
        <span
          key={i}
          className="aspect-square rounded-[4px]"
          style={{
            background:
              i === 9 || i === 15
                ? `linear-gradient(135deg, ${from}, ${to})`
                : "rgba(255,255,255,0.05)",
            opacity: i === 9 || i === 15 ? 0.8 : 1,
          }}
        />
      ))}
    </div>
  );
}

const RENDERERS: Record<PreviewVisual["kind"], (p: PreviewVisual) => React.JSX.Element> = {
  menu: MenuPreview,
  grid: GridPreview,
  chart: ChartPreview,
  chat: ChatPreview,
  cards: CardsPreview,
  list: ListPreview,
  calendar: CalendarPreview,
};

export default function MiniPreview(props: PreviewVisual) {
  const Renderer = RENDERERS[props.kind];
  return <Renderer {...props} />;
}
