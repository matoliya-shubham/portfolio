export default function Resume() {
  return (
    <div id="resume-section">
      <h1> Resume</h1>
      <div
        className="flex w-full flex-col items-center justify-center gap-6"
        id="contact-section"
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div
              key={i + 1}
              className="h-48 w-1/2 border border-red-600 bg-slate-400"
            >
              {`Resume ${i + 1}`}
            </div>
          ))}
      </div>
    </div>
  );
}
