export default function Portfolio() {
  return (
    <div id="blog-section">
      <h1> Portfolio</h1>
      <div
        className="flex w-full flex-col items-center justify-center gap-6"
        id="contact-section"
      >
        {Array(10)
          .fill(null)
          .map((el, i) => (
            <div
              key={i + 1}
              className="h-48 w-1/2 border border-red-600 bg-slate-400"
            >
              {`Portfolio ${i + 1}`}
            </div>
          ))}
      </div>
    </div>
  );
}
