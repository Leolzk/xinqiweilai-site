/** 活体星图设计系统：音乐控件采用实验读数风格，默认尝试播放，用户始终拥有关闭与音量控制权。 */
import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import "./ambient-audio.css";

const trackUrl = "/manus-storage/future-mind-biotech-atmosphere_6e10debd.mp3";

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.18);
  const [blocked, setBlocked] = useState(false);

  const playTrack = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.volume = volume;
    try {
      await audio.play();
      setPlaying(true);
      setBlocked(false);
    } catch {
      setPlaying(false);
      setBlocked(true);
    }
  };

  useEffect(() => {
    void playTrack();
    const unlock = () => { void playTrack(); };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      setBlocked(false);
    } else {
      void playTrack();
    }
  };

  const updateVolume = (nextVolume: number) => {
    setVolume(nextVolume);
    if (audioRef.current) audioRef.current.volume = nextVolume;
  };

  return <aside className={`ambient-audio ${playing ? "is-playing" : ""}`} aria-label="原创背景音乐控制">
    <audio ref={audioRef} src={trackUrl} loop preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <button className="audio-toggle" type="button" onClick={togglePlayback} aria-pressed={playing} aria-label={playing ? "关闭背景音乐" : "播放背景音乐"}>
      {playing ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
      <span>{playing ? "MUSIC / ON" : "MUSIC / OFF"}</span>
    </button>
    <div className="audio-volume">
      {playing ? <Volume2 size={13} /> : <VolumeX size={13} />}
      <input aria-label="背景音乐音量" type="range" min="0" max="0.35" step="0.01" value={volume} onChange={(event) => updateVolume(Number(event.target.value))} />
    </div>
    {blocked && <span className="audio-hint" aria-live="polite">点击页面开始播放</span>}
  </aside>;
}
