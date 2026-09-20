export type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};
