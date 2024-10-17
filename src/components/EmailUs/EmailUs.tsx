"use client";
import { useState } from "react";
import styles from "./EmailUs.module.css";
import { FlexBox } from "../FlexBox";

export default function EmailUs() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setLoading(false);

      if (response.ok) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send email.");
      }
    } catch (error) {
      setLoading(false);
      setMessage("An error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FlexBox
          sx={{ flexDirection: "column", gap: ".5rem" }}
          className={`${styles.container} ${loading ? styles.loading : ""}`}
        >
          <label htmlFor="email">
            {!message ? "or... let us contact you!" : message}
          </label>
          {!message && (
            <>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Send</button>
              {message && <p>{message}</p>}
            </>
          )}
        </FlexBox>
      </form>
    </>
  );
}
