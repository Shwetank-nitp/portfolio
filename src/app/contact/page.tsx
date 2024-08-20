"use client";

import { GlareCard } from "@/components/ui/glare-card";

export default function Contact() {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
      <div className="mt-11 rounded-lg shadow-lg">
        <GlareCard className="flex flex-col p-8 justify-center items-center">
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
        </GlareCard>
      </div>
    </div>
  );
}
