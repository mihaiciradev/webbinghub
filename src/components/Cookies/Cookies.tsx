"use client";
import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  return (
    <CookieConsent
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={() => {}}
      onDecline={() => {}}
    >
      This website uses cookies to enhance the user experience. By accepting,
      you agree to the use of analytics cookies.
    </CookieConsent>
  );
}
