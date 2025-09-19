export const SqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
        <path d="M12 5C16.97 5 21 6.34 21 8V16C21 17.66 16.97 19 12 19C7.03 19 3 17.66 3 16V8C3 6.34 7.03 5 12 5Z" fill="#00758F"/>
        <path d="M21 8C21 9.66 16.97 11 12 11C7.03 11 3 9.66 3 8" stroke="#FFFFFF" strokeWidth="1.2"/>
        <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" stroke="#FFFFFF" strokeWidth="1.2"/>
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" />
        <path d="M3 8V16C3 17.66 7.03 19 12 19C16.97 19 21 17.66 21 16V8" fill="none" stroke="#00758F" strokeWidth="0.5"/>
        <text x="12" y="13.5" fontFamily="sans-serif" fontSize="5.5" fill="white" textAnchor="middle" fontWeight="bold">SQL</text>
    </svg>
  );