import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'

const Container = Box.extend`
  max-width: ${props => props.maxWidth}rem;
`

Container.displayName = 'Container'

Container.propTypes = {
  maxWidth: PropTypes.number
}

Container.defaultProps = {
  maxWidth: 64,
  mx: 'auto'
}

export default Container
