import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { size } from "@guardian/src-foundations"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { brand } from "@guardian/src-foundations/themes"

import {
	SvgAlert,
	SvgArrowDownStraight,
	SvgArrowLeftStraight,
	SvgArrowRightStraight,
	SvgArrowUpStraight,
	SvgCheckmark,
	SvgChevronDownSingle,
	SvgChevronLeftSingle,
	SvgChevronRightSingle,
	SvgChevronUpSingle,
	SvgClose,
	SvgCreditCard,
	SvgDirectDebit,
	SvgExternal,
	SvgIndent,
	SvgMinus,
	SvgPayPal,
	SvgPlus,
} from "./index"

const whiteColor = css`
	color: white;
	svg {
		fill: white;
	}
`

const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`

const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.medium / 2}px;
		height: auto;
	}
`

const Small = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={[iconSmall, whiteColor]}>{children}</div>
)

const Default = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={[iconDefault]}>{children}</div>
)

export default {
	title: "Icons",
}

export const SmallIcons = () => (
	<ThemeProvider theme={brand}>
		<Small>
			<SvgAlert />
			<SvgArrowDownStraight />
			<SvgArrowLeftStraight />
			<SvgArrowRightStraight />
			<SvgArrowUpStraight />
			<SvgChevronDownSingle />
			<SvgChevronLeftSingle />
			<SvgChevronRightSingle />
			<SvgChevronUpSingle />
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
			<SvgExternal />
			<SvgCheckmark />
			<SvgClose />
			<SvgMinus />
			<SvgPlus />
			<SvgIndent />
		</Small>
	</ThemeProvider>
)
SmallIcons.story = {
	name: "small size",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const DefaultIcons = () => (
	<ThemeProvider theme={brand}>
		<Default>
			<SvgAlert />
			<SvgArrowDownStraight />
			<SvgArrowLeftStraight />
			<SvgArrowRightStraight />
			<SvgArrowUpStraight />
			<SvgChevronDownSingle />
			<SvgChevronLeftSingle />
			<SvgChevronRightSingle />
			<SvgChevronUpSingle />
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
			<SvgExternal />
			<SvgCheckmark />
			<SvgClose />
			<SvgMinus />
			<SvgPlus />
			<SvgIndent />
		</Default>
	</ThemeProvider>
)
DefaultIcons.story = {
	name: "default size",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
