<script>
  import { streak } from '../data/userdata.js';
  const milestones = [3, 7, 14, 30];
  $: nextMilestone = milestones.find(m => $streak < m) || milestones[milestones.length-1];
  $: progress = Math.min($streak / nextMilestone, 1);
</script>

<h1>Streak Tracker</h1>
<div class="streak-info">
  <span class="streak-count">🔥 {$streak} day{$streak === 1 ? '' : 's'}</span>
  <div class="progress-bar">
    <div class="progress" style="width: {progress * 100}%"></div>
  </div>
  <div class="milestone-label">
    Next award: <b>{nextMilestone}</b> days
  </div>
</div>

<style>
  .streak-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
  .streak-count {
    font-size: 2rem;
    color: #ff9800;
    font-weight: bold;
  }
  .progress-bar {
    width: 250px;
    height: 20px;
    background: #eee;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #ff9800;
  }
  .progress {
    height: 100%;
    background: linear-gradient(90deg, #ffd700, #ff9800);
    transition: width 0.3s;
  }
  .milestone-label {
    font-size: 1rem;
    color: #555;
  }
</style>
