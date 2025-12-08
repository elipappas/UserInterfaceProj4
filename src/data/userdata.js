import { writable } from 'svelte/store';

// Log initialization with auto-reset of the last 4 days
const today = new Date();
today.setHours(0,0,0,0);
const todayStr = today.toISOString().slice(0,10);
const d1 = new Date(today); d1.setDate(d1.getDate() - 1);
const d2 = new Date(today); d2.setDate(d2.getDate() - 2);
const d3 = new Date(today); d3.setDate(d3.getDate() - 3);
const d1Str = d1.toISOString().slice(0,10);
const d2Str = d2.toISOString().slice(0,10);
const d3Str = d3.toISOString().slice(0,10);

let storedLog = [];
try {
  const fromStorage = localStorage.getItem('task_log');
  if (fromStorage) {
    storedLog = JSON.parse(fromStorage);
  }
} catch (e) {
  storedLog = [];
}

// Ensure the last 3 days are completed and today is incomplete
function normalizeRecentLog(entries) {
  const byDate = new Map(entries.map(e => [e.date, e]));

  const ensureEntry = (dateStr, completedDefault) => {
    const existing = byDate.get(dateStr);
    if (existing) {
      existing.completed = completedDefault;
      return existing;
    }
    return { date: dateStr, task: '', completed: completedDefault };
  };

  const normalized = [
    ensureEntry(d3Str, true),
    ensureEntry(d2Str, true),
    ensureEntry(d1Str, true),
    ensureEntry(todayStr, false)
  ];

  // Keep any other historical entries
  for (const e of entries) {
    if (![d3Str, d2Str, d1Str, todayStr].includes(e.date)) {
      normalized.push(e);
    }
  }

  // Sort by date
  normalized.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return normalized;
}

const initialLog = normalizeRecentLog(storedLog);
export const log = writable(initialLog);

// Always update localStorage when log changes
log.subscribe(value => {
  localStorage.setItem('task_log', JSON.stringify(value));
});

// Utility: calculate current streak
export function getStreak(logArr) {
  if (!logArr.length) return 0;

  const logMap = {};
  for (const entry of logArr) {
    logMap[entry.date] = entry.completed;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let streak = 0;

  // 1) Base streak: walk back starting from yesterday
  const cursor = new Date(today);
  cursor.setDate(cursor.getDate() - 1); // start at yesterday
  while (true) {
    const dateStr = cursor.toISOString().slice(0, 10);
    if (logMap[dateStr]) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  // 2) Add today only if completed
  const todayStr = today.toISOString().slice(0, 10);
  if (logMap[todayStr]) {
    streak++;
  }

  return streak;
}

export const username = writable("elipappas");
export const date = new Date().toLocaleDateString();

export const easy_task_list = [
  "compliment a friend",
  "text someone",
  "ask for someone's name",
  "make eye contact with one person",
  "smile at someone in passing"
];
export const medium_task_list = [
  "ask someone a simple question",
  "compliment a stranger",
  "have a 5 minute conversation with a coworker",
  "introduce yourself to someone new"
];
export const hard_task_list = [
  "attend a social gathering",
  "speak up at a meeting ",
  "call someone you haven't heard from in a while"
];

export const task_completed_today = writable(false);
export const difficulty = writable('easy');

export const friends = [
  { name: 'tom', streak: 5 },
  { name: 'jerry', streak: 2 },
  { name: 'alice', streak: 10 },
  { name: 'bob', streak: 0 },
  { name: 'charlie', streak: 7 }
];