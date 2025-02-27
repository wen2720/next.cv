interface TextLink{ 
  id: string
  className?: string
  link?: string
}

const LinkText:React.FC<TextLink> = (
  {id, className, link}
) => (
  <>  
      {
        link === undefined?	
        id
        :
        <a className={'text-blue-600'} href={link}>{id}</a>
      }
  </>
)
export default LinkText