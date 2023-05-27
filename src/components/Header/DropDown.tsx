import { JSXElement, createEffect, createSignal, onCleanup } from "solid-js";

type CollapsibleItemProps = {
	href: string;
	title: string;
};

type SubDropDownMenuProps = {
	name: string;
	icon: JSXElement;
	items: Array<CollapsibleItemProps>;
};

function Dropdown() {
	const [isOpen, setIsOpen] = createSignal(false);
	const [submenuMore, setSubmenuMore] = createSignal(false);
	const [submenuTP, setSubmenuTP] = createSignal(false);

	function toggleDropdown() {
		if (!isOpen()) {
			setSubmenuMore(false);
			setSubmenuTP(false);
		}
		setIsOpen(!isOpen());
	}

	function toggleDropdownMore() {
		setSubmenuMore(!submenuMore());
	}

	function toggleDropdownTP() {
		setSubmenuTP(!submenuTP());
	}

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	function handleClickOutside(event: any) {
		if (!event.target.closest(".dropdown")) {
			setIsOpen(false);
		}
	}

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	function handleKeyDown(event: any) {
		if (event.key === "Escape") {
			setIsOpen(false);
		}
	}

	createEffect(() => {
		if (isOpen()) {
			document.addEventListener("click", handleClickOutside);
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("click", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		}
	});

	onCleanup(() => {
		document.removeEventListener("click", handleClickOutside);
		document.removeEventListener("keydown", handleKeyDown);
	});

	return (
		<div class="dropdown relative my-2 h-10">
			<button
				type="button"
				onClick={toggleDropdown}
				class="px-2 py-1 text-sm font-medium text-gray-700 bg-white border rounded-md border-white hover:border-gray-300 focus:outline-none"
			>
				<div class="flex  h-7 w-12">
					<div class="avatar bg-white font-light text-xl text-[#878A8C] mt-1 h-7 w-7" />
					<div class="downChevron bg-white text-lg text-[#878A8C] mt-1 h-5 w-5" />
				</div>
			</button>
			{isOpen() && (
				<div class="absolute right-0 w-48 bg-white rounded-md shadow-lg">
					<ul>
						<li class="rounded-t-mdhover:bg-[#0079d3] hover:text-white w-full">
							<div class="rounded-t-md text-sm font-medium flex flex-row gap-2 my-auto px-2 py-2 hover:bg-[#0079d3] hover:text-white w-full">
								<div class="help" />
								Help Center
							</div>
						</li>
						<li class="hover:bg-[#0079d3] hover:text-white w-full">
							<button
								type="button"
								onClick={toggleDropdownMore}
								class="w-full py-1 bg-white text-sm font-medium focus:outline-none hover:bg-[#0079d3] hover:text-white"
							>
								<div class="flex justify-between h-7 w-full ">
									<div class="flex flex-row gap-2 my-auto px-2 py-1">
										<div class="info" />
										More
									</div>
									<div class="downChevron bg-white text-lg text-[#878A8C] mt-1 h-5 w-5 mr-2" />
								</div>
							</button>
						</li>

						{submenuMore() && (
							<>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Reddit iOS</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Reddit Android</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Rereddit</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Best Communities</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Communities</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">About Reddit</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Blog</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Careers</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1">Press</div>
								</li>
							</>
						)}

						<li class="hover:bg-[#0079d3] hover:text-white w-full">
							<button
								type="button"
								onClick={toggleDropdownTP}
								class="w-full py-1 bg-white text-sm font-medium focus:outline-none hover:bg-[#0079d3] hover:text-white"
							>
								<div class="flex justify-between h-7 w-full">
									<div class="flex flex-row gap-2 my-auto pl-2">
										<div class="rules" />
										Terms & Policies
									</div>
									<div class="downChevron bg-white text-lg text-[#878A8C] mt-1 h-5 w-5 mr-2" />
								</div>
							</button>
						</li>

						{submenuTP() && (
							<>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1"> User Agreement</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1"> Privacy Policy</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1"> Content Policy</div>
								</li>
								<li class="hover:bg-[#0079d3] hover:text-white w-full">
									<div class="text-sm font-medium ml-6 my-auto px-2 py-1"> Moderator Code of Conduct</div>
								</li>
							</>
						)}

						<li class="hover:bg-[#0079d3] hover:text-white w-full">
							<div class="text-sm font-medium flex flex-row gap-2 my-auto px-2 py-2">
								<div class="horn" />
								Advertise on Reddit
							</div>
						</li>
						<li class="hover:bg-[#0079d3] hover:text-white w-full rounded-b-md">
							<div class="text-sm font-medium flex flex-row gap-2 my-auto px-2 py-2">
								<div class="logIn" />
								Login In / Sign Up
							</div>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
