import PropTypes from 'prop-types'

const Button = ({text}) => {

    const onClick = (e) => {
        console.log(e)
    }

  return (
    <button onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {

}

Button.prototype = {
    text: PropTypes.string
}

export default Button