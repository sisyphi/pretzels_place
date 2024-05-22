<script>
	import Menu from "$lib/icons/Menu.svelte";

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    $: mobileMenuClasses = isMenuOpen ? "flex flex-col w-full" : "hidden"
</script>

<header class="bg-brown">
    <nav class="flex flex-wrap justify-between mx-auto text-xl font-bold text-center max-w-7xl md:flex-nowrap font-poppins text-offwhite">
        <div class="flex m-4 text-center">
            <img src="" alt="Pretzel's Place">
        </div>
        <div class="flex m-4 md:hidden">
            <button on:click={toggleMenu}>
                <Menu class="size-8"></Menu>
            </button>
        </div>
        <div class="{mobileMenuClasses} md:flex md:w-auto">
            <ul class="text-left md:gap-8 md:m-8 md:flex md:flex-row">
                <li class="mx-4 mb-4 md:m-auto"><a on:click={() => isMenuOpen = false} href="/" class="hover:underline">Home</a></li>
                <li class="mx-4 my-4 md:m-auto"><a on:click={() => isMenuOpen = false} href="/about-us" class="hover:underline">About Us</a></li>
                <li class="mx-4 my-4 md:m-auto"><a on:click={() => isMenuOpen = false} href="/our-cats" class="hover:underline">Our Cats</a></li>
                <li class="mx-4 my-4 md:m-auto text-orange"><a on:click={() => isMenuOpen = false} href="/donation" class="hover:underline">Help Out!</a></li>
            </ul>
        </div>
    </nav>
</header>