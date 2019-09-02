# Foundations

The Guardian's design tokens are the atoms from which all our visual design is built. They are intended for use with a CSS-in-JS library such as Emotion.

## Install

```sh
$ yarn add @guardian/src-foundations
```

## Use

### Palette

```ts
import { palette } from "@guardian/src-foundations";

const backgroundColour = css`
	background-color: ${palette.neutral[97]};
`;
```