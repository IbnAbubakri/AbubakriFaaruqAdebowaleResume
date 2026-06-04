import { Composition } from "remotion";
import { HeroVideo } from "./HeroVideo/HeroVideo";
import { SkillsShowreel } from "./SkillsShowreel/SkillsShowreel";
import { ProjectsShowreel } from "./ProjectsShowreel/ProjectsShowreel";
import { CertificationsHighlight } from "./CertificationsHighlight/CertificationsHighlight";
import { Showreel } from "./Showreel/Showreel";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HeroVideo"
        component={HeroVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SkillsShowreel"
        component={SkillsShowreel}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ProjectsShowreel"
        component={ProjectsShowreel}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CertificationsHighlight"
        component={CertificationsHighlight}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Showreel"
        component={Showreel}
        durationInFrames={825}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
