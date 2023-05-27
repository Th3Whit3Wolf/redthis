type SubredditHeaderProps = {
	title: string;
	path: string;
	color1: string;
	color2: string;
	joinColor: string;
};

function SubredditHeader(props: SubredditHeaderProps) {
	return (
		<header class="w-full">
			<div class="flex flex-col">
				<span class="h-20" style={{ "background-color": props.color1 }} />
				<div class="h-24 w-full" style={{ "background-color": props.color2 }}>
					<div class="flex flex-col items-start justify-between pl-6 pr-4 max-w-5xl mx-auto">
						<div class="flex -mt-4 mb-3">
							<img
								style="background-color: rgb(0, 121, 211);"
								alt={`${props.path}'s icon`}
								role="presentation"
								src="https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png"
								class="border border-white border-4 rounded-full h-20 w-20"
							/>
							<div class="inline-flex items-start mt-6 pl-4">
								<div class="flex flex-col mr-6">
									<h1 class="text-black text-3xl font-bold pr-[0.125rem] pb-1">{props.title}</h1>
									<h2 class="text-gray-500 text-sm font-medium">{props.path}</h2>
								</div>
								<button
									type="button"
									class="text-white px-4 py-1.5 mt-1 rounded-full text-sm font-bold justify-center w-24"
									style={{ "background-color": props.joinColor }}
								>
									Join
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default SubredditHeader;
