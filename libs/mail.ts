import axios from "axios";

interface Mail {
  email: string;
  message: string;
}

export const mail = async (data: Mail): Promise<any> => {
  return axios
    .post(`https://formspree.io/f/${process.env.NEXT_PUBLIC_API_KEY}` as string, data)
    .then((response) => {
      return new Promise<any>((resolve) => {
        return resolve(response.data as any);
      });
    });
};
