
    export type RemoteKeys = 'primary/Header' | 'primary/Footer';
    type PackageType<T> = T extends 'primary/Footer' ? typeof import('primary/Footer') :T extends 'primary/Header' ? typeof import('primary/Header') :any;