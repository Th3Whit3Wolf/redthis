import { createSignal, Show } from "solid-js";
import fmtNum from "~/lib/utils/fmtNum";

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
					<div
						onClick={() => setVoteDir(1)}
						onKeyDown={() => setVoteDir(1)}
						class="upVote h-6 w-6 hover:bg-gray-200  rounded-md hover:text-[#cc3700]"
					/>
				}
			>
				<div
					onClick={() => setVoteDir(0)}
					onKeyDown={() => setVoteDir(0)}
					class="upVoteSolid h-6 w-6 hover:bg-gray-200 rounded-md text-[#FF4500]"
				/>
			</Show>

			<p class="text-xs font-bold text-black dark:text-gray-50 py-2">{fmtNum(props.score + voteDir())}</p>
			<Show
				when={voteDir() === -1}
				fallback={
					<div
						onClick={() => setVoteDir(-1)}
						onKeyDown={() => setVoteDir(-1)}
						class="downVote h-6 w-6 hover:bg-gray-200 rounded-md hover:text-[#5a75cc]"
					/>
				}
			>
				<div
					onClick={() => setVoteDir(0)}
					onKeyDown={() => setVoteDir(0)}
					class="downVoteSolid h-6 w-6 hover:bg-gray-200  rounded-md text-[#7193FF]"
				/>
			</Show>
		</div>
	);
}
