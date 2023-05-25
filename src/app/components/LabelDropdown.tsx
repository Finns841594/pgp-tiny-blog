import {useContext, useEffect, useState, Key } from "react"
import { PostsContext } from "../PostsContext"
import { getAllLabels } from "./functions/utilities"
import { Dropdown } from "@nextui-org/react";

interface Props {updateLabel: (label:string) => void, defaultLabel:string}
type MenuItem = {name:string, key:string}

export const LabelDropdown = ({updateLabel, defaultLabel}:Props) => {
  const { posts } = useContext(PostsContext)
  const [selectedLabel, setSelectedLabel] = useState(defaultLabel)

  const labels = getAllLabels(posts)
  const menuItems:MenuItem[] = labels.map((label) => ({
    name: label,
    key: label,
  }))

  const selectHandler = (key:string | number) => {
    if (typeof key === 'number') {
      key = key.toString()
    }
    setSelectedLabel(key)
  }

  useEffect(() => {
    updateLabel(selectedLabel)
  }, [selectedLabel])

  return (
    <div className="flex flex-row items-center py-4">
      <h3 className="text-2xl mr-4 text-violet-800">Showing posts with label</h3>
      <Dropdown> 
      <Dropdown.Button shadow color='secondary' css={{ tt: "capitalize" }}>{selectedLabel}</Dropdown.Button>
      <Dropdown.Menu aria-label="Dynamic Actions" css={{ tt: "capitalize" }} selectionMode="single" selectedKeys={selectedLabel} onAction={ (key:Key) => selectHandler(key)}>
        {labels.map((label) => (
          <Dropdown.Item key={label} color={"default"}>
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
      {/* code snippet below is the original code, but it has problem with the type 'object', to be solved. */}
      {/* <Dropdown.Menu aria-label="Dynamic Actions" css={{ tt: "capitalize" }} items={menuItems} selectionMode="single" selectedKeys={selectedLabel} onAction={ (key:Key) => selectHandler(key)}>
        {(item) => (
          // Its reporting error here that key doesn't exist on type 'object', but its working fine
          <Dropdown.Item key={item.key} color={"default"}>
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu> */}
      </Dropdown>
    </div>
  )
}