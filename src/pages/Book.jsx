import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { services } from "../data/content.js";

export default function Book() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageHeader title="Book a Service" />
      <section className="section container narrow">
        {done ? (
          <p>Request received. We will call you to confirm.</p>
        ) : (
          <form className="form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input placeholder="Your name" required />
            <input placeholder="Phone" required />
            <select required defaultValue="">
              <option value="" disabled>Choose a service</option>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
            <input type="date" required />
            <button className="btn">Request booking</button>
          </form>
        )}
      </section>
    </>
  );
}
