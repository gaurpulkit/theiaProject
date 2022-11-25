import "./App.css";

function App() {
  const imageUrl = [
    "https://i.seadn.io/gae/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s?w=500&auto=format",
    "https://i.seadn.io/gae/LezCcPxAQZx3Y9dYOx3eNhrnyn5WnUzVoJRxi2TNU5ApcvjsYjpEh3SOrAwOWJO8d7134yggmL0nMCq-MhIQaW9aY161sA1Sv1mu?w=500&auto=format",
    "https://i.seadn.io/gae/BrMVemjNgOskKWp48Zenqa-H0BJw9xh3q9Ow0ut-gzO7UFgNRBHq0HYdz6fvT-1Lco88q8kHpHngYS4qNO-GxGmEL3poFuKagGzkxg?w=500&auto=format",
    "https://i.seadn.io/gcs/files/44b7b20b66954e45c1277391af2a2d53.gif?w=500&auto=format",
    "https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?w=500&auto=format",
    "https://i.seadn.io/gcs/files/1eb8d685d4e404c9b1177dfe14c2c9e0.png?w=500&auto=format",
    "https://i.seadn.io/gcs/files/5b2189963c2cec9bb3949f2cc98fb8b9.jpg?w=500&auto=format",
    "https://i.seadn.io/gcs/files/ecd8893491ac82c38a6e349675b1c853.png?w=500&auto=format",
    "https://i.seadn.io/gcs/files/ecd8893491ac82c38a6e349675b1c853.png?w=500&auto=format",
    "https://i.seadn.io/gcs/files/24551d135f011ae4ef4a07e556c3570f.png?w=500&auto=format",
    "https://i.seadn.io/gae/BrMVemjNgOskKWp48Zenqa-H0BJw9xh3q9Ow0ut-gzO7UFgNRBHq0HYdz6fvT-1Lco88q8kHpHngYS4qNO-GxGmEL3poFuKagGzkxg?w=500&auto=format",
    "https://i.seadn.io/gcs/files/8bb5a3faa8de2761782f03b9ecc8e785.png?w=500&auto=format",
  ];

  const metaData = [
    "Salt Lake City No 1",
    "Green Caps Are Loud",
    "Are Coloumns Round",
    "Blue Skies Are Crazy",
    "Orange Velvet Lilac",
    "Painters Are Innovators",
    "Zoomer & Boomer",
    "Who is Jason Bourne?",
    "Bring it On Soldier",
    "Does Lens Bloom?",
    "Smiling Zebras in The Wild",
    "Saber Song",
  ];

  let imageWithMetaData = [];

  for (let i in imageUrl) {
    imageWithMetaData.push({ image: imageUrl[i], metadata: metaData[i] });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          {imageWithMetaData.map((data) => {
            return (
              <div class="newContainer p-3">
                <div class="container-fluid col-xs-6 col-sm-4 col-lg-3">
                  <img src={data.image} class="newImage img-responsive" alt={data.metadata}/>
                  <div class="overlay">
                    <div class="text">{data.metadata}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
