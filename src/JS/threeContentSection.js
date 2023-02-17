function ThreeContentSection(props) {
  const { sectionName } = props

  return (
    <section className={sectionName}>
      <h3 className={`${sectionName}__main-title`}></h3>
      <p className={`${sectionName}__sub`}>Earn Stars and get rewarded in a few easy steps.</p>
      <ol className={`${sectionName}__contents-list`}></ol>
    </section>
  )
}

export default ThreeContentSection
