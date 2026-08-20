/**
 * 音乐页：用带序号的聆听档案替代普通卡片列表，营造可检索的个人声学资料室。
 * 设计提醒：深色留白中保留琥珀“播放信号”与电离青“导航信号”的小面积对照。
 */
import { ArrowDown, Play, Radio } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ASSETS, musicSignals } from "@/lib/siteContent";

export default function Music() {
  return (
    <div className="music-page page-wrap">
      <PageHero
        eyebrow="LISTENING ARCHIVE · 01"
        index="M / 01"
        title={<>声音是最慢的<br /><em>未来接口。</em></>}
        description="这里保存我反复回到的声音：合成器的呼吸、房间里的低频，以及还没有名字的情绪。"
        image={ASSETS.music}
        aside={<><span>NOW SCANNING</span><b>128.0 <small>BPM</small></b><i className="status-pulse" /></>}
      />
      <section className="archive-section">
        <div className="archive-intro"><p className="eyebrow">SELECTED SIGNALS / 可替换示例</p><h2>在循环中<br />重新发现。</h2><p>以下是可自行替换的作品占位内容。每一个条目都可以连接到你的音频、播放列表或文章。</p></div>
        <div className="track-list">
          {musicSignals.map((track, index) => (
            <article className={`track-row track-row--${track.tone}`} key={track.code}>
              <span className="track-row__num">{String(index + 1).padStart(2, "0")}</span>
              <button type="button" className="track-row__play" aria-label={`播放 ${track.title} 示例`}><Play size={15} fill="currentColor" /></button>
              <div><span className="track-row__code">{track.code}</span><h3>{track.title}</h3></div>
              <p>{track.meta}</p>
              <span className="track-row__length">{track.length}</span>
              <Radio className="track-row__radio" size={17} />
            </article>
          ))}
        </div>
      </section>
      <section className="music-note">
        <div className="music-note__rule" /><p>“我喜欢音乐还没有解释自己之前的那一秒。”</p><span>— PERSONAL LISTENING NOTE</span><ArrowDown size={20} /></section>
    </div>
  );
}
