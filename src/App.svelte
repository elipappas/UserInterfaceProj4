<script>
  import Router from "svelte-spa-router";
  import Navbar from "./pages/navbar.svelte";
  import Home from './pages/home.svelte';
  import Profile from "./pages/profile.svelte";
  import Friends from "./pages/friends.svelte";
  import Awards from "./pages/awards.svelte";
  import Streak from "./pages/streak.svelte";
    //our views here
  const routes = {
    '/': Home,
    '/profile': Profile,
    '/friends': Friends,
    '/awards': Awards,
    '/streak': Streak
  };
</script>



<main class="content">
  <Router {routes}/>
</main>

<Navbar/>

