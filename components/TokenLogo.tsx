export default function TokenLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Clean spark / lightning bolt with subtle mining pick shape */}
      <circle cx="32" cy="32" r="30" fill="#16a34a" opacity="0.12" />
      <path
        d="M36 18L24 32h8l-4 14 12-16h-8L36 18z"
        fill="#16a34a"
        stroke="#15803d"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
