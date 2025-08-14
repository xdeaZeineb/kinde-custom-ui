"use server";
import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

export const Widget = (props) => {
  return (
    <main className="widget">
      <h2 className="widget-heading">{props.heading}</h2>
      {getKindeWidget()}
    </main>
  );
};
