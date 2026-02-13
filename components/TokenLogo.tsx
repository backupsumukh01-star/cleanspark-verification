export default function TokenLogo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="CleanSpark Mining (CLSM)"
      width={32}
      height={32}
      className={className}
    />
  )
}
