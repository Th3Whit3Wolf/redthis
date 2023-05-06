import { Show } from "solid-js";

type PostHeaderProps = {
	inSubreddit: boolean;
	subreddit: string;
	author: string;
	createdAt: number;
};

const timeUnits = ["year", "month", "day", "hour", "minute", "second"];

const fmtTime = (postedAt: number): string => {
	const now = new Date();
	const timePassed: number = now.valueOf() - postedAt;

	let value = 0;
	let units = 0;
	if (timePassed > 31536000000) {
		value = timePassed / 31536000000;
	} else if (timePassed > 2592000000) {
		value = timePassed / 2592000000;
		units = 1;
	} else if (timePassed > 86400000) {
		value = timePassed / 86400000;
		units = 2;
	} else if (timePassed > 3600000) {
		value = timePassed / 3600000;
		units = 3;
	} else if (timePassed > 60000) {
		value = timePassed / 60000;
		units = 4;
	} else {
		value = timePassed / 1000;
		units = 5;
	}

	value = Math.round(value);

	return ` ${value} ${timeUnits[units]}${value !== 1 ? "s" : ""} ago`;
};

export default function PostHeader(props: PostHeaderProps) {
	return (
		<div class="flex items-center space-x-2">
			<p class="text-xs text-[#7C787E] pt-2">
				<Show when={!props.inSubreddit}>
					<a href={`/r/${props.subreddit}`}>
						<span class="font-bold text-[#1c1c1c] dark:text-gray-300 hover:text-blue-400 hover:underline">
							r/{props.subreddit}
						</span>{" "}
					</a>
					·{" "}
				</Show>
				Posted by{" "}
				<a href={`/user/${props.author}`}>
					<span class="hover:underline">u/{props.author}</span>
				</a>
				{fmtTime(props.createdAt)}
			</p>
		</div>
	);
}
