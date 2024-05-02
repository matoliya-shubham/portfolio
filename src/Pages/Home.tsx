export default function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <div
        className="flex flex-col items-center justify-center gap-6 "
        id="contact-section"
      >
        {Array(10)
          .fill(null)
          .map((el, i) => (
            <div
              key={i + 1}
              className="h-48 w-1/2 border border-red-600 bg-slate-400"
            >
              {`Home ${i + 1}`}
            </div>
          ))}
      </div>
    </div>
  );
}
