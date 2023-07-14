"use client";
import { useEffect } from "react";

export function BootstrapJsEnter() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
}
