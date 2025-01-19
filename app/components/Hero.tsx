export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[55vh] min-h-[450px] bg-sakiko-600">
      <div className="container flex items-center justify-between">
        <div>this is hero left</div>
        <div>{children}</div>
        <div>this is hero right</div>
      </div>
    </div>
  );
}
