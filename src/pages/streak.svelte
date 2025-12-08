<script>
  import { log, getStreak } from '../data/userdata.js';
  let logData = [];
  const unsubscribe = log.subscribe(value => { logData = value; });
  import { onMount } from 'svelte';
  onMount(() => unsubscribe);
  $: currentStreak = getStreak(logData);
</script>

<h1>Streak Tracker</h1>
<div class="streak-banner">Current Streak: {currentStreak} day{currentStreak === 1 ? '' : 's'}</div>

<h2>Task Log</h2>
<div class="log-table-area">
  <div class="log-table-wrapper">
    <table class="log-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {#each logData as entry (entry.date)}
          <tr>
            <td>{entry.date}</td>
            <td>{entry.task}</td>
            <td>{entry.completed ? '✅' : '❌'}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  h1 {
    color: white;
    margin-bottom: 1rem;
  }
  .streak-banner {
    font-size: 1.3rem;
    color: #ffd700;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .log-table-area {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: transparent;
    box-sizing: border-box;
  }
  .log-table-wrapper {
    flex: 1 1 auto;
    overflow-y: auto;
    max-height: 350px;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0002;
    margin-bottom: 2rem;
    background: transparent;
  }
  .log-table {
    width: 100%;
    border-collapse: collapse;
    background: #222;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
  }
  .log-table th, .log-table td {
    padding: 0.7em 1em;
    border-bottom: 1px solid #444;
    text-align: left;
  }
  .log-table th {
    background: #333;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .log-table tr:last-child td {
    border-bottom: none;
  }
</style>
