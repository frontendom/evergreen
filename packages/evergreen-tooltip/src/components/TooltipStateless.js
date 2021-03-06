import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import Color from 'color'
import colors from 'evergreen-colors'
import { Text } from 'evergreen-typography'

export default class TooltipStateless extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    backgroundColor: Color(colors.neutral['900']).alpha(0.9),
    borderRadius: 3,
    paddingX: 8,
    paddingY: 4,
    maxWidth: 240,
  }

  render() {
    const { children, ...props } = this.props
    let child
    if (typeof children === 'string') {
      child = (
        <Text lineHeight="1.25em" color="white" size={400}>
          {children}
        </Text>
      )
    } else {
      child = children
    }
    return <Box {...props}>{child}</Box>
  }
}
