import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import AcmeLogo from "./AcmeLogo.jsx";

export default function NavA() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <div className=" w-[100%] mt-2">
      <Navbar className=" w-[100%]">
        <div className=" w-[100%] flex gap-[70%] ">
          <div className="ml-[20%]">
            <NavbarBrand>
              <p className="text-inherit font-bold text-red-700">RealEstate</p>
            </NavbarBrand>
          </div>
          <div className=" justify-evenly flex gap-10">
            <NavbarContent className="sm:flex hidden gap-4">
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-[#ffffff] data-[hover=true]:bg-[#F4F5F7] flex justify-center items-center"
                      endContent={icons.chevron}
                    >
                      Buy
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <div className=" flex flex-col gap-5">
                  <DropdownMenu className="w-[340px] flex flex-col gap-5">
                    <DropdownItem className="p-0 bg-[#ffffff] data-[hover=true]:bg-[#F4F5F7]">
                      BUY A HOME
                    </DropdownItem>
                    <DropdownItem className="p-0 bg-[#ffffff] data-[hover=true]:bg-[#F4F5F7]">
                      LAND/PLOT
                    </DropdownItem>
                    <DropdownItem className="p-0 bg-[#ffffff] data-[hover=true]:bg-[#F4F5F7]">
                      COMMERCIAL
                    </DropdownItem>
                    <DropdownItem className="p-0 bg-[#ffffff] data-[hover=true]:bg-[#F4F5F7]">
                      POPULAR AREAS
                    </DropdownItem>
                    <DropdownItem className="p-0 bg-[#ffffff] data-[hover=true]:bg-[#F4F5F7]">
                      ARTICLES & NEWS
                    </DropdownItem>
                  </DropdownMenu>
                </div>
              </Dropdown>
            </NavbarContent>
            {/* <NavbarContent className="sm:flex hidden gap-4">
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    //   endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                     Sell
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  <DropdownItem
                    key="autoscaling"
                    description="ACME scales apps to meet user demand, automagically, based on load."
                    startContent={icons.scale}
                  >
                    Autoscaling
                  </DropdownItem>
                  <DropdownItem
                    key="usage_metrics"
                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                    startContent={icons.activity}
                  >
                    Usage Metrics
                  </DropdownItem>
                  <DropdownItem
                    key="production_ready"
                    description="ACME runs on ACME, join us and others serving requests at web scale."
                    startContent={icons.flash}
                  >
                    Production Ready
                  </DropdownItem>
                  <DropdownItem
                    key="99_uptime"
                    description="Applications stay on the grid with high availability and high uptime guarantees."
                    startContent={icons.server}
                  >
                    +99% Uptime
                  </DropdownItem>
                  <DropdownItem
                    key="supreme_support"
                    description="Overcome any challenge with a supporting team ready to respond."
                    startContent={icons.user}
                  >
                    +Supreme Support
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent> */}
            {/* <NavbarContent className="sm:flex hidden gap-4">
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    //   endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                     Rent
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  <DropdownItem
                    key="autoscaling"
                    description="ACME scales apps to meet user demand, automagically, based on load."
                    startContent={icons.scale}
                  >
                    Autoscaling
                  </DropdownItem>
                  <DropdownItem
                    key="usage_metrics"
                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                    startContent={icons.activity}
                  >
                    Usage Metrics
                  </DropdownItem>
                  <DropdownItem
                    key="production_ready"
                    description="ACME runs on ACME, join us and others serving requests at web scale."
                    startContent={icons.flash}
                  >
                    Production Ready
                  </DropdownItem>
                  <DropdownItem
                    key="99_uptime"
                    description="Applications stay on the grid with high availability and high uptime guarantees."
                    startContent={icons.server}
                  >
                    +99% Uptime
                  </DropdownItem>
                  <DropdownItem
                    key="supreme_support"
                    description="Overcome any challenge with a supporting team ready to respond."
                    startContent={icons.user}
                  >
                    +Supreme Support
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent> */}
            {/* <NavbarContent className="sm:flex hidden gap-4">
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    //   endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                     Dashboad
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  <DropdownItem
                    key="autoscaling"
                    description="ACME scales apps to meet user demand, automagically, based on load."
                    startContent={icons.scale}
                  >
                    Autoscaling
                  </DropdownItem>
                  <DropdownItem
                    key="usage_metrics"
                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                    startContent={icons.activity}
                  >
                    Usage Metrics
                  </DropdownItem>
                  <DropdownItem
                    key="production_ready"
                    description="ACME runs on ACME, join us and others serving requests at web scale."
                    startContent={icons.flash}
                  >
                    Production Ready
                  </DropdownItem>
                  <DropdownItem
                    key="99_uptime"
                    description="Applications stay on the grid with high availability and high uptime guarantees."
                    startContent={icons.server}
                  >
                    +99% Uptime
                  </DropdownItem>
                  <DropdownItem
                    key="supreme_support"
                    description="Overcome any challenge with a supporting team ready to respond."
                    startContent={icons.user}
                  >
                    +Supreme Support
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent> */}
          </div>
          <div>
            <NavbarContent>
              <NavbarItem className="flex text-red-600 rounded-[5px] border-[#dc2626] broder-2 border-solid">
                <Button
                  as={Link}
                  href="#"
                  variant="flat"
                  className=" py-1 px-3 text-red-600 rounded-[5px] border-[#dc2626] border-2 border-solid"
                >
                  <Link href="#">Login/Register</Link>
                </Button>
              </NavbarItem>
              <NavbarItem className=" flex">
                <Button
                  as={Link}
                  href="#"
                  variant="flat"
                  className=" py-1 w-[150px] text-white bg-red-600 rounded-[5px] border-red-600"
                >
                  Submit Property
                </Button>
              </NavbarItem>
            </NavbarContent>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
