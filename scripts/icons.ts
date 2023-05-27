import type { IconifyJSONIconsData } from "@iconify/types";
import { TomlReader } from "@sgarciac/bombadil";
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// Function to locate JSON file
import { locate } from "@iconify/json";
// Various functions from Iconify Utils
import { encodeSvgForCss, getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";

type IconsConfigIcon = {
	collection: string;
	icon: string;
};

type IconsConfig = {
	[key: string]: {
		[id: string]: IconsConfigIcon;
	};
};

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const spriteDir = join(rootDir, "public/icons");
const componentsDir = join(rootDir, "src/components/icons");

const getConfig = (): IconsConfig => {
	const file = "icons.toml";
	let data = "";
	try {
		data = readFileSync(join(rootDir, file), "utf-8");
	} catch (err) {
		console.error(`Unable to readfile ${file}`, err);
	}

	const reader = new TomlReader();
	reader.readToml(data);

	if (reader.errors.length > 1) {
		console.error("Failed to parse TOML file");
		for (const err in reader.errors) {
			console.error(JSON.stringify(err, null, 4));
		}
	}

	return reader.result;
};

const config = getConfig();

const collection = {} as { [key: string]: IconifyJSONIconsData };
const getCollection = (setName: string): IconifyJSONIconsData => {
	if (collection[setName]) {
		return collection[setName];
	}
	// Locate icons
	const filename = locate(setName);
	// Load icon set
	const icons = JSON.parse(readFileSync(filename, "utf8"));
	collection[setName] = icons;
	return icons;
};

const mkSVG = (id: string, icon: IconsConfigIcon) => {
	const c = getCollection(icon.collection);
	const iconData = getIconData(c, icon.icon);
	const renderData = iconToSVG(c.icons[icon.icon], { height: "1em", width: "1em" });
	// Generate attributes for SVG element
	const svgAttributes: Record<string, string> = {
		...renderData.attributes
	};
	if (iconData?.height && iconData?.width) {
		svgAttributes.viewBox = `0 0 ${iconData?.height} ${iconData?.width}`;
	}
	const svg = iconToHTML(replaceIDs(renderData.body), svgAttributes);
	return svg;
};

const mkComponent = (id: string) => {
	// name
	const data = `
	export default function Icon(props = {class?: string}) => {
		return (
			<svg {...props}>
				<use href="/icons/layout.svg#${id}" />
			</svg>
		);
	};`;
	///writeFileSync(join(componentsDir, `${name}.tsx}), data);
};

const getIconCSS = (icon: IconsConfigIcon) => {
	const svg = mkSVG("", icon);
	const _mode = svg.includes("currentColor") ? "mask" : "bg";
	const url = `url("data:image/svg+xml;utf8,${encodeSvgForCss(svg)}")`;
	if (_mode === "mask") {
		// Thanks to https://codepen.io/noahblon/post/coloring-svgs-in-css-background-images
		return {
			"--un-icon": url,
			"-webkit-mask": "var(--un-icon) no-repeat",
			mask: "var(--un-icon) no-repeat",
			"-webkit-mask-size": "100% 100%",
			"mask-size": "100% 100%",
			"background-color": "currentColor",
			height: "1em",
			width: "1em",
			// for Safari https://github.com/elk-zone/elk/pull/264
			color: "inherit"
		};
	} else {
		return {
			background: `${url} no-repeat`,
			"background-size": "100% 100%",
			"background-color": "transparent"
		};
	}
};

const styleToString = (style: Record<string, string>) => {
	return Object.keys(style).reduce(
		(acc, key) => `${acc}${key.split(/(?=[A-Z])/).join("-").toLowerCase()}:${style[key]};`,
		""
	);
};

const mkCSS = (config: IconsConfig) => {
	const cssDir = join(rootDir, "src/styles");
	for (const [fileName, icons] of Object.entries(config)) {
		const outFile = `${fileName}.css`;
		const styles = [];
		for (const [id, icon] of Object.entries(icons)) {
			// console.log({ id }, { icon });
			//const c = getCollection(icon.collection);
			const styleObj = getIconCSS(icon);
			const style = `.${id} {${styleToString(styleObj as unknown as Record<string, string>)}}`;
			console.log({ style });
			//console.log(svgToTinyDataUri(svg));
			styles.push(style);
		}
		const css = styles.join(" ");
		writeFileSync(join(cssDir, outFile), css);
	}
};

mkCSS(config);
