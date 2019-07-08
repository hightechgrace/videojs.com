import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const BlogPaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4.375em;
`;

const BlogPaginationButton = ({ className, children, to, ...props }) => {
  if (typeof to === 'string' && to.length) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled className={className} {...props}>
      {children}
    </button>
  );
};

const StyledBlogPaginationButton = styled(BlogPaginationButton)`
  background-color: #fff;
  border: 0.1429em solid #000;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  padding: 1em;
  width: 12.8571em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:disabled {
    color: rgba(0, 0, 0, 0.3);
    border-color: #ebebeb;
  }
`;

const Arrow = styled.span`
  font-size: 2em;
  line-height: 1;
`;

const BlogPagination = ({
  prevLink,
  prevLinkCaption,
  nextLink,
  nextLinkCaption
}) => (
  <BlogPaginationWrapper>
    <StyledBlogPaginationButton to={prevLink}>
      <Arrow>&lt;&nbsp;</Arrow>
      <span>{prevLinkCaption}</span>
    </StyledBlogPaginationButton>
    <StyledBlogPaginationButton to={nextLink}>
      <span>{nextLinkCaption}</span>
      <Arrow>&nbsp;&gt;</Arrow>
    </StyledBlogPaginationButton>
  </BlogPaginationWrapper>
);

export default BlogPagination;
