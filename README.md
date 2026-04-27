# RepArch

RepArch is a fitness-focused application that helps users choose better exercises and find intelligent substitutes based on real-world gym scenarios.

Instead of dumping hundreds of exercises, RepArch uses a curated dataset ranked by effectiveness (S → F tiers). This allows the app to recommend better alternatives when equipment isn’t available or when users want higher-quality movements.

---

## Features

* Curated exercise database (no noisy API data)
* Tier-based ranking system (S, A, B, C, D, F)
* Muscle group + subgroup classification
* Smart substitution engine
* Equipment-aware recommendations
* REST API backend
* Flutter mobile app (in progress)

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Mobile

* Flutter
* Dart

---

## Project Structure

```
RepArch/
├── reparch-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seed/
│   │   └── server.js
│   └── package.json
│
├── reparch-mobile/
│   └── flutter/
```

---

## Getting Started

### 1. Backend Setup

```bash
cd reparch-backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection
PORT=3000
```

Run the server:

```bash
npm run dev
```

---

### 2. Seed Database

```bash
node src/seed/seedCurated.js
```

This will insert curated exercises with:

* muscle group
* subgroup
* tier
* equipment

---

### 3. API Endpoints

#### Get all exercises

```
GET /exercises
```

#### Filter exercises

```
GET /exercises?muscleGroup=Chest&tier=S,A,B
```

#### Get substitutes

```
GET /exercises/substitute?name=Barbell Bench Press
```

#### Equipment-based substitution

```
GET /exercises/substitute?name=Barbell Bench Press&equipment=dumbbell
```

---

## Flutter App (Setup)

```bash
cd reparch-mobile/flutter
flutter pub get
flutter run
```

> Note: Make sure Flutter is installed and available in PATH.

For Android emulator:

```
http://10.0.2.2:3000
```

---

## How It Works

RepArch does not rely on external APIs for exercise logic.

Instead:

1. Exercises are manually curated and ranked
2. Each exercise is tagged with:

   * muscle group
   * subgroup
   * tier
   * equipment
3. Substitution logic filters:

   * same muscle group
   * same subgroup
   * available equipment
   * best tiers first

This makes recommendations more reliable and practical.

---

## Future Improvements

* Workout generator (Push/Pull/Legs)
* User preferences (home gym, beginner, etc.)
* Exercise images / GIF integration
* Progress tracking
* Smarter ranking system

---

## Notes

This project focuses on **quality over quantity**.
The goal is to simulate how a knowledgeable coach would recommend exercises, not just list them.

---

## Author

Built as a full-stack learning + product-focused project.

---
