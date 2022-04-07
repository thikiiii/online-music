export interface MusicDetails {
    // 名称
    name: string;
    // 封面图
    coverPicture: string;
    // 作者
    authors: { name: string; id: number }[];
    // 专辑
    album: {
        name: string;
        id: number;
    };
    // 时长
    duration: number;
    id: number;
}

export interface MusicTime {
    minute: number | string;
    second: number | string;
}

export type MusicLyrics = { time: number; lyric: string; zhLyric?: string };
export type MusicLyricsArr = MusicLyrics[];
