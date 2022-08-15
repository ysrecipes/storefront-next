import React from "react"
import { IconProps } from "types/icon"

const Separator: React.FC<IconProps> = () => {
  return (
    <svg
      width="274"
      height="24"
      viewBox="0 0 274 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="273.5"
        y="24"
        width="273"
        height="24"
        transform="rotate(-180 273.5 24)"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_113_339"
            transform="scale(0.00156986 0.0178571)"
          />
        </pattern>
        <image
          id="image0_113_339"
          width="637"
          height="56"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default Separator