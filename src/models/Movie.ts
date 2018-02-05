export class Movie {
    constructor(
        public id: number,
        public title: string,
        public release: number,
        public description: string,
        public cover_url: string
    ) {}
}