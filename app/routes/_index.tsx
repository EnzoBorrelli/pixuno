import type { MetaFunction } from "@remix-run/node";
import Game from "~/components/game";

export const meta: MetaFunction = () => {
  return [
    { title: "pixUNO - the pixelart UNO™" },
    { name: "description", content: "A pixelart UNO™-based card game, amde by Endy Kaishi®" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col gap-4 h-screen items-center justify-center">
      <Game/>
    </main>
  );
}
