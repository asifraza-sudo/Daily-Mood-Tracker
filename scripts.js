
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
  
});
  