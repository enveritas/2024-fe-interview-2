import UserInfoForm from "../components/UserInfoForm/UserInfoForm.tsx";
import styles from "./UserPage.module.scss";

const UserPage = () => {
    return <div className={styles.pageContainer}>
        <h1>User Page</h1>
        <p>Update your user information</p>
        <UserInfoForm/>
        <hr/>
        <footer>
            <button type="button" className={styles.delete}>Delete user</button>
        </footer>
    </div>
}

export default UserPage;