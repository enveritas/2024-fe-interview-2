import "./user-info.module.scss"

const UserInfo = () => {

  return (
    <form>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Preferred Name" />
      <input type="file" />
      <button type="submit">
        Submit
      </button>
      <button>
        Reset
      </button>
    </form>
  )


}

export default UserInfo

