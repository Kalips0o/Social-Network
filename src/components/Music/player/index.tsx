import * as C from './styles';
import {
    Pause,
    Play,
    RandomMusicsFalse,
    RandomMusicsTrue,
    SkipBack,
    SkipForward,
    VolumeOff,
    VolumeOn
} from '../../Music/svgs';
import {useEffect, useRef, useState} from 'react';
import {musics} from "../data/data";

type Props = {
    id: string;
    isFull: boolean;
    setId: (e: string) => void;
    setIsFull: (e: boolean) => void;
    windowWidth: number;
}

export const Player = ({ id, setId, setIsFull, isFull, windowWidth }: Props) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [volume, setVolume] = useState<string>('1')
    const [duration, setDuration] = useState<number>(0)
    const [isRandom, setIsRandom] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isMuted, setIsMuted] = useState<boolean>(false)

    const audioTag = useRef(null)
    const progressBar = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        if (id !== '') {
            if (isPlaying) {
                // @ts-ignore
                audioTag.current.play()
                // @ts-ignore
                animationRef.current = requestAnimationFrame(whilePlaying)
                // @ts-ignore
                audioTag.current.volume = volume
                if (isMuted) {                    
                    // @ts-ignore
                    audioTag.current.muted = true

                } else { // @ts-ignore
                    audioTag.current.muted = false
                }

                const interval = setInterval(() => {                    
                    // @ts-ignore
                    const seconds = Math.floor(audioTag.current.duration)
                    setDuration(seconds)                                     
                    if(windowWidth >= 830 || isFull) { // @ts-ignore
                        progressBar.current.max = seconds
                    }
                }, 1000)

                setInterval(() => {
                    if (duration > 0 || duration !== undefined) {
                        clearInterval(interval)
                            
                        // @ts-ignore
                        if (audioTag.current.currentTime === audioTag.current.duration) {
                                isRandom ? skipRandom() : skipForward()
                         
                            }
                    }
                }, 1100)

            } else {               
                // @ts-ignore
                audioTag.current.pause()
                // @ts-ignore
                audioTag.current.volume = volume
                // @ts-ignore
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [[], isRandom])
   
    const calculateDuration = (sec: number) => {
        const minutes = Math.floor(sec / 60)
        const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(sec % 60)
        const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${newMinutes}:${newSeconds}`
    }   

    const skipForward = () => {
        if (id === '') {
            alert('Choose a song!')        
        } else if (isRandom) {
            skipRandom()        
        } else if (id === '9') {
            setId('1')
        } else {
            const idNum = parseInt(id);
            const newId = idNum + 1;
            setId(newId.toString())
        }
    }

    const skipRandom = () => {
        const idNum = parseInt(id)
        const randomNum = Math.floor(Math.random() * 9)
        if (randomNum === 0 || randomNum === idNum) {
            const newNum = randomNum + 1 
            setId(newNum.toString())
        } else {
            setId(randomNum.toString())
        }
    }

    const skipBack = () => {
        if (id === '') {
            alert('Choose a song!')        
        } else {
            const idNum = parseInt(id);
            const newId = idNum - 1;
            setId(newId.toString())
        }
    }

    const whilePlaying = () => {
        if (windowWidth >= 830 || isFull) {
            // @ts-ignore
            progressBar.current.value = audioTag?.current?.currentTime
            // @ts-ignore
            animationRef.current = requestAnimationFrame(whilePlaying)
            changeCurrentTime()
        }
    }

    const changeRange = () => {
        if (windowWidth >= 830 || isFull) {
            // @ts-ignore
            audioTag.current.currentTime = progressBar.current.value
            changeCurrentTime()
        }
    }
    
    const changeCurrentTime = () => {
        // @ts-ignore
        setCurrentTime(progressBar.current.value)
    }
    
    return (
        <C.Container isFull={isFull}>
            
            <div className='musicDiv'>
                
                   {musics.map(music => (
                        
                        id === music.id ?
                        
                            <div 
                            onClick={() => setIsFull(windowWidth <= 820 && !isFull)} className='music' key={music.id}>
                                {!isFull ? 
                                <>
                                    <img src={music.album_img} />
                                    <div>
                                        <h1>{music.name}</h1>
                                        <h3>{music.author}</h3>
                                    </div>
                                </> 
                                : ''
                                }
                                <audio src={music.audio} ref={audioTag}/>
                            </div>                         
                    : ''
                    ))
                }
            </div>
            <div className='player'>
                <div className='inputButtons'>
                    { isFull || windowWidth >= 830 ? 
                        <div className='progressBar'>
                            <p className='PcurrentTime'>
                                {calculateDuration(currentTime)}
                            </p>
                            <input 
                                type="range" 
                                className='currentProgress'
                                defaultValue='0' 
                                ref={progressBar} 
                                onChange={changeRange}
                            />
                            
                            <p className='Pduration'>
                                {(duration && !isNaN(duration)) && 
                                calculateDuration(duration)}
                            </p>
                        </div> 
                        : ''
                    }
                    <div className='buttons'>
                        { windowWidth >= 830 || isFull ? 
                        <button 
                            onClick={() => setIsRandom(!isRandom)} className='randomMusicsButton'>
                            {isRandom ? <RandomMusicsTrue /> : <RandomMusicsFalse />}
                        </button> 
                        : ''
                        }
                        <button onClick={skipBack}>
                            <SkipBack />
                        </button>
                        <button 
                            className='playPause' 
                            onClick={() => setIsPlaying(!isPlaying)}>
                                {isPlaying ?  <Pause /> : <Play />}
                        </button>
                        <button onClick={skipForward}>
                            <SkipForward />
                        </button>
                        
                    </div>
                </div>
            </div>

            { windowWidth > 825 && 
                <div className='test'>
                <button 
                    className='volumeButton' 
                    onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeOff/> : <VolumeOn />}
                </button>
                <input
                    type="range" 
                    step="0.01"
                    onChange={(e) => setVolume(e.target.value)} 
                    value={volume}
                    max='1'
                    min='0' 
                />
                </div>
            }
        </C.Container>
    )
}