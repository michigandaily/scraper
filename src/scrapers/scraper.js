import { pipe } from "piping-bag/lib/schema";

export const main = async () => {
  const payload = { data: "Hello world!" };
  await pipe(JSON.stringify(payload), ".json");
};

if (process.env.STAGE !== "production") {
  main();
}

