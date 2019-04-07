function print_date(date, format) {
	if (!format || typeof format != 'string') {
		format = "{Y}.{M}"
	}

	var sub = {
		"{Y}": date.year,
		"{y}": date.year.toString().substr(2, 2),
		"{M}": '0'.concat(date.month.toString()).substr(-2, 2),
		"{m}": date.month
	}

	formatted_date = format
	for (key in sub) {
		formatted_date = formatted_date.replace(key, sub[key])
	}

	return formatted_date
}

Handlebars.registerHelper('print_date', print_date)

// to do: allow other date formats
Handlebars.registerHelper('range', function(start, end) {
out = `
		<div class="range">
			<span class="date start">${print_date(start)}</span> &ndash;`

	if (end) {
		out += `
			<span class="date end">${print_date(end)}</span>`
	}

	out += "</div>"

	return new Handlebars.SafeString(out)
})

// example: set initial formatted_name to "{T} {F} {m}. {L}"
Handlebars.registerHelper('full_name', function(name, format) {
	if (!format || typeof format != 'string') {
		format = "{f}. {L}"
	}
	formatted_name = format

	var sub = {
		"{T}": name.title,
		"{F}": name.first,
		"{M}": name.middle,
		"{L}": name.last
	}

	for (var key in sub) {
		if (!sub[key]) {
			sub[key] = ""
		}
		formatted_name = formatted_name.replace(key, sub[key])
		formatted_name = formatted_name.replace(key.toLowerCase(), sub[key].charAt(0))
	}

	return formatted_name
})
