import { Text } from "@pixi/react";
import { TextStyle } from "pixi.js";

export default function DeckLabel({ text }: { text: string }) {
  const textFormatted = text.slice(0, 2).toUpperCase() + " " + text.slice(2);
  const textDisplayed = text === "player" ? text.toUpperCase() : textFormatted;
  const textStyle = (color: string) =>
    new TextStyle({
      fontFamily: "VT323",
      fontSize: 32,
      fill: color,
      align: "center",
    });
  return <Text text={textDisplayed} x={0} y={110} style={textStyle("white")} />;
}
