import {useEffect, useRef} from "react";

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;


export default function Cursor() {
    const interactiveRef = useRef(null);

    useEffect(() => {
        function move() {
            curX += (tgX - curX) / 14;
            curY += (tgY - curY) / 14;

            interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(() => {move();})
        }

        function setTgs(e) {
            tgX = e.clientX;
            tgY = e.clientY;
        }

        document.addEventListener('mousemove', e => {
            setTgs(e)
        });

        move()

        return () => {
            document.removeEventListener('mousemove', setTgs);
        };
    }, []);

    return (
        // eslint-disable-next-line react/style-prop-object
        <div className={'interactive absolute -top-2.5 -left-2.5 w-5 h-5 bg-black/50  border-white shadow-lg rounded-full'} style={{pointerEvents: "none"}} ref={interactiveRef}></div>
    )
}