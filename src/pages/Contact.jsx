import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    console.log(form); // later: send to a backend or a form service
    setSent(true);
  };
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="section container narrow">
        {sent ? (
          <p>Thanks, {form.name}! We will reply soon.</p>
        ) : (
          <form onSubmit={submit} className="form">
            <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={update} required />
            <textarea name="message" rows="5" placeholder="Message" value={form.message} onChange={update} required />
            <button className="btn">Send</button>
          </form>
        )}
      </section>
    </>
  );
}
