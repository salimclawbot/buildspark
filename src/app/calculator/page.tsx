import CalculatorClient from "./CalculatorClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Revenue Calculator — BuildSpark",
  description:
    "See exactly how much revenue your business is leaving on the table every month. Free personalised breakdown in 30 seconds.",
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
