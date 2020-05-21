import { css } from "@emotion/core"
import { space, transitions } from "@guardian/src-foundations"
import { width, height } from "@guardian/src-foundations/size"
import { buttonDefault, ButtonTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const button = css`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${transitions.medium};
	text-decoration: none;

	&:focus {
		${focusHalo};
	}
`

export const primary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	background-color: ${button.backgroundPrimary};
	color: ${button.textPrimary};

	&:hover {
		background-color: ${button.backgroundPrimaryHover};
	}
`

export const secondary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	background-color: ${button.backgroundSecondary};
	color: ${button.textSecondary};

	&:hover {
		background-color: ${button.backgroundSecondaryHover};
	}
`

export const tertiary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	color: ${button.textTertiary};
	border: 1px solid ${button.borderTertiary};

	&:hover {
		background-color: ${button.backgroundTertiaryHover};
	}
`

export const subdued = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	padding: 0;
	background-color: transparent;
	color: ${button.textSubdued};

	&:hover {
		text-decoration: underline;
	}

	/* Why is this zero? Because the default is to have rounded corners but here, when
	   there is only text, it is more natural to show a rectangle for the focus halo */
	border-radius: 0;
`

/* TODO: think about spacing tokens for padding */
/* TODO: think about border radius tokens */
export const defaultSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${height.ctaMedium}px;
	min-height: ${height.ctaMedium}px;
	padding: 0 ${height.ctaMedium / 2}px;
	border-radius: ${height.ctaMedium / 2}px;
`

export const smallSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${height.ctaSmall}px;
	min-height: ${height.ctaSmall}px;
	padding: 0 ${height.ctaSmall / 2}px;
	border-radius: ${height.ctaSmall / 2}px;
`

export const xsmallSize = css`
	${textSans.small({ fontWeight: "bold" })};
	height: ${height.ctaXsmall}px;
	min-height: ${height.ctaXsmall}px;
	padding: 0 ${height.ctaXsmall / 2}px;
	border-radius: ${height.ctaXsmall / 2}px;
`

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconMedium}px;
		height: auto;
	}
`

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconSmall}px;
		height: auto;
	}
`

export const iconXsmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconXsmall}px;
		height: auto;
	}
`

/*
TODO: think about spacing tokens for negative margin,
or adjust button padding. We might need to adjust this
differently for each button size.
*/
const iconRight = css`
	svg {
		margin-right: -5.5px;
	}
`

const iconLeft = css`
	flex-direction: row-reverse;
	svg {
		margin-left: -5.5px;
	}
`

export const iconRightDefault = css`
	${iconRight};
	svg {
		margin-left: ${space[2]}px;
	}
`

export const iconRightSmall = css`
	${iconRight};
	svg {
		margin-left: ${space[1]}px;
	}
`

export const iconRightXsmall = css`
	${iconRight};
	svg {
		margin-left: ${space[1]}px;
	}
`

export const iconLeftDefault = css`
	${iconLeft};
	svg {
		margin-right: ${space[2]}px;
	}
`

export const iconLeftSmall = css`
	${iconLeft};
	svg {
		margin-right: ${space[1]}px;
	}
`

export const iconLeftXsmall = css`
	${iconLeft};
	svg {
		margin-right: ${space[1]}px;
	}
`

const iconOnly = css`
	justify-content: center;
	padding: 0;
`

export const iconOnlyDefault = css`
	${iconOnly};
	width: ${width.ctaMedium}px;
`

export const iconOnlySmall = css`
	${iconOnly};
	width: ${width.ctaSmall}px;
`

export const iconOnlyXsmall = css`
	${iconOnly};
	width: ${width.ctaXsmall}px;
`

export const iconNudgeAnimation = css`
	svg {
		transform: translate(0, 0);
		transition: ${transitions.short};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${space[1] / 2}px, 0);
		}
	}
`
