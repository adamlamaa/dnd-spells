import * as fs from "fs"

// Run with
// node src/scripts/transformScript.js

// Read the spells.json file
const spellsFilePath = "public/spells.json"
const newSpellsFilePath = "public/spellsnew.json"

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
    // const updatedSpells = spells.sort((a, b) => {
    //   {
    //     if (a.name < b.name) return -1
    //     if (a.name > b.name) return 1
    //     return 0
    //   }
    // })

    // sort fields
    const updatedSpells = spells.map((spell) => ({
      name: spell.name,
      level: spell.level,
      type: spell.type,
      casting_time: spell.casting_time,
      range: spell.range,
      components: spell.components,
      duration: spell.duration,
      description: spell.description,
      higher_levels: spell.higher_levels,
      ritual: spell.ritual,
      school: spell.school,
      classes: spell.classes,
      tags: spell.tags,
    }))

    // Write the updated data to spellnew.json
    fs.writeFile(
      newSpellsFilePath,
      JSON.stringify(updatedSpells, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing spellnew.json:", err)
        } else {
          console.info("Updated spells saved to spellnew.json")
        }
      },
    )
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError)
  }
})
