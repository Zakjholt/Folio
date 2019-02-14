const seedQuestions = [
  {
    question: "What is your favorite color?",
    answer: [
      "It used to be blue,",
      "but a couple of months ago it changed to green.",
      "I think that it's important to always be open to changing yourself."
    ]
  },
  {
    question: "What is this project built using?",
    answer: [
      "The backend for this app is a Nodejs api, paired with a Mongo db.",
      "They both in Docker containers using docker-compose",
      "The frontend is als run with docker-compose.",
      "It's built using React (with hooks :D)."
    ]
  },
  {
    question: "What are you looking for in your next position?",
    answer: [
      "Professionally speaking, I'm looking for more opportunities to grow and be challenged.",
      "I like being in the position to make architecture decisions; in the past couple years I've had a lot of experience growing teams.",
      "In terms of culture, I like to work remote for the most part, with one week a month in office."
    ]
  }
];

module.exports = { seedQuestions };
