import { writable } from 'svelte/store';

const today = new Date();
today.setHours(0, 0, 0, 0);
const makeDay = offset => {
  const d = new Date(today);
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

// Hardcoded fake log: 3 completed past days (today is added by the app)
export const initialLog = [
  { date: makeDay(-3), task: 'compliment a friend', completed: true },
  { date: makeDay(-2), task: 'text someone', completed: true },
  { date: makeDay(-1), task: "ask for someone's name", completed: true }
];

export const log = writable(initialLog);

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

function updateLog(completed) {
  // Remove any existing entry for today
  let filtered = logData.filter(entry => entry.date !== todayISO);
  // Add new entry for today
  filtered.push({ date: todayISO, task: task_of_day, completed });
  // Sort by date ascending
  filtered = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  log.set(filtered);
}