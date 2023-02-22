import styled from "styled-components"

export const VideoPlayerWrapper = styled.div`
  width: inherit;
  height: inherit;
`;

export const Content = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const VideosPlayer = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const ControlLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition-duration: .2s;
  background-color: #0006;
`;

export const ButtonPlayPause = styled.button`
  width: 5rem;
  height: 5rem;
  background: transparent;
  border: unset;
  border-radius: 5rem;

  & > svg {
    display: none;
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.button.fill };
  }

  &.pause svg.play {
    display: inline-block !important;
  }
  &.play svg.pause {
    display: inline-block !important;
  }
`
export const ButtonFullScreen = styled.button`
  position: absolute;
  background: transparent;
  border: unset;
  border-radius: 5rem;
  width: 2rem;
  height: 2rem;
  bottom: 1rem;
  left: 1rem;

  & > svg {
    display: none;
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.button.fill };
  }

  &.open svg.exit {
    display: inline-block !important;
  }
  &.exit svg.open {
    display: inline-block !important;
  }
`
