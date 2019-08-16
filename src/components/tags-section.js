import React from 'react'
import { Link } from 'gatsby'
import { TiTags } from 'react-icons/ti'
import styled from 'styled-components'

// import Button from '../utils/tag-button'
// import { rhythm } from '../utils/typography'
// import { space, scale } from '../utils/tags-presets'
const _ = require(`lodash`)
const TagWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const TagsSection = ({ tags }) => {
  if (!tags) return null
  const tagLinks = tags.map((tag, i) => {
    const divider = i < tags.length - 1 && <span>{`, `}</span>
    return (
      <span key={tag}>
        <Link to={`./tags/${_.kebabCase(tag.toLowerCase())}`}>{tag}</Link>
        {divider}
      </span>
    )
  })
  return (
    <TagWrap>
      <em>Tagged with {tagLinks}</em>
      <Link
        className="btn btn-primary"
        css={{ flexShrink: 0 }}
        small
        key="blog-post-view-all-tags-button"
        to="./tags"
      >
        View All Tags <TiTags />
      </Link>
    </TagWrap>
  )
}

export default TagsSection
