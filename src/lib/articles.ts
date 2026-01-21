export interface Article {
  slug: string;
  kicker: string;
  title: string;
  content: string[];
}

export const articles: Record<string, Article> = {
  preface: {
    slug: "preface",
    kicker: "Vol. 00 • The Manifesto",
    title: "Breaking the Cycle.",
    content: [
      "This platform exists for two distinct purposes. First, to educate the non-user: to dismantle the ignorance that demonizes a behavior often rooted in trauma. Second, and perhaps more importantly, to validate the user: to prove that the guilt and humiliation you feel are not inherent to you, but are constructs imposed by a society that refuses to understand your pain.",
      "For decades, the public narrative has been dangerously empty. We see simplistic slogans like 'Cocaine is bad' or 'Don't do drugs,' which point out health risks but ignore the psychological reality. We ignore *why* people use. We ignore that for many, the substance is a coping mechanism for untreated psychological distress. Instead of treating addiction as a disease, we treat it as a moral failing—a sign of 'bad character.'",
      "There is a grotesque hypocrisy in how this substance is viewed. When the wealthy consume cocaine in powder form, it is often glamorized—whispered about in high society as a recreational luxury. Yet, when a person of lower income uses the same alkaloid to escape their reality, they are viewed with disgust. The substance is the same; only the judgment changes based on tax bracket.",
      "This stigma is a lethal part of the problem. When society treats drug use as a taboo, it pushes the user into the shadows. The guilt forced upon them creates isolation, and that isolation drives further consumption to cope with the shame. It is a vicious loop fueled entirely by ignorance.",
      "We cannot help people by judging them. We cannot save lives with silence. This archive rejects the sugar-coated clichés. It offers raw, scientific, and sociological truth—because true information is the only way to dismantle the stigma and offer real safety.",
    ],
  },
};
