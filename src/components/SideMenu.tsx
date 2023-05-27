import { For, JSXElement, createEffect, createSignal, onCleanup } from "solid-js";
import {
	BusinessTopicsItem as BusinessItem,
	CelebrityItems,
	CryptoItems,
	GamingTopicsItems as GamingItems,
	MoreItems,
	SportsTopicsItem as SportsItem,
	TelevisionItems
} from "~/data/menuItems";

type SideMenuItemProps = {
	href: string;
	icon: JSXElement;
	title: string;
};

type SideMenuSectionProps = {
	title: string;
	items: Array<SideMenuItemProps>;
};

type CollapsibleItemProps = {
	href: string;
	title: string;
};

type DropDownMenuProps = {
	name: string;
	icon: JSXElement;
	items: Array<CollapsibleItemProps>;
};

const feedsSection = {
	title: "FEEDS",
	items: [
		{
			href: "/?feed=home",
			icon: <div class="home font-normal text-xl/5" />,
			title: "Home"
		},
		{
			href: "/r/popular",
			icon: <div class="Popular font-normal text-xl/5" />,
			title: "Popular"
		}
	]
};

const recentSection = {
	title: "RECENT",
	items: [
		{
			href: "/r/node",
			icon: (
				<img
					style="background-color: rgb(0, 121, 211);"
					alt="Subreddit Icon"
					role="presentation"
					src="https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png"
					class="rounded-full h-5 w-5"
				/>
			),
			title: "r/node"
		},
		{
			href: "/r/rust",
			icon: (
				<img
					style="background-color: rgb(255, 141, 58);"
					alt="Subreddit Icon"
					role="presentation"
					src="https://styles.redditmedia.com/t5_2s7lj/styles/communityIcon_pjg3ktzyju771.png?width=256&amp;v=enabled&amp;s=4bb4d83f03580b0ea59a93521f99409111eb0d13"
					class="rounded-full h-5 w-5"
				/>
			),
			title: "r/rust"
		},
		{
			href: "/r/ProgrammerHumor",
			icon: (
				<img
					style="background-color: rgb(255, 69, 0);"
					alt="Subreddit Icon"
					role="presentation"
					src="https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png?width=256&amp;v=enabled&amp;s=6dde224e83c34360a937cb086aa256c4a7fb3812"
					class="rounded-full h-5 w-5"
				/>
			),
			title: "r/ProgrammerHumor"
		}
	]
};

const TopicsMenuSections = [
	{
		name: "Gaming",
		icon: <div class="gaming font-normal text-xl/5 h-5 w-5" />,
		items: GamingItems
	},
	{
		name: "Sports",
		icon: <div class="sports font-normal text-xl/5 h-5 w-5" />,
		items: SportsItem
	},
	{
		name: "Business, Economics, and Finance",
		icon: <div class="business font-normal text-xl/5 h-5 w-5" />,
		items: BusinessItem
	},
	{
		name: "Crypto",
		icon: <div class="crypto font-normal text-xl/5 h-5 w-5" />,
		items: CryptoItems
	},
	{
		name: "Television",
		icon: <div class="tv font-normal text-xl/5 h-5 w-5" />,
		items: TelevisionItems
	},
	{
		name: "Celebrity",
		icon: <div class="star font-normal text-xl/5 h-5 w-5" />,
		items: CelebrityItems
	},
	{
		name: "More Topics",
		icon: <div class="dots font-normal text-xl/5 h-5 w-5" />,
		items: MoreItems
	}
];

const SideMenuItem = (props: SideMenuItemProps) => {
	return (
		<a
			href={props.href}
			class="pl-6 py-2 flex flex-row align-center text-sm leading-[1.125rem] font-medium relative hover:bg-gray-100 text-[#1C1C1C]"
		>
			{props.icon}
			<span class="ml-2 text-sm leading-[1.125rem] overflow-hidden grow text-left text-ellipsis whitespace-nowrap max-width-[13rem]">
				{props.title}
			</span>
		</a>
	);
};

const SideMenuSection = (props: SideMenuSectionProps) => {
	return (
		<>
			<h3 class="px-6 pt-2 pb-2 font-medium text-[10px]/6 text-[#878A8C]">{props.title}</h3>
			<ul>
				<For each={props.items}>
					{(item) => (
						<li>
							<SideMenuItem href={item.href} icon={item.icon} title={item.title} />
						</li>
					)}
				</For>
			</ul>
		</>
	);
};

const Collapsible = (props: DropDownMenuProps) => {
	const [isOpen, setIsOpen] = createSignal(false);
	let contentRef: HTMLDivElement | undefined;

	function toggleCollapsible() {
		setIsOpen(!isOpen());
	}

	onCleanup(() => {
		// Reset height to auto on component cleanup
		if (contentRef) {
			contentRef.style.height = "auto";
		}
	});

	createEffect(() => {
		// Update height on isOpen change
		if (contentRef) {
			contentRef.style.height = isOpen() ? `${contentRef.scrollHeight}px` : "0";
		}
	});

	return (
		<div class="w-[16.875rem]">
			<button
				type="button"
				onClick={toggleCollapsible}
				class="flex items-center justify-between w-[16.875rem] text-sm font-medium text-gray-700 hover:bg-gray-100 bg-white focus:outline-none transition-all duration-300"
			>
				<div class="px-4 py-2 flex flex-row align-center text-sm leading-[1.125rem] font-medium relative  text-[#1C1C1C]">
					<div class="ml-2 h-5 w-5">{props.icon}</div>
					<span class="ml-2 px-1 my-auto text-sm leading-[1.125rem] overflow-hidden grow align-middle text-left text-ellipsis whitespace-nowrap w-[11.15rem] ">
						{props.name}
					</span>

					<div class="downChevron flex justify-end h-6 w-6 mt-1" />
				</div>
			</button>
			<div ref={contentRef} class="overflow-hidden transition-all duration-300">
				<For each={props.items}>
					{(item) => (
						<a
							href={item.href}
							class="h-9 px-6 py-2 flex flex-row align-center text-sm leading-[1.125rem] font-medium relative hover:bg-gray-100 text-[#1C1C1C]"
						>
							<span class="ml-2 text-sm leading-[1.125rem] overflow-hidden grow text-left text-ellipsis whitespace-nowrap max-width-[13rem] text-ellipsis">
								{item.title}
							</span>
						</a>
					)}
				</For>
			</div>
		</div>
	);
};

const TopicsMenuSection = () => {
	return (
		<>
			<h3 class="px-6 pt-2 pb-2 font-medium text-[10px]/6 text-[#878A8C]">TOPICS</h3>
			<ul>
				<For each={TopicsMenuSections}>{(menu) => <Collapsible {...menu} />}</For>
			</ul>
		</>
	);
};

export default function SideMenu() {
	return (
		<section class="w-[16.875rem] flex flex-col bg-white">
			<SideMenuSection {...feedsSection} />
			<SideMenuSection {...recentSection} />
			<TopicsMenuSection />
		</section>
	);
}
