export const SqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" stroke="#00758F" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="#00758F" stroke="#00758F" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#00758F" fill="none" />
      <text
        x="12"
        y="13"
        fontFamily="sans-serif"
        fontSize="5"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        SQL
      </text>
    </svg>
  );