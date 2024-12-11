

export const OnlinePresence = ()=>{
    return(
        <>
            <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="20 20 160 160"
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
    >
      <g>
        {/* Blue Circle Path */}
        <path
          fill="#1308FE"
          d="M180 80.527c0 33.428-27.099 60.527-60.527 60.527s-60.527-27.099-60.527-60.527S86.045 20 119.473 20 180 47.099 180 80.527z"
        />
        {/* Yellow Crescent Path */}
        <path
          fill="#FDD90B"
          d="M119.473 180c-26.57 0-51.55-10.347-70.338-29.135S20 107.097 20 80.527h17.501c0 45.199 36.773 81.972 81.972 81.972V180z"
        />
      </g>
    </svg>
        </>
    )
}