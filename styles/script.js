let currentCount = 0;
let completedRounds = 0;
let totalMantras = 0;

const currentCountEl = document.getElementById('currentCount');
const completedRoundsEl = document.getElementById('completedRounds');
const totalMantrasEl = document.getElementById('totalMantras');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const chantButton = document.getElementById('chantButton');
const resetButton = document.getElementById('resetButton');
const roundCompleteEl = document.getElementById('roundComplete');
const pulseRing = document.getElementById('pulseRing');

function updateDisplay() {
    currentCountEl.textContent = currentCount;
    completedRoundsEl.textContent = completedRounds;
    totalMantrasEl.textContent = totalMantras;
    
    const progress = (currentCount / 108) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';
}

function showPulse() {
    pulseRing.style.display = 'block';
    setTimeout(() => {
        pulseRing.style.display = 'none';
    }, 1500);
}

function showRoundComplete() {
    roundCompleteEl.classList.remove('hidden');
    setTimeout(() => {
        roundCompleteEl.classList.add('hidden');
    }, 4000);
}

chantButton.addEventListener('click', function() {
    currentCount++;
    totalMantras++;
    
    showPulse();
    
    if (currentCount >= 108) {
        completedRounds++;
        currentCount = 0;
        showRoundComplete();
        
        chantButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            chantButton.style.transform = 'scale(1)';
        }, 200);
    }
    
    updateDisplay();
});

resetButton.addEventListener('click', function() {
    if (totalMantras > 0) {
        const confirmReset = document.createElement('div');
        confirmReset.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        confirmReset.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4">
                <h3 class="text-lg font-bold text-gray-800 mb-4">Reset Counter?</h3>
                <p class="text-gray-600 mb-6">This will reset all your progress. Are you sure?</p>
                <div class="flex space-x-3">
                    <button id="confirmReset" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold">Reset</button>
                    <button id="cancelReset" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded font-semibold">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(confirmReset);
        
        document.getElementById('confirmReset').addEventListener('click', function() {
            currentCount = 0;
            completedRounds = 0;
            totalMantras = 0;
            updateDisplay();
            document.body.removeChild(confirmReset);
        });
        
        document.getElementById('cancelReset').addEventListener('click', function() {
            document.body.removeChild(confirmReset);
        });
    }
});

updateDisplay();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
