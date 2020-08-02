import React from 'react'

export default function MainContent({data, current}) {
    return (
        <Fade>
            {data[current] && data[current].content}
        </Fade>
    )
}
