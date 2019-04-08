function compare_dates(a, b) {
	sort_date_by = "end"

	if (a[sort_date_by] == null) {
		return -1
	} else if (b[sort_date_by] == null) {
		return 1
	} else {
		A = new Date(a.end.year, a.end.month)
		B = new Date(b.end.year, b.end.month)
		return B - A
	}
}

// e.g. objects = education, compare = compare_dates
function sort(objects, compare) {
	objects.sort(compare)
}
