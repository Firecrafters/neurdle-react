import type { KeyboardStatus } from "@/app/types/keyboard";

export interface State {
    rows: string[][],
    row: number;
    col: number;
    status: string[][],
    done: boolean,
    win: boolean,
    animating: boolean,
    keyboard: Record<string, KeyboardStatus>
}

export enum Mode { DAILY, RANDOM }