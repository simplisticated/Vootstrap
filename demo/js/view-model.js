function createViewModel(rootElementSelector) {
	return new Vue({
		el: rootElementSelector,
		data: {
			logo: {
				text: "Vootstrap Demo"
			}
		},
		methods: {
		}
	});
}
