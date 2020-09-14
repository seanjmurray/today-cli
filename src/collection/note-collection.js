'use strict'

const NotesSchema = require('../model/note-schema')

class NoteCRUD {
  get (str) {
    return str ? NotesSchema.find({ category: str }) : NotesSchema.find({})
  }

  create (obj) {
    const { category, payload } = obj
    const note = new NotesSchema({
      category: category,
      text: payload
    })
    const saved = note.save()
    return saved
  }

  update (obj) {
    const { id, payload } = obj
    return NotesSchema.findByIdAndUpdate(id, { text: payload })
  }

  delete (id) {
    return NotesSchema.findOneAndDelete({ _id: id })
  }

  clear () {
    return NotesSchema.deleteMany({})
  }
}

module.exports = new NoteCRUD()
