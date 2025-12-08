<script>
  import { onMount } from 'svelte';
  import { username, difficulty } from '../data/userdata.js';

  let profilePic = '/public/default-profile.png'; // Place a default image in public folder
  let fileInput;

  // Load from localStorage on mount
  onMount(() => {
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
      profilePic = savedPic;
    }
  });

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        profilePic = e.target.result;
        localStorage.setItem('profilePic', profilePic);
      };
      reader.readAsDataURL(file);
    }
  }

  function triggerUpload() {
    fileInput.click();
  }
</script>

<h1>Profile</h1>
<div class="profile-container">
  <div class="profile-pic-section">
    <img class="profile-pic" src={profilePic} on:click={triggerUpload} />
    <input type="file" accept="image/*" bind:this={fileInput} on:change={handleFileChange} style="display:none" />
  </div>
  <div class="profile-row">
    <span class="label">Username:</span>
    <span class="value">{$username}</span>
  </div>
  <div class="profile-row">
    <span class="label">Task Difficulty:</span>
    <select bind:value={$difficulty}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
</div>

<style>
  h1 {
    color: white;
  }
  .profile-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
  .profile-pic-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .profile-pic {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    background: #fff;
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
  .profile-pic:hover {
    box-shadow: 0 0 0 4px #ffd70055;
  }
  .profile-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
  }
  .label {
    font-weight: bold;
    min-width: 120px;
  }
  select {
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
</style>
