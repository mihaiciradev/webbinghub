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
      disableStyles
      containerClasses="wh-cookie"
      contentClasses="wh-cookie-content"
      buttonWrapperClasses="wh-cookie-actions"
      buttonClasses="wh-cookie-btn wh-cookie-accept"
      declineButtonClasses="wh-cookie-btn wh-cookie-decline"
      ariaAcceptLabel="Accept analytics cookies"
      ariaDeclineLabel="Decline analytics cookies"
    >
      <span className="wh-cookie-title">We use cookies</span>
      <span className="wh-cookie-text">
        This site uses analytics cookies to understand how it&apos;s used and to
        improve your experience. You can accept or decline.
      </span>
    </CookieConsent>
  );
}
