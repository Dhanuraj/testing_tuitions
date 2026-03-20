const GRAMMAR_QUESTIONS = [
  {
    "topic": "Parts of Speech",
    "question": "Which word is a noun in: 'The dog barked loudly'?",
    "options": [
      "The",
      "dog",
      "barked",
      "loudly"
    ],
    "answer": "dog",
    "explanation": "'Dog' is a noun — the name of an animal. Nouns name people, places, animals, or things.",
    "level": 1,
    "answerImage": "🐕",
    "optionImages": [
      "",
      "🐕",
      "",
      ""
    ],
    "hint": "What is the name of something?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which word is a verb in: 'She runs fast'?",
    "options": [
      "She",
      "runs",
      "fast",
      "None"
    ],
    "answer": "runs",
    "explanation": "'Runs' is a verb — it shows the action the subject is doing.",
    "level": 1,
    "answerImage": "🏃",
    "optionImages": [
      "",
      "🏃",
      "",
      ""
    ],
    "hint": "What action is being done?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which word is an adjective: 'The red apple fell'?",
    "options": [
      "The",
      "red",
      "apple",
      "fell"
    ],
    "answer": "red",
    "explanation": "'Red' is an adjective — it describes the noun 'apple'. Adjectives modify nouns.",
    "level": 1,
    "answerImage": "🍎",
    "optionImages": [
      "",
      "🍎",
      "",
      ""
    ],
    "hint": "Which word describes the apple?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which is a pronoun in: 'He gave me a book'?",
    "options": [
      "gave",
      "book",
      "He",
      "the"
    ],
    "answer": "He",
    "explanation": "'He' is a pronoun replacing a person's name. Other pronouns: she, it, they, we.",
    "level": 1,
    "answerImage": "👤",
    "optionImages": [
      "",
      "",
      "👤",
      ""
    ],
    "hint": "Replaces a person's name.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which word is a preposition in: 'The cat sat on the mat'?",
    "options": [
      "cat",
      "sat",
      "on",
      "mat"
    ],
    "answer": "on",
    "explanation": "'On' is a preposition showing position/relationship. Prepositions: on, in, at, under, over, beside.",
    "level": 1,
    "answerImage": "🐱",
    "optionImages": [
      "",
      "",
      "📍",
      ""
    ],
    "hint": "Shows WHERE the cat is.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "'Wow! That was amazing!' — What is 'Wow'?",
    "options": [
      "Noun",
      "Verb",
      "Adjective",
      "Interjection"
    ],
    "answer": "Interjection",
    "explanation": "'Wow' is an interjection — expresses sudden emotion. Others: Oh!, Ouch!, Hurray!, Bravo!",
    "level": 1,
    "answerImage": "😲",
    "optionImages": [
      "",
      "",
      "",
      "😲"
    ],
    "hint": "Expresses sudden feeling.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'knife'?",
    "options": [
      "n",
      "i",
      "f",
      "k"
    ],
    "answer": "k",
    "explanation": "The K in 'knife' is silent. K is always silent before N: knife, kneel, knock, know, knight.",
    "level": 1,
    "answerImage": "🔪",
    "optionImages": [
      "",
      "",
      "",
      "🔪"
    ],
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The K is silent because in Old English 'kn' was pronounced fully. Over centuries English speakers dropped the K sound."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'write'?",
    "options": [
      "r",
      "i",
      "t",
      "w"
    ],
    "answer": "w",
    "explanation": "The W in 'write' is silent. All wr- words: write, wrong, wrap, wrist, wreck, wrestle.",
    "level": 1,
    "answerImage": "✍️",
    "optionImages": [
      "",
      "",
      "",
      "✍️"
    ],
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The W in 'write' became silent as English evolved. In Old English both W and R in 'wr' were pronounced."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'know'?",
    "options": [
      "k",
      "n",
      "o",
      "w"
    ],
    "answer": "k",
    "explanation": "K is silent in 'know'. Rule: K before N is always silent — know, knife, knee, knight, knock.",
    "level": 1,
    "answerImage": "🧠",
    "optionImages": [
      "🔇",
      "",
      "",
      ""
    ],
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The K in 'know' is silent. In Middle English, kn- was pronounced as two sounds. The K was gradually dropped in speech."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'hour'?",
    "options": [
      "o",
      "u",
      "r",
      "h"
    ],
    "answer": "h",
    "explanation": "H in 'hour' is silent — that's why we say 'an hour' not 'a hour'. Also: honest, honour, heir.",
    "level": 1,
    "answerImage": "⏰",
    "optionImages": [
      "",
      "",
      "",
      "🔇"
    ],
    "hint": "This is why we say 'AN hour'.",
    "silentLetterInfo": "The H in 'hour' is silent because the word comes from French 'heure'. The H was never pronounced in English."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'thumb'?",
    "options": [
      "t",
      "h",
      "u",
      "b"
    ],
    "answer": "b",
    "explanation": "B is silent in 'thumb'. Rule: B after M at word end is silent — thumb, lamb, comb, bomb, climb.",
    "level": 1,
    "answerImage": "👍",
    "optionImages": [
      "",
      "",
      "",
      "🔇"
    ],
    "hint": "The LAST letter is silent.",
    "silentLetterInfo": "B after M at word end is always silent in English. This happened as pronunciation simplified over centuries."
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence is correct?",
    "options": [
      "She don't like milk.",
      "She doesn't like milk.",
      "She not like milk.",
      "She no like milk."
    ],
    "answer": "She doesn't like milk.",
    "explanation": "With he/she/it use 'doesn't' for negative. 'Don't' is for I/you/we/they.",
    "level": 1,
    "answerImage": "🥛",
    "optionImages": [
      "❌",
      "✅",
      "❌",
      "❌"
    ],
    "hint": "She = third person singular.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which article: '___ apple a day keeps the doctor away'?",
    "options": [
      "A",
      "An",
      "The",
      "No article"
    ],
    "answer": "An",
    "explanation": "Use 'An' before vowel sounds. 'Apple' starts with vowel A, so use 'An'.",
    "level": 1,
    "answerImage": "🍎",
    "optionImages": [
      "",
      "🍎",
      "",
      ""
    ],
    "hint": "'Apple' starts with a vowel.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'मैं स्कूल जाता हूँ' means:",
    "options": [
      "I went to school",
      "I am going to school",
      "I go to school",
      "I will go to school"
    ],
    "answer": "I go to school",
    "explanation": "'जाता हूँ' = present simple. This is a habitual action in English (I go = regularly/daily).",
    "level": 1,
    "answerImage": "🏫",
    "optionImages": [
      "",
      "",
      "🏫",
      ""
    ],
    "hint": "जाता हूँ = present simple tense.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'नमस्ते' means:",
    "options": [
      "Goodbye",
      "Hello/Greetings",
      "Thank you",
      "Sorry"
    ],
    "answer": "Hello/Greetings",
    "explanation": "Namaste = 'I bow to the divine in you'. Used for both hello and goodbye in India.",
    "level": 1,
    "answerImage": "🙏",
    "optionImages": [
      "",
      "🙏",
      "",
      ""
    ],
    "hint": "It is a common Indian greeting.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "'The flock of birds flew south.' — What is 'flock'?",
    "options": [
      "Common noun",
      "Proper noun",
      "Collective noun",
      "Abstract noun"
    ],
    "answer": "Collective noun",
    "explanation": "'Flock' is a collective noun — names a group of birds. Others: herd, pack, team, fleet, bunch.",
    "level": 2,
    "answerImage": "🐦",
    "optionImages": [
      "",
      "",
      "🐦",
      ""
    ],
    "hint": "Names a GROUP of birds.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What type of noun is 'honesty'?",
    "options": [
      "Common noun",
      "Proper noun",
      "Abstract noun",
      "Collective noun"
    ],
    "answer": "Abstract noun",
    "explanation": "'Honesty' is abstract — quality that cannot be seen/touched. Other abstract nouns: love, courage, joy.",
    "level": 2,
    "answerImage": "⚖️",
    "optionImages": [
      "",
      "",
      "⚖️",
      ""
    ],
    "hint": "Can you see or touch it?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "'This book is interesting.' — What is 'This'?",
    "options": [
      "Article",
      "Pronoun",
      "Demonstrative adjective",
      "Preposition"
    ],
    "answer": "Demonstrative adjective",
    "explanation": "'This' points to a specific noun — demonstrative adjective. This, That, These, Those.",
    "level": 2,
    "answerImage": "📚",
    "optionImages": [
      "",
      "",
      "📚",
      ""
    ],
    "hint": "It points to a specific book.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'castle'?",
    "options": [
      "c",
      "a",
      "t",
      "l"
    ],
    "answer": "t",
    "explanation": "T in 'castle' is silent. Silent T words: castle, whistle, listen, fasten, soften, nestle, bustle.",
    "level": 2,
    "answerImage": "🏰",
    "optionImages": [
      "",
      "",
      "🔇",
      ""
    ],
    "hint": "A middle consonant is silent.",
    "silentLetterInfo": "The T in 'castle' is silent. Many words ending in -stle or -sten have a silent T, from Norman French influence."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'island'?",
    "options": [
      "i",
      "s",
      "l",
      "d"
    ],
    "answer": "s",
    "explanation": "S in 'island' is silent — added incorrectly by scribes confusing it with French 'isle'.",
    "level": 2,
    "answerImage": "🏝️",
    "optionImages": [
      "",
      "🔇",
      "",
      ""
    ],
    "hint": "Not first or last — a middle letter.",
    "silentLetterInfo": "The S in 'island' was mistakenly added by medieval scribes. The original Old English word 'iland' had no S."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'psychology'?",
    "options": [
      "s",
      "y",
      "c",
      "p"
    ],
    "answer": "p",
    "explanation": "P is silent in psychology. Greek-origin words starting ps-: psychology, psalm, pseudonym, psychiatry.",
    "level": 2,
    "answerImage": "🧠",
    "optionImages": [
      "",
      "",
      "",
      "🔇"
    ],
    "hint": "The FIRST letter is silent.",
    "silentLetterInfo": "The P in 'psychology' is silent. In Greek 'ps' was two sounds. English borrowed these words but simplified pronunciation."
  },
  {
    "topic": "Grammar Rules",
    "question": "'I have been studying ___ three hours.' Fill in:",
    "options": [
      "since",
      "for",
      "from",
      "during"
    ],
    "answer": "for",
    "explanation": "'For' = duration (for 3 hours, for 2 days). 'Since' = starting point (since morning, since 2020).",
    "level": 2,
    "answerImage": "📖",
    "optionImages": [
      "",
      "📖",
      "",
      ""
    ],
    "hint": "'For' = duration. 'Since' = starting point.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the past tense of 'go'?",
    "options": [
      "goed",
      "goes",
      "gone",
      "went"
    ],
    "answer": "went",
    "explanation": "'Go' is an irregular verb: go → went → gone. Irregular verbs don't follow regular -ed pattern.",
    "level": 2,
    "answerImage": "🚶",
    "optionImages": [
      "",
      "",
      "",
      "🚶"
    ],
    "hint": "This is an irregular verb.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'वह कल आएगा' means:",
    "options": [
      "He came yesterday",
      "He comes tomorrow",
      "He will come tomorrow",
      "He is coming tomorrow"
    ],
    "answer": "He will come tomorrow",
    "explanation": "'आएगा' = will come (future). 'कल' = tomorrow. Future tense uses 'will + verb'.",
    "level": 2,
    "answerImage": "📅",
    "optionImages": [
      "",
      "",
      "📅",
      ""
    ],
    "hint": "'आएगा' is future tense.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'वे खाना खा रहे हैं' means:",
    "options": [
      "They eat food",
      "They ate food",
      "They are eating food",
      "They will eat food"
    ],
    "answer": "They are eating food",
    "explanation": "'खा रहे हैं' = present continuous (ongoing action). Pattern: रहे/रही + हैं = are doing.",
    "level": 2,
    "answerImage": "🍽️",
    "optionImages": [
      "",
      "",
      "🍽️",
      ""
    ],
    "hint": "'रहे हैं' = ongoing action right now.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the comparative of 'good'?",
    "options": [
      "gooder",
      "more good",
      "better",
      "best"
    ],
    "answer": "better",
    "explanation": "'Good' is irregular: good → better → best. Other irregular: bad→worse→worst, many→more→most.",
    "level": 2,
    "answerImage": "⭐",
    "optionImages": [
      "",
      "",
      "⭐",
      ""
    ],
    "hint": "Irregular comparative — not 'gooder'!",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify adverb: 'She sings very beautifully.'",
    "options": [
      "She",
      "sings",
      "very",
      "beautifully"
    ],
    "answer": "very",
    "explanation": "'Very' is an adverb modifying another adverb ('beautifully'). Adverbs modify verbs, adjectives, or adverbs.",
    "level": 2,
    "answerImage": "🎵",
    "optionImages": [
      "",
      "",
      "🎵",
      ""
    ],
    "hint": "It modifies another adverb, not a verb.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "'Neither the boys nor the girl ___ happy.' Correct verb:",
    "options": [
      "are",
      "were",
      "is",
      "was"
    ],
    "answer": "is",
    "explanation": "With 'neither...nor', verb agrees with nearest subject. 'Girl' (singular) is nearest → 'is'.",
    "level": 3,
    "answerImage": "👧",
    "optionImages": [
      "",
      "",
      "👧",
      ""
    ],
    "hint": "Verb agrees with the word closest to it.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence is in passive voice?",
    "options": [
      "Ram ate the apple.",
      "The apple was eaten by Ram.",
      "Ram will eat the apple.",
      "Ram has eaten the apple."
    ],
    "answer": "The apple was eaten by Ram.",
    "explanation": "Passive: Object + was/were + past participle + by + subject. Focus shifts to action, not doer.",
    "level": 3,
    "answerImage": "🍎",
    "optionImages": [
      "",
      "🍎",
      "",
      ""
    ],
    "hint": "In passive, the object comes first.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'gnome'?",
    "options": [
      "g",
      "n",
      "o",
      "m"
    ],
    "answer": "g",
    "explanation": "G is silent in 'gnome'. Silent G in gn-: gnome, gnat, gnaw, gnu. Also in: sign, foreign, champagne.",
    "level": 3,
    "answerImage": "🧙",
    "optionImages": [
      "🔇",
      "",
      "",
      ""
    ],
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The G in 'gnome' comes from Greek 'gnomes'. In Greek, gn was two sounds. English simplified to just N."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'debt'?",
    "options": [
      "d",
      "e",
      "b",
      "t"
    ],
    "answer": "b",
    "explanation": "B in 'debt' is silent. Scholars added B to show Latin root 'debitum' but never pronounced it.",
    "level": 3,
    "answerImage": "💰",
    "optionImages": [
      "",
      "",
      "🔇",
      ""
    ],
    "hint": "Added by scholars to show Latin origin.",
    "silentLetterInfo": "The B in 'debt' was added by medieval scholars to reflect Latin 'debitum' but was never pronounced. Same with 'doubt'."
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'उसने किताब पढ़ी' means:",
    "options": [
      "She reads a book",
      "She read a book",
      "She is reading",
      "She will read"
    ],
    "answer": "She read a book",
    "explanation": "'पढ़ी' = past tense (feminine form). Hindi past tense agrees with gender of object.",
    "level": 3,
    "answerImage": "📚",
    "optionImages": [
      "",
      "📚",
      "",
      ""
    ],
    "hint": "'पढ़ी' is past tense feminine form.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which uses present perfect continuous correctly?",
    "options": [
      "I am living here since 2010.",
      "I have been living here since 2010.",
      "I lived here since 2010.",
      "I was living here since 2010."
    ],
    "answer": "I have been living here since 2010.",
    "explanation": "Action started in past and continues now → Present Perfect Continuous: have/has been + verb-ing + since.",
    "level": 3,
    "answerImage": "🏠",
    "optionImages": [
      "",
      "🏠",
      "",
      ""
    ],
    "hint": "Started in past, still continues NOW.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What is 'run' in: 'He went for a morning run'?",
    "options": [
      "Verb",
      "Adverb",
      "Noun",
      "Adjective"
    ],
    "answer": "Noun",
    "explanation": "Here 'run' is a noun (a thing — the activity). Same word is verb in 'I run daily'. Context matters!",
    "level": 3,
    "answerImage": "🏃",
    "optionImages": [
      "",
      "",
      "🏃",
      ""
    ],
    "hint": "Is 'run' doing an action here, or IS it a thing?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "'He is the best player who ___ in this team.' Fill in:",
    "options": [
      "play",
      "plays",
      "has ever played",
      "is playing"
    ],
    "answer": "has ever played",
    "explanation": "With superlative + 'who', use present perfect 'has/have ever + past participle'. Correct: 'has ever played'.",
    "level": 4,
    "answerImage": "⚽",
    "optionImages": [
      "",
      "",
      "",
      "⚽"
    ],
    "hint": "Superlative adjective needs present perfect.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'receipt'?",
    "options": [
      "r",
      "e",
      "p",
      "t"
    ],
    "answer": "p",
    "explanation": "P in 'receipt' is silent. Added to show Latin 'recepta'. P was never pronounced in English.",
    "level": 4,
    "answerImage": "🧾",
    "optionImages": [
      "",
      "",
      "🔇",
      ""
    ],
    "hint": "Latin-influenced word. Middle consonant silent.",
    "silentLetterInfo": "The P in 'receipt' was added by medieval scribes to show its Latin origin (recepta). It was never pronounced in English."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'muscle'?",
    "options": [
      "m",
      "u",
      "c",
      "l"
    ],
    "answer": "c",
    "explanation": "C in 'muscle' is silent. Words with sc where C is silent: muscle, scissors, scene, scent, science.",
    "level": 4,
    "answerImage": "💪",
    "optionImages": [
      "",
      "",
      "🔇",
      ""
    ],
    "hint": "'sc' combination — one letter silent.",
    "silentLetterInfo": "The C in 'muscle' is silent. The sc- combination in Latin/Greek words often has a silent C in English."
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'मुझे यह काम करना ही पड़ेगा' means:",
    "options": [
      "I want to do this work",
      "I will do this work",
      "I have to do this work",
      "I did this work"
    ],
    "answer": "I have to do this work",
    "explanation": "'करना ही पड़ेगा' = obligation (must/have to). Hindi expresses obligation with पड़ना/पड़ेगा.",
    "level": 4,
    "answerImage": "💼",
    "optionImages": [
      "",
      "",
      "💼",
      ""
    ],
    "hint": "'पड़ेगा' shows compulsion/obligation.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "'No sooner ___ he left than it started raining.'",
    "options": [
      "had",
      "has",
      "did",
      "was"
    ],
    "answer": "had",
    "explanation": "'No sooner had + subject + past participle' — inversion with past perfect. 'No sooner had he left than...'",
    "level": 4,
    "answerImage": "🌧️",
    "optionImages": [
      "🌧️",
      "",
      "",
      ""
    ],
    "hint": "No sooner + had + past participle (inversion).",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "'The committee ___ divided in their opinion.' Which is correct?",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": "are",
    "explanation": "Collective nouns (committee, jury, team) take plural verb when members act individually. They disagreed = plural.",
    "level": 5,
    "answerImage": "👥",
    "optionImages": [
      "",
      "👥",
      "",
      ""
    ],
    "hint": "Are members acting as one unit or separately?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "'It is time we ___ home.' Fill in correctly:",
    "options": [
      "go",
      "went",
      "have gone",
      "are going"
    ],
    "answer": "went",
    "explanation": "'It is time + subject + past tense' — subjunctive mood. Despite present meaning, past tense is used.",
    "level": 5,
    "answerImage": "🏠",
    "optionImages": [
      "",
      "🏠",
      "",
      ""
    ],
    "hint": "'It is time' uses subjunctive — past tense form.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letters are both silent in 'Wednesday'?",
    "options": [
      "w and d",
      "d and e",
      "n and e",
      "d and n"
    ],
    "answer": "d and n",
    "explanation": "In 'Wednesday' (WENZday): first D and second N are silent. Comes from 'Woden's Day'.",
    "level": 5,
    "answerImage": "📅",
    "optionImages": [
      "",
      "",
      "",
      "📅"
    ],
    "hint": "Two letters are silent. Say WENZday — which letters disappear?",
    "silentLetterInfo": "Wednesday comes from 'Woden's Day'. Both D (between n and e) and the second N are silent in modern pronunciation."
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'जब तक वह नहीं आएगा, मैं यहाँ रहूँगा' means:",
    "options": [
      "When he comes, I will go",
      "Until he comes, I will stay here",
      "After he comes, I will leave",
      "Before he comes, I was here"
    ],
    "answer": "Until he comes, I will stay here",
    "explanation": "'जब तक... नहीं' = Until. 'रहूँगा' = will stay. Complex conditional/temporal structure.",
    "level": 5,
    "answerImage": "⏳",
    "optionImages": [
      "",
      "⏳",
      "",
      ""
    ],
    "hint": "'जब तक...नहीं' = Until.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which word is a conjunction: 'She sings but he dances'?",
    "options": [
      "She",
      "sings",
      "but",
      "dances"
    ],
    "answer": "but",
    "explanation": "'But' is a conjunction joining two contrasting clauses. Conjunctions: and, but, or, so, because.",
    "level": 1,
    "hint": "Which word joins the two parts?",
    "silentLetterInfo": "",
    "answerImage": "🔗",
    "optionImages": [
      "",
      "",
      "🔗",
      ""
    ]
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the noun in: 'The sun rises in the east'",
    "options": [
      "sun",
      "rises",
      "in",
      "east"
    ],
    "answer": "sun",
    "explanation": "'Sun' is a noun — name of a celestial body. 'East' is also a noun here (direction).",
    "level": 1,
    "hint": "What is the name of something?",
    "silentLetterInfo": "",
    "answerImage": "☀️",
    "optionImages": [
      "☀️",
      "",
      "",
      ""
    ]
  },
  {
    "topic": "Parts of Speech",
    "question": "What type of noun is 'India'?",
    "options": [
      "Common noun",
      "Proper noun",
      "Abstract noun",
      "Collective noun"
    ],
    "answer": "Proper noun",
    "explanation": "'India' is a proper noun — specific name of a country. Proper nouns always begin with capital letters.",
    "level": 1,
    "hint": "Is it a specific name?",
    "silentLetterInfo": "",
    "answerImage": "🇮🇳",
    "optionImages": [
      "",
      "🇮🇳",
      "",
      ""
    ]
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'gnaw'?",
    "options": [
      "g",
      "n",
      "a",
      "w"
    ],
    "answer": "g",
    "explanation": "G is silent in 'gnaw'. All gn- words: gnaw, gnome, gnat, gnu — the G is always silent.",
    "level": 1,
    "hint": "First letter is silent.",
    "silentLetterInfo": "The G in 'gnaw' is silent. In Greek/Latin origin words beginning with gn-, the G was always silent in English.",
    "answerImage": "🦷",
    "optionImages": [
      "🔇",
      "",
      "",
      ""
    ]
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'wrap'?",
    "options": [
      "r",
      "a",
      "p",
      "w"
    ],
    "answer": "w",
    "explanation": "W is silent in 'wrap'. All wr- words: wrap, write, wrong, wrist, wreck, wrestle — W is silent.",
    "level": 1,
    "hint": "First letter is silent.",
    "silentLetterInfo": "The W in 'wrap' is silent. The wr- combination originally had both sounds in Old English but W was dropped.",
    "answerImage": "🎁",
    "optionImages": [
      "",
      "",
      "",
      "🔇"
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "Fill in: 'He ___ to school every day.'",
    "options": [
      "go",
      "goes",
      "going",
      "gone"
    ],
    "answer": "goes",
    "explanation": "With he/she/it (third person singular) in present simple, add -s or -es. Go → goes.",
    "level": 1,
    "hint": "He/she/it always gets -s or -es.",
    "silentLetterInfo": "",
    "answerImage": "🏫",
    "optionImages": [
      "",
      "🏫",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the plural of 'child'?",
    "options": [
      "childs",
      "childes",
      "children",
      "child's"
    ],
    "answer": "children",
    "explanation": "'Children' is an irregular plural. Other irregular plurals: man→men, woman→women, tooth→teeth.",
    "level": 1,
    "hint": "Irregular plural — not childs!",
    "silentLetterInfo": "",
    "answerImage": "👦",
    "optionImages": [
      "",
      "",
      "👦",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the plural of 'mouse'?",
    "options": [
      "mouses",
      "mices",
      "mouse",
      "mice"
    ],
    "answer": "mice",
    "explanation": "'Mice' is the irregular plural of 'mouse'. Similarly: louse→lice, house→houses (regular).",
    "level": 1,
    "hint": "Irregular plural like man→men.",
    "silentLetterInfo": "",
    "answerImage": "🐭",
    "optionImages": [
      "",
      "",
      "",
      "🐭"
    ]
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'सूरज पूर्व में उगता है' means:",
    "options": [
      "Sun sets in the east",
      "Sun rises in the east",
      "Sun rises in the west",
      "Sun shines at noon"
    ],
    "answer": "Sun rises in the east",
    "explanation": "'सूरज' = sun, 'पूर्व' = east, 'उगता है' = rises (present simple).",
    "level": 1,
    "hint": "'उगता है' means 'rises' (habitual).",
    "silentLetterInfo": "",
    "answerImage": "☀️",
    "optionImages": [
      "",
      "☀️",
      "",
      ""
    ]
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'पानी पियो' means:",
    "options": [
      "Drink water",
      "Don't drink water",
      "Eat water",
      "The water is cold"
    ],
    "answer": "Drink water",
    "explanation": "'पानी' = water, 'पियो' = drink (imperative/command form in Hindi).",
    "level": 1,
    "hint": "'पियो' is an imperative command.",
    "silentLetterInfo": "",
    "answerImage": "💧",
    "optionImages": [
      "💧",
      "",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "Choose correct: '___ one-eyed man is king in the country of the blind'",
    "options": [
      "A",
      "An",
      "The",
      "No article"
    ],
    "answer": "A",
    "explanation": "Use 'a' before consonant sounds. 'One' starts with 'w' sound (wun), so use 'a' not 'an'.",
    "level": 1,
    "hint": "'One' starts with 'w' sound.",
    "silentLetterInfo": "",
    "answerImage": "👁️",
    "optionImages": [
      "👁️",
      "",
      "",
      ""
    ]
  },
  {
    "topic": "Parts of Speech",
    "question": "Which sentence contains an adverb?",
    "options": [
      "She is tall.",
      "He runs quickly.",
      "The red car.",
      "A big house."
    ],
    "answer": "He runs quickly.",
    "explanation": "'Quickly' is an adverb — it modifies the verb 'runs', telling HOW he runs.",
    "level": 1,
    "hint": "Which describes HOW the action is done?",
    "silentLetterInfo": "",
    "answerImage": "🏃",
    "optionImages": [
      "",
      "🏃",
      "",
      ""
    ]
  },
  {
    "topic": "Parts of Speech",
    "question": "What is the verb in: 'Birds sing sweetly in the morning'?",
    "options": [
      "Birds",
      "sing",
      "sweetly",
      "morning"
    ],
    "answer": "sing",
    "explanation": "'Sing' is the verb — the action being done. 'Sweetly' is an adverb modifying the verb.",
    "level": 1,
    "hint": "What action is being done?",
    "silentLetterInfo": "",
    "answerImage": "🐦",
    "optionImages": [
      "",
      "🐦",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "Which is the correct sentence?",
    "options": [
      "I am having a pen.",
      "I has a pen.",
      "I have a pen.",
      "I having a pen."
    ],
    "answer": "I have a pen.",
    "explanation": "With 'have/has', use 'have' for I/you/we/they and 'has' for he/she/it. 'Having' is continuous — not for possession.",
    "level": 1,
    "hint": "Have = I/you/we/they. Has = he/she/it.",
    "silentLetterInfo": "",
    "answerImage": "✏️",
    "optionImages": [
      "",
      "",
      "✏️",
      ""
    ]
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'lamb'?",
    "options": [
      "l",
      "a",
      "m",
      "b"
    ],
    "answer": "b",
    "explanation": "B is silent in 'lamb'. Rule: B after M at word-end is silent. Also: comb, bomb, thumb, climb, dumb.",
    "level": 1,
    "hint": "Last letter is silent.",
    "silentLetterInfo": "The B in 'lamb' is silent because in Old English 'mb' at word-end gradually lost the B sound.",
    "answerImage": "🐑",
    "optionImages": [
      "",
      "",
      "",
      "🔇"
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "'No sooner did he arrive ___ it started raining.'",
    "options": [
      "when",
      "than",
      "then",
      "that"
    ],
    "answer": "than",
    "explanation": "'No sooner...than' is a fixed expression. 'No sooner had/did...than...' — inversion required.",
    "level": 2,
    "hint": "No sooner...than is a fixed pair.",
    "silentLetterInfo": "",
    "answerImage": "🌧️",
    "optionImages": [
      "",
      "🌧️",
      "",
      ""
    ]
  },
  {
    "topic": "Parts of Speech",
    "question": "'She speaks French fluently.' — What is 'fluently'?",
    "options": [
      "Adjective",
      "Adverb",
      "Noun",
      "Verb"
    ],
    "answer": "Adverb",
    "explanation": "'Fluently' is an adverb modifying the verb 'speaks'. It tells HOW she speaks.",
    "level": 2,
    "hint": "HOW does she speak?",
    "silentLetterInfo": "",
    "answerImage": "🗣️",
    "optionImages": [
      "",
      "🗣️",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "Which uses the correct tense: completed action before another past action?",
    "options": [
      "I eat before he came.",
      "I had eaten before he came.",
      "I was eating before he came.",
      "I ate before he was coming."
    ],
    "answer": "I had eaten before he came.",
    "explanation": "Past perfect (had + past participle) shows an action completed BEFORE another past action.",
    "level": 2,
    "hint": "Past perfect = had + past participle.",
    "silentLetterInfo": "",
    "answerImage": "🍽️",
    "optionImages": [
      "",
      "🍽️",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "'The news ___ shocking.' Choose correct verb:",
    "options": [
      "are",
      "were",
      "is",
      "have been"
    ],
    "answer": "is",
    "explanation": "'News' looks plural but is uncountable/singular → use 'is'. Similarly: furniture, advice, information.",
    "level": 2,
    "hint": "News is singular despite the S!",
    "silentLetterInfo": "",
    "answerImage": "📰",
    "optionImages": [
      "",
      "",
      "📰",
      ""
    ]
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'autumn'?",
    "options": [
      "a",
      "u",
      "t",
      "n"
    ],
    "answer": "n",
    "explanation": "The final N in 'autumn' is silent. Same: column, solemn, hymn, condemn, damn.",
    "level": 2,
    "hint": "Last letter is silent.",
    "silentLetterInfo": "The N in 'autumn' comes from Latin 'autumnus'. When English borrowed it, the final N was never pronounced.",
    "answerImage": "🍂",
    "optionImages": [
      "",
      "",
      "",
      "🔇"
    ]
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'sword'?",
    "options": [
      "s",
      "w",
      "o",
      "r"
    ],
    "answer": "w",
    "explanation": "W in 'sword' is silent. Also: answer, two, who, whole — W is silent in certain positions.",
    "level": 2,
    "hint": "A middle consonant is silent.",
    "silentLetterInfo": "The W in 'sword' became silent in Middle English as the 'sw' combination simplified in pronunciation.",
    "answerImage": "⚔️",
    "optionImages": [
      "",
      "🔇",
      "",
      ""
    ]
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'मुझे बुखार है' means:",
    "options": [
      "I have a cold",
      "I have a fever",
      "I am hungry",
      "I am tired"
    ],
    "answer": "I have a fever",
    "explanation": "'बुखार' = fever. Hindi expresses illness with 'मुझे...है' (literally 'to me...is').",
    "level": 2,
    "hint": "'बुखार' = fever.",
    "silentLetterInfo": "",
    "answerImage": "🤒",
    "optionImages": [
      "",
      "🤒",
      "",
      ""
    ]
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'कल बारिश हुई थी' means:",
    "options": [
      "It will rain tomorrow",
      "It is raining",
      "It rained yesterday",
      "It rains daily"
    ],
    "answer": "It rained yesterday",
    "explanation": "'कल' = yesterday/tomorrow (context dependent). 'हुई थी' = had happened (past). Here 'कल' = yesterday.",
    "level": 2,
    "hint": "'हुई थी' = past perfect. 'कल' here = yesterday.",
    "silentLetterInfo": "",
    "answerImage": "🌧️",
    "optionImages": [
      "",
      "",
      "🌧️",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "'The committee ___ divided in their opinion.' Correct form:",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "answer": "are",
    "explanation": "When committee members act individually (divided opinion), use plural 'are'. Acting together → singular 'is'.",
    "level": 3,
    "hint": "Are they acting as one unit or separately?",
    "silentLetterInfo": "",
    "answerImage": "👥",
    "optionImages": [
      "",
      "👥",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "'Scarcely had I reached home ___ it started raining.'",
    "options": [
      "when",
      "than",
      "before",
      "as"
    ],
    "answer": "when",
    "explanation": "'Scarcely/Hardly/Barely...when' is a fixed pair (like No sooner...than). Past perfect + when.",
    "level": 3,
    "hint": "Scarcely/Hardly...when is a fixed pair.",
    "silentLetterInfo": "",
    "answerImage": "🏠",
    "optionImages": [
      "🏠",
      "",
      "",
      ""
    ]
  },
  {
    "topic": "Parts of Speech",
    "question": "What is 'whose' in: 'The boy whose bag is red is my friend'?",
    "options": [
      "Pronoun",
      "Adjective",
      "Relative pronoun",
      "Possessive pronoun"
    ],
    "answer": "Relative pronoun",
    "explanation": "'Whose' is a relative pronoun connecting main and relative clause and showing possession.",
    "level": 3,
    "hint": "It connects two clauses and shows possession.",
    "silentLetterInfo": "",
    "answerImage": "🎒",
    "optionImages": [
      "",
      "",
      "🎒",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "Identify the figure of speech: 'The pen is mightier than the sword'",
    "options": [
      "Simile",
      "Metaphor",
      "Personification",
      "Hyperbole"
    ],
    "answer": "Metaphor",
    "explanation": "A metaphor compares without using 'like' or 'as'. 'Pen IS mightier' — direct comparison.",
    "level": 3,
    "hint": "Comparison without 'like' or 'as'.",
    "silentLetterInfo": "",
    "answerImage": "✏️",
    "optionImages": [
      "",
      "✏️",
      "",
      ""
    ]
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence correctly uses the subjunctive mood?",
    "options": [
      "I wish I was rich.",
      "I wish I were rich.",
      "I wish I am rich.",
      "I wish I be rich."
    ],
    "answer": "I wish I were rich.",
    "explanation": "Subjunctive after 'wish' uses 'were' for all subjects (even I/he/she). 'I wish I were...' is correct.",
    "level": 3,
    "hint": "Subjunctive: use 'were' with all subjects after 'wish'.",
    "silentLetterInfo": "",
    "answerImage": "💰",
    "optionImages": [
      "",
      "💰",
      "",
      ""
    ]
  }
];