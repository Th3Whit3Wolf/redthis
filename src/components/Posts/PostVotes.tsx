import { createSignal, Show } from "solid-js";
import fmtNum from "~/lib/utils/fmtNum";
import ArrowDownIcon from "~icons/ph/arrow-fat-down-bold";
import ArrowUpIcon from "~icons/ph/arrow-fat-up-bold";
import SolidArrowDownIcon from "~icons/ph/arrow-fat-down-fill";
import SolidArrowUpIcon from "~icons/ph/arrow-fat-up-fill";

type PostVotesProps = {
	score: number;
};

export default function PostVotes(props: PostVotesProps) {
	const [voteDir, setVoteDir] = createSignal(0);

	return (
		<div class="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 dark:bg-gray-800  text-gray-400 px-2 py-4 text-2xl">
			<Show
				when={voteDir() === 1}
				fallback={
					<ArrowUpIcon
						onClick={() => setVoteDir(1)}
						class="h-6 w-6 hover:bg-gray-200  rounded-md hover:text-[#cc3700]"
					/>
				}
			>
				<SolidArrowUpIcon onClick={() => setVoteDir(0)} class="h-6 w-6 hover:bg-gray-200 rounded-md text-[#FF4500]" />
			</Show>

			<p class="text-xs font-bold text-black dark:text-gray-50 py-2">{fmtNum(props.score + voteDir())}</p>
			<Show
				when={voteDir() === -1}
				fallback={
					<ArrowDownIcon
						onClick={() => setVoteDir(-1)}
						class="h-6 w-6 hover:bg-gray-200 rounded-md hover:text-[#5a75cc]"
					/>
				}
			>
				<SolidArrowDownIcon
					onClick={() => setVoteDir(0)}
					class="h-6 w-6 hover:bg-gray-200  rounded-md text-[#7193FF]"
				/>
			</Show>
		</div>
	);
}
