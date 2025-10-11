import React from 'react'

const LineGradient = () => {
    return (
        <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-[1px] h-32 md:h-48 lg:h-[250px] rounded-full z-10"
            style={{
                background: 'linear-gradient(to bottom, #006A4A 30%, rgba(0, 106, 74, 0.2) 80%, rgba(0, 106, 74, 0) 100%)',
            }}
        />
    )
}

export default LineGradient