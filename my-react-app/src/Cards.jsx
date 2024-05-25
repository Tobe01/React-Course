import Photo from './assets/Tobeee.jpg'

function Cards(){
  return(
    <div className='Cards'>
      <img className='CardsImages' src={Photo} alt='ProfilePhoto'></img>
      <h1>My React App</h1>
      <p className='CardsTitle'>Practicals</p>
    </div>
  );
}

export default Cards