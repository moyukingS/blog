export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-taki-100 to-taki-200 dark:from-sakiko-900 dark:to-sakiko-950">
      <div className="container flex items-center justify-between">
        <div>{children}</div>
      </div>
    </div>
  );
}
