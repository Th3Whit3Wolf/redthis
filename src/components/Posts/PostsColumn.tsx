import { For } from "solid-js/web";
import Post, { type PostProps } from "./Post";

type PostsColumnProps = {
	posts: Array<PostProps>;
};

export default function PostsColumn(props: PostsColumnProps) {
	return (
		<div class="w-[40rem] min-w-0 mt-7">
			<div class="min-h-[62.5rem] w-full space-y-4">
				<For each={props.posts}>{(post) => <Post {...post} />}</For>
			</div>
		</div>
	);
}
