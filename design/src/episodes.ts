export type Character = "Mark" | "Bob" | "Wade";

// Describes a change in score for a character
export interface Score {
  character: Character;
  score: number;
}

// Describes a scorechange at a certain time, that might change multiple character's scores.
export interface Timestamp {
  time: string | Date;
  scores: Score | Score[];
  reason: string;
}

export interface Episode {
  episodeNumber: number;
  title: string;
  titles?: { character: Character; title: string }[];
  description?: string;
  host?: Character;
  publishDate?: string | Date;
  timestamps?: Timestamp[];
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
    host: "Wade",
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
  {
    episodeNumber: 6,
    title: "Supernatural",
    host: "Mark",
    titles: [
      {
        character: "Bob",
        title: "Seasons don't fear the Reaper, they fear the titties.",
      },
      { character: "Wade", title: "Millford Chainsaw Massacre." },
    ],
    timestamps: [
      {
        time: "05:22",
        scores: {
          score: 1,
          character: "Bob",
        },
        reason: "for sucking better",
      },
      {
        time: "18:59",
        scores: {
          score: 1,
          character: "Bob",
        },
        reason: "Flabbergasted Phantasim",
      },
      {
        time: "24:43",
        scores: { score: 6, character: "Bob" },
        reason: "Content",
      },
      {
        time: "38:10",
        scores: {
          score: 1,
          character: "Wade",
        },
        reason: " A Walk to forget. (Title)",
      },
      {
        time: "46:44",
        scores: { score: -2, character: "Wade" },
        reason: "Story Fiction",
      },
      {
        time: "51:03",
        scores: [
          { score: 8, character: "Wade" },
          { score: -8, character: "Bob" },
        ],
        reason: "Wade Announced Winner & given Wade All Bob's points.",
      },
    ],
    scores: [
      { character: "Wade", score: 7 },
      { character: "Bob", score: 0 },
    ],
  },
  {
    episodeNumber: 7,
    title: "Bob's Fridge",
    host: "Wade",
    scores: [
      { character: "Bob", score: 69 },
      { character: "Mark", score: 20_000 },
    ],
  },
];

export default episodes;
