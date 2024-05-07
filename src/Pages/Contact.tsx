import workInProgress from "../assets/work-in-progress.png";

export default function Contact() {
  return (
    <div>
      <h1 className="ml-10 p-4 text-2xl font-semibold">Contact Page</h1>
      <hr />
      <div
        className="mt-4 flex flex-col items-center justify-center gap-6 pb-4 "
        id="contact-section"
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div
              key={i + 1}
              className="h-48 w-1/2 border border-gray-300 bg-slate-200"
            >
              <p className="text-center text-lg font-semibold">{`Contact ${i + 1}`}</p>
              <div className="m-3 flex w-full items-center justify-center">
                <img src={workInProgress} className="w-1/4" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
