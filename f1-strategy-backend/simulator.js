const tireModels = {
  soft: { baseLapTime: 88.5, degradationPerLap: 0.15, maxLaps: 15 },
  medium: { baseLapTime: 89.5, degradationPerLap: 0.1, maxLaps: 25 },
  hard: { baseLapTime: 90.5, degradationPerLap: 0.07, maxLaps: 40 }
};

function simulateStint(tireType, laps, fuelLoadStart) {
  const tire = tireModels[tireType];
  const lapTimes = [];
  let fuelLoad = fuelLoadStart;
  for (let lap = 1; lap <= laps; lap++) {
    const fuelImpact = fuelLoad * 0.03;
    const tireWear = tire.degradationPerLap * lap;
    const lapTime = tire.baseLapTime + tireWear + fuelImpact;
    lapTimes.push(lapTime.toFixed(3));
    fuelLoad -= 1.8; // Rough estimate of 1.8 kg/lap fuel burn
  }
  return lapTimes;
}

function simulateStrategy(strategy) {
  let lapCount = 0;
  let allLapTimes = [];
  strategy.forEach(stint => {
    const lapTimes = simulateStint(stint.tire, stint.laps, stint.fuel);
    allLapTimes.push(...lapTimes);
    lapCount += stint.laps;
    if (lapCount < 57) allLapTimes.push((22.0).toFixed(3)); // Pit stop penalty (22s)
  });
  return allLapTimes;
}

module.exports = { simulateStrategy };
