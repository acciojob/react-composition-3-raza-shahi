import { useState } from "react"
import React from 'react'

const Tooltip = ({children, toolTipText}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    }
    const handleMouseLeave = () => {
        setShowTooltip(false);
    }

  return (
    <div className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={showTooltip ? 'tooltiptext' : 'hidden'}>
            {toolTipText}
        </span>
        {children}
    </div>
  )
}

export default Tooltip