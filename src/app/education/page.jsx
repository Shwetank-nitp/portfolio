"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <div>
      <MaskContainer
        revealText={
          <div>
            <h1 className="text-5xl font-bold my-11">Education</h1>

            <h2 className="text-xl font-semibold mt-4">Current Status</h2>
            <p className="mt-2">
              Currently pursuing a Bachelor of Technology at the National
              Institute of Technology, Patna.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Academic Background</h2>
            <p className="mt-2">
              Completed my schooling in 2022 under the ICSE board, achieving 93%
              marks.
            </p>
          </div>
        }
      >
        <div>
          <h1 className="text-5xl font-bold my-11" style={{ color: "#0ea5e9" }}>
            Education
          </h1>

          <h2
            className="text-4xl font-semibold my-4"
            style={{ textDecoration: "underline", marginBottom: ".5rem" }}
          >
            Current Status
          </h2>
          <p className="text-2xl" style={{ marginBottom: "1rem" }}>
            Currently pursuing a Bachelor of Technology at the
            <span style={{ color: "#f43f5e" }}>
              {" "}
              National Institute of Technology, Patna.
            </span>
          </p>

          <h2
            className="text-4xl font-semibold my-4"
            style={{ textDecoration: "underline", marginBottom: ".5rem" }}
          >
            Academic Background
          </h2>
          <p className="my-2 text-2xl">
            Completed my schooling in 2022 under the ICSE board, achieving{" "}
            <span style={{ color: "#f43f5e" }}> 93%.</span>
          </p>
        </div>
      </MaskContainer>
    </div>
  );
}
