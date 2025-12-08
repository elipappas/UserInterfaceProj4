<script>
  import { onMount } from "svelte";
  import { easy_task_list, medium_task_list, hard_task_list, difficulty, username, date, days_completed, task_completed_today, addCompletedDay, incrementStreak, streak, decrementStreak } from "../data/userdata.js";

  let task_of_day = "";
  let lastTaskDate = "";

  function pickTask(diff) {
    let list = diff === "easy" ? easy_task_list : diff === "medium" ? medium_task_list : hard_task_list;
    return list[Math.floor(Math.random() * list.length)];
  }

  function setTaskForToday(diff) {
    task_of_day = pickTask(diff);
    lastTaskDate = date;
    localStorage.setItem("task_of_day", task_of_day);
    localStorage.setItem("task_date", date);
    localStorage.setItem("task_difficulty", diff);
    if ($task_completed_today === true) {
      decrementStreak();
    }
    task_completed_today.set(false); // Reset completion when new task is set
  }

  onMount(() => {
    const storedDate = localStorage.getItem("task_date");
    const storedTask = localStorage.getItem("task_of_day");
    const storedDiff = localStorage.getItem("task_difficulty") || $difficulty;
    if (storedDate === date && storedTask && storedDiff === $difficulty) {
      task_of_day = storedTask;
      lastTaskDate = storedDate;
    } else {
      setTaskForToday($difficulty);
    }
  });

  $: if ($difficulty && lastTaskDate === date && localStorage.getItem("task_difficulty") !== $difficulty) {
    setTaskForToday($difficulty);
  }

  function toggleTask() {
    task_completed_today.update(value => {
      if (!value) {
        addCompletedDay(date);
        incrementStreak();
        return true;
      } else {
        return false;
      }
    });
  }
</script>

<div>
  <h2>{date}</h2>
  <h1 class="task" class:completed={$task_completed_today}>
    <input
      type="checkbox"
      class="checkbox"
      checked={$task_completed_today}
      on:change={toggleTask}
    />
    {task_of_day}
  </h1>
  <div class="streak-display">Streak: {$streak} days</div>
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