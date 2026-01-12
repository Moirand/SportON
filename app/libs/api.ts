export async function fetchApi<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        cache: options?.cache || 'no-store' // Set 'no-store' agar data selalu real-time
    });
    if (!response.ok) {
        let errorMessage = `Failed to fetch data from ${endpoint}`;
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
            console.log(e);
        }
        throw new Error(errorMessage);
    }

    return response.json();
}

export function getImageUrl(path: string) {
    if (path.startsWith('http')) return path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}