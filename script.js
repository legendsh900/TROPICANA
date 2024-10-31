document.getElementById('checkSignalsBtn').addEventListener('click', function() {
    checkSignals();
});

let lastPredictionEndTime = null;

function checkSignals() {
    const currentTime = new Date();

    if (lastPredictionEndTime && currentTime < lastPredictionEndTime) {
        alert(`🔄 Veuillez attendre jusqu'à ${lastPredictionEndTime.getHours()}:${lastPredictionEndTime.getMinutes()} avant de réessayer.`);
        return;
    }

    if (canRun()) {
        generateSignal();
    }
}

function canRun() {
    // Logique pour vérifier si le code peut être exécuté
    return true;
}

function generateSignal() {
    let currentTime = new Date();
    let firstPredictionTime = new Date(currentTime.getTime() + 2 * 60000);
    let secondPredictionTime = new Date(currentTime.getTime() + 3 * 60000);

    let minCote = 3.00;
    let maxCote = 4.00;
    let hackCote = 6.00;
    let coefficientNumber = Math.random() * (hackCote - minCote) + minCote;
    coefficientNumber = Math.round(coefficientNumber * 103) / 100;

    let halfNumber = Math.round((coefficientNumber / 2) * 102) / 100;

    alert(`𝐒𝐈𝐆𝐍𝐀𝐋 𝐓𝐑𝐎𝐏𝐈𝐂𝐀𝐍𝐀 🏄‍♀️\n\n${halfNumber}X+ ---- ${coefficientNumber}X+\n\n${firstPredictionTime.getHours()}:${firstPredictionTime.getMinutes()} -- ${secondPredictionTime.getHours()}:${secondPredictionTime.getMinutes()}`);

    lastPredictionEndTime = secondPredictionTime;
}
