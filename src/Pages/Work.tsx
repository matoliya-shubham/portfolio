export default function Work() {
  return (
    <div id="work-section">
      <h1> Work</h1>
      <div
        className="flex w-full flex-col items-center justify-center gap-6"
        id="contact-section"
      >
        {Array(10)
          .fill(null)
          .map((el, i) => (
            <div
              key={i + 1}
              className="h-48 w-1/2  border border-red-600 bg-slate-400"
            >
              {`Work ${i + 1}`}
            </div>
          ))}
      </div>
    </div>
  );
}
