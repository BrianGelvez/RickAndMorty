import Card from '../Card/Card';
import './Cards.modules.css'

export default function Cards({ characters, onClose }) {
  return (
    <div className='cardsConteiner'>
      {characters.map((character) => (
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  )
}
