import React, { useState } from "react";
import { AboutIc, ContactIc, HomeIc, SettingIc } from "./Icons/icons";

export const NavItem: React.FC<{
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	name: string;
	isActive: boolean;
	setActive: (name: string) => void;
}> = ({ icon: Icon, name, isActive, setActive }) => {
	const beforeStyle =
		"before:content-[''] before:bg-white before:absolute before:w-4 before:h-4 before:left-[-34%] before:bottom-[31%] before:border-t-[7px] before:border-r-[7px] before:border-[#222] before:rounded-bl-none before:rounded-tr-full before:rounded-lg";

	const afterStyle =
		"after:content-[''] after:bg-white after:absolute after:w-4 after:h-4 after:right-[-34%] after:bottom-[31%] after:border-t-[7px] after:border-l-[7px] after:border-[#222] after:rounded-br-none after:rounded-tl-full after:rounded-lg";

	return (
		<button
			onClick={() => setActive(name)}
			className={`group flex flex-col w-16 h-16 space-y-4 items-center justify-center relative ${
				isActive ? "" : "transform"
			}`}>
			<span
				className={
					isActive
						? ` translate-y-[-30px] z-10 ease-in-out delay-75 duration-500`
						: "text-green-500 transform hover:scale-[1.1]"
				}>
				<Icon />
			</span>
			<span
				className={`absolute text-center  text-neutral-500
                 ${
										isActive
											? "opacity-100 top-5 transform duration-500"
											: "opacity-0 top-10 "
									}
                `}>
				{name}
			</span>

			{isActive ? (
				<span
					className={`absolute bg-green-500  w-16 h-16 top-[-75%] border-8 border-[#222] rounded-full ${beforeStyle} ${afterStyle}`}></span>
			) : null}
		</button>
	);
};

export const Navbar = () => {
	const [active, setActive] = useState("Home");

	function isActive(name: string) {
		return active === name;
	}

	return (
		<nav className="bg-[#f2efef] rounded-lg w-[400px]  h-16 px-6">
			<div className="flex items-center w-full">
				<NavItem
					icon={HomeIc}
					name="Home"
					isActive={isActive("Home")}
					setActive={setActive}
				/>
				<NavItem
					icon={AboutIc}
					name="Profile"
					isActive={isActive("Profile")}
					setActive={setActive}
				/>
				<NavItem
					icon={ContactIc}
					name="Contact"
					isActive={isActive("Contact")}
					setActive={setActive}
				/>
				<NavItem
					icon={SettingIc}
					name="Settings"
					isActive={isActive("Settings")}
					setActive={setActive}
				/>
				<NavItem
					icon={ContactIc}
					name="About"
					isActive={isActive("About")}
					setActive={setActive}
				/>
			</div>
		</nav>
	);
};
