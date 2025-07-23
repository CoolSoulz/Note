import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  // Add or remove 'dark' class on html element
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center p-6">
      <button
        onClick={() => setDark(!dark)}
        className="mb-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>

      <div className="max-w-xl w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md font-sans text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-semibold text-center text-blue-600 dark:text-blue-400 mb-6">
          Why You Should Buy Me a Glorious GMP 2 Mousepad
        </h1>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>Perfect Size:</strong> Big enough to fit my keyboard, mouse, and phone comfortably. Gives me plenty of space to move during gaming (especially for FPS games).
          </li>
          <li>
            <strong>High Quality:</strong> Stitched edges prevent curling or fraying. Thick rubber base grips the desk to keep it stable during use.
          </li>
          <li>
            <strong>Durable and Easy to Clean:</strong> Spill-resistant surface protects against accidental drinks. Easy to wipe clean and built to last.
          </li>
          <li>
            <strong>Good Value:</strong> Around $30, which is fair for a large, high-quality mousepad. Better than cheaper pads that curl or slide around.
          </li>
          <li>
            <strong>Improves Gaming & Work Setup:</strong> Smooth surface for precise mouse movements. Comfortable surface for daily computer use.
          </li>
        </ul>
      </div>
    </div>
  );
}
