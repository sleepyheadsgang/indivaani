import { FC } from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

const Link: FC<LinkProps> = ({children, ...props}) => {
  return (
    <>
      <RouterLink {...props}>{children}</RouterLink>
    </>
  )
}

export default Link