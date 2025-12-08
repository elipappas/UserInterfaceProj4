<script>
    import { friends } from "../data/userdata.js";
</script>
<div>
    <h1>Friends List</h1>
    <ul>
        {#each friends as friend}
            <li>
                <span class="friend-name">{friend.name}</span>
                <span class="friend-streak">{friend.streak} 🔥</span>
            </li>
        {/each}
    </ul>
</div>
<style>
    h1 {    
        color: white;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        background-color: #333;
        margin: 5px 0;
        padding: 10px;
        border-radius: 5px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .friend-name {
        font-weight: bold;
    }
    .friend-streak {
        font-size: 1.1rem;
        color: #ffd700;
        margin-left: 1rem;
    }
</style>