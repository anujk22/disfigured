function Reflection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-full">
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">Reflection</span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          What I Learned Through <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">This Project</span>
        </h2>
        
        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            When I first started thinking about disfigurement support, I assumed the biggest barrier was simply that therapy was expensive or far away. But as I researched and designed, I realized the real barrier runs deeper: it's the fear of being seen and judged by another real person, even a trained professional. That insight—that anonymity and peer support matter as much as clinical expertise—shaped every choice I made about the platform.
          </p>
          
          <p>
            What surprised me most was how much moderation has to be visible to actually work. I initially thought I could just hire moderators and quietly handle reports. But reading about online communities taught me that if people don't understand why something gets removed or how the rules work, they either won't trust the space or they'll keep pushing boundaries. Making moderation transparent turned out to be as important as making it happen.
          </p>
          
          <p>
            The hardest design question was around anonymity. I wanted total privacy for users, but I also knew that pure anonymity can turn a community toxic fast. The compromise—pseudonyms with reputation systems and earned moderator status—felt like the right balance, but I'm still uncertain about whether it goes far enough. I'm curious whether testing with actual users would reveal blind spots I can't see from the design phase.
          </p>
          
          <p>
            What feels most important to me is that this platform doesn't pretend to be therapy. It's peer support, which is different: it's witnesses recognizing each other, not expertise dispensing treatment. For people who have been isolated or afraid to speak, that recognition might be exactly what lets them then seek formal help, or it might be what sustains them through a period when formal help isn't accessible. Either way, it's real support, just a different kind than what clinics offer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reflection;
