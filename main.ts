import { mkdirSync, writeFileSync } from "node:fs";

const CAP = "5-a-day cap";
const HIT_TIME = "10:24";
const VERB = "entered";
const EXTRA = "four more";
const SETUP = `Hit the ${CAP} by ${HIT_TIME}`;
const PUNCH = `then ${VERB} ${EXTRA} anyway`;
const LINE = `${SETUP}, ${PUNCH}.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
