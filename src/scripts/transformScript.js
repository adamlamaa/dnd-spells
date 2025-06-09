import * as fs from "fs"

// Read the spells.json file
const spellsFilePath = "src/spells.json"
const newSpellsFilePath = "src/spellsnew.json"

fs.readFile(spellsFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading spells.json:", err)
    return
  }

  try {
    // Parse the JSON data
    const spells = JSON.parse(data)

    // Transform the description field
    // const updatedSpells = spells.map((spell) => {
    //   const { description, description_continued, ...rest } = spell
    //   const newDescription = [description]
    //   if (
    //     description_continued !== undefined &&
    //     description_continued !== null
    //   ) {
    //     newDescription.push(description_continued)
    //   }
    //   return { ...rest, description: newDescription }
    // })

    // sort by name
    const updatedSpells = spells.sort((a, b) => {
      {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      }
    })

    // Write the updated data to spellnew.json
    fs.writeFile(
      newSpellsFilePath,
      JSON.stringify(updatedSpells, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing spellnew.json:", err)
        } else {
          console.log("Updated spells saved to spellnew.json")
        }
      },
    )
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError)
  }
})
