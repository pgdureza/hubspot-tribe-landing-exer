import React from 'react'

export default (props) => {
  // generate srcset
  let srcset = [];
  
  props.widths.forEach(supportedWidth => {
    srcset.push(props.src + "?width=" + supportedWidth + " " + supportedWidth + "w")
  });

  return (
    <React.Fragment>
      <img
        className={props.className}
        alt=""
        src={props.src}
        srcSet={srcset.join(', ')} />
    </React.Fragment>
  )
}
