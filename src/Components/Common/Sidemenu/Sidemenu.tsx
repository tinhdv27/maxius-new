import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import "./Sidemenu.scss";
import { DownloadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface Props {
  visible: boolean;
  showDrawer: any;
}

const { SubMenu } = Menu;

const Sidemenu = ({ visible, showDrawer }: Props) => {
  const [openKeys, setOpenKeys] = useState([""]);
  const [activeItem, setActiveItem] = useState(1);
  const { t } = useTranslation();
  console.log(t("sidemenu1"));
  const proposalItem = [
    {
      key: 3,
      title: t("sidemenu1"),
    },
    {
      key: 4,
      title: t("sidemenu2"),
    },
    {
      key: 5,
      title: t("sidemenu3"),
    },
  ];
  const brochureItem = [
    {
      key: 6,
      title: t("sidemenu1"),
    },
    {
      key: 7,
      title: t("sidemenu2"),
    },
    {
      key: 8,
      title: t("sidemenu3"),
    },
    {
      key: 9,
      title: t("sidemenu4"),
    },
    {
      key: 10,
      title: t("sidemenu5"),
    },
  ];
  const openHandle = (key: string, number: number) => {
    setOpenKeys([key]);
    setActiveItem(number);
  };

  return (
    <>
      <Drawer
        placement="right"
        visible={visible}
        width={532}
        style={{ zIndex: "20" }}
        mask={false}
      >
        <div className="menu">
          <Menu
            style={{
              width: 256,
              backgroundColor: "#061440",
              fontSize: 39,
              color: "#fff",
            }}
            mode="inline"
            theme="dark"
            openKeys={openKeys}
            selectable={false}
          >
            <Menu.Item
              key="1"
              onClick={() => {
                openHandle("", 1);
                showDrawer();
                // eslint-disable-next-line no-restricted-globals
                location.href = "/";
              }}
            >
              <Link to="/" style={{ color: "#fff" }}>
                <div
                  className={`menu-item ${
                    activeItem === 1 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu6")}
                </div>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <div
                  className={`menu-item ${
                    activeItem === 2 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu7")}
                </div>
              }
              className="menu-submenu"
              onTitleClick={() => openHandle("sub1", 2)}
            >
              {brochureItem.map((item) => (
                <Menu.Item key={item.key}>
                  <div className="submenu-item">
                    {item.title} <DownloadOutlined />
                  </div>
                </Menu.Item>
              ))}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <div
                  className={`menu-item ${
                    activeItem === 3 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu8")}
                </div>
              }
              className="menu-submenu"
              onTitleClick={() => openHandle("sub2", 3)}
            >
              {proposalItem.map((item) => (
                <Menu.Item key={item.key} className="submenu-item">
                  <div className="submenu-item">
                    {item.title} <DownloadOutlined />
                  </div>
                </Menu.Item>
              ))}
            </SubMenu>
            <Menu.Item
              key="11"
              onClick={() => {
                openHandle("", 4);
                showDrawer();
              }}
            >
              <Link to="/contact" style={{ color: "#fff" }}>
                <div
                  className={`menu-item ${
                    activeItem === 4 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu9")}
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="menu-line"></div>
        <div className="menu-footer">
          <p>
            {t("sidemenu10")}
            <br />
            {t("sidemenu11")}
          </p>
          <p> {t("sidemenu12")}</p>
          <p>
            {t("sidemenu13")} <br />
            {t("sidemenu14")}
          </p>
          <p>
            {t("sidemenu15")} <br />
            {t("sidemenu16")}
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default Sidemenu;
