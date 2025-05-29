# 🏍️ F1 Pit Stop Strategy Simulator (Angular + Node.js)

A web-based simulator to visualize Formula 1 race strategies including tire degradation, fuel weight impact, and pit stop penalties. Built using Angular 18 and Node.js.

## 🔧 Features
- Lap-by-lap simulation based on stints
- Tire compound modeling (soft, medium, hard)
- Fuel burn and time impact
- Pit stop penalty calculation
- Dynamic strategy form input
- Lap time chart visualization
- Angular 18 frontend
- Node.js API backend

## 💠 Tech Stack
- **Frontend**: Angular 18, TypeScript, ng2-charts
- **Backend**: Node.js, Express

## 🚀 Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/f1-pit-stop-strategy-simulator.git
cd f1-pit-stop-strategy-simulator
npm install
node server.js

# Open a new terminal:
cd f1-strategy-frontend
npm install
ng serve
```

Access the app at: `http://localhost:4200`

## 🧲 Example Strategy
```json
[
  { "tire": "soft", "laps": 15, "fuel": 40 },
  { "tire": "medium", "laps": 20, "fuel": 36 },
  { "tire": "hard", "laps": 22, "fuel": 32 }
]
```

## 🚣 Roadmap
- [x] Angular UI for simulation
- [x] Dynamic strategy form builder
- [x] Lap time chart visualization
- [ ] Docker deployment

## 📄 License
MIT
