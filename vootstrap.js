/*
	Buttons.
*/

const buttonStylePrimary = "primary";
const buttonStyleSecondary = "secondary";
const buttonStyleSuccess = "success";
const buttonStyleDanger = "danger";
const buttonStyleWarning = "warning";
const buttonStyleInfo = "info";
const buttonStyleLight = "light";
const buttonStyleDark = "dark";
const buttonStyleLink = "link";

const buttonSizeSmall = "small";
const buttonSizeLarge = "large";

class ButtonGenerator {

	getStyleCssClass(style, outline) {
		return `btn${ outline ? "-outline" : "" }-${style}`;
	}

	getSizeCssClass(size) {
		switch (size) {
			case buttonSizeSmall: {
				return "btn-sm";
			}
			case buttonSizeLarge: {
				return "btn-lg";
			}
			default: {
				return "";
			}
		}
	}

	/*
		Example of `appearance` object:

		let appearance = {
			style: buttonStylePrimary,
			outline: false,
			size: buttonSizeLarge
		}
	*/
	getCssClassesString(appearance) {
		var classes = [
			"btn"
		];

		if (appearance.style) {
			classes.push(
				this.getStyleCssClass(
					appearance.style,
					appearance.outline
				)
			);
		}

		if (appearance.size) {
			classes.push(
				this.getSizeCssClass(appearance.size)
			);
		}

		return classes.join(" ");
	}

	getComponentNameCombinations(appearance) {
		let nameComponents = {
			style: appearance.style ? "-" + appearance.style : "",
			outline: appearance.outline ? "-outline" : "",
			size: appearance.size ? "-" + appearance.size : ""
		};

		var names = [];
		names.push(
			`vt-button${nameComponents.style}${nameComponents.outline}${nameComponents.size}`
		);
		names.push(
			`vt-button${nameComponents.style}${nameComponents.size}${nameComponents.outline}`
		);
		names.push(
			`vt-button${nameComponents.outline}${nameComponents.style}${nameComponents.size}`
		);
		names.push(
			`vt-button${nameComponents.outline}${nameComponents.size}${nameComponents.style}`
		);
		names.push(
			`vt-button${nameComponents.size}${nameComponents.style}${nameComponents.outline}`
		);
		names.push(
			`vt-button${nameComponents.size}${nameComponents.outline}${nameComponents.style}`
		);
		return names;
	}

	register(appearance) {
		let componentNames = this.getComponentNameCombinations(appearance);
		let cssClasses = this.getCssClassesString(appearance);
		
		for (var name of componentNames) {
			Vue.component(name, {
				data: function() {
					return {
					};
				},
				props: [
					"title"
				],
				template: `
					<button
						type="button"
						class="${cssClasses}"
					>
						{{ title }}
					</button>
				`
			});
		}
	}

	getPossibleAppearances() {
		let styles = [
			buttonStylePrimary,
			buttonStyleSecondary,
			buttonStylePrimary,
			buttonStyleSecondary,
			buttonStyleSuccess,
			buttonStyleDanger,
			buttonStyleWarning,
			buttonStyleInfo,
			buttonStyleLight,
			buttonStyleDark,
			buttonStyleLink,
			null
		];

		let outlines = [
			true,
			false
		];

		let sizes = [
			buttonSizeLarge,
			buttonSizeSmall,
			null
		];

		var appearances = [];

		for (var style of styles) {
			for (var outline of outlines) {
				for (var size of sizes) {
					appearances.push({
						style: style,
						outline: outline,
						size: size
					});
				}
			}
		}

		return appearances;
	}

	registerAllPossibleAppearances() {
		let allAppearances = this.getPossibleAppearances();

		for (var appearance of allAppearances) {
			this.register(appearance);
		}
	}
}

new ButtonGenerator().registerAllPossibleAppearances();
