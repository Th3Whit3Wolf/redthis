import PostsColumn from "~/components/Posts/PostsColumn";
import { posts } from "~/data/posts";

export default function Home() {
	return (
		<main class="w-screen">
			<div class="h-screen bg-[#dae0e6] w-full px-6 py-5 my-0 mx-auto flex flex-row align-baseline justify-center">
				<PostsColumn posts={posts} />
				<div class="block ml-6 mt-7 basis-80 w-80">
					<div class="flex flex-col h-full">
						<div class="w-80">
							<div class="overflow-hidden bg-white rounded text-[#1A1A1B] border border-[#ccc] break-words">
								<div class="max-h-none">
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">Popular Communities</div>
									<hr />
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">Gaming</div>
									<hr />
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">Sports</div>
									<hr />
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">TV</div>
									<hr />
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">Travel</div>
									<hr />
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">Health & Fitness</div>
									<hr />
									<div class="p-3 relative text-[10px]/3 tracking-wide font-bold">Fashion</div>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
