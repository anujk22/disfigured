function Citations() {
  const citations = [
    {
      author: "Dobson, Amy Shields",
      title: "Postfeminism, Personhood, and Popular Culture",
      publisher: "Lexington Books",
      year: "2015"
    },
    {
      author: "Heung, Sharon, et al.",
      title: "Nothing Micro About It: Examining Ableist Microaggressions on Social Media",
      publisher: "Proceedings of the 24th International ACM SIGACCESS Conference on Computers and Accessibility",
      year: "2022"
    },
    {
      author: "Meg",
      title: "White Mask Rests on Dead Branches",
      publisher: "Unsplash",
      year: "2023",
      url: "unsplash.com/photos/a-white-mask-rests-on-dead-branches-bkk-j21pOVI"
    },
    {
      author: "Norman, Emma Meredith",
      title: "Facing Disfigurement: Stigma and the Emotional Impact of Visible Difference",
      publisher: "Routledge",
      year: "2020"
    },
    {
      author: "Papaioannou, Kostas",
      title: "Silhouette Photo of People",
      publisher: "Unsplash",
      year: "2017",
      url: "unsplash.com/photos/silhouette-photo-of-people-tysecUm5HJA"
    },
    {
      author: "Smit, Dorien, et al.",
      title: "A Newly Developed Online Peer Support Community for Depression (Depression Connect): Qualitative Study",
      publisher: "Journal of Medical Internet Research, vol. 23, no. 7",
      year: "2021",
      pages: "p. e25917"
    },
    {
      author: "Wachs, Fleur",
      title: "Levelling the Playing Field: Harnessing the Power of Online Communities for Disability Advocacy",
      publisher: "Journal of Disability Studies Quarterly, vol. 40, no. 2",
      year: "2020"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-black pb-32">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-gray-700/30 to-gray-600/30 border border-gray-600/30 rounded-full">
          <span className="text-gray-300 text-sm font-semibold tracking-wider uppercase">References</span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
          Works Cited
        </h2>
        
        {/* Citations List */}
        <div className="space-y-6">
          {citations.map((citation, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-6 hover:border-cyan-500 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                {citation.author}. <em>{citation.title}</em>. {citation.publisher}, {citation.year}
                {citation.pages && `, ${citation.pages}`}
                {citation.url && `, ${citation.url}`}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Citations;
