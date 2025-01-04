"use client";

import { useEffect, useState } from "react";

const CursorLight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="cursor-none "
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                width: "50px",
                height: "50px",
                background: "conic-gradient(from 2.35rad, #c76000, #071de480);",
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
            }}
        />
    );
};

export default CursorLight;
