interface ResolveURLParam {
    base?: string
    path: string
}

export function resolveURL({ base = 'https://leydev.com.br', path }: ResolveURLParam) {
    return new URL(path, base).toString();
}

export default resolveURL
