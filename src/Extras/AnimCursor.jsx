import React from 'react'
import AnimatedCursor from "react-animated-cursor"
function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={18}
      outerSize={20}
      color='100,200, 100'
      outerAlpha={0.3}
      innerScale={1}
      outerScale={3}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        border: '3px solid #fff'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'input[type="password"]',
        'input[type="name"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default AnimCursor