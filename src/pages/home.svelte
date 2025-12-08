<script>
  import { onMount } from "svelte";
  import { easy_task_list, medium_task_list, hard_task_list, difficulty, username, task_completed_today, log, getStreak } from "../data/userdata.js";

  const todayISO = new Date().toISOString().slice(0, 10);
  let task_of_day = "";
  let lastTaskDate = "";

  let logData = [];
  const unsubscribe = log.subscribe(value => { logData = value; });
  onMount(() => unsubscribe);

  function pickTask(diff) {
    let list = diff === "easy" ? easy_task_list : diff === "medium" ? medium_task_list : hard_task_list;
    return list[Math.floor(Math.random() * list.length)];
  }

  function setTaskForToday(diff) {
    task_of_day = pickTask(diff);
    lastTaskDate = todayISO;
    localStorage.setItem("task_of_day", task_of_day);
    localStorage.setItem("task_date", todayISO);
    localStorage.setItem("task_difficulty", diff);
    task_completed_today.set(false); // Reset completion when new task is set
  }

  onMount(() => {
    const storedDate = localStorage.getItem("task_date");
    const storedTask = localStorage.getItem("task_of_day");
    const storedDiff = localStorage.getItem("task_difficulty") || $difficulty;
    if (storedDate === todayISO && storedTask && storedDiff === $difficulty) {
      task_of_day = storedTask;
      lastTaskDate = storedDate;
    } else {
      setTaskForToday($difficulty);
    }
  });

  $: if ($difficulty && lastTaskDate === todayISO && localStorage.getItem("task_difficulty") !== $difficulty) {
    setTaskForToday($difficulty);
  }


  function updateLog(completed) {
    // Remove any existing entry for today
    let filtered = logData.filter(entry => entry.date !== todayISO);
    // Add new entry for today
    filtered.push({ date: todayISO, task: task_of_day, completed });
    // Sort by date ascending
    filtered = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    log.set(filtered);
  }

  function toggleTask() {
    task_completed_today.update(value => {
      const newValue = !value;
      updateLog(newValue);
      return newValue;
    });
  }

  $: streakValue = getStreak(logData);
</script>

<div>
  <h2>{todayISO}</h2>
  <h1 class="task" class:completed={$task_completed_today}>
    <input
      type="checkbox"
      class="checkbox"
      checked={$task_completed_today}
      on:change={toggleTask}
    />
    {task_of_day}
  </h1>
  <div class="streak-display">Streak: {streakValue} day{streakValue === 1 ? '' : 's'}</div>
</div>

<style>
  h1 {
    color: white;
  }

  .checkbox {
    width: 30px;
    height: 30px;
    margin-right: 10px; /* Add spacing between checkbox and text */
  }

  .task {
    display: flex;
    align-items: center;
  }

  .task.completed {
    text-decoration: line-through;
    color: gray;
  }

  .streak-display {
    margin-top: 1rem;
    color: #ffd700;
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>