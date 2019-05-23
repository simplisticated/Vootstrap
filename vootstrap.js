Vue.component("vt-button", {
	data: function() {
		return {
		};
	},
	props: [
		"title"
	],
	template: `
		<button type="button" class="btn btn-primary">{{ title }}</button>
	`
});
