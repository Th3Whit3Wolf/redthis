import { Collapsible, DropdownMenu } from "@kobalte/core";
import AvatarIcon from "~icons/clarity/avatar-line";
import InfoIcon from "~icons/material-symbols/info-outline";
import ChevronDownIcon from "~icons/carbon/chevron-down";
import RulesIcon from "~icons/carbon/rule";
import HornIcon from "~icons/mdi/bullhorn-variant-outline";
import LogInIcon from "~icons/ic/round-log-in";
import HelpIcon from "~icons/material-symbols/help-outline-rounded";
import { For, JSXElement } from "solid-js";
import { MoreMenuItems, TPMenuItems } from "~/data/menuItems";

type CollapsibleItemProps = {
	href: string;
	title: string;
};

type SubDropDownMenuProps = {
	name: string;
	icon: JSXElement;
	items: Array<CollapsibleItemProps>;
};

const SubDropDownMenu = (props: SubDropDownMenuProps) => {
	return (
		<Collapsible.Root class="collapsible">
			<Collapsible.Trigger class="w-full collapsible__trigger ">
				<div class="flex my-auto px-2 py-1 px-2 py-1 hover:bg-[#0079d3] hover:text-white">
					<div class="flex flex-row gap-2 grow">
						{props.icon}
						{props.name}
					</div>

					<ChevronDownIcon class="flex justify-end collapsible__trigger-icon" />
				</div>
			</Collapsible.Trigger>
			<Collapsible.Content class="block collapsible__content w-52">
				<For each={props.items}>
					{(item) => (
						<a
							href={item.href}
							class="h-12 w-52 text-sm/4 text-[#1c1c1c] font-medium block flex-row items-center align-baseline pr-4 pl-12 py-[0.625rem] relative hover:bg-gray-100"
						>
							<span class="align-baseline">{item.title}</span>
						</a>
					)}
				</For>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default function UserDropdownMenu() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="flex flex-row my-auto text-[#1c1c1c] rounded-lg border-gray-300 hover:border py-1 px-3 ml-2 collapsible__trigger">
				<AvatarIcon class="bg-white text-lg text-[#878A8C] h-5 w-5" />

				<DropdownMenu.Icon>
					<ChevronDownIcon class="bg-white text-lg text-[#878A8C] h-5 w-5 collapsible__trigger-icon" />
				</DropdownMenu.Icon>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content class="bg-white border-0 rounded-lg outline-transparent mt-5 text-[#1c1c1c] collapsible__content">
					<DropdownMenu.Item class="border-0 flex flex-row outline-transparent ">
						<div class="flex flex-row gap-2 my-auto px-2 py-1 hover:bg-[#0079d3] hover:text-white w-full hover:rounded-t-lg">
							<HelpIcon />
							Help Center
						</div>
					</DropdownMenu.Item>

					<SubDropDownMenu icon={<InfoIcon />} name="More" items={MoreMenuItems} />
					<SubDropDownMenu icon={<RulesIcon />} name="Terms & Policies" items={TPMenuItems} />

					<DropdownMenu.Item class="border-0 flex flex-row outline-transparent">
						<div class="flex flex-row gap-2 my-auto px-2 py-1 px-2 py-1 hover:bg-[#0079d3] hover:text-white w-full">
							<HornIcon />
							Advertise on Reddit
						</div>
					</DropdownMenu.Item>

					<DropdownMenu.Separator class="dropdown-menu__separator" />

					<DropdownMenu.Item class="border-0 flex flex-row outline-transparent">
						<div class="flex flex-row gap-2 my-auto px-2 py-1 px-2 py-1 hover:bg-[#0079d3] hover:text-white hover:rounded-b-lg w-full">
							<LogInIcon />
							Login In / Sign Up
						</div>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
