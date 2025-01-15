type LineParams = {
  width?: number;
  height: number;
  from: string;
  to: string;
  delay?: number;
};
export default function Line(props: LineParams) {
  const { width = 2, height, from, to, delay = 3 } = props;

  return (
    <div
      className="relative rotate-45 overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full translate-y-full rounded-full bg-gradient-to-b from-${from} to-${to} animate-scroll_line`}
        style={{
          animationDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}
