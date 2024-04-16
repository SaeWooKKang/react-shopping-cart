import './index.css'

export const Skeleton = () => {
  return (
    <div className="card loading">
      <div className="image skeleton"></div>
      <div className="title skeleton"></div>
      <div className="text skeleton"></div>
    </div>
  )
}
