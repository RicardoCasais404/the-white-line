export interface CheckboxOption {
  id: string;
  label: string;
  hasOther?: boolean;
}

export interface Section {
  title: string;
  options: CheckboxOption[];
}

export const assessmentSections: Section[] = [
  {
    title: "1. Emotional State Before Use",
    options: [
      { id: "1-anxiety", label: "Anxiety" },
      { id: "1-anguish", label: "Deep Anguish / Distress" },
      { id: "1-panic", label: "Panic" },
      { id: "1-sadness", label: "Profound Sadness" },
      { id: "1-shame", label: "Shame" },
      { id: "1-guilt", label: "Guilt" },
      { id: "1-loneliness", label: "Loneliness" },
      { id: "1-void", label: "Sensation of Inner Void" },
      { id: "1-depersonalization", label: "Depersonalization / Numbness" },
      { id: "1-irritability", label: "Irritability" },
      { id: "1-frustration", label: "Frustration" },
      { id: "1-trapped", label: "Feeling Trapped" },
      { id: "1-overload", label: "Mental Overload" },
      { id: "1-fatigue", label: "Extreme Fatigue" },
      { id: "1-stress", label: "Accumulated Stress" },
      { id: "1-flashbacks", label: "Traumatic Flashbacks" },
      { id: "1-hopelessness", label: "Hopelessness" },
      { id: "1-other", label: "Other:", hasOther: true },
    ],
  },
  {
    title: "2. Triggers & Situations",
    options: [
      { id: "2-argument", label: "Argument with Partner" },
      { id: "2-rejection", label: "Perceived Rejection" },
      { id: "2-abandonment", label: "Fear of Abandonment" },
      { id: "2-family", label: "Family Conflict" },
      { id: "2-work", label: "Work Stress" },
      { id: "2-social", label: "Social Pressure" },
      { id: "2-failure", label: "Feeling of Failure" },
      { id: "2-criticism", label: "Intense Self-Criticism" },
      { id: "2-alcohol", label: "Alcohol Consumption" },
      { id: "2-substances", label: "Other Substance Use" },
      { id: "2-control", label: "Loss of Emotional Control" },
      { id: "2-trauma", label: "Exposure to Trauma Triggers" },
      { id: "2-boredom", label: "Profound Boredom" },
      { id: "2-isolation", label: "Prolonged Isolation" },
      { id: "2-other", label: "Other:", hasOther: true },
    ],
  },
  {
    title: "3. Psychological Function of Use",
    options: [
      { id: "3-relief", label: "Immediate Relief of Suffering" },
      { id: "3-avoidance", label: "Avoiding Painful Emotions" },
      { id: "3-energy", label: "Increasing Energy" },
      { id: "3-focus", label: "Increasing Focus" },
      { id: "3-feeling", label: "To Feel Something (Breaking Numbness)" },
      { id: "3-crying", label: "To Avoid Crying / Collapsing" },
      { id: "3-confidence", label: "Boosting Confidence" },
      { id: "3-thoughts", label: "Silencing Intrusive Thoughts" },
      { id: "3-escape", label: "Escaping Reality" },
      { id: "3-confrontation", label: "Avoiding Difficult Situations" },
      { id: "3-punishment", label: "Self-Punishment" },
      { id: "3-control", label: "Seeking Sense of Control" },
      { id: "3-other", label: "Other:", hasOther: true },
    ],
  },
  {
    title: "4. Pattern of Use",
    options: [
      { id: "4-rare", label: "Very Rare (<1x/month)" },
      { id: "4-occasional", label: "Occasional (1–2x/month)" },
      { id: "4-episodic", label: "Episodic (Spikes during stress)" },
      { id: "4-alcohol", label: "Only after Alcohol" },
      { id: "4-alone", label: "Only when Alone" },
      { id: "4-social", label: "Only Socially" },
      { id: "4-emotional", label: "Only after Intense Emotional Events" },
      { id: "4-other", label: "Other:", hasOther: true },
    ],
  },
  // We can add the remaining sections (5-15) here if needed,
  // but let's start with these core psychological ones for the tutorial
  // to ensure the code fits. The logic handles any number of sections.
];
