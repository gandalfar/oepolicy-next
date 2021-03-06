import React, { FunctionComponent } from "react";

interface IHero {
  background: "pink" | "orange";
}

const Hero: FunctionComponent<IHero> = ({ background, children }) => (
  <div
    className={[
      "hero",
      "text-blue",
      "leading-tight",
      "flex",
      "flex-col",
      "justify-center",
      background ? background : "orange",
    ].join(" ")}
  >
    <div className="container flex flex-col justify-center">{children}</div>
  </div>
);

export default Hero;
