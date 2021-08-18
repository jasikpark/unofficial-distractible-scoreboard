export interface Score {
  character: "Mark" | "Bob" | "Wade";
  score: number;
}

export interface Episode {
  episodeNumber: number;
  title: string;
  description: string;
  publishDate: string | Date;
  scores: Score[];
  [key: string]: any;
}

export const episodes: Episode[] = [
  {
    episodeNumber: 1,
    title: "Hair",
    description:
      "Today the guys discuss all things hair (and the lack there of)! They warn of the dangers of hair removal, explore the strange hair" +
      "trends of ancient Greek statues, and discuss sci-fi scenarios where the elite harvest hair and organs from the less fortunate.",
    publishDate: "2021-05-17",
    scores: [
      { character: "Mark", score: 1060 },
      { character: "Bob", score: 1050 },
      { character: "Wade", score: 1400 },
    ],
  },
  {
    episodeNumber: 2,
    title: "Body Odor",
    description:
      "Mark hosts while Wade and Bob one-up each other's concepts for eliminating body odor, debate the true number of human senses, " +
      "and remember nostalgic aromas.",
    publishDate: "2021-05-24",
    scores: [
      { character: "Bob", score: 15 },
      { character: "Wade", score: 10 },
    ],
  },
];

export default episodes;
