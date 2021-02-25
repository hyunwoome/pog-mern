const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {};

const paddings = {
	sm: calcRem(14),
	mobile: calcRem(16),
	laptop: calcRem(24),
};

const margins = {
	sm: calcRem(14),
	mobile: calcRem(16),
	laptop: calcRem(24),
};

const deviceSizes = {
	mobile: '600px',
};

const colors = {
	white: '#fff',
};

const device = {
	mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
};

const theme = {
	fontSizes,
	paddings,
	margins,
	deviceSizes,
	colors,
	device,
};

export default theme;
