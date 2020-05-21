import { rootPixelFontSize } from "../utils"
import { size, remSize, iconSize, remIconSize } from "./global"

it("should provide a rem equivalent of the pixel size", () =>
	expect(size.small / rootPixelFontSize).toBe(remSize.small))

it("should provide a rem equivalent of the pixel icon size", () =>
	expect(iconSize.small / rootPixelFontSize).toBe(remIconSize.small))
