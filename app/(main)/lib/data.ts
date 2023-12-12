"use server"

import { Data } from "./types"
import { unstable_noStore as noStore } from "next/cache";

export async function getData(delay: number): Promise<Data[]> {
    noStore();

    return new Promise((resolve) => {
      setTimeout(() => {
        const data: Data[] = [];
        for (let i = 0; i < 2; i++) {
          const id = Math.random().toString(36).substring(2, 15);
          const value = Math.random().toString(36).substring(2, 15);
          const timestamp = new Date();
          data.push({ id, value, timestamp });
        }
        resolve(data);
      }, delay);
    });
}