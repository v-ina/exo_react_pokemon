import Header from "../components/Header"
import { useParams } from "react-router-dom";

function TrainerDetailPage(){

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

    const {trainerID} = useParams();

    console.log(trainerID);

    const trainerChoiced = trainers.find(trainer =>{
        return trainer.id == trainerID 
    }) 

    console.log(trainerChoiced);
    return(
        <>
            <Header />
            <main>
                <h1>{trainerChoiced.name}</h1>
                <p>{trainerChoiced.bio}</p>
                <img src={trainerChoiced.img} alt={trainerChoiced.name} />
            </main>
        </>



    )
}

export default TrainerDetailPage