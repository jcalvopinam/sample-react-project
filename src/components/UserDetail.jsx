import PropTypes from 'prop-types'

export default function UserDetail({ user }) {
  return (
    <div>Hello {user.name} {user.lastName},&nbsp;</div>
  )
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};