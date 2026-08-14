export default function Footer() {
  return (
    <footer className="bg-paperDeep py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ink/70">
        <span className="font-display text-ink text-base font-semibold">MRL Travels</span>
        <span>© {new Date().getFullYear()} MRL Tours and Travels — All Right Reserved.</span>
      </div>
    </footer>
  );
}
