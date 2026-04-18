import VLCNav       from "@/components/vlc/VLCNav";
import VLCHero      from "@/components/vlc/VLCHero";
import VLCProblem   from "@/components/vlc/VLCProblem";
import VLCSolution  from "@/components/vlc/VLCSolution";
import VLCProgram   from "@/components/vlc/VLCProgram";
import VLCEcosystem from "@/components/vlc/VLCEcosystem";
import VLCTeam      from "@/components/vlc/VLCTeam";
import VLCApply     from "@/components/vlc/VLCApply";
import VLCFooter    from "@/components/vlc/VLCFooter";
import VLCChat      from "@/components/vlc/VLCChat";

export default function LandingPage() {
  return (
    <>
      <VLCNav />
      <main>
        <VLCHero />
        <VLCProblem />
        <VLCSolution />
        <VLCProgram />
        <VLCEcosystem />
        <VLCTeam />
        <VLCApply />
      </main>
      <VLCFooter />
      <VLCChat />
    </>
  );
}