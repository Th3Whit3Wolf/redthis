import SearchIcon from "~icons/material-symbols/search-rounded";

export default function SearchBar() {
	return (
		<div class="mx-auto mt-0 grow h-12">
			<div class="mx-4 my-1 w-auto h-auto relative">
				<form class="flex flex-1 items-center space-x-2 rounded-full border border-gray-200 bg-gray-100 focus:bg-white px-3 py-1 mr-2 h-10">
					<SearchIcon class="h-5 w-h-6 w-6 text-gray-400" />
					<input class="flex-1 bg-transparent outline-none" type="text" placeholder="Search Reddit" />
					<button type="submit" hidden />
				</form>
			</div>
		</div>
	);
}
