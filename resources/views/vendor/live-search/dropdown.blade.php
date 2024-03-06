<div class="relative z-10">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <!-- Heroicon name: search -->
        <svg class="w-5 h-5 text-zinc-300 z-10 dark:text-zinc-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </div>
    <input wire:model="q" id="search" name="search" autocomplete="off" class="relative block w-full py-2 pl-10 pr-3 text-sm bg-transparent border rounded-full placeholder-zinc-500 border-zinc-200 focus:border-zinc-500 focus:ring-zinc-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 sm:text-sm" placeholder="Search" type="search">

    @if ($q)
        <div class="absolute w-full mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-zinc-800 ring-1 ring-black ring-opacity-5">
            <div class="py-1 text-sm text-zinc-700 dark:text-zinc-300">
                @forelse($results as $result)
                    <a href="{{ $result['url'] }}" class="block px-4 py-2 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-zinc-100">{{ $result['title'] }}</a>
                @empty
                    <div class="block px-4 py-2">No results found</div>
                @endforelse
            </div>
        </div>
    @endif
</div>
