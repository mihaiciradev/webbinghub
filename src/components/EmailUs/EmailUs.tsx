"use client";
import { useState } from "react";
import styles from "./EmailUs.module.css";
import { FlexBox } from "../FlexBox";

export default function EmailUs() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send email.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FlexBox
          sx={{ flexDirection: "column", gap: ".5rem" }}
          className={styles.container}
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
