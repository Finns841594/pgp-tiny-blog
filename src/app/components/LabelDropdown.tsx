import {useContext, useEffect, useState, Key } from "react"
import { PostsContext } from "../PostsContext"
import { getAllLabels } from "./functions/utilities"
import { Dropdown } from "@nextui-org/react";

interface Props {updateLabel: (label:string) => void}
interface MenuItem {name:string, key:string}

export const LabelDropdown = ({updateLabel}:Props) => {
  const { posts } = useContext(PostsContext)
  const [selectedLabel, setSelectedLabel] = useState("history")

  const labels = getAllLabels(posts)
  const menuItems = labels.map((label) => ({
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
    console.log('⭐️ selectedLabel', selectedLabel)
  }, [selectedLabel])

  return (
    <div className="w-80">
      <Dropdown> 
      <Dropdown.Button shadow color='secondary' css={{ tt: "capitalize" }}>{selectedLabel}</Dropdown.Button>
      <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems} selectionMode="single" selectedKeys={selectedLabel} onAction={ (key:Key) => selectHandler(key)}>
        {(item) => (
          // Its reporting error here that key doesn't exist on type 'object', but its working fine
          <Dropdown.Item key={item.key} color={item.key === "delete" ? "error" : "default"}>
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}