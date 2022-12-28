import React from 'react'
import AnimatedCursor from "react-animated-cursor"
function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={18}
      outerSize={22}
      color='red'
      outerAlpha={0.3}
      innerScale={1}
      outerScale={3}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: 'exclusion',
        background: 'white'
      }}
      innerStyle={{
        background: 'linear-gradient(325deg,  #6f00fc 0%,#fc7900 50%,#fcc500b9 100%)'

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
        'span',
        'p',
        'h1',
        '.userChat',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default AnimCursor