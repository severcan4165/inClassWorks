import CardStyle from "../Scss/card.module.scss"

const Card = ({id, name, job, img, comment}) => {
  return (
    <div className={CardStyle.container}>
    <div key={id} className={CardStyle.card}>
        <h1>{name}</h1>
        <h2>{job}</h2>
        <p>{comment}</p>
        <div>
            <img src={img} alt="" />
        </div>
        <div className={CardStyle.buttons}>
            <button className={CardStyle.buttonSmall}>Small</button>
            <button className={CardStyle.buttonLarge}>Large</button>
        </div>
    </div>
    </div>
  )
}

export default Card