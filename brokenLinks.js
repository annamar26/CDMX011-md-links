let brokenLinks = 0;

function broken(links) {
	for (const link of links) {
		if (link.status === 'fail') {
			brokenLinks += 1;
		}
	}

	return brokenLinks;
}
