import { Link } from 'react-router-dom';

// const CharactersByHero = ({ characters, alter_ego }) =>{
//     if( characters === alter_ego ) return (<></>);
//     return <p>{ characters }</p>;
// };

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters 
}) => {

    // const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    const heroImageUrl = new URL(`../../assets/images/${ id }.jpg`, import.meta.url).href;

    // const charactersByHero = (<p>{ characters }</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-5 animate__animated animate__jackInTheBox">
                    <img src={ heroImageUrl } className='card-img' alt={ superhero } />
                </div>
                <div className="col-7">
                    <h5 className="card-title mt-3">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>

                    {
                        ( alter_ego !== characters ) && (<p><small>{ characters.substring(0,78) }...</small></p>)
                    }
                    {/* <CharactersByHero characters={ characters } alter_ego={ alter_ego } /> */}


                    <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                    </p>

                    <Link to={`/hero/${ id }`}>
                        Más...
                    </Link>

                </div>
            </div>

        </div>
    </div>
  )
}