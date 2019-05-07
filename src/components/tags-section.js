import React from 'react'
import { Link } from 'gatsby'
import { TiTags } from 'react-icons/ti'

import Button from '../utils/tag-button'
// import { rhythm } from '../utils/typography'
// import { space, scale } from '../utils/tags-presets'
const _ = require(`lodash`)

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
    <div>
      <em>Tagged with {tagLinks}</em>
      <Button
        css={{ flexShrink: 0 }}
        small
        key="blog-post-view-all-tags-button"
        to="./tags"
      >
        View All Tags <TiTags />
      </Button>
    </div>
  )
}

export default TagsSection
