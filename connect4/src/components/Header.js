import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        <h1>{ title }</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Connect 4'
}

Header.prototype = {
    title : PropTypes.string.isRequired
}

const headingStyle = {
    color: 'navy'
}

export default Header