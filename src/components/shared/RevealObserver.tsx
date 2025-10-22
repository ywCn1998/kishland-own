"use client";

import { useEffect } from "react";
import { initReveal, RevealOptions } from "@/libs/initReveal";

type Props = { options?: RevealOptions };

export default function RevealObserver({ options }: Props) {
  useEffect(() => {
    const cleanup = initReveal(options);
    return cleanup;
  }, [options]);

  return null; // no UI
}
