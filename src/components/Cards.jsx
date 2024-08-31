 
const Cards = ({imgUrl, text}) => {
  return (
    <div>
      <div className="card">
        <div className="img">
          <img src={imgUrl} alt={text} />
        </div>
        <div className="card-text"><a href="/">{text}</a></div>
      </div>
    </div>
  );
};

export default Cards