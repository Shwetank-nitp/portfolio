export default function Contact() {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="text-2xl font-bold text-gray-100 mb-4">
          Shwetank Rai
        </div>
        <div className="text-gray-100">
          <p>
            Email:{" "}
            <a
              href="mailto:shwetankrai93@gmail.com"
              className="text-blue-500 hover:underline"
            >
              shwetankrai93@gmail.com
            </a>
          </p>
          <p>
            Phone number:{" "}
            <a
              href="tel:+917007792391"
              className="text-blue-500 hover:underline"
            >
              +91 7007792391
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Shwetank-nitp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://github.com/Shwetank-nitp/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
