import Header from "../components/Header"
import './HomePage.scss'
import { Link, useParams } from "react-router-dom";

function HomePage(){
    const pokemons = [
        {
          id: 1,
          name: 'bulbasaur',
          types: ['poison', 'grass'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          isInTeam: true,
        },
        {
          id: 2,
          name: 'ivysaur',
          types: ['poison', 'grass'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          isInTeam: true,
        },
        {
          id: 3,
          name: 'venusaur',
          types: ['poison', 'grass'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
          isInTeam: false,
        },
        {
          id: 4,
          name: 'charmander',
          types: ['fire'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
          isInTeam: true,
        },
        {
          id: 5,
          name: 'charmeleon',
          types: ['fire'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
          isInTeam: false,
        },
        {
          id: 6,
          name: 'charizard',
          types: ['flying', 'fire'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
          isInTeam: true,
        },
        {
          id: 7,
          name: 'squirtle',
          types: ['water'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
          isInTeam: true,
        },
        {
          id: 8,
          name: 'wartortle',
          types: ['water'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
          isInTeam: false,
        },
        {
          id: 9,
          name: 'blastoise',
          types: ['water'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
          isInTeam: true,
        },
      ];

      const trainers = [
        {
          id: 1,
          name: "Sasha du Bourg Palette",
          bio: "jveux tous les attraper",
          img : "https://i.namu.wiki/i/ks3NvKl4l6ZpMDNiS3qPkY3rTACoV5TqEghGIdAs0y0VjlXESjAPYpx4Ey3paSlmT-NFWYAFVJ_GorlbR2MDfA.webp"
        },
        {
          id: 2,
          name: "Dwayne Johnson",
          bio: "jveux tous les soulever",
          img : "https://i.namu.wiki/i/76ZBXlAsnfq8rF7WduPw7qO0rXqDYfl46XYc1XowCRtaLUVdtrnByMw_6POxcmDMGeHzi11uX3oijj3FXT6Www.webp"
        },
        {
          id: 3,
          name: "Affida Turner",
          bio: "je veux décéder",
          img : "https://www.gala.fr/imgre/fit/~1~gal~2022~12~09~04ea1be9-8e01-48c3-89fe-7a2e9805404b.jpeg/363x363/quality/80/focus-point/1061%2C846/je-n-ai-pas-pu-te-sauver-afida-turner-en-deuil-elle-annonce-la-mort-de-son-mari-ronnie-turner.jpg"
        },
      ];


      const pokemonInTeam = pokemons.filter(pokemon=>pokemon.isInTeam)

      const nametagChange =(e) =>{
        let tg = e.currentTarget
        console.log(`${tg.alt} is in my team`);
    }


    return(
      <>        
        <Header />
        <main>
          <h2>pokemon In Team!</h2>
            {pokemonInTeam.map((pokemon)=>{
              return (           
                  <div>
                    <Link to={`/pokemonlist/${pokemon.id}/details`}>
                      <img src={pokemon.img} alt={pokemon.name} onClick={nametagChange} />
                      <p>{pokemon.name}</p>
                    </Link>
                  </div>
              )
            })}

            {trainers.map((trainer)=>{
              return (
                  <Link to={`/trainerdetails/${trainer.id}`}>
                    <h2>{trainer.name}</h2>
                  </Link>
              )
            })}
        </main>
      </>
    )
}
export default HomePage
