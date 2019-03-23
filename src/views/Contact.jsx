import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'

const Contact = ({ children, offset }) => (
  <>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}