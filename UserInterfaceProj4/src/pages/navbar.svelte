<script>
    import Icon from '@iconify/svelte';
</script>

<div class="nav-streak">
    <a href="#/streak">
        <Icon icon="lucide:flame" width="50" height="50"/>
    </a>
</div>

<div class="nav-profile">
    <a href="#/profile">
        <Icon icon="lucide:user" width="50" height="50"/>
    </a>
</div>

<div class="bottom-center">
    <div class="nav-item">  
        <a href="#/">
            <Icon icon="lucide:home" width="50" height="50"/>
            <p>Home</p>
        </a>
    </div>
    <div class="nav-item">  
        <a href="#/friends">
            <Icon icon="lucide:users" width="50" height="50"/>
            <p>Friends</p>
        </a>
    </div>
    <div class="nav-item">  
        <a href="#/awards">
            <Icon icon="lucide:trophy" width="50" height="50"/>
            <p>Awards</p>
        </a>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
    }

    /* Top-left streak */
    .nav-streak {
        position: fixed;
        top: 1rem;
        left: 1rem;
        display: grid;
        justify-items: start;
        align-items: center;
        background: transparent;
    }

    /* Top-right profile */
    .nav-profile {
        position: fixed;
        top: 1rem;
        right: 1rem;
        display: grid;
        justify-items: end;
        align-items: center;
        background: transparent;
    }

    /* Bottom centered trio */
    .bottom-center {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 1rem;
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0.5rem;
        background: transparent;
    }

    .nav-item {
        display: grid;
        justify-items: center;
        text-align: center;
    }

    a {
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
    }

    .nav-streak a, .nav-profile a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
    }

    p{
        margin: 0;
        line-height: 1;
    }

    /* Make sure these controls don't block underlying content interaction too much */
    .nav-streak, .nav-profile, .bottom-center {
        z-index: 1000;
    }

    /* Responsive: reduce gap on small screens */
    @media (max-width: 420px) {
        .bottom-center { gap: 1rem; }
    }
</style>
