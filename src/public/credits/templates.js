export function involvedTemplate(involveds) {
	const involvedNames = involveds.map((involvedData) => {
		// getting names html structure
		const names = involvedData.names.map((name) => {
			return `<span>${name}</span>`;
		}).join(" ");

		return `
			<span class="position">
	            ${involvedData.position}
	        </span>
	        <main class="names">
            	${names}
          	</main>
		`;
	});

	return involvedNames.join(" ");
}
