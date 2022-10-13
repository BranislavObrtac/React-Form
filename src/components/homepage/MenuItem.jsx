import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";

function MenuItem({ items, index }) {
  return (
    <Menu>
      <Menu.Button>{items.title}</Menu.Button>
      <Menu.Items>
        {items.submenu.map((submenu) => {
          return (
            <Menu.Item key={index + "_" + submenu.title} as={Fragment}>
              <a href={submenu.url}>{submenu.title}</a>
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default MenuItem;
