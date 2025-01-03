import ContactForm from "@/app/_components/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        これはサンプルです。
        <br />
        返信はいたしません。
      </p>
      <ContactForm />
    </div>
  );
}
