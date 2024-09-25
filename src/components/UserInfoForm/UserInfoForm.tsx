import styles from "./UserInfoForm.module.scss"
import {useCallback, useRef, useState} from "react";
import UploadIcon from '../../assets/common-file-add.svg?react';

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
                        <button type="button" className={styles.iconButton} onClick={handlePhotoUpload} title="Upload photo">
                            <UploadIcon/>
                        </button>
                    )}
                </div>

                <input id="photo" accept="image/jpeg" ref={fileInput} type="file"
                       onChange={(e) => fileToBase64(e.target.files)} className={styles.visuallyHidden}/>
            </label>

            <section className={styles.formFooter}>
                <button type="reset" onClick={reset} className={styles.button}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </section>
        </form>
    )
}

export default UserInfoForm

