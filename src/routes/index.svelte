<svelte:head><title>Home</title></svelte:head>

<script>
    import ProjectItem from "../components/projectItem.svelte"
</script>

<div class="flex flex-row">
    <div class="w-1/4 p-3 flex flex-col gap-8">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="/slots" class="w-full btn btn-primary">Slots</a>
    </div>
    <div class="w-3/4 flex flex-col gap-8 flex items-center border-l border-accent p-3">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="flex flex-col gap-4">
            <h1>My Other Projects</h1>
            <!--Create a class that incoperates all my other projects.-->
            <div class="flex flex-row gap-4"><ProjectItem/><ProjectItem/></div>
            <div class="flex flex-row gap-4"><ProjectItem/><ProjectItem/></div>
        </div>
    </div>
</div>