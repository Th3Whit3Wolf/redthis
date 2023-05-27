import fmtNum from "~/lib/utils/fmtNum";

type PostFooterProps = {
	commentCount: number;
};

export default function PostFooter(props: PostFooterProps) {
	return (
		<div class="flex space-x-4 text-gray-400">
			<div class="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
				<div class="chatBubble h-6 w-6" />
				<p class="">{fmtNum(props.commentCount)} Comments</p>
			</div>
			<div class="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
				<div class="share h-6 w-6" />
				<p class="hidden sm:inline">Share</p>
			</div>
			<div class="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
				<div class="bookmark h-6 w-6" />
				<p class="hidden sm:inline">Save</p>
			</div>
			<div class="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
				<div class="ellipsisHorizontal h-6 w-6" />
			</div>
		</div>
	);
}
