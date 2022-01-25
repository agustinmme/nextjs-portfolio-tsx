import axios from "axios";
import Papa from "papaparse";

import {IProject} from "../types";

export const list = async (): Promise<IProject[]> => {
  return axios
    .get(process.env.NEXT_PUBLIC_GOOGLE_SHEET as string, {
      responseType: "blob",
    })
    .then((response) => {
      return new Promise<IProject[]>((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            const response = results.data as IProject[];

            return resolve(response);
          },
          error: (error) => reject(error.message),
        });
      });
    });
};

export const selectById = async (id: string): Promise<IProject[]> => {
  return axios
    .get(process.env.NEXT_PUBLIC_GOOGLE_SHEET as string, {
      responseType: "blob",
    })
    .then((response) => {
      return new Promise<IProject[]>((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            const response = results.data as IProject[];

            return resolve(response.filter((project) => project.id === id));
          },
          error: (error) => reject(error.message),
        });
      });
    });
};
