import { JSXElement, For, createSignal } from "solid-js";
import { Collapsible } from "@kobalte/core";
import ChevronDownIcon from "~icons/carbon/chevron-down";
import GamingIcon from "~icons/ph/game-controller";
import SportsIcon from "~icons/ph/baseball-light";
import BusinessIcon from "~icons/ph/chart-line-up-light";
import CryptoIcon from "~icons/icon-park-outline/blockchain";
import TelevisionIcon from "~icons/ph/television";
import CelebrityIcon from "~icons/ph/star-light";
import MoreTopicsIcon from "~icons/mdi/dots-horizontal-circle-outline";

import HomeIcon from "~icons/ph/house";
import PopularIcon from "~icons/ph/arrow-circle-up-right";
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
			icon: <HomeIcon class="font-normal text-xl/5" />,
			title: "Home"
		},
		{
			href: "/r/popular",
			icon: <PopularIcon class="font-normal text-xl/5" />,
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
		icon: <GamingIcon class="font-normal text-xl/5" />,
		items: GamingItems
	},
	{
		name: "Sports",
		icon: <SportsIcon class="font-normal text-xl/5" />,
		items: SportsItem
	},
	{
		name: "Business, Economics, and Finance",
		icon: <BusinessIcon class="font-normal text-xl/5" />,
		items: BusinessItem
	},
	{
		name: "Crypto",
		icon: <CryptoIcon class="font-normal text-xl/5" />,
		items: CryptoItems
	},
	{
		name: "Television",
		icon: <TelevisionIcon class="font-normal text-xl/5" />,
		items: TelevisionItems
	},
	{
		name: "Celebrity",
		icon: <CelebrityIcon class="font-normal text-xl/5" />,
		items: CelebrityItems
	},
	{
		name: "More Topics",
		icon: <MoreTopicsIcon class="font-normal text-xl/5" />,
		items: MoreItems
	}
];

const SideMenuItem = (props: SideMenuItemProps) => {
	return (
		<a
			href={props.href}
			class="px-6 py-2 flex flex-row align-center text-sm leading-[1.125rem] font-medium relative hover:bg-gray-100 text-[#1C1C1C]"
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
			<h3 class="px-6 pt-4 pb-2 font-medium text-[10px]/6 text-[#878A8C]">{props.title}</h3>
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

const DropDownMenu = (props: DropDownMenuProps) => {
	return (
		<Collapsible.Root class="collapsible">
			<Collapsible.Trigger class="w-full collapsible__trigger ">
				<div class="px-6 py-2 flex flex-row align-center text-sm leading-[1.125rem] font-medium relative hover:bg-gray-100 text-[#1C1C1C]">
					<div class="h-5 w-5">{props.icon}</div>
					<span class="ml-2 my-auto text-sm leading-[1.125rem] overflow-hidden grow align-middle text-left text-ellipsis whitespace-nowrap w-[10rem] ">
						{props.name}
					</span>

					<ChevronDownIcon class="flex justify-end h-5 w-5 collapsible__trigger-icon" />
				</div>
			</Collapsible.Trigger>
			<Collapsible.Content class="block collapsible__content ml-13 mr-5 mt-0 mb-2">
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
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

const TopicsMenuSection = () => {
	return (
		<>
			<h3 class="px-6 pt-4 pb-2 font-medium text-[10px]/6 text-[#878A8C]">TOPICS</h3>
			<ul>
				<For each={TopicsMenuSections}>{(menu) => <DropDownMenu {...menu} />}</For>
			</ul>
		</>
	);
};

export default function SideMenu() {
	return (
		<section class="w-60 flex flex-col bg-white">
			<SideMenuSection {...feedsSection} />
			<SideMenuSection {...recentSection} />
			<TopicsMenuSection />
		</section>
	);
}
