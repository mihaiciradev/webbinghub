"use client";
import { useState } from "react";
import styles from "./EmailUs.module.css";
import { FlexBox } from "../FlexBox";

export default function EmailUs({
  label,
  secondStyle,
}: {
  label: string;
  secondStyle?: boolean;
}) {
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
          className={`${styles.container} ${loading ? styles.loading : ""} ${
            secondStyle ? styles.secondStyle : ""
          }`}
        >
          <label htmlFor="email">{!message ? label : message}</label>
          {!message && (
            <>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FlexBox sx={{ gap: ".5rem" }}>
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent">
                  I consent to WebbingHUB using my email address to contact me.
                  <br />
                  Privacy policy can be found{" "}
                  <a
                    href="/privacy-policy"
                    style={{ color: "darkblue", textDecoration: "underline" }}
                  >
                    here
                  </a>
                  .
                </label>
              </FlexBox>
              <button type="submit">Send</button>
              {message && <p>{message}</p>}
            </>
          )}
        </FlexBox>
      </form>
    </>
  );
}
