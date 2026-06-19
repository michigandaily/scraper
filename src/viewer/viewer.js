import { PipeClient } from "piping-bag/lib/api";

export const main = async () => {
  const client = await PipeClient.Init();
  client.listen("update", 5000, (data) => {
    console.log(data);
  });
};

if (process.env.STAGE !== "production") {
  main();
}
