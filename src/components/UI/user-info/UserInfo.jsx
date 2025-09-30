import React from "react";
import styles from "./userinfo.module.css";
const UserInfo = ({ name, age }) => {
  return (
    <div className={styles.container}>
     
      <div className={styles.card}>
        <h2 className={styles.title}>
          User Information
        </h2>
        <table className={styles.userTable}>
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-3 border-t">{name}</td>
              <td className="p-3 border-t">{age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
