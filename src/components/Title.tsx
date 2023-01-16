import React from "react";

interface ITitleProps {
  title: string;
}

export default function Title({ title }: ITitleProps) {
  return <title>{title} | CDH Projects</title>;
}
