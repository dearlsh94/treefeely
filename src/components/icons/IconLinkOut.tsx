interface IconLinkOutProps {
  size?: number | string
}
export default function IconLinkOut({ size = 24 }: IconLinkOutProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="var(--color-mono)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
      />
    </svg>
  )
}
