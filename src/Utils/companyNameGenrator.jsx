// utils/companyNameGenerator.js

const adjectives = [
  "Blue",
  "Quantum",
  "Rapid",
  "Bright",
  "NextGen",
  "Global",
  "Prime",
  "Dynamic",
  "Elite",
  "Vision",
];

const nouns = [
  "Solutions",
  "Labs",
  "Systems",
  "Technologies",
  "Holdings",
  "Group",
  "Industries",
  "Ventures",
];

export const generateCompanyName = () => {
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdj} ${randomNoun}`;
};

export const generateMultipleNames = (count = 3) => {
  const names = new Set();

  while (names.size < count) {
    names.add(generateCompanyName());
  }

  return Array.from(names);
};
