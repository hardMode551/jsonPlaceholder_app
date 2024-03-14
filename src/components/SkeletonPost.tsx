import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPost = (props: any) => (
    <ContentLoader 
    speed={2}
    width={1100}
    height={200}
    viewBox="0 0 1100 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="1100" height="200" />
  </ContentLoader>
)

export default SkeletonPost;

