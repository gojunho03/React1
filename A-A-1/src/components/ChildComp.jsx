export default function ChildComp ({imageInfo, width, heigt}) {
  return (
    <>
      <img src={imageInfo.src } alt={imageInfo.alt} width={width} height={heigt}/>
    </>
  )
}