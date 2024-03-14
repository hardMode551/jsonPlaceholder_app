import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={2100}
    height={160}
    viewBox="0 0 2100 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="1100" height="300" />
  </ContentLoader>
)

export default Skeleton

