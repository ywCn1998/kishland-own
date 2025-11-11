import { atom } from "jotai";

export const headerTitleAtom = atom<string>("");
export const headerBackIconAtom = atom<boolean>(true);
export const headerDateAtom = atom<string | null>();
export const headerLeftItemAtom = atom<any>()
