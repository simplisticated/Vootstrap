function createViewModel(rootElementSelector) {
	return new Vue({
		el: rootElementSelector,
		data: {
			logo: {
				text: "Vootstrap Demo"
			},
			sections: {
				main: {
					isAvailable: true
				},
				button: {
					isAvailable: true
				}
			},
			currentSection: null
		},
		methods: {
		}
	});
}
