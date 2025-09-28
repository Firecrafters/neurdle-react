// TODO: Fix this file

import { ReactElement, useRef, useState } from "react";


export default function Keyboard() {
    const rowElements: ReactElement[] = [
        <div key={"r-1"} id="kb-row-1"></div>,
        <div key={"r-2"} id="kb-row-2"></div>,
        <div key={"r-3"} id="kb-row-3"></div>
    ];

    const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const [rowContents, setRowContents] = [useState<React.ReactNode | null>(null), useState<React.ReactNode | null>(null), useState<React.ReactNode | null>(null)];

    (function buildKeyboard(): void {
        const rows = [
            { el: rowElements[0], keys: "QWERTYUIOP".split("") },
            { el: rowElements[1], keys: "ASDFGHJKL".split("") },
            { el: rowElements[2], keys: ["ENTER", ..."ZXCVBNM".split(""), "BACKSPACE"] }
        ];

        for (const row of rows) {
            if (row.el && row.el.key) {
                const index = parseInt(row.el.key.split("-")[2]) - 1;
                if (rowRefs[index].current) {
                    rowRefs[index].current.innerHTML = "";
                }
            }

            for (const key of row.keys) {
                const button = document.createElement("button");
                button.className = "key" + ((key === "ENTER" || key === "BACKSPACE") ? " wide" : "");
                button.type = "button";
                button.setAttribute("data-key", key.length === 1 ? key : "");
                button.setAttribute("aria-label", key === "BACKSPACE" ? "Backspace" : (key === "ENTER" ? "Enter" : key));
                button.textContent = key === "BACKSPACE" ? "⌫" : (key === "ENTER" ? "Enter" : key);
                // button.addEventListener("click", (): void => handleKey(key));
                if (row.el && row.el.key) {
                    const index = parseInt(row.el.key.split("-")[2]) - 1;
                    if (rowRefs[index].current) {
                        rowRefs[index].current.appendChild(button);
                    }
                }
            }
        }
    })();

    return (
        <>
            { rowElements[0] },
            { rowElements[1] },
            { rowElements[2] }
        </>
    );
}
