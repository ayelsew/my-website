import { FC, FCT, MouseEvent, useCallback, useEffect, useRef, useState } from "react";

import * as S from "./styles";

interface AudioVolumeProps {
  onChange: (value: number) => void
  volume: number
}

const AudioVolume: FC<AudioVolumeProps> = ({ onChange }) => {
  const conatinerRef = useRef<SVGSVGElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const railRef = useRef<SVGPathElement>(null)
  const pathRef = useRef<SVGCircleElement>(null)

  const handleMouseMovement = useCallback((event: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    if (
      conatinerRef.current === null ||
      circleRef.current === null ||
      pathRef.current === null ||
      event.buttons !== 1
    ) return;

    const { width: clientWidth } = conatinerRef.current.getBoundingClientRect()
    const { width: viewWidth } = conatinerRef.current.viewBox.baseVal

    const offset = viewWidth - clientWidth
    const mouseX = event.nativeEvent.offsetX + offset;

    if (((mouseX - 7) + 5.5) > 175) {
      circleRef.current.setAttribute('cx', String(175 + 7 + 5.5));
      pathRef.current.setAttribute("d", `M12.5 7 l${175} 0`)
      onChange(175 * 100 / 175 * 0.01)
      return;
    }

    circleRef.current.setAttribute('cx', String((mouseX - 7) + 5.5));
    pathRef.current.setAttribute("d", `M12.5 7 l${mouseX - 11 - 7} 0`)
    onChange((mouseX - 11 - 7) * 100 / 175 * 0.01)
  }, [])


  useEffect(() => {
    if (
      circleRef.current === null ||
      pathRef.current === null
    ) return;

    circleRef.current.setAttribute('cx', String((87.5 - 7) + 5.5));
    pathRef.current.setAttribute("d", `M12.5 7 l${87.5 - 11 - 7} 0`)
  }, [])

  return (
    <S.VolumeControl>
      <svg className="volume-player" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
        <path d="M200 696V456h160l200-200v640L360 696H200Zm420 48V407q54 17 87 64t33 105q0 59-33 105t-87 63ZM500 408 387 516H260v120h127l113 109V408ZM378 576Z" />
      </svg>
      <svg
        className="volume-input"
        ref={conatinerRef}
        xmlns="http://www.w3.org/2000/svg"
        width="190" height="14"
        viewBox="0 0 201 14" fill="none"
        onMouseMove={(event) => handleMouseMovement(event)}
      >
        <path ref={railRef} strokeWidth="11" strokeLinecap="round" stroke="#2F2F2F" d="M12.5 7 l175 0" />
        <path ref={pathRef} strokeWidth="11" strokeLinecap="round" stroke="#2FB5FF" d="M12.5 7 l50 0" />
        <circle ref={circleRef} cx="62.5" cy="7" r="7" fill="#fff" />
      </svg>
    </S.VolumeControl>
  )
}

interface VideoPlayerProps {
  srcs: {
    src: string, type: string
  }[]
}

const VideoPlayer: FCT<VideoPlayerProps> = ({
  srcs
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeOutMouse = useRef<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const [showControls, setControls] = useState<boolean>(true);

  const toggleFullScreen = useCallback(async () => {
    if (wrapperRef.current === null) return;
    const wrapper = wrapperRef.current;

    try {
      if (document.fullscreenElement === null) {
        await wrapper.requestFullscreen();
        setFullScreen(true);
        return;
      }

      await document.exitFullscreen();
      setFullScreen(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (playerRef.current === null) return;
    const player = playerRef.current;

    if (player.paused) {
      player.play()
      setPlaying(true)
      return;
    }

    player.pause()
    setPlaying(false)
  }, []);

  const changeVolume = useCallback((value: number) => {
    if (playerRef.current === null) return;
    const player = playerRef.current;

    player.volume = Math.min(Math.max(value, 0), 1)
  }, []);

  const handleMouseMove = useCallback(() => {
    clearTimeout(timeOutMouse.current);
    if (!showControls) setControls(true);

    timeOutMouse.current = setTimeout(() => {
      setControls(false);
    }, 1500) as unknown as number;
  }, [showControls]);

  useEffect(() => {
    changeVolume(0.5)
  }, [])

  return (
    <S.VideoPlayerWrapper ref={wrapperRef} onMouseMove={() => handleMouseMove()} style={showControls ? { cursor: "default" } : { cursor: "none" }}>
      <S.Content>
        <S.VideosPlayer
          loop autoPlay
          controls={false}
          ref={playerRef}
          style={isFullScreen ?
            {
              maxWidth: "100vw",
              maxHeight: "100vh",
              width: "auto"
            } :
            undefined
          }
          onPlay={() => {
            setControls(false);
            setPlaying(true);
          }}
        >
          {srcs.map(({ type, src }) => <source key={src} type={type} src={src} />)}
        </S.VideosPlayer>
        <S.ControlLayer style={showControls ? { opacity: 1 } : undefined}>
          <S.ButtonPlayPause
            className={isPlaying ? "play" : "pause"}
            onClick={() => togglePlayPause()}
          >
            <svg className="pause" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
              <path d="M370 736h60V416h-60v320Zm160 0h60V416h-60v320Zm-50 240q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
            </svg>
            <svg className="play" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
              <path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
            </svg>
          </S.ButtonPlayPause>
          <S.ButtonFullScreen
            className={isFullScreen ? "open" : "exit"}
            onClick={() => toggleFullScreen()}
          >
            <svg className="open" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
              <path d="M200 856V663h60v133h133v60H200Zm0-367V296h193v60H260v133h-60Zm367 367v-60h133V663h60v193H567Zm133-367V356H567v-60h193v193h-60Z" />
            </svg>
            <svg className="exit" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
              <path d="M333 856V723H200v-60h193v193h-60Zm234 0V663h193v60H627v133h-60ZM200 489v-60h133V296h60v193H200Zm367 0V296h60v133h133v60H567Z" />
            </svg>
          </S.ButtonFullScreen>
          <AudioVolume volume={0} onChange={(value) => changeVolume(value)} />
        </S.ControlLayer>
      </S.Content>
    </S.VideoPlayerWrapper>
  );
}

export default VideoPlayer;
