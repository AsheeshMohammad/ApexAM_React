const Footer = () => {
  const date=new Date();
  const year=date.getFullYear();
  return (
    <div>© {year} ApexAM. All Rights Reserved.</div>
  )
}

export default Footer