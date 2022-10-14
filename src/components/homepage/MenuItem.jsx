import React from "react";
import { Menu } from "@headlessui/react";
import styles from "./MenuItem.module.scss";

function MenuItem({ items, index }) {
  return (
    <Menu as={"div"} className={styles["menu"]}>
      <Menu.Button className={styles["menu-button"]}>{items.title}</Menu.Button>
      <Menu.Items as="div" key={index} className={styles["menu-items"]}>
        {items.submenu.map((submenu) => (
          <Menu.Item
            as={"a"}
            key={submenu + "_" + submenu.title}
            href={submenu.url}
            className={styles["menu-item"]}
          >
            {({ active }) => (
              <div className={`${active && styles["menu-item-link-active"]}`}>
                {submenu.title}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default MenuItem;
