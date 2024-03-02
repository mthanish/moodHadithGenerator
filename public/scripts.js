// public/scripts.js

const moodSlider = document.getElementById('range');
const selectedMood = document.getElementById('mood');
const emoji = document.getElementById('emoji');
const hadithContainer = document.getElementById('hadithContainer');

moodSlider.addEventListener('input', () => {
  selectedMood.innerText = `Mood Level: ${moodSlider.value}`;
  updateEmojiAndMood();
  generateHadith();
});

function generateHadith() {
  const moodLevel = moodSlider.value;

  // Sample Hadiths for different mood ranges
  const hadithRanges = {
    '0-10': {
      text: 'Prophet Muhammad (PBUH) said: "The best among you are those who have the best manners and character."',
      reference: 'Sahih al-Bukhari, Book 73, Hadith 56'
    },
    '11-30': {
      text: 'Prophet Muhammad (PBUH) said: "The believer does not taunt others, he does not curse others, he does not use profanity, and he does not abuse others."',
      reference: 'Tirmidhi, Book 49, Hadith 125'
    },
    '31-50': {
      text: 'Prophet Muhammad (PBUH) said: "The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger."',
      reference: 'Sahih al-Bukhari, Book 73, Hadith 135'
    },
    '51-70': {
      text: 'Prophet Muhammad (PBUH) said: "When one of you gets angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down."',
      reference: 'Abu Dawood, Book 41, Hadith 4782'
    },
    '71-90': {
      text: 'Prophet Muhammad (PBUH) said: "Kindness is a mark of faith, and whoever is not kind has no faith."',
      reference: 'Sahih Muslim, Book 1, Hadith 56'
    },
    '91-100': {
      text: 'Prophet Muhammad (PBUH) said: "Seek knowledge from the cradle to the grave."',
      reference: 'Al-Tirmidhi, Hadith 74'
    }
  };

  // Find the appropriate range for the current mood level
  let selectedRange;
  for (const range in hadithRanges) {
    const [start, end] = range.split('-').map(Number);
    if (moodLevel >= start && moodLevel <= end) {
      selectedRange = range;
      break;
    }
  }

  // Display the Hadith for the selected range
  const hadith = hadithRanges[selectedRange];

  if (hadith) {
    const { text, reference } = hadith;
    hadithContainer.innerHTML = `<p>${text}</p><p>Reference: ${reference}</p>`;
  } else {
    hadithContainer.innerHTML = '<p>No Hadith found for the selected mood range.</p>';
  }
}

function updateEmojiAndMood() {
  const value = moodSlider.value;

  if (value <= 20) {
    emoji.innerHTML = '😣';
    selectedMood.innerHTML = 'Worried';
  } else if (value <= 40) {
    emoji.innerHTML = '😟';
    selectedMood.innerHTML = 'Sad';
  } else if (value <= 60) {
    emoji.innerHTML = '😔';
    selectedMood.innerHTML = 'Confused';
  } else if (value <= 80) {
    emoji.innerHTML = '😊';
    selectedMood.innerHTML = 'Happy';
  } else if (value <= 100) {
    emoji.innerHTML = '😂';
    selectedMood.innerHTML = 'Joyful';
  }
}
