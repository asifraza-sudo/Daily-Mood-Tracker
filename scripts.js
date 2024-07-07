
document.addEventListener('DOMContentLoaded', () => {
  const moodButtons = document.querySelectorAll('.mood-btn');
  const submitBtn = document.querySelector('.submit-btn');
  const quoteText = document.getElementById('quoteText');
  let selectedMood = '';

  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      moodButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedMood = button.dataset.mood;
      console.log(`Selected Mood: ${selectedMood}`); 
    });
  });

  submitBtn.addEventListener('click', () => {
    if (selectedMood) {
      logMood(selectedMood);
      showMotivationalQuote();
      selectedMood = '';
      moodButtons.forEach(btn => btn.classList.remove('selected'));
      console.log('Mood submitted and reset'); 
    } else {
      alert('Please select a mood before submitting.');
    }
  });

  function logMood(mood) {
    const currentDate = new Date().toLocaleDateString();
    const moodKey = `mood-${currentDate}`;
    const moods = JSON.parse(localStorage.getItem(moodKey)) || { happy: 0, sad: 0, angry: 0, neutral: 0 };
    moods[mood]++;
    localStorage.setItem(moodKey, JSON.stringify(moods));
    updateMoodCount(moods);
  }

  function updateMoodCount(moods) {
    document.getElementById('happyCount').textContent = `😊: ${moods.happy}`;
    document.getElementById('sadCount').textContent = `😢: ${moods.sad}`;
    document.getElementById('angryCount').textContent = `😠: ${moods.angry}`;
    document.getElementById('neutralCount').textContent = `😐: ${moods.neutral}`;
  }

  function showMotivationalQuote() {
    const quotes = [
      "Keep going, you're doing great!",
      "Every day is a new beginning.",
      "Stay positive and happy.",
      "Believe you can and you're halfway there."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }

  
  const currentDate = new Date().toLocaleDateString();
  const initialMoods = JSON.parse(localStorage.getItem(`mood-${currentDate}`)) || { happy: 0, sad: 0, angry: 0, neutral: 0 };
  updateMoodCount(initialMoods);
});
