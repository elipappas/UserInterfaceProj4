import {writable} from 'svelte/store';

let username = "elipappas";
export const streak = writable(5);
let date = new Date().toLocaleDateString();

let easy_task_list = ["compliment a friend", "text someone", "ask for someone's name", "make eye contact with one person", "smile at someone in passing"];
let medium_task_list = ["ask someone a simple question", "compliment a stranger", "have a 5 minute conversation with a coworker", "introduce yourself to someone new"];
let hard_task_list = ["attend a social gathering", "speak up at a meeting ", "call someone you haven't heard from in a while"];

let days_completed = [];
export let task_completed_today = writable(false);

// Add a writable store for difficulty
export const difficulty = writable('easy');

// Mock friend streaks for demo
const friends = [
    { name: 'tom', streak: 5 },
    { name: 'jerry', streak: 2 },
    { name: 'alice', streak: 10 },
    { name: 'bob', streak: 0 },
    { name: 'charlie', streak: 7 }
];

function addCompletedDay(newDate) {
    days_completed = [...days_completed, newDate];
}

function endStreak() {
    streak.set(0);
}

function incrementStreak() {
    streak.update(n => n + 1);
}

function decrementStreak() {
    streak.update(n => (n > 0 ? n - 1 : 0));
}

export { username, easy_task_list, medium_task_list, hard_task_list, date, days_completed, friends };
export { addCompletedDay, endStreak, incrementStreak, decrementStreak };