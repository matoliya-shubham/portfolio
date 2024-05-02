export default function Contact() {
  return (
    <div>
      <h1> Contact</h1>
      <div
        className="flex flex-col items-center justify-center gap-6 "
        id="contact-section"
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div
              key={i + 1}
              className="h-48 w-1/2 border border-red-600 bg-slate-400"
            >
              {`Contact ${i + 1}`}
            </div>
          ))}
      </div>
    </div>
  );
}
