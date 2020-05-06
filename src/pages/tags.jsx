import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import kebabCase from 'lodash/kebabCase';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../utils/useSiteMetadata';
import usePostsQuery from '../utils/hooks/postQuery';

const TagsPage = () => {
  const { title } = useSiteMetadata();
  const { group } = usePostsQuery().allMdx;

  TagsPage.propTypes = {
    data: PropTypes.shape({
      allMdx: PropTypes.shape({
        group: PropTypes.arrayOf(
          PropTypes.shape({
            fieldValue: PropTypes.string.isRequired,
            totalCount: PropTypes.number.isRequired,
          }).isRequired,
        ),
      }),
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
      }),
    }),
  };

  return (
    <div>
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsPage;
