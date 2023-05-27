type PostBodyProps = {
	permalink: string;
	title: string;
	body: string;
};

export default function PostBody(props: PostBodyProps) {
	return (
		<div class="py-4">
			<a href={props.permalink}>
				{" "}
				<h2 class="text-xl font-semibold text-[#222222] dark:text-gray-300">{props.title}</h2>
			</a>
			<p class="mt-2 pb-1 text-sm font-normal leading-[21px] align-baseline break-words text-[#1c1c1c] dark:text-gray-300">
				{props.body}
			</p>
		</div>
	);
}
