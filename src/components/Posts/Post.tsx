import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostVotes from "./PostVotes";

export type PostProps = {
	subreddit: string;
	author: string;
	createdUTC: number;
	title: string;
	body: string;
	permalink: string;
	commentCount: number;
	score: number;
};

export default function Post(props: PostProps) {
	return (
		<div class="flex cursor-pointer rounded-md border border-gray-300 bg-white dark:bg-gray-700 shadow-sm hover:border hover:border-gray-500">
			<PostVotes score={props.score} />
			<div class="flex flex-col pl-2">
				<PostHeader
					inSubreddit={false}
					subreddit={props.subreddit}
					author={props.author}
					createdAt={props.createdUTC}
				/>
				<PostBody permalink={props.permalink} title={props.title} body={props.body} />
				<PostFooter commentCount={props.commentCount} />
			</div>
		</div>
	);
}
