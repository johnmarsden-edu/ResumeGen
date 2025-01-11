export function formatDateString(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en', {
            dateStyle: 'short'
        });
}

export function formatDate(dateString: string | undefined, prefix?: string | undefined): string {
    if (dateString === undefined) {
        return '';
    }

    prefix = prefix === undefined ? '' : prefix;

    return `<span class="date">${prefix}${formatDateString(dateString)}</span>`;
}

export function formatDateRange(
    startDate: string | undefined,
    endDate: string | undefined) {
    const out = [];
    const hasStart = startDate !== undefined && startDate !== "";
    const hasEnd = endDate !== undefined && endDate !== "";

    if (!hasStart && !hasEnd) {
        return "";
    }

    out.push('<span class="date">');
    if (hasStart) {
        out.push(formatDateString(startDate), " &ndash; ");
    }

    if (hasEnd) {
        out.push(formatDateString(endDate));
    } else {
        out.push('Present');
    }
    out.push('</span>');

    return out.join('');
}