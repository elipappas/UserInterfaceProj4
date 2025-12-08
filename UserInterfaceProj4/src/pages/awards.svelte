<script>
  import { streak } from '../data/userdata.js';

  // Define award milestones
  const milestones = [3, 7, 14, 30];
</script>

<h1>Awards</h1>
<div class="awards-container">
  {#each milestones as milestone}
    <div class="award-badge {$streak >= milestone ? 'earned' : ''}">
      <span>🔥 {milestone}-Day Streak</span>
      {#if $streak >= milestone}
        <span class="check">✔️</span>
      {/if}
    </div>
  {/each}
</div>

<style>
  .awards-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    align-items: center;
  }
  .award-badge {
    background: #222;
    color: #fff;
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0.5;
    border: 2px solid #444;
    min-width: 220px;
    justify-content: space-between;
  }
  .award-badge.earned {
    background: #ffd700;
    color: #222;
    opacity: 1;
    border: 2px solid #ff9800;
  }
  .check {
    font-size: 1.5rem;
  }
</style>
