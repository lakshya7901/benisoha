export default function FloatingTelegram() {
  return (
    <a
      href="https://t.me/benisoha"
      target="_blank"
      rel="noopener noreferrer"
      className="float-tg"
      aria-label="Chat on Telegram"
    >
      <div className="float-tg-ping" />
      {/* Telegram icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.944 2.506a1.5 1.5 0 00-1.54-.22L2.56 9.348a1.5 1.5 0 00.08 2.79l4.03 1.35 1.56 4.9a1.5 1.5 0 002.46.6l2.23-2.13 4.28 3.18a1.5 1.5 0 002.36-1.01l2.44-14.5a1.5 1.5 0 00-.06-1.02zM9.5 16.5l-.9-3.3 7.4-6.8-6.5 7.8v2.3z"
          fill="#f5d60c"
        />
      </svg>
    </a>
  );
}
