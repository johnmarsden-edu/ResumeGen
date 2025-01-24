export function formatDateString(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en', {
            year: 'numeric',
            month: '2-digit',
        });
}