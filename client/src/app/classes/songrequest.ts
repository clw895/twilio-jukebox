export class SongRequest {

    spotifyUrl:string = null;

    constructor(
        public songtitle: string,
        public artistname: string,
        public artistimageurl: string,
        public currentlyplaying: boolean,
        public songurl: string = null) {}
}
