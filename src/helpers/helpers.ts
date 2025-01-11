export function formatDateString(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en', {
            dateStyle: 'short'
        });
}