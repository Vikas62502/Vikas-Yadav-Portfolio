"use client"
import AnimatedCursor from 'react-animated-cursor'

const CursorPointerAnimated = () => {
    return (
        <AnimatedCursor
            outerSize={45}
            innerSize={20}
            innerScale={1.1}
            innerStyle={{ background: "white" }}
            outerStyle={{ background: "#ed143d6e" }}
            outerAlpha={0.2}
            outerScale={1.1}
            clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
                ".btn",
            ]}
        />
    )
}

export default CursorPointerAnimated