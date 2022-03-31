import React from 'react';
import './index.less';
import ImageLazy from '@/components/ImageLazy';
import Controller from '@/components/Audio/Controller';
import AudioPlayType from '@/components/Audio/PlayType';
import MusicVolume from '@/components/Audio/Volume';
import { Tooltip } from 'antd';
import AudioProgressBar from '@/components/Audio/ProgressBar';
import { useRecoilValue } from 'recoil';
import {
    atom_audio_isDragProgressBar,
    atom_audio_musicDetails,
} from '@/recoil/audio';
import AuthorTags from '@/components/AuthorTags';

const MusicPlayer = () => {
    const musicDetails = useRecoilValue(atom_audio_musicDetails);
    const isDragProgressBar = useRecoilValue(atom_audio_isDragProgressBar);
    return (
        <div className={'musicPlayer gaussianBlur'}>
            {musicDetails !== null && (
                <AudioProgressBar
                    className={[
                        'musicPlayer-progressBar',
                        isDragProgressBar ? 'active' : '',
                    ].join(' ')}
                />
            )}
            <div className="musicPlayer-container">
                <div className="musicPlayer-Info">
                    {musicDetails !== null && (
                        <>
                            <ImageLazy
                                className={'musicPlayer-coverPicture'}
                                src={musicDetails.coverPicture}
                            />
                            <div className="musicPlayer-content">
                                <p className="musicPlayer-name text-1LinesHide">
                                    {musicDetails.name}
                                </p>
                                <p className="musicPlayer-author text-1LinesHide">
                                    <AuthorTags
                                        authors={musicDetails.authors}
                                    />
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className="musicPlayer-controller">
                    <Controller />
                </div>
                <div className="musicPlayer-otherAction">
                    {musicDetails !== null && (
                        <>
                            <AudioPlayType />
                            <MusicVolume />
                            <Tooltip placement="top" title="下载">
                                <i className="musicPlayer-download iconfont icon-xiazai" />
                            </Tooltip>
                            <Tooltip placement="top" title="播放列表">
                                <i
                                    className={[
                                        'musicPlayer-playList iconfont icon-bofangliebiao',
                                    ].join(' ')}
                                />
                            </Tooltip>
                            <Tooltip placement="top" title="展开">
                                <i
                                    className={[
                                        'musicPlayer-expansion iconfont icon-shangjiantou',
                                    ].join(' ')}
                                />
                            </Tooltip>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;