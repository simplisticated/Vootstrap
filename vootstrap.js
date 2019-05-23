/*
	Buttons.
*/

class ButtonManager {

	getCssClasses(
		appearance,
		outline,
		size
	) {
		let classes = [
			"btn",
			`btn-${appearance}${ outline ? "-outline" : "" }`,
			`${ size ? size : "" }`
		];
		return classes.join(" ");
	}

	register(
		appearance,
		outline,
		size
	) {
		let name = `vt-button-${appearance}`;
		let cssClasses = this.getCssClasses(
			appearance,
			outline,
			size
		);
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

let buttonCssClasses = {
	appearance: [
		"primary",
		"secondary",
		"success",
		"danger",
		"warning",
		"info",
		"light",
		"dark",
		"link"
	],
	outline: [
		true,
		false
	],
	size: [
		"btn-lg",
		"btn-sm"
	]
};

let buttonManager = new ButtonManager();
buttonManager.register("primary");
buttonManager.register("secondary");
buttonManager.register("success");
buttonManager.register("danger");
buttonManager.register("warning");
buttonManager.register("info");
buttonManager.register("light");
buttonManager.register("dark");
buttonManager.register("link");
