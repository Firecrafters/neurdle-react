import type { State } from "@/app/types/game";
import { KeyboardStatus } from "@/app/types/keyboard";

export function updateKeyboard(guess: string, statuses: string[], wordLength: number, state: State): void {
    const rank: Record<KeyboardStatus, number> = { "absent": 0, "present": 1, "correct": 2 };

    for (let letter = 0; letter < wordLength; letter++) {
        const ch = guess[letter] as string;
        const s = statuses[parseInt(ch)] as KeyboardStatus;
        const prev = state.keyboard[ch];

        if (!prev || rank[s] > rank[prev]) {
            state.keyboard[ch] = s;
        }
    }

    const keys = document.querySelectorAll(".key[data-key]") as NodeListOf<HTMLButtonElement>;
    keys.forEach((key: HTMLButtonElement): void => {
        const char = key.getAttribute("data-key");
        if (char === null || char === "") return;

        key.classList.remove("correct", "present", "absent");
        const status = state.keyboard[char];
        if (status) {
            key.classList.add(status);
        }
    });
}

