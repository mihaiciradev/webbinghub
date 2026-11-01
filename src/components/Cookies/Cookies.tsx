"use client";
import CookieConsent from "react-cookie-consent";
import { CONSENT_ACCEPTED_EVENT } from "@/components/AdsTag/AdsTag";
import type { Translations } from "@/i18n/translations";

export default function Cookies({ t }: { t: Translations["cookies"] }) {
  return (
    <CookieConsent
      cookieName="CookieConsent"
      buttonText={t.accept}
      declineButtonText={t.decline}
      enableDeclineButton
      onAccept={() => window.dispatchEvent(new Event(CONSENT_ACCEPTED_EVENT))}
      onDecline={() => {}}
      disableStyles
      containerClasses="wh-cookie"
      contentClasses="wh-cookie-content"
      buttonWrapperClasses="wh-cookie-actions"
      buttonClasses="wh-cookie-btn wh-cookie-accept"
      declineButtonClasses="wh-cookie-btn wh-cookie-decline"
      ariaAcceptLabel={t.ariaAccept}
      ariaDeclineLabel={t.ariaDecline}
    >
      <span className="wh-cookie-title">{t.title}</span>
      <span className="wh-cookie-text">{t.text}</span>
    </CookieConsent>
  );
}
