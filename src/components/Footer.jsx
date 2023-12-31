import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="pt-6">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
        <div>Copyright 2023 Osman Goni.</div>
        <div>
          <Link
            to="/Videos/1"
            target="_blank"
            rel="noreferrer"
          >
            YouTube Channel
          </Link>
        </div>
      </div>
    </section>
  );
}
