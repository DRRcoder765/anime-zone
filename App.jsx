import { useState } from "react";

const animeList = [
  {
    title: "Naruto Hindi Dub",
    embedUrl: "https://drive.google.com/file/d/1HgRZ9tdGc4rEFi1JhYek92VoFzqPYfzq/preview",
    category: "Action",
    description: "Episode 1 - Start of Ninja Journey"
  },
  {
    title: "Attack on Titan",
    embedUrl: "https://drive.google.com/file/d/1T9gOEBVk6WDobJvC3E9OhbFDE6elF1Yr/preview",
    category: "Adventure",
    description: "Episode 1 - Humanity's Last Hope"
  }
];

function App() {
  const [selectedAnime, setSelectedAnime] = useState(animeList[0]);
  const [search, setSearch] = useState("");

  const filteredAnime = animeList.filter(anime =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2em' }}>Anime Zone</h1>
        <input
          type="text"
          placeholder="Search Anime..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '10px', width: '100%' }}
        />
        <nav style={{ marginTop: '10px' }}>
          <button onClick={() => setSelectedAnime(animeList[0])}>Action</button>
          <button onClick={() => setSelectedAnime(animeList[1])}>Adventure</button>
        </nav>
      </header>

      <main>
        <h2>{selectedAnime.title}</h2>
        <p>{selectedAnime.description}</p>
        <iframe
          src={selectedAnime.embedUrl}
          width="100%"
          height="400"
          allow="autoplay"
          allowFullScreen
          title={selectedAnime.title}
        ></iframe>

        <section style={{ marginTop: '20px' }}>
          <h3>Other Anime</h3>
          {filteredAnime.map(anime => (
            <div key={anime.title} style={{ margin: '10px 0' }}>
              <button onClick={() => setSelectedAnime(anime)}>
                {anime.title}
              </button>
            </div>
          ))}
        </section>

        <section style={{ marginTop: '20px' }}>
          <h3>Comments</h3>
          <p>Coming soon...</p>
        </section>
      </main>
    </div>
  );
}

export default App;