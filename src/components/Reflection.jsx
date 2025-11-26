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
            Since this is a hypothetical project, my insights come from research and paper design rather than user testing. But even that shifted how I think about support for disfigurement. I started assuming the main barrier was money and access to therapy. The research showed me that fear of judgment and loss of anonymity matter just as much.
          </p>
          
          <p>
            Working through the design also forced me to see that moderation isn't a background task—it's central to whether the space actually feels safe. That's why my proposal spends so much time on visible rules, filters, and consequences instead of treating them as invisible details.
          </p>
          
          <p>
            The biggest unresolved tension is balancing anonymity with accountability. I want privacy to feel real, but I also know that total anonymity can breed harassment. My answer—pseudonyms with reputation systems and earned moderators—feels like the right compromise, but I would only know if it works through actual user testing, which I can't do with a proposal.
          </p>
          
          <p>
            If this project moved forward, the next step would be collaborating with clinicians and people who actually live with disfigurement. My reflection prompts and safeguards are based on research, not on what people actually find helpful. That gap is what keeps this a thought experiment rather than a solution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reflection;
