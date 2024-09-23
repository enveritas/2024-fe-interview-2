import UserInfoForm from "../components/UserInfoForm/UserInfoForm.tsx";
import styles from "./UserPage.module.scss";
import {Button} from "../components/button/Button";

const UserPage = () => {
    return <div className={styles.pageContainer}>
        <h1>User Page</h1>
        <p>Update your user information</p>
        <UserInfoForm/>
        <hr/>
        <footer>
            <Button type="button" variant="danger">Delete user</Button>
        </footer>
    </div>
}

export default UserPage;