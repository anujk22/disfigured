function Introduction() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label with subtle gradient */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">Introduction</span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Why This Platform <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Should Exist</span>
        </h2>
        
        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            People with visible facial differences often move through the world knowing that strangers will react to their appearance before anything is said. Those snap judgments can shape job interviews, casual conversations, bus rides, and everyday errands in ways that are exhausting and hard to explain to others. When support is expensive, hard to reach, or emotionally intimidating, many people are left trying to manage this constant pressure alone.
          </p>
          
          <p>
            This project proposes a moderated, semi-anonymous online peer community for people with disfigurement. The site is meant to sit between "no help at all" and formal therapy: a place to tell the truth about daily experiences, learn specific coping strategies, and feel less alone, without having to walk into a clinic or reveal one's full identity.
          </p>
        </div>
        
        {/* Visual Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 p-12">
          <div className="flex items-center justify-center h-64">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-400 italic">Community / Connection Visual</p>
              <p className="text-gray-500 text-sm max-w-md mx-auto">Symbolic representation of connection, support, and being heard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
