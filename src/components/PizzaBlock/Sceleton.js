import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f7ffe5"
        foregroundColor="#ffc2a8"
        {...props}
    >
        <circle cx="141" cy="129" r="123" />
        <rect x="14" y="324" rx="28" ry="28" width="236" height="51" />
        <rect x="18" y="405" rx="19" ry="19" width="111" height="45" />
        <rect x="145" y="403" rx="15" ry="15" width="111" height="45" />
        <rect x="0" y="264" rx="19" ry="19" width="280" height="35" />
    </ContentLoader>
)

export default Sceleton

