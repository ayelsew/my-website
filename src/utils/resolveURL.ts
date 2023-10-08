interface ResolveURLParam {
    base?: string
    path: string
}

const BASE_PROD = 'https://leydev.com.br';
const BASE_DEV = 'http://localhost';

export function resolveURL({
    base = process.env.NODE_ENV === 'production' ? BASE_PROD : BASE_DEV,
    path
}: ResolveURLParam) {
    return new URL(path, base).toString();
}

export default resolveURL
