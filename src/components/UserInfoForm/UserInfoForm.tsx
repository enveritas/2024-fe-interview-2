import styles from "./UserInfoForm.module.scss"
import {useCallback, useRef, useState} from "react";
import {Button} from "../button/Button";

const UserInfoForm = () => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [photoSrc, setPhotoSrc] = useState<string>()

    const handlePhotoUpload = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    const fileToBase64 = useCallback((files: FileList | null) => {
        if (!files || !files.length) {
            return;
        }

        const file = files[0];

        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                // convert image file to base64 string
                setPhotoSrc(reader.result as string);
            },
            false,
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }, [setPhotoSrc])

    const reset = useCallback(() => setPhotoSrc(undefined), [setPhotoSrc])

    return (
        <form className={styles.form}>
            <h2>User information</h2>
            <p>Update your user information here</p>
            <label>
                Username
                <input id="username" type="text"/>
            </label>

            <label>
                Preferred Name
                <input id="name" type="text"/>
            </label>

            <label>
                Photo
                <div>
                    {photoSrc && (
                        <img className={styles.profilePhoto} width={50} height={50} alt="User photo" src={photoSrc}/>
                    )}
                    {!photoSrc && (
                        <Button type="button" icon="add" variant="primary" className={styles.icon} onClick={handlePhotoUpload} title="Upload photo" />
                    )}
                </div>

                <input id="photo" accept="image/jpeg" ref={fileInput} type="file"
                       onChange={(e) => fileToBase64(e.target.files)} className={styles.visuallyHidden}/>
            </label>

            <section className={styles.formFooter}>
                <Button type="reset" variant="secondary" onClick={reset}>
                    Reset
                </Button>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </section>
        </form>
    )
}

export default UserInfoForm

